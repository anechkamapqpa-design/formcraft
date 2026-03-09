import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

function FloatingOrb({ color, size, top, left, delay }: { color: string; size: number; top: string; left: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, top, left, background: color, filter: `blur(${size / 2.5}px)` }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 8, delay, ease: "easeInOut" }}
    />
  );
}

export default function DarkStudio() {
  const { t } = useLang();
  const d = (t.demos as any).darkStudio;
  return (
    <div className="min-h-screen bg-[hsl(240,15%,5%)] text-[hsl(0,0%,95%)] overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(240,15%,5%)]/80 backdrop-blur-md border-b border-[hsl(0,0%,100%)]/5">
        <Link to="/template/2" className="text-xs text-[hsl(180,100%,50%)] hover:text-[hsl(180,100%,70%)] transition">{d.back}</Link>
        <span className="text-xl font-black tracking-wider">{d.brand}</span>
        <button className="border border-[hsl(300,100%,60%)] text-[hsl(300,100%,70%)] px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[hsl(300,100%,60%)]/10 transition">{d.connect}</button>
      </nav>

      {/* Hero with animated orbs */}
      <section className="h-screen flex items-center justify-center relative">
        <FloatingOrb color="hsla(300,100%,50%,0.08)" size={600} top="15%" left="25%" delay={0} />
        <FloatingOrb color="hsla(180,100%,50%,0.06)" size={450} top="50%" left="60%" delay={2} />
        <FloatingOrb color="hsla(260,100%,60%,0.05)" size={350} top="70%" left="10%" delay={4} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <motion.div className="w-20 h-20 mx-auto mb-10 rounded-full" style={{ background: "conic-gradient(from 0deg, hsl(300,100%,60%), hsl(180,100%,50%), hsl(300,100%,60%))" }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
            <div className="w-full h-full rounded-full bg-[hsl(240,15%,5%)] scale-[0.85]" />
          </motion.div>
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] uppercase tracking-tighter">
            <span className="block" style={{ background: "linear-gradient(to right, hsl(300,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span>
            <span className="block text-[hsl(0,0%,100%)]/90">{d.heroTitle2}</span>
          </h1>
          <p className="text-lg text-[hsl(240,15%,50%)] mt-6 max-w-md mx-auto">{d.heroSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(300,100%,60%,0.3)" }} className="mt-10 bg-gradient-to-r from-[hsl(300,100%,60%)] to-[hsl(180,100%,50%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider text-[hsl(0,0%,0%)]">{d.showreel}</motion.button>
        </motion.div>
      </section>

      {/* Portfolio with hover glow */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black text-center mb-14" style={{ background: "linear-gradient(to right, hsl(300,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.portfolioTitle}</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {d.works.map((w: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer" style={{ background: `linear-gradient(135deg, hsl(${260 + i * 30}, 60%, 12%), hsl(${200 + i * 20}, 50%, 8%))` }}>
              {/* Decorative shapes */}
              <div className="absolute top-6 right-6 w-24 h-24 border border-[hsl(180,100%,50%)]/10 rounded-full group-hover:scale-150 group-hover:border-[hsl(180,100%,50%)]/20 transition-all duration-700" />
              <div className="absolute top-10 right-10 w-12 h-12 border border-[hsl(300,100%,60%)]/15 rounded-full group-hover:scale-200 transition-all duration-1000" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs text-[hsl(180,100%,60%)] tracking-[0.2em] uppercase mb-1">{w.category}</span>
                <h3 className="text-2xl font-bold">{w.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(300,100%,60%)]/30 rounded-2xl transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(300,100%,60%)] to-[hsl(180,100%,50%)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services with icon gradients */}
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-[hsl(240,15%,8%)] border border-[hsl(240,10%,15%)] rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle, hsla(${280 + i * 40},80%,50%,0.15), transparent)` }} />
              <div className="w-12 h-12 rounded-xl mb-4 mx-auto flex items-center justify-center" style={{ background: `linear-gradient(135deg, hsl(${280 + i * 40},70%,25%), hsl(${320 + i * 30},60%,20%))` }}>
                <div className="w-5 h-5 rounded-sm" style={{ background: `linear-gradient(135deg, hsl(${280 + i * 40},90%,60%), hsl(${320 + i * 30},80%,55%))` }} />
              </div>
              <h3 className="font-bold text-sm mb-2 text-[hsl(180,100%,60%)]">{s.title}</h3>
              <p className="text-xs text-[hsl(240,10%,50%)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-[hsl(240,10%,12%)] py-5 overflow-hidden">
        <motion.div className="flex gap-12 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
          {["3D Art", "Motion Design", "Branding", "UI/UX", "Generative Art", "Interactive", "3D Art", "Motion Design", "Branding", "UI/UX", "Generative Art", "Interactive"].map((t, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-wider text-[hsl(240,10%,25%)]">{t}</span>
          ))}
        </motion.div>
      </div>

      <footer className="border-t border-[hsl(240,10%,12%)] py-8 text-center text-xs text-[hsl(240,10%,35%)]">{d.footer}</footer>
    </div>
  );
}
