export const metadata = {
  title: "Shipping Information | LUMIERE",
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">
        Shipping Information
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        We deliver luxury to your doorstep with care and precision.
      </p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            Domestic Shipping (United States)
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              <strong className="text-foreground">Complimentary Shipping:</strong>{" "}
              All orders over $500 qualify for free standard shipping within the
              continental United States. Orders are typically delivered within
              5-7 business days.
            </p>
            <p>
              <strong className="text-foreground">Standard Shipping:</strong>{" "}
              $15 flat rate for orders under $500. Delivery within 5-7 business
              days via FedEx or UPS.
            </p>
            <p>
              <strong className="text-foreground">Express Shipping:</strong>{" "}
              $35 flat rate. Delivery within 2-3 business days. Available for
              orders placed before 12:00 PM EST on business days.
            </p>
            <p>
              <strong className="text-foreground">Overnight Shipping:</strong>{" "}
              $55 flat rate. Next business day delivery for orders placed before
              12:00 PM EST, Monday through Thursday.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            International Shipping
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              We ship to over 40 countries worldwide. International shipping
              rates are calculated at checkout based on destination and package
              weight. Typical delivery times are 7-14 business days.
            </p>
            <p>
              Please note that international orders may be subject to import
              duties, taxes, and customs fees levied by the destination country.
              These charges are the responsibility of the recipient and are not
              included in the order total.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Packaging & Insurance
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Every piece is carefully packaged in our signature Lumiere gift
              box, wrapped in acid-free tissue paper, and sealed with a satin
              ribbon. Each shipment is fully insured against loss or damage
              during transit at no additional cost.
            </p>
            <p>
              For gift orders, we offer complimentary gift wrapping and a
              handwritten note card. Simply select the gift option during
              checkout.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Order Tracking
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Once your order has shipped, you will receive a confirmation email
              with a tracking number. You can track your package at any time
              using the link provided in the email or by contacting our customer
              care team.
            </p>
            <p>
              A signature is required for all deliveries. If you will not be
              available to sign, please contact us to arrange an alternative
              delivery date or location.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Processing Times
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Most in-stock items ship within 1-2 business days. Custom or
              engraved pieces may require 5-10 additional business days for
              production. You will be notified of any delays via email.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
