import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { Building2, BarChart3, Shield, ArrowRight } from "lucide-react";

const serviceIcons = [Building2, BarChart3, Shield];

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

      {/* Hero with abstract shape */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(210,60%,45%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(210,15%,50%)] max-w-lg mb-8">{d.heroSubtitle}</p>
          <button className="bg-[hsl(210,60%,35%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded font-semibold flex items-center gap-2 hover:bg-[hsl(210,60%,30%)] transition">{d.learnMore} <ArrowRight className="w-4 h-4" /></button>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="relative">
          <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-[hsl(210,50%,85%)] to-[hsl(210,40%,75%)] rounded-3xl relative overflow-hidden">
            <div className="absolute top-8 left-8 right-8 bottom-8 bg-[hsl(0,0%,100%)]/80 rounded-2xl backdrop-blur p-6">
              <div className="flex gap-1.5 mb-4"><div className="w-2 h-2 rounded-full bg-[hsl(0,70%,60%)]" /><div className="w-2 h-2 rounded-full bg-[hsl(45,80%,55%)]" /><div className="w-2 h-2 rounded-full bg-[hsl(120,50%,55%)]" /></div>
              <div className="space-y-2">
                <div className="h-3 bg-[hsl(210,30%,90%)] rounded w-3/4" />
                <div className="h-3 bg-[hsl(210,30%,90%)] rounded w-1/2" />
                <div className="h-8 bg-[hsl(210,60%,35%)] rounded-lg w-2/3 mt-4" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[65,85,45].map((h,i) => <div key={i} className="bg-[hsl(210,30%,90%)] rounded-lg h-16 relative overflow-hidden"><div className="absolute bottom-0 left-0 right-0 bg-[hsl(210,60%,35%)]" style={{height:`${h}%`, opacity: 0.6}} /></div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {d.stats.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(210,15%,90%)] rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold text-[hsl(210,60%,40%)]">{s.val}</p>
              <p className="text-xs text-[hsl(210,15%,55%)] mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[hsl(210,30%,15%)] text-[hsl(0,0%,100%)] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-center mb-12">{d.servicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.services.map((s: any, i: number) => {
              const Icon = serviceIcons[i] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(210,25%,20%)] border border-[hsl(210,20%,25%)] rounded-lg p-6 hover:border-[hsl(210,60%,45%)] transition-colors">
                  <Icon className="w-8 h-8 text-[hsl(210,60%,60%)] mb-4" />
                  <h3 className="font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-xs text-[hsl(210,15%,60%)]">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-8 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-[hsl(210,50%,92%)] to-[hsl(210,40%,88%)] rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-[hsl(210,15%,50%)] mb-6">Let's discuss how we can help you achieve your goals.</p>
          <button className="bg-[hsl(210,60%,35%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded font-semibold">{d.contact}</button>
        </motion.div>
      </section>
      <footer className="border-t border-[hsl(210,15%,90%)] py-8 text-center text-xs text-[hsl(210,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
