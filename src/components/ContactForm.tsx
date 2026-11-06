"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/config/site";
import { Button } from "./Button";
import { CheckIcon } from "./Icons";

type Values = { name: string; email: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", service: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[\d\s().+-]{7,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Values) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setTouched({ name: true, email: true, phone: true, message: true, service: true });
    if (Object.keys(e).length === 0) {
      setSent(true); // Demo only — no backend.
    } else {
      const first = Object.keys(e)[0];
      document.getElementById(`cf-${first}`)?.focus();
    }
  };

  if (sent) {
    return (
      <div role="status" className="fade-in rounded-[2rem] border border-gold/40 bg-ivory p-10 text-center shadow-soft md:p-14">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-blush text-rose">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="display-md mt-6 text-ink">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-3 max-w-sm text-muted">
          Your message has been received. This is a demo form, so nothing was actually sent. In the live site we would reply within one business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => {
            setValues(empty);
            setTouched({});
            setErrors({});
            setSent(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-xl border bg-ivory px-4 py-3.5 text-base text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20";
  const label = "text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink";
  const err = (k: keyof Values) => (touched[k] && errors[k] ? errors[k] : undefined);
  const cls = (k: keyof Values) => `${field} ${err(k) ? "border-[#a8323e]" : "border-gold/40"}`;

  const errMsg = (k: keyof Values) =>
    err(k) ? (
      <p id={`cf-${k}-err`} className="mt-1.5 text-sm text-[#a8323e]">
        {err(k)}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2rem] border border-gold/30 bg-ivory p-6 shadow-soft md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={!!err("name")}
            aria-describedby={err("name") ? "cf-name-err" : undefined}
            className={cls("name")}
            placeholder="Your full name"
          />
          {errMsg("name")}
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={!!err("email")}
            aria-describedby={err("email") ? "cf-email-err" : undefined}
            className={cls("email")}
            placeholder="you@example.com"
          />
          {errMsg("email")}
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Phone <span className="normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={!!err("phone")}
            aria-describedby={err("phone") ? "cf-phone-err" : undefined}
            className={cls("phone")}
            placeholder="(555) 000-0000"
          />
          {errMsg("phone")}
        </div>
        <div>
          <label htmlFor="cf-service" className={label}>
            Interested in
          </label>
          <select
            id="cf-service"
            name="service"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            className={cls("service")}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className={label}>
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={!!err("message")}
            aria-describedby={err("message") ? "cf-message-err" : undefined}
            className={cls("message")}
            placeholder="How can we help?"
          />
          {errMsg("message")}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Demo form · no data is stored or sent.</p>
        <Button type="submit" className="w-full sm:w-auto">
          Send message
        </Button>
      </div>
    </form>
  );
}
