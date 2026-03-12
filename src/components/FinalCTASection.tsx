import { MapPin } from "lucide-react";

const MAPS_LINK = "https://maps.google.com/?q=Double+D's+Cafe+%26+Bakes+Sambalpur";

const FinalCTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready for Coffee and Fresh Bakes?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-lg text-secondary">
          Visit Double D's Cafe & Bakes today and enjoy great food, coffee, and good company.
        </p>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 font-heading text-base font-semibold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          <MapPin className="h-5 w-5" />
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
