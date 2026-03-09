import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function ArchitectureStudio() {
  const { t } = useLang();
  const d = (t.demos as any).architectureStudio;

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(0,0%,90%)]">
        <Link to="/template/17" className="text-xs text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,8%)] transition">{d.back}</Link>
        <h1 className="text-lg font-bold tracking-[0.2em] uppercase">FORMA</h1>
        <span className="text-xs text-[hsl(0,0%,50%)]">{d.contact}</span>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[10px] tracking-[0.5em] uppercase text-[hsl(0,0%,50%)] mb-6 block">{d.badge}</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.85] mb-6">{d.heroTitle1}<br />{d.heroTitle2}<br /><span className="text-[hsl(0,0%,45%)]">{d.heroTitle3}</span></h2>
            <div className="w-16 h-0.5 bg-[hsl(0,0%,0%)] mb-6" />
            <p className="text-sm text-[hsl(0,0%,50%)] max-w-xs">{d.heroSubtitle}</p>
          </motion.div>
        </div>
        <div className="bg-[hsl(0,0%,5%)] flex items-center justify-center relative min-h-[400px]">
          <div className="absolute inset-8 border border-[hsl(0,0%,20%)]" />
          <span className="text-[hsl(0,0%,30%)] text-xs tracking-[0.4em] uppercase">{d.showcase}</span>
        </div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">{d.projectsTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {d.projects.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border border-[hsl(0,0%,90%)]">
              <div className="aspect-[4/3] bg-[hsl(0,0%,92%)]" />
              <div className="p-4">
                <h4 className="font-bold text-sm">{p.title}</h4>
                <p className="text-xs text-[hsl(0,0%,50%)] mt-1">{p.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,90%)] py-8 text-center text-xs text-[hsl(0,0%,50%)]">{d.footer}</footer>
    </div>
  );
}
