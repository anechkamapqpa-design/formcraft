import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { useRef } from "react";

const projects = [
  { id: 1, title: "Lumina", category: "Brand Identity", img: "/images/demos/atelier-project1.jpg", size: "large" },
  { id: 2, title: "Aura App", category: "Digital Design", img: "/images/demos/atelier-project2.jpg", size: "small" },
  { id: 3, title: "Noir", category: "Packaging", img: "/images/demos/atelier-project3.jpg", size: "small" },
  { id: 4, title: "Volume 04", category: "Editorial", img: "/images/demos/atelier-project4.jpg", size: "large" },
];

export default function Atelier() {
  const { t } = useLang();
  const d = t.demos.atelier;

  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] text-[hsl(0,0%,10%)] selection:bg-[hsl(0,0%,10%)] selection:text-[hsl(0,0%,98%)] font-sans" ref={containerRef}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
        <Link to="/template/11" className="text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity">{d.back}</Link>
        <span className="text-xl font-bold tracking-tighter">Atelier</span>
        <span className="text-xs tracking-[0.2em] uppercase font-medium hidden sm:block">Creative Studio</span>
      </nav>

      {/* Hero */}
      <section className="h-screen relative overflow-hidden bg-black">
        <img src="/images/demos/atelier-hero.jpg" alt="Studio workspace" className="absolute inset-0 w-full h-full object-cover scale-105 opacity-80" />
      </section>

      {/* Manifesto */}
      <section className="py-32 px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-12 font-semibold text-[hsl(0,0%,40%)]">{d.manifestoLabel}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            {d.manifestoTitle}
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(0,0%,30%)] max-w-2xl leading-relaxed">
            {d.manifestoSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-8">
        <p className="text-xs tracking-[0.3em] uppercase mb-16 font-semibold px-4 max-w-7xl mx-auto">{d.projectsLabel}</p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'}`}
              style={{ marginTop: project.size === 'small' && i % 2 !== 0 ? '10vh' : '0' }}
            >
              <div className="overflow-hidden bg-[hsl(0,0%,90%)] mb-6 aspect-[4/5] md:aspect-auto md:h-[600px]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-sm text-[hsl(0,0%,50%)]">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-8 bg-[hsl(0,0%,10%)] text-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
              <p className="text-xs tracking-[0.3em] uppercase mb-8 font-semibold text-[hsl(0,0%,50%)]">{d.servicesLabel}</p>
              <h2 className="text-4xl font-bold tracking-tight">{d.servicesTitle}</h2>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {d.services.map((service, i) => (
                <div key={i} className="border-t border-[hsl(0,0%,20%)] pt-8">
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-[hsl(0,0%,60%)] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Image */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-12 font-semibold text-[hsl(0,0%,40%)] text-center">{d.teamLabel}</p>
          <div className="aspect-video w-full overflow-hidden bg-[hsl(0,0%,90%)]">
            <img src="/images/demos/atelier-team.jpg" alt="Our Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-[hsl(0,0%,90%)] flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">{d.contactTitle}</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[hsl(0,0%,10%)] text-[hsl(0,0%,98%)] px-10 py-5 rounded-full text-lg font-medium mb-32"
        >
          {d.contactBtn}
        </motion.button>
        <p className="text-sm text-[hsl(0,0%,50%)]">{d.footer}</p>
      </footer>
    </div>
  );
}
