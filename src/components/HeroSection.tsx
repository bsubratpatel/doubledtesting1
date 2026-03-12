import { MapPin } from "lucide-react";
import heroImage from "@/assets/cafe-interior.png";

const MAPS_LINK = "https://maps.google.com/?q=Double+D's+Cafe+%26+Bakes+Sambalpur";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up space-y-6">
            <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-accent">
              friends • food • coffee
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-[56px] md:leading-[1.1]">
              Good Coffee. Fresh Bakes. Great Time.
            </h1>
            <p className="max-w-md font-body text-lg text-secondary">
              Enjoy delicious coffee, freshly baked treats, and tasty continental & fusion dishes in a cozy cafe atmosphere.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-heading text-base font-semibold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </div>
            <p className="flex items-center gap-1.5 font-body text-sm text-secondary/70">
              <MapPin className="h-3.5 w-3.5" />
              Budharaja Rd, beside Jagganath Mandir, Sambalpur
            </p>
          </div>
          <div className="animate-fade-in relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Inside Double D's Cafe & Bakes - cozy cafe atmosphere with warm lighting"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-accent/20 blur-2xl" />
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
