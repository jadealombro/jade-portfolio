"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  helpWith: string;
  description: string;
  timeline: string;
  budget: string;
  referral: string;
}

const helpOptions = [
  "New WordPress website",
  "WooCommerce store",
  "Redesign or rebuild",
  "Custom functionality",
  "Maintenance & support",
  "Something else",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1–2 months",
  "3–6 months",
  "Flexible / planning stage",
];

const budgetOptions = [
  "Under $3,000",
  "$3,000 – $6,000",
  "$6,000 – $12,000",
  "$12,000+",
  "Not sure yet",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  color: "var(--color-ink)",
  backgroundColor: "var(--color-background)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-sm)",
  outline: "none",
  fontFamily: "var(--font-sans)",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "var(--color-ink)",
  marginBottom: "0.5rem",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "#B91C1C",
  marginTop: "0.375rem",
};

const hintStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "var(--color-muted)",
  marginTop: "0.375rem",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Placeholder submission — replace with your form backend
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem 2rem",
          backgroundColor: "var(--color-accent-light)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-accent)",
          textAlign: "center",
          maxWidth: "480px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            margin: "0 0 1rem",
          }}
        >
          Inquiry received
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", margin: 0 }}>
          Thanks for reaching out. I&apos;ll review your project details and follow up within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }} noValidate>
      {/* Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem" }} className="form-row">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Your name <span style={{ color: "#B91C1C" }}>*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            style={inputStyle}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email address <span style={{ color: "#B91C1C" }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            style={inputStyle}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
            })}
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Company + Website */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem" }} className="form-row">
        <div>
          <label htmlFor="company" style={labelStyle}>Company or business name</label>
          <input id="company" type="text" autoComplete="organization" style={inputStyle} {...register("company")} />
        </div>
        <div>
          <label htmlFor="website" style={labelStyle}>Existing website URL</label>
          <input id="website" type="url" autoComplete="url" style={inputStyle} placeholder="https://" {...register("website")} />
          <p style={hintStyle}>If you have one — leave blank if not.</p>
        </div>
      </div>

      {/* What they need */}
      <div>
        <label htmlFor="helpWith" style={labelStyle}>
          What do you need help with? <span style={{ color: "#B91C1C" }}>*</span>
        </label>
        <select
          id="helpWith"
          style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238F8F89' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", paddingRight: "2.5rem", cursor: "pointer" }}
          {...register("helpWith", { required: "Please select an option" })}
        >
          <option value="">Select an option</option>
          {helpOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {errors.helpWith && <p style={errorStyle}>{errors.helpWith.message}</p>}
      </div>

      {/* Project description */}
      <div>
        <label htmlFor="description" style={labelStyle}>
          Tell me about your project <span style={{ color: "#B91C1C" }}>*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
          placeholder="What are you trying to accomplish? What does success look like?"
          {...register("description", { required: "A brief description helps me understand the project" })}
        />
        {errors.description && <p style={errorStyle}>{errors.description.message}</p>}
        <p style={hintStyle}>You don&apos;t need to have everything figured out. A general sense of what you need is a great starting point.</p>
      </div>

      {/* Timeline + Budget */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem" }} className="form-row">
        <div>
          <label htmlFor="timeline" style={labelStyle}>Timeline</label>
          <select id="timeline" style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238F8F89' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", paddingRight: "2.5rem", cursor: "pointer" }} {...register("timeline")}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="budget" style={labelStyle}>Budget range</label>
          <select id="budget" style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238F8F89' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", paddingRight: "2.5rem", cursor: "pointer" }} {...register("budget")}>
            <option value="">Select a range</option>
            {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" style={labelStyle}>How did you hear about me?</label>
        <input id="referral" type="text" style={inputStyle} placeholder="Google, referral, LinkedIn, etc." {...register("referral")} />
      </div>

      {/* Submit */}
      <div style={{ paddingTop: "0.5rem" }}>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </Button>
        <p style={{ ...hintStyle, marginTop: "0.875rem" }}>
          I personally review every inquiry and follow up within 1–2 business days.
        </p>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .form-row { grid-template-columns: 1fr 1fr !important; }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px rgba(61,90,76,0.12);
        }
      `}</style>
    </form>
  );
}
