import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const MAPS_LINK = "https://maps.google.com/?q=Double+D's+Cafe+%26+Bakes+Sambalpur";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold text-primary-foreground">
          Double D's
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-secondary/80 transition-colors hover:text-primary-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 font-heading text-sm font-semibold text-accent-foreground transition-all hover:scale-105"
          >
            <MapPin className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary px-6 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-sm text-secondary/80 hover:text-primary-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-accent-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
