import { Link } from "react-router-dom";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { clientLogos } from "@/data/clients";

interface FooterProps {
  variant?: "default" | "echelon";
}

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
        {/* Scrolling Client Logos Marquee */}
        <div className="border-t border-separator overflow-hidden py-5 md:py-7">
          <p className="container-wide text-label mb-3">Brands delivered for</p>
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, row) =>
              clientLogos.map((logo, i) =>
                logo.image ? (
                  <span key={`${row}-${i}`} className="flex items-center">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-8 md:h-12 lg:h-14 w-auto object-contain mx-6 md:mx-8 opacity-90"
                    />
                    <span className="text-accent text-2xl md:text-4xl">/</span>
                  </span>
                ) : (
                  <span key={`${row}-${i}`} className="flex items-center">
                    <span
                      className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mx-6 md:mx-8 whitespace-nowrap ${logo.className ?? ""}`}
                    >
                      {logo.name}
                    </span>
                    <span className="text-accent text-2xl md:text-4xl">/</span>
                  </span>
                )
              )
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
            <p className="text-sm text-muted-foreground text-center">
              <Link to="/legal" className="hover-highlight">Legal notice</Link>
              <span className="mx-2">&middot;</span>&copy; {currentYear} All Rights Reserved
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
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">Syed Naveed Hussain</p>
            <p className="text-muted-foreground text-sm max-w-xs">
              Technical Project Manager &middot; eCommerce delivery, data
              migration and global stakeholder management.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:sd.naveedhussain@gmail.com"
                aria-label="Email Syed Naveed Hussain"
                className="p-2 border border-separator hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/naveed-hussain-syed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syed Naveed Hussain on LinkedIn"
                className="p-2 border border-separator hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p className="text-label mb-1">Navigate</p>
            <Link to="/" className="hover-highlight w-fit">Home</Link>
            <Link to="/work" className="hover-highlight w-fit">Work</Link>
            <Link to="/about" className="hover-highlight w-fit">About</Link>
            <Link to="/contact" className="hover-highlight w-fit">Contact</Link>
            <Link to="/legal" className="hover-highlight w-fit">Legal notice</Link>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-label mb-1">Get in touch</p>
            <a
              href="mailto:sd.naveedhussain@gmail.com"
              className="hover-highlight w-fit flex items-center gap-1"
            >
              sd.naveedhussain@gmail.com <ArrowUpRight size={12} />
            </a>
            <p className="text-muted-foreground mt-4">© {currentYear} Syed Naveed Hussain</p>
            <p className="text-muted-foreground">India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
