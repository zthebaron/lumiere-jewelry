export const metadata = {
  title: "Jewelry Care Guide | LUMIERE",
};

export default function CareGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">
        Jewelry Care Guide
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Preserve the brilliance of your pieces for generations to come.
      </p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            General Care
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Fine jewelry is an investment that rewards proper care. Follow
              these guidelines to keep your Lumiere pieces looking their best
              for years to come.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Store each piece separately in its original Lumiere jewelry box
                or a soft-lined compartment to prevent scratching.
              </li>
              <li>
                Remove jewelry before swimming, bathing, exercising, or
                performing household chores.
              </li>
              <li>
                Apply perfume, hairspray, and lotions before putting on your
                jewelry to minimize chemical exposure.
              </li>
              <li>
                Wipe pieces gently with a soft, lint-free cloth after each
                wearing to remove oils and residue.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Gold Jewelry
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Gold is a durable but soft metal. To clean gold jewelry, soak it
              in a solution of warm water and a few drops of mild dish soap for
              15-20 minutes. Gently scrub with a soft-bristled toothbrush, rinse
              under warm running water, and pat dry with a lint-free cloth.
            </p>
            <p>
              Avoid exposing gold to chlorine, bleach, or other harsh chemicals,
              which can weaken the metal over time. Have your gold pieces
              professionally polished once a year to restore their luster.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Silver Jewelry
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Sterling silver naturally tarnishes when exposed to air and
              moisture. Store silver pieces in anti-tarnish bags or cloths when
              not in use. Clean with a silver polishing cloth or a gentle silver
              cleaning solution. Avoid abrasive cleaners, which can scratch the
              surface.
            </p>
            <p>
              Wearing silver regularly actually helps prevent tarnish, as the
              natural oils in your skin help maintain its shine.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Gemstone Care
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Different gemstones require different care. Diamonds, sapphires,
              and rubies are durable and can be cleaned with warm soapy water.
              Softer stones like emeralds, opals, and pearls require extra
              caution — avoid ultrasonic cleaners and harsh chemicals.
            </p>
            <p>
              Pearls should be wiped with a damp cloth after wearing and stored
              flat in a soft pouch. Never submerge pearls in water or cleaning
              solutions, as this can damage the nacre.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Professional Services
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              We recommend having your fine jewelry professionally inspected and
              cleaned at least once a year. Our in-house jewelers offer
              complimentary cleaning and inspection for all Lumiere pieces.
              Contact us to schedule an appointment at our New York atelier.
            </p>
            <p>
              We also offer professional repair, resizing, and restoration
              services. Please reach out to our customer care team for pricing
              and turnaround times.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
