import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Button from "./Button";

const SERVICES = [
  "Business Website",
  "Web Application",
  "Enterprise Application",
  "Full-Stack Development Training",
  "Technology Consulting",
  "Other",
];

const initial = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Please provide a bit more detail";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setStatus("loading");
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `New enquiry from ${form.fullName} – Odyssey AI Systems`,
        from_name: "Odyssey AI Systems Website",
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        budget: form.budget,
        message: form.message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setForm(initial);
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center"
      >
        <CheckCircle className="h-14 w-14 text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Message sent!</h3>
        <p className="mt-2 text-slate-400">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-blue-400 hover:text-blue-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-navy-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-300";
  const errorClass = "mt-1 text-xs text-red-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass}
            autoComplete="name"
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className={errorClass}>{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Project Budget (optional)
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Prefer not to say</option>
            <option value="<5k">Under ₹5,000</option>
            <option value="5k-10k">₹5,000 – ₹10,000</option>
            <option value="10k-20k">₹10,000 – ₹20,000</option>
            <option value="20k-40k">₹20,000 – ₹40,000</option>
            <option value="40k-50k">₹40,000 – ₹50,000</option>
            <option value="50k+">₹50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        fullWidth
        icon={status === "loading" ? Loader2 : Send}
        className={status === "loading" ? "[&_svg]:animate-spin" : ""}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}