import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Box, Layers, Globe, Code, Cpu } from "lucide-react";
import { useLang } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

export default function BrutalistLab() {
  const { t } = useLang();
  const d = (t.demos as any).brutalistLab;

  return (
    <div className="min-h-screen bg-[hsl(60,5%,96%)] text-[hsl(0,0%,8%)] font-sans selection:bg-[hsl(50,100%,50%)] selection:text-[hsl(0,0%,0%)]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[hsl(60,5%,96%)] border-b-4 border-[hsl(0,0%,0%)]">
        <Link to="/" className="text-sm font-bold uppercase tracking-wider hover:text-[hsl(0,80%,50%)] transition-colors">{d.back}</Link>
        <span className="text-xl md:text-2xl font-black uppercase tracking-tight">Brutalist<span className="text-[hsl(0,80%,50%)]">Lab</span></span>
        <span className="hidden md:inline text-xs font-bold uppercase tracking-widest border-2 border-[hsl(0,0%,0%)] px-3 py-1.5 hover:bg-[hsl(0,0%,0%)] hover:text-[hsl(60,5%,96%)] transition-colors cursor-pointer">{d.getStarted}</span>
      </nav>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-[hsl(50,100%,50%)] -rotate-12 -z-0 opacity-60" />
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-[hsl(0,80%,50%)] rotate-6 -z-0 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-4">
            <span className="inline-block text-xs font-black uppercase tracking-[0.3em] bg-[hsl(50,100%,50%)] text-[hsl(0,0%,0%)] px-4 py-2 border-2 border-[hsl(0,0%,0%)]">{d.badge}</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] uppercase tracking-tighter mb-8">
            {d.heroTitle1}<br />
            <span className="text-[hsl(0,80%,50%)]">{d.heroTitle2}</span><br />
            {d.heroTitle3}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg md:text-xl max-w-2xl mb-8 font-medium leading-relaxed">
            {d.heroSubtitle}
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 bg-[hsl(0,0%,0%)] text-[hsl(60,5%,96%)] px-8 py-4 text-sm font-black uppercase tracking-wider border-4 border-[hsl(0,0%,0%)] hover:bg-[hsl(50,100%,50%)] hover:text-[hsl(0,0%,0%)] transition-all duration-300">
              {d.startBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-sm font-black uppercase tracking-wider border-4 border-[hsl(0,0%,0%)] hover:bg-[hsl(0,0%,0%)] hover:text-[hsl(60,5%,96%)] transition-all duration-300">
              {d.docsBtn}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[hsl(0,0%,0%)] text-[hsl(60,5%,96%)]">
        <div className="max-w-7xl mx-auto">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-black uppercase tracking-[0.4em] text-[hsl(50,100%,50%)] mb-6 block">{d.manifestoLabel}</motion.span>
          <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight max-w-5xl whitespace-pre-line">
            {d.manifestoTitle}
          </motion.h2>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[hsl(0,80%,50%)] mb-4 block">{d.featuresLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12">{d.featuresTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-[hsl(0,0%,0%)]">
            {d.features.map((f: { icon: string; title: string; desc: string }, i: number) => {
              const icons = [Zap, Box, Layers, Globe, Code, Cpu];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-8 border-b-4 border-r-4 border-[hsl(0,0%,0%)] last:border-r-0 hover:bg-[hsl(50,100%,50%)] transition-colors duration-300 group cursor-pointer"
                >
                  <Icon className="w-8 h-8 mb-4 text-[hsl(0,80%,50%)] group-hover:text-[hsl(0,0%,0%)] transition-colors" />
                  <h3 className="text-xl font-black uppercase mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Blocks */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[hsl(0,80%,50%)] text-[hsl(60,5%,96%)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[hsl(0,0%,0%)] mb-4 block">{d.interactiveLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12">{d.interactiveTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.blocks.map((b: { title: string; desc: string; stat: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                className="bg-[hsl(0,0%,0%)] p-8 md:p-10 border-4 border-[hsl(60,5%,96%)] cursor-pointer"
              >
                <span className="text-5xl md:text-6xl font-black text-[hsl(50,100%,50%)]">{b.stat}</span>
                <h3 className="text-2xl font-black uppercase mt-4 mb-2">{b.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[hsl(0,80%,50%)] mb-4 block">{d.roadmapLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12">{d.roadmapTitle}</h2>
          <div className="space-y-0 border-l-4 border-[hsl(0,0%,0%)] ml-4">
            {d.roadmap.map((r: { phase: string; title: string; desc: string; status: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-8 pb-10 relative"
              >
                <div className={`absolute left-[-14px] top-0 w-6 h-6 border-4 border-[hsl(0,0%,0%)] ${r.status === "done" ? "bg-[hsl(50,100%,50%)]" : r.status === "active" ? "bg-[hsl(0,80%,50%)]" : "bg-[hsl(60,5%,96%)]"}`} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[hsl(0,80%,50%)] block mb-1">{r.phase}</span>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-1">{r.title}</h3>
                <p className="text-sm opacity-60">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[hsl(0,0%,0%)] text-[hsl(60,5%,96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[hsl(50,100%,50%)] rotate-12 opacity-30" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[hsl(0,80%,50%)] -rotate-6 opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-6 whitespace-pre-line">
            {d.ctaTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg opacity-60 mb-8 max-w-xl mx-auto">
            {d.ctaSubtitle}
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group inline-flex items-center gap-3 bg-[hsl(50,100%,50%)] text-[hsl(0,0%,0%)] px-10 py-5 text-sm font-black uppercase tracking-wider border-4 border-[hsl(50,100%,50%)] hover:bg-transparent hover:text-[hsl(50,100%,50%)] transition-all duration-300">
            {d.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 border-t-4 border-[hsl(0,0%,0%)] bg-[hsl(60,5%,96%)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider">{d.footer}</span>
          <span className="text-xs font-bold uppercase tracking-wider opacity-50">Neo-Brutalism</span>
        </div>
      </footer>
    </div>
  );
}
