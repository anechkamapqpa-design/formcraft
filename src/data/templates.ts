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
  { id: 7, title: "LuxeAura", description: "A premium brand website for luxury fashion, jewelry, and lifestyle brands.", imageUrl: "/images/luxeaura.png", category: "Luxury" },
  { id: 8, title: "AppMotion", description: "A mobile app landing page with interactive mockups and download CTAs.", imageUrl: "/images/appmotion.png", category: "Product" },
  { id: 9, title: "EchoPress", description: "A modern editorial magazine template for media portals and content platforms.", imageUrl: "/images/echopress.png", category: "Creative" },
];

export const demoSlugMap: Record<string, string> = {
  "Luxury Art": "/demo/luxury-art",
  "SaaS Clean": "/demo/saas-clean",
  "Ecom Drop": "/demo/ecom-drop",
  "Personal Brand": "/demo/personal-brand",
  "Experimental Neon": "/demo/experimental-neon",
  "Product Interactive": "/demo/product-interactive",
  "LuxeAura": "/demo/luxe-aura",
  "AppMotion": "/demo/app-motion",
};

export function getTemplate(id: number): Template | undefined {
  return templates.find(t => t.id === id);
}
