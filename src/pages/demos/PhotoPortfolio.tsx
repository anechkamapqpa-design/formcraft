import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function PhotoPortfolio() {
  const { t } = useLang();
  const d = (t.demos as any).photoPortfolio;

  return (
    <div className="min-h-screen bg-[hsl(0,0%,2%)] text-[hsl(0,0%,95%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(0,0%,10%)]">
        <Link to="/template/11" className="text-xs text-[hsl(0,0%,40%)] hover:text-[hsl(0,0%,90%)] transition">{d.back}</Link>
        <h1 className="text-lg font-bold" style={{ fontFamily: "'Georgia', serif" }}>{d.name}</h1>
        <span className="text-xs text-[hsl(0,0%,40%)]">{d.contact}</span>
      </nav>
      <section className="flex min-h-[80vh]">
        <div className="w-1/3 flex flex-col justify-center px-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle}</h2>
            <div className="w-12 h-px bg-[hsl(0,0%,30%)] mb-4" />
            <p className="text-sm text-[hsl(0,0%,45%)] mb-8">{d.heroSubtitle}</p>
            <span className="text-xs tracking-[0.3em] uppercase text-[hsl(0,0%,50%)] border-b border-[hsl(0,0%,30%)] pb-1 cursor-pointer hover:text-[hsl(0,0%,80%)] transition">{d.viewGallery}</span>
          </motion.div>
        </div>
        <div className="w-2/3 grid grid-cols-3 gap-1 p-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="aspect-square" style={{ background: `hsl(${i * 40 + 10}, 8%, ${12 + i * 3}%)` }} />
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,10%)] py-8 text-center text-xs text-[hsl(0,0%,30%)]">{d.footer}</footer>
    </div>
  );
}
