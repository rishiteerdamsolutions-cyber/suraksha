"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP_PHONE } from "@/lib/contact";

type WhatsAppFormButtonProps = {
  className?: string;
  label?: string;
  phone?: string;
  icon?: React.ReactNode;
};

type PatientForm = {
  name: string;
  age: string;
  problem: string;
  duration: string;
  history: string;
};

const initialForm: PatientForm = {
  name: "",
  age: "",
  problem: "",
  duration: "",
  history: ""
};

export default function WhatsAppFormButton({
  className = "",
  label = "WhatsApp",
  phone = WHATSAPP_PHONE,
  icon
}: WhatsAppFormButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<PatientForm>(initialForm);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "New Patient Consultation Request",
      "",
      `Name: ${form.name}`,
      `Age: ${form.age}`,
      `Problem: ${form.problem}`,
      `Suffering since: ${form.duration}`,
      `Previous history/treatment: ${form.history || "None"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsOpen(false);
    setForm(initialForm);
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {icon}
        {label}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 p-3 sm:items-center sm:p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-brand-primary">Patient Details for WhatsApp</h3>
                <p className="text-xs text-slate-500">Fill this once, then send directly to our hospital WhatsApp.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-1 text-slate-500 transition hover:bg-slate-100"
                aria-label="Close form"
              >
                X
              </button>
            </div>

            <form className="space-y-3" onSubmit={onSubmit}>
              <input
                required
                type="text"
                placeholder="Patient Name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-primary/60"
              />
              <input
                required
                type="number"
                min="0"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm((prev) => ({ ...prev, age: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-primary/60"
              />
              <textarea
                required
                placeholder="Problem"
                value={form.problem}
                onChange={(e) => setForm((prev) => ({ ...prev, problem: e.target.value }))}
                className="h-20 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-primary/60"
              />
              <input
                required
                type="text"
                placeholder="From when patient is suffering this problem"
                value={form.duration}
                onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-primary/60"
              />
              <textarea
                placeholder="Previous history of issue or treatment"
                value={form.history}
                onChange={(e) => setForm((prev) => ({ ...prev, history: e.target.value }))}
                className="h-20 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-primary/60"
              />

              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setIsOpen(false)} className="btn-secondary flex-1">
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
