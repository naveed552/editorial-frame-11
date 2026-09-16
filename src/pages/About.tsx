import { Layout } from "@/components/Layout";

const engagementRegions = [
  "United States",
  "United Kingdom",
  "Gulf Region",
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Content */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">About</h1>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p>
                <span className="text-foreground">Syed Naveed Hussain</span> is a Technical
                Project Manager at Codilar Technologies, leading multiple concurrent
                eCommerce projects and ensuring alignment with business objectives
                and timely execution.
              </p>
              <p>
                He manages stakeholder communication for international clients
                across the US, UK, and Gulf regions, while driving risk tracking,
                delivery governance, and maintaining service stability during
                system rollouts.
              </p>
              <p>
                A Computer Science Engineering graduate from Jawaharlal Nehru
                Technological University Kakinada (JNTUK), he brings expertise in
                data migration, data management, and technology management —
                motivated by fostering collaboration, enhancing project
                visibility, and delivering seamless solutions for the dynamic
                needs of today's global businesses.
              </p>
            </div>
          </div>

          {/* Engagement Regions */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label mb-6">Client Engagement Regions</h2>
            <ul className="space-y-3">
              {engagementRegions.map((region) => (
                <li key={region} className="text-lg">
                  {region}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-label mb-6">Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {["Project Management", "Data Migration", "Data Management", "Technology Management", "Risk Tracking", "Delivery Governance", "Stakeholder Communication"].map((area) => (
                <span
                  key={area}
                  className="text-sm border border-border px-4 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
