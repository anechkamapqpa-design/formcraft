import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function StartupAnimation() {
  const { t } = useLang();
  const d = (t.demos as any).startupAnimation;
  return (
    <div className="min-h-screen bg-[hsl(260,30%,6%)] text-[hsl(0,0%,100%)] overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/10" className="text-xs text-[hsl(260,20%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="border border-[hsl(260,60%,60%)] text-[hsl(260,60%,70%)] px-5 py-2 rounded-full text-xs">{d.earlyAccess}</button>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(260,80%,50%)]/12 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(180,80%,50%)]/8 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative z-10 text-center">
          <motion.h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] uppercase tracking-tighter" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <span style={{ background: "linear-gradient(135deg, hsl(260,80%,65%), hsl(180,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span>
            <br /><span className="text-[hsl(0,0%,100%)]/80">{d.heroTitle2}</span>
          </motion.h1>
          <p className="text-lg text-[hsl(260,15%,50%)] mt-6 max-w-lg mx-auto">{d.heroSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-10 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(180,80%,50%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider">{d.cta}</motion.button>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ y: -5 }} className="bg-[hsl(260,20%,10%)] border border-[hsl(260,15%,18%)] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg mb-3" style={{ background: `linear-gradient(135deg, hsl(${260 + i * 40}, 70%, 55%), hsl(${200 + i * 30}, 60%, 50%))` }} />
              <h3 className="font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-[hsl(260,10%,50%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(260,10%,12%)] py-8 text-center text-xs text-[hsl(260,10%,35%)]">{d.footer}</footer>
    </div>
  );
}
