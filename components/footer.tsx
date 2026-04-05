import Link from "next/link";

const footerLinks = {
  "Customer Care": [
    { href: "/shipping", label: "Shipping Information" },
    { href: "/returns", label: "Returns & Exchanges" },
    { href: "/care-guide", label: "Jewelry Care Guide" },
    { href: "/contact", label: "Book a Consultation" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
  Connect: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Pinterest" },
    { href: "#", label: "Facebook" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-light tracking-[0.2em] uppercase">
              Lumiere
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Crafting moments of brilliance since 1999. Each piece tells a
              story of exceptional craftsmanship and timeless elegance.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>123 Fifth Avenue, New York</p>
              <p className="mt-1">+1 (555) 123-4567</p>
              <p className="mt-1">contact@lumiere.com</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-medium tracking-wide uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumiere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
