import { MapPin, Phone, Clock } from "lucide-react";

const MAPS_LINK = "https://maps.google.com/?q=Double+D's+Cafe+%26+Bakes+Sambalpur";

const VisitUsSection = () => {
  return (
    <section id="visit" className="bg-card py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Visit Us
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Address</h3>
                <p className="mt-1 font-body text-muted-foreground">
                  Hota Complex, Budharaja Rd<br />
                  Beside Jagganath Mandir<br />
                  Sahayog Nagar, Budharaja<br />
                  Sambalpur, Odisha 768004
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:07854917070" className="mt-1 block font-body text-muted-foreground hover:text-primary transition-colors">
                  078549 17070
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Hours</h3>
                <p className="mt-1 font-body text-muted-foreground">
                  Open Daily · Closes at 10 PM
                </p>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Double D's Cafe & Bakes location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.8!2d83.97!3d21.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDouble+D's+Cafe+%26+Bakes!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
