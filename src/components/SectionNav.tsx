import { useEffect, useState } from "react";

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop: fixed vertical rail */}
      <nav className="hidden xl:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-30">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group flex items-center gap-3"
            aria-label={`Jump to ${section.label}`}
          >
            <span
              className={`h-px transition-all duration-300 ${
                activeId === section.id
                  ? "w-8 bg-accent"
                  : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-foreground/60"
              }`}
            />
            <span
              className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                activeId === section.id
                  ? "text-foreground"
                  : "text-muted-foreground/70 group-hover:text-muted-foreground"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile / tablet: horizontal scroll pills */}
      <div className="xl:hidden sticky top-20 md:top-24 z-30 bg-background/95 backdrop-blur-md border-b border-separator overflow-x-auto">
        <div className="flex gap-2 px-6 py-3 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors duration-300 whitespace-nowrap ${
                activeId === section.id
                  ? "border-accent text-accent"
                  : "border-separator text-muted-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
