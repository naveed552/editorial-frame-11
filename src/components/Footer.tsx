import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "default" | "echelon";
}

const marqueeTopKeywords = [
  "Technical Project Management",
  "eCommerce Delivery",
  "Data Migration",
];

const marqueeBottomKeywords = [
  "Agile & Scrum",
  "Stakeholder Management",
  "Risk Management",
  "Delivery Governance",
  "Magento / Adobe Commerce",
  "Release & Rollout Planning",
];

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "echelon") {
    return (
      <footer className="border-t border-separator mt-auto">
        {/* Main Footer Content */}
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
            {/* Site */}
            <div className="space-y-3">
              <p className="text-label">Site</p>
              <div className="text-sm space-y-1">
                <Link to="/work" className="block text-foreground hover:text-accent transition-colors">Projects</Link>
                <Link to="/about" className="block text-foreground hover:text-accent transition-colors">About</Link>
                <Link to="/contact" className="block text-foreground hover:text-accent transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="text-label">Contact</p>
              <div className="text-sm text-foreground space-y-1">
                <a href="mailto:sd.naveedhussain@gmail.com" className="block hover:text-accent transition-colors">
                  sd.naveedhussain@gmail.com
                </a>
                <a href="mailto:naveed.domain@yahoo.in" className="block hover:text-accent transition-colors">
                  naveed.domain@yahoo.in
                </a>
                <a href="tel:+919502686709" className="block hover:text-accent transition-colors">
                  +91 95026 86709
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Skills Marquee */}
        <div className="border-t border-separator overflow-hidden py-5 md:py-7">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, row) =>
              marqueeTopKeywords.map((keyword, i) => (
                <span key={`${row}-${i}`} className="flex items-center">
                  <span className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mx-6 md:mx-8">
                    {keyword}
                  </span>
                  <span className="text-accent text-2xl md:text-4xl">/</span>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="border-t border-separator overflow-hidden py-4 md:py-5">
          <div
            className="flex whitespace-nowrap animate-marquee"
            style={{ animationDirection: "reverse" }}
          >
            {Array.from({ length: 4 }).map((_, row) =>
              marqueeBottomKeywords.map((keyword, i) => (
                <span key={`${row}-${i}`} className="flex items-center">
                  <span className="font-display text-2xl md:text-4xl font-semibold text-muted-foreground mx-5 md:mx-7">
                    {keyword}
                  </span>
                  <span className="text-accent text-lg md:text-2xl">&bull;</span>
                </span>
              ))
            )}
          </div>
        </div>
        {/* Static legal line at the very end of the footer */}
        <div className="border-t border-separator">
          <div className="container-wide py-5">
            <p className="text-sm text-muted-foreground">
              Legal<span className="mx-2">&middot;</span>&copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="border-t border-separator">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">Syed Naveed Hussain</p>
            <p className="text-muted-foreground text-sm">
              Technical Project Manager
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/work" className="hover-highlight">Work</Link>
            <Link to="/about" className="hover-highlight">About</Link>
            <Link to="/contact" className="hover-highlight">Contact</Link>
          </div>

          {/* Right */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Syed Naveed Hussain</p>
            <p className="mt-1">India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
