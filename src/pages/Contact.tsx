import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { CopyableContact } from "@/components/CopyableContact";
import syedHeadshot from "@/assets/syed-headshot.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/naveed-hussain-syed";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h1 className="font-display font-bold tracking-tight mb-6 animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-3xl lg:whitespace-nowrap xl:text-4xl 2xl:text-5xl">
                Syed Naveed Hussain
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Technical Project Manager available for eCommerce delivery, data
                migration and programme management engagements. Reach out by
                email or phone to discuss your next project.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CopyableContact
                href="mailto:sd.naveedhussain@gmail.com"
                label="sd.naveedhussain@gmail.com"
                copyValue="sd.naveedhussain@gmail.com"
                icon={<Mail size={20} />}
              />

              <CopyableContact
                href="mailto:naveed.domain@yahoo.in"
                label="naveed.domain@yahoo.in"
                copyValue="naveed.domain@yahoo.in"
                icon={<Mail size={20} />}
              />

              <CopyableContact
                href="tel:+919502686709"
                label="+91 95026 86709"
                copyValue="+91 95026 86709"
                icon={<Phone size={20} />}
              />
              <p className="text-xs text-muted-foreground pl-9">
                Tap to call on mobile &middot; use the copy icon on desktop
              </p>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Location */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-label mb-2 flex items-center gap-2">
                <MapPin size={14} /> Based in
              </p>
              <p className="text-lg">India</p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-secondary overflow-hidden border border-separator">
              <img
                src={syedHeadshot}
                alt="Syed Naveed Hussain"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
