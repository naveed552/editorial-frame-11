import { useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Get 6 unique cover images from projects for the grid
  const gridImages = projects.slice(0, 6).map(p => p.coverImage);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate offset from center (normalized to -1 to 1)
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;

    setMousePosition({ x, y });
  };

  return (
    <Layout hideFooter noPadding>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen overflow-hidden"
      >
        {/* Image Grid Background with Parallax */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-12 md:p-16 w-full max-w-6xl">
            {gridImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/30" />

        {/* Centered Title - Overlaid */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground">
            Syed Naveed Hussain
          </h1>
          <p className="mt-4 text-base md:text-xl text-foreground/90 max-w-2xl">
            Technical Project Manager | eCommerce Project Delivery | Data
            Migration | Agile Delivery Governance
          </p>
        </div>

        {/* Bio - Bottom Left */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10 max-w-xs md:max-w-md">
          <p className="text-sm md:text-base font-sans text-foreground/80 leading-relaxed">
            Technical Project Manager at Codilar Technologies, leading multiple
            concurrent eCommerce projects, data migration workstreams, risk
            tracking and stakeholder management for clients across the United
            States, United Kingdom and Gulf regions.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
