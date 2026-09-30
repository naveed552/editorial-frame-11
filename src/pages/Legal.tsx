import { Layout } from "@/components/Layout";
import { clientBrands } from "@/data/clients";

const Legal = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          <div>
            <h1 className="text-display mb-4">Legal notice</h1>
            <p className="text-muted-foreground text-sm">Last updated 2026</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-label">Trademarks</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Brand and company names referenced on this site — including{" "}
              {clientBrands.join(", ")} — are mentioned solely to describe
              prior professional delivery engagements. Each name, logo and
              wordmark is a trademark of its respective owner. Their
              appearance here does not imply sponsorship, affiliation or
              endorsement by those companies, and no ownership of any
              third-party mark is claimed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-label">Confidentiality</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Project descriptions on this site are written to reflect the
              nature and scope of work performed without disclosing
              confidential employer information, proprietary systems, or
              details covered by client or employment confidentiality
              obligations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-label">Content &amp; accuracy</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              This site is a personal portfolio maintained by Syed Naveed
              Hussain. While every effort is made to keep information
              accurate and current, it is provided as-is and may be updated
              at any time without notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-label">Contact</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              For questions about this notice or the content of this site,
              reach out via the{" "}
              <a href="mailto:sd.naveedhussain@gmail.com" className="hover-highlight underline underline-offset-2">
                contact details listed here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
