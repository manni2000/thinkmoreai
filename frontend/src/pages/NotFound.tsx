import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Explore ThinkMoreAI's AI services, portfolio and more."
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-accent underline underline-offset-4 hover:text-white">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
