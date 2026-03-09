export type TemplateStyle = "minimal" | "brutalist" | "luxury" | "futuristic";
export type TemplateNiche = "SaaS" | "portfolio" | "marketplace" | "event";
export type TemplateMood = "clean" | "bold" | "cinematic" | "playful";

export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  style: TemplateStyle;
  niche: TemplateNiche;
  mood: TemplateMood;
}

export const templates: Template[] = [
  { id: 1, title: "Minimal Portfolio", description: "Clean minimalist template for designers and photographers.", imageUrl: "/images/minimal-portfolio.png", category: "Creative", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 2, title: "Dark Studio", description: "Dark cinematic template for creative studios.", imageUrl: "/images/dark-studio.png", category: "Creative", style: "brutalist", niche: "portfolio", mood: "cinematic" },
  { id: 3, title: "SaaS Startup", description: "Modern tech landing page for IT startups.", imageUrl: "/images/saas-startup.png", category: "SaaS", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 4, title: "Creative Agency", description: "Dynamic template for marketing agencies.", imageUrl: "/images/creative-agency.png", category: "Business", style: "brutalist", niche: "portfolio", mood: "bold" },
  { id: 5, title: "Personal Brand", description: "Personal website for experts, consultants and coaches.", imageUrl: "/images/personal-brand.png", category: "Personal", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 6, title: "Product Showcase", description: "Template for showcasing a single product.", imageUrl: "/images/product-showcase.png", category: "Product", style: "futuristic", niche: "portfolio", mood: "bold" },
  { id: 7, title: "Startup Pitch", description: "Landing page for startups preparing for investors.", imageUrl: "/images/startup-pitch.png", category: "SaaS", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 8, title: "Digital Art Gallery", description: "Visual template for artists and galleries.", imageUrl: "/images/digital-art-gallery.png", category: "Creative", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 9, title: "Corporate Website", description: "Strict corporate template for companies.", imageUrl: "/images/corporate-website.png", category: "Business", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 10, title: "Startup Animation", description: "Tech landing with animated elements.", imageUrl: "/images/startup-animation.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "bold" },
  { id: 11, title: "Marketplace Platform", description: "Template for marketplaces and online platforms.", imageUrl: "/images/marketplace-platform.png", category: "E-commerce", style: "minimal", niche: "marketplace", mood: "clean" },
  { id: 12, title: "Mobile App Landing", description: "Landing page for mobile applications.", imageUrl: "/images/mobile-app-landing.png", category: "Product", style: "futuristic", niche: "SaaS", mood: "playful" },
  { id: 13, title: "Startup Community", description: "Template for communities and clubs.", imageUrl: "/images/startup-community.png", category: "Business", style: "minimal", niche: "event", mood: "playful" },
  { id: 14, title: "Luxury Brand", description: "Elegant premium template for luxury brands.", imageUrl: "/images/luxury-brand.png", category: "Luxury", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 15, title: "Event Landing", description: "Template for conferences, festivals and events.", imageUrl: "/images/event-landing.png", category: "Entertainment", style: "brutalist", niche: "event", mood: "bold" },
  { id: 16, title: "Education Platform", description: "Template for online schools and educational projects.", imageUrl: "/images/education-platform.png", category: "Business", style: "minimal", niche: "SaaS", mood: "playful" },
  { id: 17, title: "Creative Blog", description: "Stylish editorial template for blogs and media.", imageUrl: "/images/creative-blog.png", category: "Media", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 18, title: "Freelancer Landing", description: "Practical template for freelancers.", imageUrl: "/images/freelancer-landing.png", category: "Personal", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 19, title: "Startup Dashboard", description: "Landing for SaaS platforms with dashboard demo.", imageUrl: "/images/startup-dashboard.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "clean" },
  { id: 20, title: "Architecture Studio", description: "Template for architects and interior studios.", imageUrl: "/images/architecture-studio.png", category: "Creative", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 21, title: "Fitness Brand", description: "Dynamic template for fitness brands and trainers.", imageUrl: "/images/fitness-brand.png", category: "Lifestyle", style: "brutalist", niche: "portfolio", mood: "bold" },
  { id: 22, title: "Restaurant Website", description: "Appetizing template for restaurants and cafes.", imageUrl: "/images/restaurant-website.png", category: "Food & Drink", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 23, title: "AI Product Landing", description: "Futuristic template for AI products.", imageUrl: "/images/ai-product-landing.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "cinematic" },
  { id: 24, title: "Creative Startup", description: "Experimental template with non-standard grid and organic shapes.", imageUrl: "/images/creative-startup.png", category: "Creative", style: "brutalist", niche: "SaaS", mood: "playful" },
];

export const demoSlugMap: Record<string, string> = {
  "Minimal Portfolio": "/demo/minimal-portfolio",
  "Dark Studio": "/demo/dark-studio",
  "SaaS Startup": "/demo/saas-startup",
  "Creative Agency": "/demo/creative-agency",
  "Personal Brand": "/demo/personal-brand",
  "Product Showcase": "/demo/product-showcase",
  "Startup Pitch": "/demo/startup-pitch",
  "Digital Art Gallery": "/demo/digital-art-gallery",
  "Corporate Website": "/demo/corporate-website",
  "Startup Animation": "/demo/startup-animation",
  "Marketplace Platform": "/demo/marketplace-platform",
  "Mobile App Landing": "/demo/mobile-app-landing",
  "Startup Community": "/demo/startup-community",
  "Luxury Brand": "/demo/luxury-brand",
  "Event Landing": "/demo/event-landing",
  "Education Platform": "/demo/education-platform",
  "Creative Blog": "/demo/creative-blog",
  "Freelancer Landing": "/demo/freelancer-landing",
  "Startup Dashboard": "/demo/startup-dashboard",
  "Architecture Studio": "/demo/architecture-studio",
  "Fitness Brand": "/demo/fitness-brand",
  "Restaurant Website": "/demo/restaurant-website",
  "AI Product Landing": "/demo/ai-product-landing",
  "Creative Startup": "/demo/creative-startup",
};

export function getTemplate(id: number): Template | undefined {
  return templates.find(t => t.id === id);
}
