import aboutImage from "@/assets/cafe-entrance.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-16 md:py-20">
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={aboutImage}
              alt="Double D's Cafe entrance with warm neon signage"
              className="aspect-[3/4] w-full object-cover md:aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
              A Cozy Cafe in the Heart of Sambalpur
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Double D's Cafe & Bakes is a place where good food and great company come together. Enjoy freshly brewed coffee, delicious continental dishes, fusion recipes, and freshly baked goodies in a warm and welcoming cafe environment.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Whether you're catching up with friends, working remotely, or simply craving a great cup of coffee — Double D's has a spot for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
