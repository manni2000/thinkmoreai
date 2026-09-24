import { useState, type ChangeEvent, type FocusEvent, type FormEvent, type InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { submitContactForm } from "@/lib/api";

const services = ["AI products & assistants", "Web & mobile applications", "Automation & integrations", "Data, analytics & growth"];
type FormState = { name: string; email: string; phone: string; services: string[]; message: string };

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", phone: "", services: [], message: "" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const validate = (name: string, value: string) => {
    let error = "";
    if (name === "name" && (value.trim().length < 2 || value.trim().length > 50)) error = "Enter a name between 2 and 50 characters.";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email address.";
    if (name === "phone" && value && !/^[+]?\d[\d\s\-()]{5,19}$/.test(value)) error = "Enter a valid phone number.";
    if (name === "message" && (value.trim().length < 10 || value.trim().length > 1000)) error = "Tell us a little more (10–1000 characters).";
    setErrors((current) => ({ ...current, [name]: error }));
    return !error;
  };

  const change = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "idle") setStatus("idle");
  };
  const blur = (event: FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => validate(event.target.name, event.target.value);
  const toggleService = (service: string) => setFormData((current) => ({ ...current, services: current.services.includes(service) ? current.services.filter((item) => item !== service) : [...current.services, service] }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const valid = ["name","email","phone","message"].map((key) => validate(key, formData[key as keyof FormState] as string)).every(Boolean);
    if (!valid) { setStatus("error"); return; }
    setStatus("sending");
    try {
      await submitContactForm({ name: formData.name.trim(), email: formData.email.trim().toLowerCase(), phone: formData.phone.trim() || undefined, services: formData.services, message: formData.message.trim() });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", services: [], message: "" });
      setErrors({});
    } catch { setStatus("error"); }
  };

  const fieldClass = (name: string) => `min-h-12 w-full border bg-white/[.035] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-accent ${errors[name]?"border-red-400/70":"border-white/12"}`;

  return <section id="contact" className="section-padding relative overflow-hidden bg-[#080b10]">
    <div className="absolute right-[-12%] top-[5%] h-[600px] w-[600px] rounded-full border border-accent/10 shadow-[inset_0_0_100px_rgba(119,229,255,.045)]"/><div className="absolute right-[-5%] top-[18%] h-[420px] w-[420px] rotate-45 rounded-[28%] border border-violet-300/10"/>
    <div className="container-custom relative">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="section-eyebrow">Start a conversation</span>
          <h2 className="mt-6 text-[clamp(2.65rem,5.5vw,5.5rem)] font-medium leading-[.98] tracking-[-.06em] text-white">Have a problem worth solving?</h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/55">Tell us what you’re building, what’s slowing you down, or what you want to automate.</p>
          <div className="mt-10 space-y-3 border-t border-white/10 pt-7">
            <a href="mailto:manishmandal9734@gmail.com" className="flex min-h-12 items-center gap-3 text-sm text-white/62 transition-colors hover:text-accent"><Mail className="h-4 w-4 text-accent"/>manishmandal9734@gmail.com</a>
            <a href="tel:+919608826629" className="flex min-h-12 items-center gap-3 text-sm text-white/62 transition-colors hover:text-accent"><Phone className="h-4 w-4 text-accent"/>+91 96088 26629</a>
          </div>
          <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent">Prefer a discovery call? <ArrowUpRight className="h-4 w-4"/></a>
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }} onSubmit={submit} noValidate className="border border-white/10 bg-[#111720]/85 p-5 backdrop-blur-md sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={formData.name} onChange={change} onBlur={blur} error={errors.name} className={fieldClass("name")} required autoComplete="name" placeholder="Your name"/>
            <Field label="Work email" name="email" type="email" value={formData.email} onChange={change} onBlur={blur} error={errors.email} className={fieldClass("email")} required autoComplete="email" placeholder="you@company.com"/>
          </div>
          <div className="mt-5"><Field label="Phone (optional)" name="phone" type="tel" value={formData.phone} onChange={change} onBlur={blur} error={errors.phone} className={fieldClass("phone")} autoComplete="tel" placeholder="+91 98765 43210"/></div>
          <fieldset className="mt-7"><legend className="text-sm font-medium text-white">What can we help with?</legend><div className="mt-3 grid gap-2 sm:grid-cols-2">{services.map((service)=><label key={service} className={`flex min-h-12 cursor-pointer items-center gap-3 border px-3 text-xs transition-colors ${formData.services.includes(service)?"border-accent/50 bg-accent/[.08] text-white":"border-white/10 text-white/48 hover:border-white/25"}`}><input type="checkbox" className="h-4 w-4 accent-[#77e5ff]" checked={formData.services.includes(service)} onChange={()=>toggleService(service)}/>{service}</label>)}</div></fieldset>
          <div className="mt-7"><label htmlFor="message" className="text-sm font-medium text-white">Project notes <span className="text-accent">*</span></label><textarea id="message" name="message" rows={5} minLength={10} maxLength={1000} required value={formData.message} onChange={change} onBlur={blur} placeholder="Goals, current workflow, timeline, or the problem you want to solve…" className={`${fieldClass("message")} mt-2 resize-y py-3`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message?"message-error":"message-count"}/><div className="mt-2 flex justify-between gap-4">{errors.message?<p id="message-error" className="flex items-center gap-1.5 text-xs text-red-300"><AlertCircle className="h-3.5 w-3.5"/>{errors.message}</p>:<span/>}<span id="message-count" className="font-mono text-[9px] text-white/30">{formData.message.length}/1000</span></div></div>
          <button type="submit" disabled={status==="sending"} className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:bg-white disabled:cursor-wait disabled:opacity-60">{status==="sending"?"Sending…":<>Send message <Send className="h-4 w-4"/></>}</button>
          <div aria-live="polite" className="mt-4 min-h-6">{status==="success"&&<p className="flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4"/>Your message was sent. We’ll be in touch.</p>}{status==="error"&&<p className="flex items-center gap-2 text-sm text-red-300"><AlertCircle className="h-4 w-4"/>Please check the fields or try again.</p>}</div>
          <p className="mt-2 text-xs leading-5 text-white/30">By sending this form, you agree to our <Link to="/privacy-policy" className="underline hover:text-white">privacy policy</Link>.</p>
        </motion.form>
      </div>
    </div>
  </section>;
};

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
const Field = ({ label, error, required, ...props }: FieldProps) => { const id = String(props.name); return <div><label htmlFor={id} className="text-sm font-medium text-white">{label}{required&&<span className="text-accent"> *</span>}</label><input id={id} {...props} required={required} aria-invalid={Boolean(error)} aria-describedby={error?`${id}-error`:undefined}/>{error&&<p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-red-300"><AlertCircle className="h-3.5 w-3.5"/>{error}</p>}</div>; };

export default Contact;
