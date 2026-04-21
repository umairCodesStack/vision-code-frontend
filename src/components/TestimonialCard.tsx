import { Star } from "lucide-react";
import type { Testimonial } from "@/data/mockData";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card-3d p-6 min-w-[320px] flex-shrink-0">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
          />
        ))}
      </div>
      <p className="text-sm text-foreground mb-4 font-body leading-relaxed">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3 border-t-2 border-border pt-4">
        <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 text-secondary font-display text-sm font-bold border-2 border-border">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
