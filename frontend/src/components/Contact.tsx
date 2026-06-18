import { motion, useInView } from "framer-motion";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";

const services = [
  "Website Development",
  "Mobile App Development",
  "Social Media Management",
  "Research Report",
  "Data Analytics",
  "AI Chatbot",
  "SEO Optimization",
  "AI Consultant",
];

const trustItems = [
  { icon: Clock, label: "24-hour response" },
  { icon: Shield, label: "Confidential discovery" },
  { icon: Star, label: "No-obligation scope" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {};

    switch (name) {
      case "name":
        if (!value || value.trim().length < 2) {
          errors.name = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          errors.name = "Name must be less than 50 characters";
        }
        break;
      case "email":
        if (!value) {
          errors.email = "Email is required";
        } else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !value.match(/^[+]?[\d\s\-()]+$/)) {
          errors.phone = "Please enter a valid phone number";
        }
        break;
      case "message":
        if (!value || value.trim().length < 10) {
          errors.message = "Message must be at least 10 characters";
        } else if (value.trim().length > 1000) {
          errors.message = "Message must be less than 1000 characters";
        }
        break;
      default:
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [name]: errors[name] || "" }));
    return !errors[name];
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      setCharCount(value.length);
    }

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((item) => item !== service),
    }));
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFocusedField(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fieldsToValidate = ["name", "email", "phone", "message"];
    const isValid = fieldsToValidate.every((key) =>
      validateField(key, formData[key as keyof typeof formData] as string)
    );

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
      setFormData({ name: "", email: "", phone: "", services: [], message: "" });
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
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <div className="surface-grid absolute inset-0 opacity-70" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-8 text-center lg:grid-cols-[0.85fr_1fr] lg:items-end lg:text-left"
        >
          <div className="flex flex-col items-center lg:items-start">
            <span className="section-eyebrow">Contact</span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Tell us what you want to build, automate, or grow.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Share a few details and we will respond with next steps, rough scope,
              and the best path to move from idea to execution.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {trustItems.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 border border-border bg-white px-3 py-2 text-sm font-medium text-foreground"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="premium-card space-y-6 bg-white p-5 sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {["name", "email"].map((field) => (
                <div key={field} onFocus={() => setFocusedField(field)} className="relative">
                  <label htmlFor={field} className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    {field === "name" ? <User className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                    {field === "name" ? "Name" : "Email"} *
                  </label>
                  <Input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your name" : "you@company.com"}
                    value={formData[field as keyof typeof formData] as string}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                    className={`h-12 border-border bg-background transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-accent ${
                      focusedField === field ? "shadow-[0_0_0_3px_rgba(245,166,35,0.12)]" : ""
                    } ${fieldErrors[field] ? "border-red-500 focus:border-red-500" : ""} ${
                      isSuccess ? "border-green-500" : ""
                    }`}
                  />
                  {fieldErrors[field] && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {fieldErrors[field]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4" />
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`h-12 border-border bg-background transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-accent ${
                  fieldErrors.phone ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {fieldErrors.phone && (
                <div className="mt-2 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {fieldErrors.phone}
                </div>
              )}
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Briefcase className="h-4 w-4" />
                Services Interested In
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service}
                    htmlFor={`service-${service}`}
                    className={`flex cursor-pointer items-center gap-3 border p-3 text-sm transition-all duration-300 ${
                      formData.services.includes(service)
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={`service-${service}`}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={(e) => handleServiceChange(service, e.target.checked)}
                      className="h-4 w-4 flex-shrink-0 border-border text-accent focus:ring-accent"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <MessageSquare className="h-4 w-4" />
                Message *
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals, workflow, product, or problem..."
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  rows={5}
                  minLength={10}
                  maxLength={1000}
                  className={`resize-none border-border bg-background transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-accent ${
                    fieldErrors.message ? "border-red-500 focus:border-red-500" : ""
                  } ${isSuccess ? "border-green-500" : ""}`}
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={charCount > 950 ? "text-red-500" : charCount > 900 ? "text-orange-500" : ""}>
                    {charCount}/1000
                  </span>
                  {charCount >= 10 && charCount <= 1000 && !fieldErrors.message && (
                    <CheckCircle className="h-3 w-3 text-green-500" />
                  )}
                </div>
              </div>
              {fieldErrors.message && (
                <div className="mt-2 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {fieldErrors.message}
                </div>
              )}
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Send className="h-5 w-5 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Send Message
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="space-y-4"
          >
            {[
              { icon: Phone, label: "Phone", info: "+91-9608826629", href: "tel:+919608826629" },
              { icon: Mail, label: "Email", info: "info@thinkmoreai.com", href: "mailto:info@thinkmoreai.com" },
            ].map((item) => (
              <div key={item.label} className="premium-card bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-accent/25 bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{item.label}</p>
                    <a href={item.href} className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent">
                      {item.info}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="premium-card bg-primary p-6 text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold">Prefer a call?</h3>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/[0.68]">
                Schedule a discovery call and we will map the highest-impact path for your business.
              </p>
              <Button variant="hero" asChild className="mt-6 group w-full">
                <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
