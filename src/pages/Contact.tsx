import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-display mb-6 animate-fade-in-up">
                Let's work<br />together.
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Interested in collaborating? Let's talk about your next project.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="mailto:sd.naveedhussain@gmail.com"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>sd.naveedhussain@gmail.com</span>
              </a>

              <a
                href="mailto:naveed.domain@yahoo.in"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>naveed.domain@yahoo.in</span>
              </a>

              <a
                href="tel:+919502686709"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Phone size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>+91 95026 86709</span>
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
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                alt="Workspace"
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
