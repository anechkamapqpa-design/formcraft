import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function LuxuryBrand() {
  const { t } = useLang();
  const d = (t.demos as any).luxuryBrand;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-[hsl(40,20%,85%)]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-[hsl(40,20%,15%)]/30">
        <Link to="/template/14" className="text-xs tracking-[0.3em] uppercase text-[hsl(40,20%,50%)]">{d.back}</Link>
        <h1 className="font-serif text-2xl tracking-[0.3em] uppercase text-[hsl(40,40%,80%)]">{d.brand}</h1>
        <span className="text-xs tracking-[0.2em] uppercase text-[hsl(40,20%,45%)]">{d.collection}</span>
      </nav>
      <section className="h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-center">
          <div className="w-px h-16 bg-[hsl(40,40%,40%)] mx-auto mb-8" />
          <h2 className="font-serif text-5xl md:text-8xl tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{d.heroTitle}</h2>
          <div className="w-24 h-px bg-[hsl(40,40%,40%)] mx-auto mb-6" />
          <p className="text-sm text-[hsl(40,15%,45%)] tracking-widest uppercase">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="px-8 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {d.pieces.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[hsl(0,0%,8%)] border border-[hsl(40,20%,15%)] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-[hsl(40,15%,12%)] to-[hsl(0,0%,6%)] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-lg tracking-wider">{p.title}</h3>
              <p className="text-xs text-[hsl(40,15%,40%)] tracking-wider mt-1">{p.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(40,20%,12%)]/30 py-16 text-center">
        <p className="font-serif text-xl text-[hsl(40,20%,70%)] tracking-[0.3em]">{d.brand}</p>
        <p className="text-xs text-[hsl(40,15%,35%)] tracking-[0.4em] uppercase mt-3">{d.footerText}</p>
      </footer>
    </div>
  );
}
