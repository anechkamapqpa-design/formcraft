import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { TrendingUp, Target, Globe } from "lucide-react";

const sectionIcons = [Target, TrendingUp, Globe];

export default function StartupPitch() {
  const { t } = useLang();
  const d = (t.demos as any).startupPitch;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(220,15%,92%)]">
        <Link to="/template/7" className="text-sm text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(145,70%,40%)]">{d.brand}</span>
        <button className="bg-[hsl(145,70%,40%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[hsl(145,70%,35%)] transition shadow-lg shadow-[hsl(145,70%,40%)]/20">{d.invest}</button>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center px-8 py-24 relative">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(145,70%,90%)] blur-[60px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[hsl(145,60%,92%)] text-[hsl(145,70%,30%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(145,70%,40%)] animate-pulse" />
            Series A — Open
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">{d.heroTitle}</h1>
          <p className="text-xl text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-10">{d.heroSubtitle}</p>
          {/* Key metrics */}
          <div className="flex justify-center gap-8 mt-8">
            {[{ val: "$2.4M", label: "ARR" }, { val: "340%", label: "YoY Growth" }, { val: "15K+", label: "Users" }].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="text-center">
                <p className="text-2xl font-extrabold text-[hsl(145,70%,40%)]">{m.val}</p>
                <p className="text-xs text-[hsl(220,15%,55%)]">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pitch sections */}
      {d.sections.map((s: any, i: number) => {
        const Icon = sectionIcons[i] || Target;
        return (
          <section key={i} className={`px-8 py-16 ${i % 2 === 0 ? "bg-[hsl(220,20%,97%)]" : ""}`}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(145,60%,92%)] flex items-center justify-center">
                <Icon className="w-6 h-6 text-[hsl(145,70%,40%)]" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(145,70%,40%)] mb-3 block">{s.label}</span>
                <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                <p className="text-[hsl(220,15%,50%)] max-w-2xl text-lg leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[hsl(145,50%,85%)]" />
          {["Q1 2026 — Launch MVP", "Q2 2026 — 50K Users", "Q3 2026 — Series B", "Q4 2026 — Global Expansion"].map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-6 mb-6 relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${i === 0 ? "bg-[hsl(145,70%,40%)] text-[hsl(0,0%,100%)]" : "bg-[hsl(145,60%,92%)] text-[hsl(145,70%,40%)]"}`}>
                <span className="text-xs font-bold">Q{i + 1}</span>
              </div>
              <p className="text-sm font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">{d.teamTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.team.map((m: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center bg-[hsl(220,20%,97%)] rounded-2xl p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-3" style={{ background: `linear-gradient(135deg, hsl(145,50%,80%), hsl(${145 + i * 20},40%,70%))` }} />
              <h3 className="font-bold text-sm">{m.name}</h3>
              <p className="text-xs text-[hsl(220,15%,50%)]">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,15%,92%)] py-8 text-center text-xs text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
