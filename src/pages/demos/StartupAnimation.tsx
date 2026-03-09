import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

const words = ["Kinetic", "Dynamic", "Motion", "Flow", "Pulse", "Wave"];

export default function StartupAnimation() {
  const { t } = useLang();
  const d = (t.demos as any).startupAnimation;
  return (
    <div className="min-h-screen bg-[hsl(260,30%,6%)] text-[hsl(0,0%,100%)] overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/10" className="text-xs text-[hsl(260,20%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="border border-[hsl(260,60%,60%)] text-[hsl(260,60%,70%)] px-5 py-2 rounded-full text-xs hover:bg-[hsl(260,60%,60%)]/10 transition">{d.earlyAccess}</button>
      </nav>

      {/* Hero with animated particles and text */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(260,80%,50%)]/12 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(180,80%,50%)]/8 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, hsl(260,80%,70%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[hsl(260,80%,70%)]" style={{ top: `${20 + i * 10}%`, left: `${10 + i * 12}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.3 }} />
        ))}

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative z-10 text-center">
          <motion.h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] uppercase tracking-tighter" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <span style={{ background: "linear-gradient(135deg, hsl(260,80%,65%), hsl(180,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span>
            <br /><span className="text-[hsl(0,0%,100%)]/80">{d.heroTitle2}</span>
          </motion.h1>
          <p className="text-lg text-[hsl(260,15%,50%)] mt-6 max-w-lg mx-auto">{d.heroSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(260,80%,55%,0.3)" }} className="mt-10 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(180,80%,50%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider">{d.cta}</motion.button>
        </motion.div>

        {/* Scrolling words */}
        <div className="absolute bottom-20 left-0 right-0 overflow-hidden opacity-10">
          <motion.div className="flex gap-16 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
            {[...words, ...words].map((w, i) => <span key={i} className="text-6xl font-black uppercase">{w}</span>)}
          </motion.div>
        </div>
      </section>

      {/* Interactive feature cards */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ y: -8, borderColor: `hsl(${260 + i * 40}, 60%, 50%)` }} className="bg-[hsl(260,20%,10%)] border border-[hsl(260,15%,18%)] rounded-xl p-6 relative overflow-hidden transition-colors group">
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle, hsla(${260 + i * 40},70%,50%,0.2), transparent)` }} />
              <motion.div className="w-10 h-10 rounded-lg mb-4" style={{ background: `linear-gradient(135deg, hsl(${260 + i * 40}, 70%, 55%), hsl(${200 + i * 30}, 60%, 50%))` }} whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }} />
              <h3 className="font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-[hsl(260,10%,50%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack visual */}
      <section className="max-w-3xl mx-auto px-8 pb-20 text-center">
        <h2 className="text-xl font-bold mb-8 text-[hsl(260,15%,60%)]">Built with Modern Stack</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {["React", "Three.js", "GSAP", "WebGL", "TypeScript"].map((tech, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-4 py-2 border border-[hsl(260,15%,18%)] rounded-full text-xs text-[hsl(260,15%,50%)] hover:border-[hsl(260,60%,50%)] hover:text-[hsl(260,60%,70%)] transition-colors cursor-pointer">{tech}</motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(260,10%,12%)] py-8 text-center text-xs text-[hsl(260,10%,35%)]">{d.footer}</footer>
    </div>
  );
}
