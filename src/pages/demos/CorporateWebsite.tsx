import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CorporateWebsite() {
  const { t } = useLang();
  const d = (t.demos as any).corporateWebsite;
  return (
    <div className="min-h-screen bg-[hsl(210,15%,97%)] text-[hsl(210,30%,15%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(210,15%,90%)]">
        <Link to="/template/9" className="text-sm text-[hsl(210,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(210,60%,35%)]">{d.brand}</span>
        <button className="bg-[hsl(210,60%,35%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded text-sm font-semibold">{d.contact}</button>
      </nav>
      <section className="max-w-5xl mx-auto text-center px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(210,60%,45%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(210,15%,50%)] max-w-2xl mx-auto mb-8">{d.heroSubtitle}</p>
          <button className="bg-[hsl(210,60%,35%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded font-semibold">{d.learnMore}</button>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {d.stats.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(210,15%,90%)] rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-[hsl(210,60%,40%)]">{s.val}</p>
              <p className="text-xs text-[hsl(210,15%,55%)] mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(210,15%,90%)] rounded-lg p-6">
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-[hsl(210,15%,55%)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(210,15%,90%)] py-8 text-center text-xs text-[hsl(210,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
