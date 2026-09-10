"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

export default function ConnectLab() {
  const { trackEvent } = useAnalytics();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = React.useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.errors) {
          setErrors(json.errors.map((err: { message: string }) => err.message));
        } else {
          setErrors([json.message || "Something went wrong"]);
        }
        setStatus("error");
      } else {
        setStatus("success");
        trackEvent("resume_clicked", { source: "contact_form_success" }); // Mock analytics event
      }
    } catch {
      setErrors(["Network error. Please try again later."]);
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Connect Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Initiate a connection. Let&apos;s engineer something great together.
        </p>
      </header>

      <div className="glass-panel p-8 md:p-12 rounded-3xl">
        {status === "success" ? (
          <div className="text-center py-12 animate-fade-in">
            <h2 className="text-3xl font-display font-bold text-[var(--brand-secondary)] mb-4">Message Transmitted</h2>
            <p className="text-[var(--text-muted)]">
              Your inquiry has been successfully sent to the network. I will review it shortly.
            </p>
            <Button className="mt-8" onClick={() => setStatus("idle")}>
              Send Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Identifier (Name)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-[var(--text-primary)] transition-colors"
                placeholder="Enter your identifier"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Routing Address (Email)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-[var(--text-primary)] transition-colors"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Payload (Message)
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-[var(--text-primary)] transition-colors resize-none"
                placeholder="Describe your architecture, product, or inquiry..."
              />
            </div>

            {errors.length > 0 && (
              <div className="p-4 bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 rounded-lg text-[var(--color-error)] text-sm">
                <ul className="list-disc pl-4 space-y-1">
                  {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" isLoading={status === "loading"}>
              Transmit Payload
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
