import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Mail, Phone, Send, ArrowRight, CheckCircle, AlertCircle, User, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const services = [
    'Website Development',
    'Mobile App Development',
    'Social Media Management',
    'Research Report',
    'Data Analytics',
    'AI Chatbot',
    'SEO Optimization',
    'AI Consultant'
  ];

  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {};
    
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else if (value.trim().length > 50) {
          errors.name = 'Name must be less than 50 characters';
        }
        break;
      case 'email':
        if (!value) {
          errors.email = 'Email is required';
        } else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value && !value.match(/^[+]?[\d\s\-\(\)]+$/)) {
          errors.phone = 'Please enter a valid phone number';
        }
        break;
      case 'message':
        if (!value || value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else if (value.trim().length > 1000) {
          errors.message = 'Message must be less than 1000 characters';
        }
        break;
    }
    
    setFieldErrors(prev => ({ ...prev, [name]: errors[name] || '' }));
    return !errors[name];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
    
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields except services (which is optional)
    const fieldsToValidate = ['name', 'email', 'phone', 'message'];
    const isValid = fieldsToValidate.every(key => validateField(key, formData[key as keyof typeof formData] as string));
    
    if (!isValid) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const data = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim() || undefined,
      services: formData.services,
      message: formData.message.trim(),
    };
    
    try {
      await submitContactForm(data);
      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', services: [], message: '' });
      setCharCount(0);
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-rose-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(245, 166, 35, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4 mt-4 sm:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Amazing
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Ready to transform your ideas into reality? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {['name', 'email'].map((field) => (
                <motion.div
                  key={field}
                  whileHover={{ y: -2 }}
                  onFocus={() => setFocusedField(field)}
                  className="relative"
                >
                  <label htmlFor={field} className="block text-sm font-semibold text-foreground mb-3 capitalize flex items-center gap-2">
                    {field === 'name' ? <User className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                    {field} *
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === field
                        ? "0 0 20px rgba(245, 166, 35, 0.2)"
                        : fieldErrors[field]
                        ? "0 0 20px rgba(239, 68, 68, 0.2)"
                        : "0 0 0px rgba(245, 166, 35, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      required
                      className={`h-12 bg-card border-border focus:border-accent transition-all duration-300 placeholder:text-muted-foreground/60 ${
                        fieldErrors[field] ? 'border-red-500 focus:border-red-500' : ''
                      } ${isSuccess ? 'border-green-500' : ''}`}
                    />
                    {fieldErrors[field] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {fieldErrors[field]}
                      </motion.div>
                    )}
                    {isSuccess && !fieldErrors[field] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ y: -2 }} className="relative">
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <motion.div
                className="relative"
                animate={{
                  boxShadow: fieldErrors.phone
                    ? "0 0 20px rgba(239, 68, 68, 0.2)"
                    : "0 0 0px rgba(245, 166, 35, 0)",
                }}
              >
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`h-12 bg-card border-border transition-all duration-300 placeholder:text-muted-foreground/60 ${
                    fieldErrors.phone ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                />
                {fieldErrors.phone && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-xs"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.phone}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="relative">
              <label className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Services Interested In (Multiple tick allowed - select as many as you need)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <motion.div
                    key={service}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <label
                      htmlFor={`service-${service}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border cursor-pointer hover:border-accent/50 transition-all duration-300"
                    >
                      <input
                        type="checkbox"
                        id={`service-${service}`}
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked)}
                        className="w-4 h-4 text-accent border-border rounded focus:ring-accent focus:ring-2 flex-shrink-0"
                      />
                      <span className="text-sm text-foreground leading-tight">{service}</span>
                    </label>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message *
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  rows={5}
                  className={`bg-card border-border resize-none focus:border-accent transition-all duration-300 placeholder:text-muted-foreground/60 ${
                    fieldErrors.message ? 'border-red-500 focus:border-red-500' : ''
                  } ${isSuccess ? 'border-green-500' : ''}`}
                  minLength={10}
                  maxLength={1000}
                />
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground flex items-center gap-2">
                  <span className={`${charCount > 900 ? 'text-orange-500' : charCount > 950 ? 'text-red-500' : ''}`}>
                    {charCount}/1000
                  </span>
                  {charCount >= 10 && charCount <= 1000 && !fieldErrors.message && (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  )}
                </div>
                {fieldErrors.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-xs"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.message}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full group relative overflow-hidden"
                disabled={isSubmitting}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                {isSubmitting ? (
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Send Message</span>
                    <motion.div
                      className="overflow-hidden"
                      initial={{ x: 0 }}
                      whileHover={{ x: 8, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="space-y-8 mt-12"
          >
            {/* Contact Information Cards */}
            {[
              { icon: Phone, label: "Phone", info: "+91-9608826629", href: "tel:+919608826629" },
              { icon: Mail, label: "Email", info: "info@thinkmoreai.com", href: "mailto:info@thinkmoreai.com" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-grow">
                    <p className="font-semibold text-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 bg-gradient-to-br from-accent/20 to-orange-400/10 border-accent/30 hover:border-accent/50 transition-all duration-300 mt-8"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Prefer a call?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discuss your project.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="accent" asChild className="group">
                  <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer">
                    Book a Discovery Call?
                    <motion.div whileHover={{ x: 3 }}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
