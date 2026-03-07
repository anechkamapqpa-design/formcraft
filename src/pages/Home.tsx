import { Link } from "react-router-dom";

const templates = [
  {
    id: "luxury-art",
    title: "Luxury Art Landing",
    description: "High-end portfolio landing page for artists and galleries",
  },
  {
    id: "saas-clean",
    title: "SaaS Clean",
    description: "Minimal product landing page for SaaS startups",
  },
  {
    id: "ecom-drop",
    title: "Ecommerce Drop",
    description: "Conversion-focused page for product launches",
  },
  {
    id: "personal-brand",
    title: "Personal Brand",
    description: "Landing page template for creators and personal brands",
  },
  {
    id: "experimental-neon",
    title: "Experimental Neon",
    description: "Creative landing page with bold visuals",
  },
  {
    id: "product-interactive",
    title: "Interactive Product",
    description: "Landing page with interactive product sections",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">

        {/* HERO */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            Build Landing Pages Faster
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Formcraft is a modern no-code platform for creating landing pages and lead capture forms.
            Launch marketing campaigns, collect leads, and publish high-converting pages in minutes.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="#templates"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium"
            >
              Explore Templates
            </Link>
          </div>
        </section>

        {/* TEMPLATES */}

        <section
          id="templates"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Landing Page Templates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Link
                key={template.id}
                to={`/template/${template.id}`}
                className="border border-border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {template.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {template.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO TEXT BLOCK */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">

            <h2 className="text-3xl font-bold text-foreground">
              No-Code Landing Page Builder for Modern Businesses
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Formcraft is a no-code landing page builder designed for startups,
              creators, and businesses that want to launch marketing pages fast.
              With modern templates and flexible layouts you can build landing
              pages, collect leads, validate product ideas, and publish campaigns
              without writing code.
            </p>

            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need a startup landing page, portfolio website,
              SaaS marketing page, or a lead generation funnel, Formcraft
              provides a simple workflow for designing, launching, and testing
              high-converting pages.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Why teams choose Formcraft
                </h3>

                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>Build landing pages without developers</li>
                  <li>Create lead capture forms in minutes</li>
                  <li>Launch marketing campaigns faster</li>
                  <li>Use templates designed for conversion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Perfect for
                </h3>

                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>Startup landing pages</li>
                  <li>SaaS marketing pages</li>
                  <li>Product launches</li>
                  <li>Personal brand websites</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
