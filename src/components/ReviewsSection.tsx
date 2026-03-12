import { Star } from "lucide-react";

const ratings = [
  { platform: "Zomato", rating: "4.2", votes: "980 votes" },
  { platform: "Justdial", rating: "4.6", votes: "632 votes" },
];

const testimonials = [
  {
    text: "The menu offers a great selection of both drinks and food. The ambiance is perfect for a casual outing with friends.",
    author: "Happy Customer",
  },
  {
    text: "The fusion of Italian and Indian flavors was executed to perfection. Definitely coming back for more!",
    author: "Food Lover",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-background py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            What People Say
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {ratings.map((r) => (
            <div key={r.platform} className="text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {r.platform}
              </p>
              <div className="mt-2 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(parseFloat(r.rating)) ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                {r.rating}<span className="text-base font-normal text-muted-foreground"> / 5</span>
              </p>
              <p className="text-sm text-muted-foreground">{r.votes}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <p className="font-body text-base italic leading-relaxed text-foreground">
                "{t.text}"
              </p>
              <p className="mt-4 font-heading text-sm font-semibold text-primary">
                — {t.author}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
