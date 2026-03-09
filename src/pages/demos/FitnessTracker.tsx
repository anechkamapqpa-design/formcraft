import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function FitnessTracker() {
  const { t } = useLang();
  const d = (t.demos as any).fitnessTracker;

  const stats = [
    { label: d.calories, val: "2,847", pct: 78 },
    { label: d.steps, val: "12,459", pct: 62 },
    { label: d.heartRate, val: "72 bpm", pct: 45 },
    { label: d.sleep, val: "7.5h", pct: 85 },
  ];

  return (
    <div className="min-h-screen bg-[hsl(0,0%,3%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(0,0%,3%)]/90 backdrop-blur-md">
        <Link to="/template/7" className="text-xs text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-black tracking-wider uppercase text-[hsl(145,80%,50%)]">PULSEFIT</h1>
        <span className="text-xs text-[hsl(0,0%,50%)]">{d.signUp}</span>
      </nav>
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(145,80%,45%)]/8 blur-[150px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(145,80%,50%)] mb-6 block">{d.badge}</span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">{d.heroTitle1}<br />{d.heroTitle2}<br /><span className="text-[hsl(145,80%,50%)]">{d.heroTitle3}</span></h2>
            <p className="text-lg text-[hsl(0,0%,50%)] mb-8 max-w-md">{d.heroSubtitle}</p>
            <button className="bg-[hsl(145,80%,45%)] text-[hsl(0,0%,0%)] px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[hsl(145,80%,40%)] transition">{d.startTrial}</button>
          </motion.div>
          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-xl p-5">
                <div className="flex justify-between mb-3"><span className="text-sm text-[hsl(0,0%,50%)]">{s.label}</span><span className="font-bold text-[hsl(145,80%,50%)]">{s.val}</span></div>
                <div className="w-full h-2 bg-[hsl(0,0%,15%)] rounded-full"><div className="h-full bg-[hsl(145,80%,45%)] rounded-full transition-all" style={{ width: `${s.pct}%` }} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,12%)] py-8 text-center text-xs text-[hsl(0,0%,35%)]">{d.footer}</footer>
    </div>
  );
}
