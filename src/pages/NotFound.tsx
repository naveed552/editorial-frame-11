import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container-wide min-h-[60vh] flex flex-col items-center justify-center text-center py-24">
        <p className="text-label mb-4">Error 404</p>
        <h1 className="font-display font-bold tracking-tight text-6xl md:text-8xl mb-6">
          Page not found
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-md mb-10">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-foreground hover-highlight group text-sm font-semibold uppercase tracking-widest"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
