import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function WeddingPlanner() {
  const { t } = useLang();
  const d = (t.demos as any).weddingPlanner;

  return (
    <div className="min-h-screen bg-[hsl(340,30%,97%)] text-[hsl(340,20%,20%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(340,20%,90%)]">
        <Link to="/template/16" className="text-xs text-[hsl(340,15%,55%)] hover:text-[hsl(340,20%,20%)] transition">{d.back}</Link>
        <h1 className="text-xl" style={{ fontFamily: "'Georgia', serif" }}>{d.brand}</h1>
        <span className="text-xs text-[hsl(340,15%,55%)]">{d.contact}</span>
      </nav>
      <section className="text-center py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(340,50%,85%)]/30 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(340,50%,60%)] mb-6">{d.badge}</p>
          <h2 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: "'Georgia', serif", fontWeight: 400 }}>{d.heroTitle1}<br />{d.heroTitle2}</h2>
          <div className="w-20 h-px bg-[hsl(340,50%,75%)] mx-auto mb-6" />
          <p className="text-[hsl(340,15%,50%)] text-lg max-w-md mx-auto mb-10">{d.heroSubtitle}</p>
          <button className="bg-[hsl(340,50%,60%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider hover:bg-[hsl(340,50%,50%)] transition">{d.cta}</button>
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h3 className="text-2xl font-semibold text-center mb-10" style={{ fontFamily: "'Georgia', serif" }}>{d.servicesTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center p-6 border border-[hsl(340,20%,88%)] rounded-2xl bg-[hsl(0,0%,100%)]">
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-[hsl(340,15%,50%)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(340,20%,90%)] py-8 text-center text-xs text-[hsl(340,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
