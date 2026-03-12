import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-background">
            Double D's Cafe & Bakes
          </h3>
          <p className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground">
            friends • food • coffee
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Budharaja Rd, Sambalpur
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:07854917070" className="hover:text-background transition-colors">078549 17070</a>
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Double D's Cafe & Bakes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
