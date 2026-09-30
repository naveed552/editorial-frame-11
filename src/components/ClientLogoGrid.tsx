import { Link } from "react-router-dom";
import { clientLogos } from "@/data/clients";

export function ClientLogoGrid() {
  return (
    <section className="border-y border-separator bg-secondary/30">
      <div className="container-wide py-14 md:py-20">
        <p className="text-label mb-8 md:mb-10 text-center">
          Brands delivered for
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-14">
          {clientLogos.map((logo) =>
            logo.image ? (
              <div
                key={logo.name}
                className="flex items-center justify-center h-12 md:h-14"
                title={logo.name}
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-10 md:max-h-12 max-w-[140px] md:max-w-[170px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ) : (
              <div
                key={logo.name}
                className="flex items-center justify-center h-12 md:h-14"
                title={logo.name}
              >
                <span
                  className={`text-base md:text-xl text-foreground/75 hover:text-foreground transition-colors duration-300 whitespace-nowrap ${logo.className ?? ""}`}
                >
                  {logo.name}
                </span>
              </div>
            )
          )}
        </div>

        <p className="mt-10 md:mt-12 text-center text-xs text-muted-foreground">
          Trademarks belong to their respective owners.{" "}
          <Link to="/legal" className="hover-highlight underline underline-offset-2">
            Legal notice
          </Link>
        </p>
      </div>
    </section>
  );
}
