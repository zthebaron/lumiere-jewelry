export const metadata = {
  title: "Returns & Exchanges | LUMIERE",
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">
        Returns & Exchanges
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Your satisfaction is our highest priority.
      </p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            Return Policy
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              We accept returns within 30 days of delivery for a full refund to
              your original payment method. Items must be in their original,
              unworn condition with all tags and packaging intact.
            </p>
            <p>
              To initiate a return, please contact our customer care team at{" "}
              <a
                href="mailto:returns@lumiere.com"
                className="text-accent hover:text-foreground transition-colors"
              >
                returns@lumiere.com
              </a>{" "}
              or call +1 (555) 123-4567. We will provide a prepaid return
              shipping label for domestic orders.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Exchanges</h2>
          <div className="mt-4 space-y-3">
            <p>
              We are happy to exchange any item for a different size, style, or
              piece of equal or greater value. Exchanges must be requested
              within 30 days of delivery. If the new item is of greater value,
              you will be charged the difference. If of lesser value, the
              difference will be refunded.
            </p>
            <p>
              To request an exchange, contact our customer care team with your
              order number and the item you would like to exchange for. We will
              arrange the swap promptly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Non-Returnable Items
          </h2>
          <div className="mt-4 space-y-3">
            <p>The following items are final sale and cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom or personalized pieces (engraved, resized, etc.)</li>
              <li>Items marked as &ldquo;Final Sale&rdquo; at the time of purchase</li>
              <li>Gift cards</li>
              <li>Items that have been worn, altered, or damaged after delivery</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Refund Processing
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Once we receive and inspect your returned item, we will process
              your refund within 5 business days. Refunds are issued to the
              original payment method. Please allow an additional 5-10 business
              days for the refund to appear on your statement, depending on your
              financial institution.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Damaged or Defective Items
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              If you receive a damaged or defective item, please contact us
              within 48 hours of delivery with photographs of the damage. We
              will arrange a replacement or full refund at no cost to you,
              including return shipping.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
