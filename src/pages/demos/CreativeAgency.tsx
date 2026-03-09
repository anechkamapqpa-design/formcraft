import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CreativeAgency() {
  const { t } = useLang();
  const d = (t.demos as any).creativeAgency;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,5%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(0,0%,90%)]">
        <Link to="/template/4" className="text-sm text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,5%)] transition">{d.back}</Link>
        <span className="text-xl font-black uppercase tracking-wider">{d.brand}</span>
        <button className="bg-[hsl(350,85%,50%)] text-[hsl(0,0%,100%)] px-6 py-2 rounded-full text-sm font-bold">{d.hireus}</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase mb-6">{d.heroTitle1}<br /><span className="text-[hsl(350,85%,50%)]">{d.heroTitle2}</span></h1>
          <p className="text-xl text-[hsl(0,0%,45%)] max-w-lg mb-10">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="px-8 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">{d.casesTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {d.cases.map((c: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[hsl(0,0%,94%)] rounded-xl mb-4 overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${350 + i * 20}, 70%, 90%), hsl(${10 + i * 30}, 60%, 85%))` }}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-lg">{c.title}</h3>
              <p className="text-sm text-[hsl(0,0%,50%)]">{c.client}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,90%)] py-8 text-center text-xs text-[hsl(0,0%,50%)]">{d.footer}</footer>
    </div>
  );
}
