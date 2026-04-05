export function About() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "10K+", label: "Happy Clients" },
    { value: "GIA", label: "Certified Diamonds" },
    { value: "100%", label: "Ethical Sourcing" },
  ];

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Our Heritage
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
              A Legacy of Brilliance
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Since 1999, Lumiere has been at the forefront of fine jewelry
              design. Our master artisans combine time-honored techniques with
              contemporary aesthetics to create pieces that transcend trends and
              become cherished heirlooms.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every gemstone is hand-selected and GIA-certified, ensuring the
              highest standards of quality. We are committed to sustainable
              practices and ethical sourcing, because true luxury should never
              come at a cost to our world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-light text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
