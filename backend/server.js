import nodemailer from "nodemailer";
import xss from "xss";

// Allowed origins
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:8080",
  "https://www.thinkmoreai.com",
  "https://thinkmoreai.com",
  "https://thinkmoreai.vercel.app",
  "https://thinkmoreai-backend.vercel.app",
  process.env.FRONTEND_URL,
].filter(Boolean);

// Parse JSON body manually (required for Vercel)
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

// Validation
function validate(body) {
  const errors = [];

  if (!body.name || body.name.length < 2)
    errors.push("Name must be at least 2 characters");

  if (!/^[a-zA-Z\s]+$/.test(body.name || ""))
    errors.push("Name can only contain letters and spaces");

  if (!body.email || !/^\S+@\S+\.\S+$/.test(body.email))
    errors.push("Invalid email address");

  if (!body.message || body.message.length < 10)
    errors.push("Message must be at least 10 characters");

  return errors;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // CORS
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  let body;
  try {
    body = await parseBody(req);
  } catch {
    return res.status(400).json({ success: false, message: "Invalid JSON body" });
  }

  // XSS sanitize
  const clean = {
    name: xss(body.name || ""),
    email: xss(body.email || ""),
    phone: xss(body.phone || ""),
    message: xss(body.message || ""),
  };

  const errors = validate(clean);
  if (errors.length) {
    return res.status(400).json({ success: false, errors });
  }

  // Mail transporter (created per request – serverless safe)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${clean.name}" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `New Client Inquiry – ${clean.name}`,
      text: `
Name: ${clean.name}
Email: ${clean.email}
Phone: ${clean.phone || "Not provided"}

Message:
${clean.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${clean.name}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        ${clean.phone ? `<p><strong>Phone:</strong> ${clean.phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${clean.message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
}
