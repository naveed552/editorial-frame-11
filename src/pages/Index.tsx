import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Linkedin, Phone, Copy, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ClientLogoGrid } from "@/components/ClientLogoGrid";
import { SectionNav } from "@/components/SectionNav";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { StatCounter } from "@/components/StatCounter";
import { projects } from "@/data/projects";
import { stats } from "@/data/stats";
import { BookCallButton } from "@/components/BookCallModal";

const sections = [
  { id: "expertise", label: "Expertise" },
  { id: "journey", label: "Journey" },
  { id: "impact", label: "Impact" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const expertiseGroups = [
  {
    index: "01",
    title: "Delivery & governance",
    items: [
      "Programme & project management",
      "Delivery governance & compliance",
      "Risk identification, tracking & mitigation",
      "Scope, budget & timeline management",
      "Release, rollout & change management",
    ],
  },
  {
    index: "02",
    title: "eCommerce & systems",
    items: [
      "eCommerce project delivery",
      "Data migration & data management",
      "Technology management & solution coordination",
      "Service stability & hypercare",
    ],
  },
  {
    index: "03",
    title: "Stakeholder & client management",
    items: [
      "Global stakeholder management",
      "Client communication & expectation management",
      "Cross-functional team leadership",
      "Executive status reporting",
    ],
  },
  {
    index: "04",
    title: "Delivery methods & reporting",
    items: [
      "Agile, Scrum & Waterfall delivery",
      "Project reporting & dashboards",
      "Sprint metrics & visibility",
      "Governance cadences & QBRs",
    ],
  },
];

const principles = [
  {
    title: "Own the outcome",
    body: "Delivery isn't just tracking tickets. I carry the risk register, the escalation and the client relationship, so scope stays honest and dates stay real.",
  },
  {
    title: "Translate across the room",
    body: "The same update lands differently for an engineer, a client stakeholder and a leadership review. I frame it three ways so nobody is guessing.",
  },
  {
    title: "Make governance a habit, not a bottleneck",
    body: "RAID logs, release gates and status cadences work when they're routine. I install them early so they run quietly in the background.",
  },
];

const audiences = [
  {
    label: "For recruiters & hiring managers",
    title: "A delivery owner for your next programme.",
    body: "Bring me in where multiple workstreams, international stakeholders and tight go-live windows need one accountable manager.",
  },
  {
    label: "For clients",
    title: "Predictable delivery across time zones.",
    body: "US, UK, Gulf or India — I run structured governance and communication so your programme stays visible end to end.",
  },
  {
    label: "For collaborators",
    title: "A technical partner who still reads the logs.",
    body: "Open to partnerships and advisory conversations where eCommerce delivery, data migration or governance expertise can help.",
  },
];

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [phoneCopied, setPhoneCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+91 95026 86709");
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the tel: link is still the fallback.
    }
  };

  const gridImages = projects.slice(0, 6).map((p) => p.coverImage);
  const featuredProjects = projects.slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    setMousePosition({ x, y });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Layout noPadding>
      {/* HERO */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen overflow-hidden"
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-12 md:p-16 w-full max-w-6xl">
            {gridImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden">
                <img
                  src={image}
                  alt={`${projects[index]?.title ?? "Project"} - technical project management work by Syed Naveed Hussain`}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-background/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <span className="mb-4 inline-flex items-center gap-2 border border-separator px-3 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground animate-fade-in">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Open to new opportunities &middot; India, remote-friendly
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground">
            Syed Naveed Hussain
          </h1>
          <p className="mt-4 text-base md:text-xl text-foreground/90 max-w-2xl">
            Technical Project Manager | eCommerce Project Delivery | Data
            Migration | Agile Delivery Governance
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:opacity-85 transition-opacity"
            >
              See the work <ArrowRight size={16} />
            </Link>
            <BookCallButton className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:border-accent hover:text-accent transition-colors">
              Book a call
            </BookCallButton>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground/80 text-xs md:text-sm font-semibold uppercase tracking-widest px-2 py-3 hover-highlight"
            >
              About me <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bio - Bottom Left */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10 max-w-xs md:max-w-md hidden lg:block">
          <p className="text-sm md:text-base font-sans text-foreground/80 leading-relaxed">
            Leading multiple concurrent eCommerce projects, data migration
            workstreams, risk tracking and stakeholder management for clients
            across the United States, United Kingdom and Gulf regions.
          </p>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToId("expertise")}
          aria-label="Scroll to explore"
          className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10 flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
        >
          <span className="text-[11px] uppercase tracking-widest [writing-mode:vertical-rl]">
            Scroll
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </section>

      {/* CLIENT LOGOS */}
      <ClientLogoGrid />

      <SectionNav sections={sections} />

      {/* EXPERTISE */}
      <section id="expertise" className="container-wide py-20 md:py-28 scroll-mt-24">
        <p className="text-label mb-3">01 &middot; The operating range</p>
        <h2 className="text-headline max-w-3xl mb-12 md:mb-16">
          Technical depth, applied to keeping delivery predictable.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {expertiseGroups.map((group) => (
            <div key={group.index} className="border-t border-separator pt-6">
              <p className="text-label mb-2">{group.index}</p>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="container-wide py-20 md:py-28 scroll-mt-24">
        <p className="text-label mb-3">02 &middot; The progression</p>
        <h2 className="text-headline max-w-3xl mb-4">
          Every role added a new layer of accountability.
        </h2>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground mb-12 md:mb-16">
          From a first model in a notebook to owning delivery governance
          across international programmes. Tap a chapter to read more.
        </p>

        <JourneyTimeline />
      </section>

      {/* IMPACT */}
      <section id="impact" className="container-wide py-20 md:py-28 scroll-mt-24">
        <p className="text-label mb-3">03 &middot; The footprint</p>
        <h2 className="text-headline max-w-3xl mb-12 md:mb-16">
          The scope of responsibility, in numbers.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-6xl font-bold text-foreground">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wide text-foreground/80">
                {stat.label}
              </p>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="container-wide pb-20 md:pb-28">
        <p className="text-label mb-3">How I work</p>
        <h2 className="text-headline max-w-3xl mb-12 md:mb-16">
          The operating style stays consistent, whatever the programme.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {principles.map((principle, i) => (
            <div key={principle.title} className="border-t border-separator pt-6">
              <p className="text-label mb-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-3">
                {principle.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="container-wide py-20 md:py-28 scroll-mt-24">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="text-label mb-3">04 &middot; Selected work</p>
            <h2 className="text-headline max-w-2xl">
              A closer look at how delivery came together.
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover-highlight shrink-0"
          >
            View all work <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block"
            >
              <div className="image-reveal aspect-[4/5] mb-4">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-label mb-1">{project.category} &middot; {project.year}</p>
              <h3 className="text-lg md:text-xl font-display font-semibold flex items-center gap-2">
                {project.title}
                <ArrowUpRight
                  size={18}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </h3>
            </Link>
          ))}
        </div>

        <Link
          to="/work"
          className="md:hidden mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover-highlight"
        >
          View all work <ArrowRight size={16} />
        </Link>
      </section>

      {/* AUDIENCE CARDS */}
      <section className="container-wide pb-20 md:pb-28">
        <p className="text-label mb-3">The next conversation</p>
        <h2 className="text-headline max-w-3xl mb-12 md:mb-16">
          The right conversation has a real delivery problem at its centre.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {audiences.map((audience) => (
            <div key={audience.label} className="bg-secondary/50 p-6 md:p-8">
              <p className="text-label mb-3">{audience.label}</p>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-3">
                {audience.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA / CONTACT */}
      <section id="contact" className="container-wide pb-24 md:pb-32 scroll-mt-24">
        <div className="border-t border-separator pt-12 md:pt-16">
          <p className="text-label mb-3">Available for the right opportunity</p>
          <h2 className="text-headline max-w-2xl mb-8 md:mb-10">
            Have a delivery problem that needs an accountable owner?
          </h2>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <BookCallButton className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:opacity-85 transition-opacity">
              Book a 20-minute call
            </BookCallButton>
            <a
              href="mailto:sd.naveedhussain@gmail.com"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={16} /> Email me
            </a>
            <div className="inline-flex items-stretch border border-foreground/30 hover:border-accent transition-colors">
              <a
                href="tel:+919502686709"
                title="Tap to call on mobile"
                className="inline-flex items-center gap-2 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:text-accent transition-colors"
              >
                <Phone size={16} /> Call
              </a>
              <button
                type="button"
                onClick={copyPhone}
                title="Copy phone number"
                aria-label="Copy phone number"
                className="flex items-center px-3 border-l border-foreground/30 text-muted-foreground hover:text-accent transition-colors"
              >
                {phoneCopied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/naveed-hussain-syed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-5 md:px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {phoneCopied ? (
              <span className="text-accent">+91 95026 86709 copied to clipboard</span>
            ) : (
              <>+91 95026 86709 &middot; tap Call on mobile, or use the copy icon on desktop</>
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
