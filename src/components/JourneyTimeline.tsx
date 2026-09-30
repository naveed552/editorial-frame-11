import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { journey } from "@/data/journey";

export function JourneyTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-separator border-t border-b border-separator">
      {journey.map((step, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={step.year} className="group">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
              aria-expanded={isOpen}
            >
              <span className="text-label shrink-0 md:w-12">{step.year}</span>

              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-display font-semibold text-foreground">
                  {step.role}
                  <span className="text-muted-foreground font-sans text-sm md:text-base font-normal">
                    {" "}
                    &middot; {step.org}
                  </span>
                </h3>
                <p className="mt-1 text-sm md:text-base text-muted-foreground">
                  {step.summary}
                </p>
              </div>

              <ChevronDown
                size={20}
                className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 md:pb-8 md:pl-20 max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
