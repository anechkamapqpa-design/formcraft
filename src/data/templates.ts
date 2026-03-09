export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const templates: Template[] = [
  { id: 1, title: "Ecom Drop", description: "A high-conversion landing page tailored for e-commerce dropshipping.", imageUrl: "/images/ecom-drop.png", category: "E-commerce" },
  { id: 2, title: "Experimental Neon", description: "A bold, futuristic landing page for creative agencies and artists.", imageUrl: "/images/experimental-neon.png", category: "Creative" },
  { id: 3, title: "Luxury Art", description: "An elegant, minimalist design perfect for luxury brands and galleries.", imageUrl: "/images/luxury-art.png", category: "Luxury" },
  { id: 4, title: "Personal Brand", description: "A clean, professional page to showcase your portfolio and services.", imageUrl: "/images/personal-brand.png", category: "Personal" },
  { id: 5, title: "Product Interactive", description: "An engaging, interactive landing page to showcase digital products.", imageUrl: "/images/product-interactive.png", category: "Product" },
  { id: 6, title: "SaaS Clean", description: "A modern, converting landing page designed specifically for SaaS products.", imageUrl: "/images/saas-clean.png", category: "SaaS" },
  { id: 7, title: "Fitness Tracker", description: "A high-energy landing page for fitness apps and gym brands.", imageUrl: "/images/fitness-tracker.png", category: "Lifestyle" },
  { id: 8, title: "Restaurant Menu", description: "A warm, appetizing landing page for restaurants and food brands.", imageUrl: "/images/restaurant-menu.png", category: "Food & Drink" },
  { id: 9, title: "Music Festival", description: "A vibrant, immersive page for music events and festivals.", imageUrl: "/images/music-festival.png", category: "Entertainment" },
  { id: 10, title: "Real Estate", description: "A professional landing page for real estate agencies and listings.", imageUrl: "/images/real-estate.png", category: "Business" },
  { id: 11, title: "Photo Portfolio", description: "A minimal, image-focused portfolio for photographers.", imageUrl: "/images/photo-portfolio.png", category: "Creative" },
  { id: 12, title: "Medical Clinic", description: "A clean, trustworthy landing page for healthcare providers.", imageUrl: "/images/medical-clinic.png", category: "Business" },
  { id: 13, title: "Travel Agency", description: "An inspiring landing page for travel companies and adventures.", imageUrl: "/images/travel-agency.png", category: "Lifestyle" },
  { id: 14, title: "Gaming Hub", description: "A dark, immersive landing page for gaming platforms.", imageUrl: "/images/gaming-hub.png", category: "Entertainment" },
  { id: 15, title: "Education Platform", description: "A friendly, engaging page for online learning platforms.", imageUrl: "/images/education-platform.png", category: "Business" },
  { id: 16, title: "Wedding Planner", description: "A romantic, elegant page for wedding planning services.", imageUrl: "/images/wedding-planner.png", category: "Lifestyle" },
  { id: 17, title: "Architecture Studio", description: "A geometric, modern landing page for architecture firms.", imageUrl: "/images/architecture-studio.png", category: "Creative" },
  { id: 18, title: "Crypto Dashboard", description: "A sleek fintech landing page for crypto and trading platforms.", imageUrl: "/images/crypto-dashboard.png", category: "Fintech" },
  { id: 19, title: "Fashion Magazine", description: "An editorial, high-contrast page for fashion publications.", imageUrl: "/images/fashion-magazine.png", category: "Luxury" },
  { id: 20, title: "Podcast Landing", description: "A modern landing page for podcasts and audio content creators.", imageUrl: "/images/podcast-landing.png", category: "Media" },
  { id: 21, title: "Yoga Studio", description: "A serene, calming page for yoga and wellness studios.", imageUrl: "/images/yoga-studio.png", category: "Lifestyle" },
  { id: 22, title: "Pet Care", description: "A playful, warm landing page for pet services and products.", imageUrl: "/images/pet-care.png", category: "Lifestyle" },
  { id: 23, title: "Law Firm", description: "A professional, authoritative page for legal services.", imageUrl: "/images/law-firm.png", category: "Business" },
  { id: 24, title: "Coffee Shop", description: "A cozy, artisan landing page for cafes and coffee brands.", imageUrl: "/images/coffee-shop.png", category: "Food & Drink" },
];

export const demoSlugMap: Record<string, string> = {
  "Luxury Art": "/demo/luxury-art",
  "SaaS Clean": "/demo/saas-clean",
  "Ecom Drop": "/demo/ecom-drop",
  "Personal Brand": "/demo/personal-brand",
  "Experimental Neon": "/demo/experimental-neon",
  "Product Interactive": "/demo/product-interactive",
  "Fitness Tracker": "/demo/fitness-tracker",
  "Restaurant Menu": "/demo/restaurant-menu",
  "Music Festival": "/demo/music-festival",
  "Real Estate": "/demo/real-estate",
  "Photo Portfolio": "/demo/photo-portfolio",
  "Medical Clinic": "/demo/medical-clinic",
  "Travel Agency": "/demo/travel-agency",
  "Gaming Hub": "/demo/gaming-hub",
  "Education Platform": "/demo/education-platform",
  "Wedding Planner": "/demo/wedding-planner",
  "Architecture Studio": "/demo/architecture-studio",
  "Crypto Dashboard": "/demo/crypto-dashboard",
  "Fashion Magazine": "/demo/fashion-magazine",
  "Podcast Landing": "/demo/podcast-landing",
  "Yoga Studio": "/demo/yoga-studio",
  "Pet Care": "/demo/pet-care",
  "Law Firm": "/demo/law-firm",
  "Coffee Shop": "/demo/coffee-shop",
};

export function getTemplate(id: number): Template | undefined {
  return templates.find(t => t.id === id);
}
