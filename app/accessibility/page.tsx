export const metadata = {
  title: "Accessibility | LUMIERE",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">
        Accessibility Statement
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Last updated: April 5, 2026
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            Our Commitment
          </h2>
          <p className="mt-3">
            Lumiere is committed to ensuring that our website is accessible to
            all visitors, including those with disabilities. We believe that
            every customer deserves an exceptional shopping experience, and we
            strive to make our Site usable by the widest possible audience,
            regardless of ability or technology.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Accessibility Standards
          </h2>
          <div className="mt-3 space-y-3">
            <p>
              We aim to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 at Level AA. These guidelines are developed by the
              World Wide Web Consortium (W3C) and are widely accepted as the
              international standard for web accessibility.
            </p>
            <p>Our ongoing accessibility efforts include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Semantic HTML markup for proper screen reader navigation</li>
              <li>Sufficient color contrast ratios for text and interactive elements</li>
              <li>Keyboard navigation support throughout the Site</li>
              <li>Descriptive alt text for all product images</li>
              <li>Clear focus indicators for interactive elements</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>Properly labeled form fields and error messages</li>
              <li>ARIA landmarks and roles where appropriate</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Assistive Technologies
          </h2>
          <p className="mt-3">
            Our Site is designed to be compatible with popular assistive
            technologies, including screen readers (JAWS, NVDA, VoiceOver),
            screen magnification software, speech recognition tools, and
            alternative input devices. We test regularly with these
            technologies to identify and resolve compatibility issues.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Known Limitations
          </h2>
          <p className="mt-3">
            While we strive for full accessibility, some areas of the Site may
            not yet meet all accessibility standards. We are actively working to
            address these limitations. Known areas for improvement include
            third-party embedded content (such as payment forms) and certain
            legacy product images that may lack detailed descriptions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Alternative Shopping Assistance
          </h2>
          <p className="mt-3">
            If you encounter any difficulty accessing or navigating our Site, or
            if you need assistance completing a purchase, our customer care team
            is available to help. You can place orders or get product
            information by phone or email:
          </p>
          <div className="mt-3">
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
                href="mailto:accessibility@lumiere.com"
                className="text-accent hover:text-foreground transition-colors"
              >
                accessibility@lumiere.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Feedback
          </h2>
          <p className="mt-3">
            We welcome your feedback on the accessibility of the Lumiere
            website. If you encounter any accessibility barriers or have
            suggestions for improvement, please contact us. We take all feedback
            seriously and will make reasonable efforts to address reported issues
            promptly.
          </p>
          <p className="mt-3">
            When reporting an issue, please include the page URL, a description
            of the problem, the assistive technology or browser you were using,
            and any other relevant details. This helps us identify and resolve
            the issue more quickly.
          </p>
        </section>
      </div>
    </div>
  );
}
