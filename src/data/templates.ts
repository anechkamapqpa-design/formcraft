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
  { id: 1, title: "Nova Studio", description: "Minimalist template for creative studios and designers. Clean typography, large images and modern grid.", imageUrl: "/images/minimal-portfolio.png", category: "Creative", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 2, title: "DarkMatter", description: "Dark cinematic landing for digital agencies and art projects. Neon accents and smooth animations.", imageUrl: "/images/dark-studio.png", category: "Creative", style: "brutalist", niche: "portfolio", mood: "cinematic" },
  { id: 3, title: "Launchpad", description: "The perfect template for startups. Clear structure helps quickly communicate product value and convert visitors.", imageUrl: "/images/saas-startup.png", category: "SaaS", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 4, title: "Velour", description: "Elegant premium template for luxury brands and designer products. Soft palette and refined typography.", imageUrl: "/images/creative-agency.png", category: "Luxury", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 5, title: "Orbit", description: "Futuristic template for AI services and tech products. Animations, gradients and dynamic blocks.", imageUrl: "/images/personal-brand.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "bold" },
  { id: 6, title: "Craftfolio", description: "Modern portfolio template for designers, photographers and artists. Large project galleries and clean interface.", imageUrl: "/images/product-showcase.png", category: "Creative", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 7, title: "Pulse Agency", description: "Energetic landing for marketing agencies. Contrasting colors, case studies and service blocks.", imageUrl: "/images/startup-pitch.png", category: "Business", style: "brutalist", niche: "portfolio", mood: "bold" },
  { id: 8, title: "Elevate", description: "Universal business template for companies and consulting. Structured presentation builds brand trust.", imageUrl: "/images/digital-art-gallery.png", category: "Business", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 9, title: "Flow SaaS", description: "Clean tech landing for SaaS products. Interface demo, advantages and pricing — everything for product growth.", imageUrl: "/images/corporate-website.png", category: "SaaS", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 10, title: "Canvas", description: "Gallery template for artists and art projects. Fullscreen images and smooth navigation create an exhibition feel.", imageUrl: "/images/startup-animation.png", category: "Creative", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 11, title: "Momentum", description: "Landing for startups and innovative products. Dynamic structure helps explain the idea and attract investors.", imageUrl: "/images/marketplace-platform.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "bold" },
  { id: 12, title: "Atlas", description: "Corporate template for large companies. Clear page architecture and strict style create reliability.", imageUrl: "/images/mobile-app-landing.png", category: "Business", style: "minimal", niche: "SaaS", mood: "clean" },
  { id: 13, title: "Spotlight", description: "The perfect personal brand template. For experts, coaches and consultants who want to present themselves.", imageUrl: "/images/startup-community.png", category: "Personal", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 14, title: "Eventra", description: "Landing for conferences, festivals and events. Schedule, speakers, registration and ticket sales.", imageUrl: "/images/luxury-brand.png", category: "Entertainment", style: "brutalist", niche: "event", mood: "bold" },
  { id: 15, title: "AppWave", description: "Template for mobile app presentation. Interface visualization and benefits convince users to download.", imageUrl: "/images/event-landing.png", category: "Product", style: "futuristic", niche: "SaaS", mood: "playful" },
  { id: 16, title: "Marketly", description: "Modern template for marketplaces and online platforms. Catalogs, product cards and filters.", imageUrl: "/images/education-platform.png", category: "E-commerce", style: "minimal", niche: "marketplace", mood: "clean" },
  { id: 17, title: "EduSpark", description: "Template for online schools and educational projects. Courses, instructors and student reviews.", imageUrl: "/images/creative-blog.png", category: "Business", style: "minimal", niche: "SaaS", mood: "playful" },
  { id: 18, title: "Urban Arch", description: "Stylish template for architects and interior studios. Large project photos and strict geometry.", imageUrl: "/images/freelancer-landing.png", category: "Creative", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 19, title: "FitMotion", description: "Dynamic template for fitness brands and trainers. Contrasting colors and energetic typography.", imageUrl: "/images/startup-dashboard.png", category: "Lifestyle", style: "brutalist", niche: "portfolio", mood: "bold" },
  { id: 20, title: "TasteCraft", description: "Elegant template for restaurants and cafes. Appetizing photos, menu and reservation system.", imageUrl: "/images/architecture-studio.png", category: "Food & Drink", style: "luxury", niche: "portfolio", mood: "cinematic" },
  { id: 21, title: "NeoBlog", description: "Modern editorial template for blogs and media. Focus on readability and visual content presentation.", imageUrl: "/images/fitness-brand.png", category: "Media", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 22, title: "Freelance Hub", description: "Practical template for freelancers. Portfolio, service list and project order form.", imageUrl: "/images/restaurant-website.png", category: "Personal", style: "minimal", niche: "portfolio", mood: "clean" },
  { id: 23, title: "Quantum", description: "Futuristic template for AI startups and deep-tech projects. Glowing gradients and tech design.", imageUrl: "/images/ai-product-landing.png", category: "SaaS", style: "futuristic", niche: "SaaS", mood: "cinematic" },
  { id: 24, title: "Infinity Grid", description: "Experimental template for creative brands. Non-standard grid and interactive navigation.", imageUrl: "/images/creative-startup.png", category: "Creative", style: "brutalist", niche: "SaaS", mood: "playful" },
];

export const demoSlugMap: Record<string, string> = {
  "Nova Studio": "/demo/minimal-portfolio",
  "DarkMatter": "/demo/dark-studio",
  "Launchpad": "/demo/saas-startup",
  "Velour": "/demo/creative-agency",
  "Orbit": "/demo/personal-brand",
  "Craftfolio": "/demo/product-showcase",
  "Pulse Agency": "/demo/startup-pitch",
  "Elevate": "/demo/digital-art-gallery",
  "Flow SaaS": "/demo/corporate-website",
  "Canvas": "/demo/startup-animation",
  "Momentum": "/demo/marketplace-platform",
  "Atlas": "/demo/mobile-app-landing",
  "Spotlight": "/demo/startup-community",
  "Eventra": "/demo/luxury-brand",
  "AppWave": "/demo/event-landing",
  "Marketly": "/demo/education-platform",
  "EduSpark": "/demo/creative-blog",
  "Urban Arch": "/demo/freelancer-landing",
  "FitMotion": "/demo/startup-dashboard",
  "TasteCraft": "/demo/architecture-studio",
  "NeoBlog": "/demo/fitness-brand",
  "Freelance Hub": "/demo/restaurant-website",
  "Quantum": "/demo/ai-product-landing",
  "Infinity Grid": "/demo/creative-startup",
};

export function getTemplate(id: number): Template | undefined {
  return templates.find(t => t.id === id);
}
