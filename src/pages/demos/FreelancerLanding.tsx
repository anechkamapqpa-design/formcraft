import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function FreelancerLanding() {
  const { t } = useLang();
  const d = (t.demos as any).freelancerLanding;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(160,20%,12%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(160,10%,90%)]">
        <Link to="/template/18" className="text-sm text-[hsl(160,10%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(160,60%,35%)]">{d.brand}</span>
        <button className="bg-[hsl(160,60%,35%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-semibold">{d.hireMe}</button>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(160,60%,35%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(160,10%,45%)] mb-8">{d.heroSubtitle}</p>
          <button className="bg-[hsl(160,60%,35%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold">{d.hireMe}</button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-3">
          {d.portfolio.map((p: any, i: number) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${160 + i * 20}, 30%, 85%), hsl(${180 + i * 15}, 20%, 80%))` }} />
          ))}
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto px-8 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border border-[hsl(160,10%,90%)] rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-[hsl(160,10%,50%)] mb-3">{s.desc}</p>
              <p className="text-sm font-bold text-[hsl(160,60%,35%)]">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">{d.pricingTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {d.pricing.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className={`rounded-xl p-5 text-center border ${i === 1 ? "bg-[hsl(160,60%,35%)] text-[hsl(0,0%,100%)] border-transparent" : "border-[hsl(160,10%,90%)]"}`}>
              <h3 className="font-bold text-sm mb-1">{p.name}</h3>
              <p className="text-2xl font-extrabold mb-2">{p.price}</p>
              <p className={`text-xs ${i === 1 ? "text-[hsl(0,0%,100%)]/70" : "text-[hsl(160,10%,50%)]"}`}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(160,10%,90%)] py-8 text-center text-xs text-[hsl(160,10%,55%)]">{d.footer}</footer>
    </div>
  );
}
