import { Layout } from "@/components/Layout";

const engagementRegions = [
  "United States",
  "United Kingdom",
  "Gulf Region (UAE, Saudi Arabia, Qatar)",
  "India",
];

const coreCompetencies = [
  "Technical Project Management",
  "eCommerce Project Delivery",
  "Agile, Scrum & Waterfall Delivery",
  "Stakeholder Management & Client Communication",
  "Risk Identification, Tracking & Mitigation",
  "Delivery Governance & Project Compliance",
  "Data Migration & Data Management",
  "Release, Rollout & Change Management",
  "Cross-Functional Team Leadership",
  "Project Reporting, Dashboards & Visibility",
  "Scope, Budget & Timeline Management",
  "Technology Management & Solution Coordination",
];

const experience = [
  {
    role: "Technical Project Manager",
    company: "Codilar Technologies",
    period: "Present",
    location: "India (remote engagements across US, UK and Gulf)",
    points: [
      "Lead multiple concurrent eCommerce projects end to end, ensuring alignment with business objectives, agreed scope and on-time execution.",
      "Own stakeholder communication for international clients across the United States, United Kingdom and Gulf regions, including status reporting, escalation handling and expectation management.",
      "Drive risk tracking and delivery governance across programmes, maintaining project documentation, RAID logs and delivery quality standards.",
      "Maintain service stability during system rollouts through structured release planning, UAT coordination and post-go-live hypercare.",
      "Coordinate data migration and data management workstreams, covering data mapping, validation, reconciliation and cutover planning.",
      "Improve project visibility with reporting dashboards, sprint metrics and governance cadences that keep clients and delivery teams aligned.",
    ],
  },
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-14">
          {/* Professional Summary */}
          <div>
            <h1 className="text-display mb-4 animate-fade-in-up">
              Syed Naveed Hussain
            </h1>
            <p
              className="text-lg md:text-xl text-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}
            >
              Technical Project Manager, Codilar Technologies &mdash; eCommerce
              Delivery, Data Migration and Global Stakeholder Management
            </p>

            <h2 className="text-label mb-4">Professional Summary</h2>
            <div
              className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <p>
                Technical Project Manager at Codilar Technologies with proven
                experience leading multiple concurrent eCommerce projects,
                ensuring alignment with business objectives and timely
                execution. Manages stakeholder communication for international
                clients across the United States, United Kingdom and Gulf
                regions, while driving risk tracking, delivery governance and
                service stability during system rollouts.
              </p>
              <p>
                Graduate in Computer Science Engineering from Jawaharlal Nehru
                Technological University Kakinada (JNTUK), with expertise in
                data migration, data management and technology management.
                Motivated by fostering collaboration, enhancing project
                visibility and delivering seamless solutions that meet the
                dynamic needs of today&apos;s global businesses.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <h2 className="text-label mb-6">Professional Experience</h2>
            {experience.map((job) => (
              <article key={job.role} className="space-y-4">
                <header>
                  <h3 className="text-xl md:text-2xl font-display font-semibold">
                    {job.role}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {job.company} &middot; {job.period} &middot; {job.location}
                  </p>
                </header>
                <ul className="space-y-3 list-disc pl-5 text-base md:text-lg text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Core Competencies */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-label mb-6">Core Competencies &amp; Skills</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base text-muted-foreground list-disc pl-5">
              {coreCompetencies.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <h2 className="text-label mb-6">Education</h2>
            <h3 className="text-lg font-semibold">
              Bachelor of Technology, Computer Science Engineering
            </h3>
            <p className="text-base text-muted-foreground">
              Jawaharlal Nehru Technological University Kakinada (JNTUK), India
            </p>
          </div>

          {/* Client Engagement Regions */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-label mb-6">Client Engagement Regions</h2>
            <ul className="space-y-2 text-base text-muted-foreground list-disc pl-5">
              {engagementRegions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            <h2 className="text-label mb-6">Contact</h2>
            <ul className="space-y-2 text-base">
              <li>
                Email:{" "}
                <a
                  href="mailto:sd.naveedhussain@gmail.com"
                  className="hover-highlight"
                >
                  sd.naveedhussain@gmail.com
                </a>
              </li>
              <li>
                Alternate email:{" "}
                <a
                  href="mailto:naveed.domain@yahoo.in"
                  className="hover-highlight"
                >
                  naveed.domain@yahoo.in
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+919502686709" className="hover-highlight">
                  +91 95026 86709
                </a>
              </li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
