export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const templates: Template[] = [
  { id: 7, title: "LuxeAura", description: "A premium brand website for luxury fashion, jewelry, and lifestyle brands.", imageUrl: "/images/luxeaura.png", category: "Luxury" },
  { id: 8, title: "AppMotion", description: "A mobile app landing page with interactive mockups and download CTAs.", imageUrl: "/images/appmotion.png", category: "Product" },
  { id: 9, title: "EchoPress", description: "A modern editorial magazine template for media portals and content platforms.", imageUrl: "/images/echopress.png", category: "Creative" },
  { id: 10, title: "MarketSphere", description: "A marketplace platform template for e-commerce, SaaS, and freelance services.", imageUrl: "/images/marketsphere.png", category: "E-commerce" },
  { id: 11, title: "Atelier", description: "A stylish portfolio template for design studios with an emphasis on projects and visual storytelling.", imageUrl: "/images/atelier.png", category: "Creative" },
  { id: 12, title: "NeuroFlow", description: "A futuristic template for AI startups and SaaS platforms with dark theme and glowing gradients.", imageUrl: "/images/neuroflow.png", category: "SaaS" },
  { id: 13, title: "GlassWave", description: "A modern SaaS template with glassmorphism design, frosted panels and gradient backgrounds.", imageUrl: "/images/glasswave.png", category: "SaaS" },
  { id: 14, title: "BrutalistLab", description: "A bold neo-brutalist template for tech startups, digital agencies and Web3 projects.", imageUrl: "/images/brutalistlab.png", category: "Creative" },
  { id: 15, title: "CommunityGrid", description: "A vibrant template for online communities, startup clubs, conferences and networking platforms.", imageUrl: "/images/communitygrid.png", category: "Product" },
  { id: 16, title: "MonoJournal", description: "A minimalist editorial magazine template with bold typography, editorial grids and content-first design.", imageUrl: "/images/monojournal.png", category: "Creative" },
  { id: 17, title: "Voxel3D", description: "A futuristic 3D product landing page with interactive scenes and immersive visuals.", imageUrl: "/images/voxel3d.png", category: "Product" },
  { id: 18, title: "StoryBrand", description: "A cinematic storytelling template for fashion, lifestyle and luxury brands with immersive scroll.", imageUrl: "/images/storybrand.png", category: "Luxury" },
  { id: 19, title: "Curiosa", description: "A playful retro-collage template for cafés, cultural clubs and creative community spaces.", imageUrl: "/images/curiosa.png", category: "Creative" },
  { id: 20, title: "Archive of Memories", description: "An art-house, found-footage template — polaroids, VHS overlays and voice messages. Open a stranger's memory instead of buying a tour.", imageUrl: "/images/archive.png", category: "Creative" },
  { id: 1, title: "Ecom Drop", description: "A high-conversion landing page tailored for e-commerce dropshipping.", imageUrl: "/images/ecom-drop.png", category: "E-commerce" },
  { id: 2, title: "Experimental Neon", description: "A bold, futuristic landing page for creative agencies and artists.", imageUrl: "/images/experimental-neon.png", category: "Creative" },
  { id: 3, title: "Luxury Art", description: "An elegant, minimalist design perfect for luxury brands and galleries.", imageUrl: "/images/luxury-art.png", category: "Luxury" },
  { id: 4, title: "Personal Brand", description: "A clean, professional page to showcase your portfolio and services.", imageUrl: "/images/personal-brand.png", category: "Personal" },
  { id: 5, title: "Product Interactive", description: "An engaging, interactive landing page to showcase digital products.", imageUrl: "/images/product-interactive.png", category: "Product" },
  { id: 6, title: "SaaS Clean", description: "A modern, converting landing page designed specifically for SaaS products.", imageUrl: "/images/saas-clean.png", category: "SaaS" },
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
  "EchoPress": "/demo/echo-press",
  "MarketSphere": "/demo/market-sphere",
  "Atelier": "/demo/atelier",
  "NeuroFlow": "/demo/neuro-flow",
  "GlassWave": "/demo/glass-wave",
  "BrutalistLab": "/demo/brutalist-lab",
  "CommunityGrid": "/demo/community-grid",
  "MonoJournal": "/demo/mono-journal",
  "Voxel3D": "/demo/voxel-3d",
  "StoryBrand": "/demo/story-brand",
  "Curiosa": "/demo/curiosa",
  "Archive of Memories": "/demo/archive",
};

export function getTemplate(id: number): Template | undefined {
  return templates.find(t => t.id === id);
}
