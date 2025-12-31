const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const { body, validationResult } = require("express-validator");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss");
const nodemailer = require("nodemailer");

// Rate limiting for serverless
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: { success: false, message: "Too many requests from this IP, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: { success: false, message: "Too many contact requests, please try again after an hour." },
});

// Transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Contact validation
const contactValidation = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name can only contain letters and spaces"),
  
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  
  body("phone")
    .optional()
    .trim()
    .matches(/^[+]?[\d\s\-\(\)]+$/)
    .withMessage("Please provide a valid phone number")
    .isLength({ max: 20 })
    .withMessage("Phone number too long"),
  
  body("message")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters")
    .escape(),
];

// Main handler
module.exports = async (req, res) => {
  // Apply middleware
  await new Promise((resolve, reject) => {
    helmet()(req, res, (err) => err ? reject(err) : resolve());
  });
  
  await new Promise((resolve, reject) => {
    mongoSanitize()(req, res, (err) => err ? reject(err) : resolve());
  });
  
  await new Promise((resolve, reject) => {
    hpp()(req, res, (err) => err ? reject(err) : resolve());
  });

  // XSS protection
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    });
  }

  // CORS headers
  const allowedOrigins = [
    "https://www.thinkmoreai.com",
    "https://thinkmoreai.com",
    "https://thinkmoreai.vercel.app",
    "https://thinkmoreai-backend.vercel.app",
    process.env.FRONTEND_URL
  ].filter(Boolean);

  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Root route
  if (req.method === "GET" && req.url === "/") {
    return res.status(200).send("ThinkMoreAI Backend is running");
  }

  // Contact form route
  if (req.method === "POST" && req.url === "/api/contact") {
    // Apply rate limiting
    try {
      await new Promise((resolve, reject) => {
        contactLimiter(req, res, (err) => err ? reject(err) : resolve());
      });
    } catch (rateLimitError) {
      return res.status(429).json({
        success: false,
        message: "Too many contact requests, please try again after an hour."
      });
    }

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array().map(err => err.msg)
        });
      }

      const { name, email, phone, message } = req.body;

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        subject: `New Client Inquiry Received – ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
    return;
  }

  // 404 for other routes
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
};
