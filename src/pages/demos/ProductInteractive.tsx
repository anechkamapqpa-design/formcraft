import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Cpu, TrendingUp } from "lucide-react";
const steps = [
  { icon: Layers, title: "Connect", desc: "Link your data sources in minutes" },
  { icon: Cpu, title: "Automate", desc: "AI processes and enriches your data" },
  { icon: TrendingUp, title: "Grow", desc: "Act on insights to scale faster" },
];
const stats = [
  { val: "10M+", label: "Data Points Processed" },
  { val: "150+", label: "Integrations" },
  { val: "99.9%", label: "Uptime" },
  { val: "4.9/5", label: "Rating" },
];
export default function ProductInteractive() {
  return (
    <div className="min-h-screen bg-[hsl(225,30%,8%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link to="/template/5" className="text-xs text-[hsl(225,20%,45%)] hover:text-[hsl(0,0%,100%)] transition">← Back</Link>
          <span className="text-lg font-bold"><span className="text-[hsl(0,85%,55%)]">Data</span>360</span>
        </div>
        <button className="bg-[hsl(0,85%,55%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[hsl(0,85%,45%)] transition">Get Started Free</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-bold bg-[hsl(0,85%,55%)]/15 text-[hsl(0,85%,60%)] px-4 py-1.5 rounded-full mb-5">🔥 New: AI-Powered Insights</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Get Insights.<br />Automate.<br /><span className="bg-gradient-to-r from-[hsl(0,85%,55%)] to-[hsl(30,90%,55%)] bg-clip-text text-transparent">Grow Faster.</span></h1>
            <p className="text-lg text-[hsl(225,15%,55%)] mb-8 max-w-lg">The unified analytics platform that turns raw data into actionable insights.</p>
            <div className="flex gap-3">
              <button className="bg-[hsl(0,85%,55%)] px-7 py-3.5 rounded-lg font-semibold hover:bg-[hsl(0,85%,45%)] transition flex items-center gap-2">Start Free Trial <ArrowRight className="w-4 h-4" /></button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="bg-[hsl(225,25%,12%)] rounded-2xl border border-[hsl(225,20%,18%)] p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Revenue", val: "$128.4K", color: "hsl(130,60%,50%)" },
                { label: "Users", val: "24,891", color: "hsl(200,80%,60%)" },
                { label: "Conversion", val: "4.2%", color: "hsl(40,90%,55%)" },
                { label: "Growth", val: "+32%", color: "hsl(0,85%,55%)" },
              ].map((c) => (
                <div key={c.label} className="bg-[hsl(225,25%,15%)] rounded-xl p-3">
                  <p className="text-[10px] text-[hsl(225,15%,50%)]">{c.label}</p>
                  <p className="text-lg font-bold mt-0.5" style={{ color: c.color }}>{c.val}</p>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.05 }} className="flex-1 rounded-t" style={{ background: "linear-gradient(to top, hsl(0,85%,55%), hsl(30,90%,55%))", opacity: 0.6 + (h / 100) * 0.4 }} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-y border-[hsl(225,20%,15%)] py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}><p className="text-3xl font-bold text-[hsl(0,85%,55%)]">{s.val}</p><p className="text-xs text-[hsl(225,15%,50%)] mt-1">{s.label}</p></div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-[hsl(225,25%,12%)] border border-[hsl(225,20%,18%)] rounded-2xl p-8 text-center hover:border-[hsl(0,85%,55%)]/30 transition">
              <div className="w-14 h-14 rounded-xl bg-[hsl(0,85%,55%)]/10 flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-[hsl(0,85%,55%)]" /></div>
              <span className="text-xs font-bold text-[hsl(0,85%,55%)] mb-2 block">Step {i + 1}</span>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(225,15%,50%)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(225,20%,15%)] py-8 text-center text-xs text-[hsl(225,15%,40%)]">© 2026 Data360. All rights reserved.</footer>
    </div>
  );
}
