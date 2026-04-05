"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">
        Book a Consultation
      </h1>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Whether you are searching for the perfect engagement ring, a bespoke
        commission, or simply wish to explore our collections in person, our
        specialists are here to help.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm tracking-wide uppercase font-medium">
              Visit Our Atelier
            </h2>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>123 Fifth Avenue</p>
              <p>New York, NY 10003</p>
              <p className="mt-3">Monday — Saturday: 10:00 AM — 7:00 PM</p>
              <p>Sunday: 12:00 PM — 5:00 PM</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm tracking-wide uppercase font-medium">
              Get in Touch
            </h2>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>
                Phone:{" "}
                <a
                  href="tel:+15551234567"
                  className="text-accent hover:text-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@lumiere.com"
                  className="text-accent hover:text-foreground transition-colors"
                >
                  contact@lumiere.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm tracking-wide uppercase font-medium">
              Private Appointments
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              For a more intimate experience, we offer private viewing
              appointments in our dedicated salon. Enjoy champagne and
              personalized guidance from our senior gemologists as you explore
              our finest pieces. Private appointments are available Tuesday
              through Friday and can be booked using the form.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="border border-border p-8 text-center">
              <p className="font-serif text-2xl font-light">Thank You</p>
              <p className="mt-4 text-sm text-muted-foreground">
                We have received your inquiry and will respond within 24 hours.
                We look forward to welcoming you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <select className="w-full border border-border bg-transparent px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                <option value="">Select a reason for your visit</option>
                <option value="engagement">Engagement Rings</option>
                <option value="bespoke">Bespoke Commission</option>
                <option value="collection">Explore Collections</option>
                <option value="repair">Repair & Restoration</option>
                <option value="other">Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
              >
                Request Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
