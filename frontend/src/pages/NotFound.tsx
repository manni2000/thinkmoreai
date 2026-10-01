import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <main className="studio-route-fallback min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <SEO
        title="404 — Page Not Found | ThinkMoreAI"
        description="The requested page could not be located. Explore ThinkMoreAI's AI products, engineering services, and portfolio."
        noindex
      />
      <div className="max-w-md mx-auto">
        <span className="studio-kicker">404 / SYSTEM STATUS</span>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-semibold text-white tracking-[-0.04em]">
          Page Not Located
        </h1>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9caea2]">
          The resource or document you requested has moved or is no longer available. Explore our production systems or return to the studio overview.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="studio-button studio-button--light">
            Back to Home <ArrowUpRight size={17} />
          </Link>
          <Link to="/services" className="studio-text-link">
            Explore Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

