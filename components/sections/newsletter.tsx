"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Stay Connected
        </p>
        <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
          Join Our World
        </h2>
        <p className="mt-4 text-muted-foreground">
          Subscribe to receive exclusive previews, styling tips, and early
          access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-accent">
            Thank you for subscribing. Welcome to the Lumiere family.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-8 py-3 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
