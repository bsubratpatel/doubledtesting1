import { Coffee, CakeSlice, UtensilsCrossed, Sparkles } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Coffee & Beverages",
    description: "Freshly brewed coffee and refreshing drinks made to brighten your day.",
  },
  {
    icon: CakeSlice,
    title: "Fresh Bakes",
    description: "Cakes, pastries, and baked treats made fresh and served with care.",
  },
  {
    icon: UtensilsCrossed,
    title: "Continental Dishes",
    description: "Tasty cafe meals inspired by global flavors.",
  },
  {
    icon: Sparkles,
    title: "Fusion Favorites",
    description: "Creative dishes that combine Indian and international tastes.",
  },
];

const WhatWeServeSection = () => {
  return (
    <section id="menu" className="bg-card py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            What We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">
            From rich coffee to fusion plates — there's something for everyone at Double D's.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              data-animate="card"
              className="group rounded-xl bg-background p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeServeSection;
