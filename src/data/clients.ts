import ajmalLogo from "@/assets/logos/ajmal-perfumes.png";
import footLockerLogo from "@/assets/logos/foot-locker.png";
import jpwLogo from "@/assets/logos/jpw-industries.png";
import planetSportsLogo from "@/assets/logos/planet-sports.png";
import jetLogo from "@/assets/logos/jet.png";
import powermaticLogo from "@/assets/logos/powermatic.png";
import baileighLogo from "@/assets/logos/baileigh.png";
import seedsmanLogo from "@/assets/logos/seedsman.png";
import mapActiveLogo from "@/assets/logos/map-active.png";
import wiltonLogo from "@/assets/logos/wilton.png";

export const clientBrands: string[] = [
  "Ajmal Perfumes",
  "TGR Ventures",
  "Superdry",
  "Petit Bateau",
  "Nanan",
  "Foot Locker",
  "Crocs",
  "JPW Industries",
  "Converse",
  "Planet Sports",
  "Seedsman",
  "JET",
  "Baileigh",
  "MAP Active",
  "Powermatic",
  "Wilton",
];

export interface ClientLogo {
  name: string;
  /** Real logo image, when available. */
  image?: string;
  /** Extra utility classes to approximate each brand's wordmark styling
   *  when no image is available yet. */
  className?: string;
}

export const clientLogos: ClientLogo[] = [
  { name: "Ajmal Perfumes", image: ajmalLogo },
  { name: "TGR Ventures", className: "italic font-semibold" },
  { name: "Superdry", className: "font-black uppercase" },
  { name: "Petit Bateau", className: "font-serif italic" },
  { name: "nanan", className: "lowercase font-bold" },
  { name: "Foot Locker", image: footLockerLogo },
  { name: "Crocs", className: "font-black lowercase" },
  { name: "JPW Industries", image: jpwLogo },
  { name: "CONVERSE", className: "tracking-[0.2em] font-bold" },
  { name: "Planet Sports", image: planetSportsLogo },
  { name: "Seedsman", image: seedsmanLogo },
  { name: "JET", image: jetLogo },
  { name: "Baileigh", image: baileighLogo },
  { name: "MAP Active", image: mapActiveLogo },
  { name: "Powermatic", image: powermaticLogo },
  { name: "Wilton", image: wiltonLogo },
];
