import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function FitnessBrand() {
  const { t } = useLang();
  const d = (t.demos as any).fitnessBrand;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,3%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/21" className="text-xs text-[hsl(80,80%,50%)]">{d.back}</Link>
        <span className="text-xl font-black uppercase tracking-wider">{d.brand}</span>
        <button className="bg-[hsl(80,80%,50%)] text-[hsl(0,0%,0%)] px-5 py-2 text-sm font-black uppercase">{d.joinNow}</button>
      </nav>
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(80,80%,50%)]/10 blur-[120px]" />
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(80,80%,50%)] mb-6 block">{d.badge}</span>
            <h1 className="text-6xl md:text-7xl font-black leading-[0.9] uppercase mb-6">{d.heroTitle1}<br />{d.heroTitle2}<br /><span className="text-[hsl(80,80%,50%)]">{d.heroTitle3}</span></h1>
            <p className="text-lg text-[hsl(0,0%,50%)] mb-8 max-w-md">{d.heroSubtitle}</p>
            <button className="bg-[hsl(80,80%,50%)] text-[hsl(0,0%,0%)] px-8 py-4 font-black uppercase tracking-wider text-sm">{d.startNow}</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-4">
            {d.stats.map((s: any, i: number) => (
              <div key={i} className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-[hsl(0,0%,50%)]">{s.label}</span>
                <span className="text-lg font-black text-[hsl(80,80%,50%)]">{s.val}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black uppercase text-center mb-10">{d.programsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.programs.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2 text-[hsl(80,80%,50%)]">{p.title}</h3>
              <p className="text-xs text-[hsl(0,0%,50%)]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,10%)] py-8 text-center text-xs text-[hsl(0,0%,40%)]">{d.footer}</footer>
    </div>
  );
}
