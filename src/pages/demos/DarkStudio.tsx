import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function DarkStudio() {
  const { t } = useLang();
  const d = (t.demos as any).darkStudio;
  return (
    <div className="min-h-screen bg-[hsl(240,15%,5%)] text-[hsl(0,0%,95%)] overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(240,15%,5%)]/80 backdrop-blur-md">
        <Link to="/template/2" className="text-xs text-[hsl(180,100%,50%)] hover:text-[hsl(180,100%,70%)] transition">{d.back}</Link>
        <span className="text-xl font-black tracking-wider">{d.brand}</span>
        <button className="border border-[hsl(300,100%,60%)] text-[hsl(300,100%,70%)] px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em]">{d.connect}</button>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[hsl(300,100%,50%)]/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(180,100%,50%)]/8 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] uppercase tracking-tighter">
            <span className="block" style={{ background: "linear-gradient(to right, hsl(300,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span>
            <span className="block text-[hsl(0,0%,100%)]/90">{d.heroTitle2}</span>
          </h1>
          <p className="text-lg text-[hsl(240,15%,50%)] mt-6 max-w-md mx-auto">{d.heroSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-10 bg-gradient-to-r from-[hsl(300,100%,60%)] to-[hsl(180,100%,50%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider text-[hsl(0,0%,0%)]">{d.showreel}</motion.button>
        </motion.div>
      </section>
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-14" style={{ background: "linear-gradient(to right, hsl(300,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.portfolioTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {d.works.map((w: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer" style={{ background: `linear-gradient(135deg, hsl(${260 + i * 30}, 60%, 12%), hsl(${200 + i * 20}, 50%, 8%))` }}>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs text-[hsl(180,100%,60%)] tracking-[0.2em] uppercase mb-1">{w.category}</span>
                <h3 className="text-2xl font-bold">{w.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(300,100%,60%)]/30 rounded-2xl transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(240,15%,8%)] border border-[hsl(240,10%,15%)] rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2 text-[hsl(180,100%,60%)]">{s.title}</h3>
              <p className="text-xs text-[hsl(240,10%,50%)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(240,10%,12%)] py-8 text-center text-xs text-[hsl(240,10%,35%)]">{d.footer}</footer>
    </div>
  );
}
