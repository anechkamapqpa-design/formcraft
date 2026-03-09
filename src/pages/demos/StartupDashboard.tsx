import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function StartupDashboard() {
  const { t } = useLang();
  const d = (t.demos as any).startupDashboard;
  return (
    <div className="min-h-screen bg-[hsl(220,25%,7%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/19" className="text-xs text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="bg-[hsl(200,80%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-bold">{d.startFree}</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="inline-block text-xs font-bold bg-[hsl(200,80%,50%)]/15 text-[hsl(200,80%,60%)] px-4 py-1.5 rounded-full mb-5">{d.badge}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span style={{ background: "linear-gradient(to right, hsl(200,80%,55%), hsl(170,70%,50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] mb-8">{d.heroSubtitle}</p>
          <button className="bg-[hsl(200,80%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-bold">{d.startFree}</button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[hsl(220,20%,11%)] rounded-2xl border border-[hsl(220,15%,18%)] p-6">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {d.metrics.map((m: any, i: number) => (
              <div key={i} className="bg-[hsl(220,20%,14%)] rounded-xl p-3">
                <p className="text-[10px] text-[hsl(220,15%,50%)]">{m.label}</p>
                <p className="text-lg font-bold mt-0.5" style={{ color: m.color }}>{m.val}</p>
              </div>
            ))}
          </div>
          <div className="h-32 bg-[hsl(220,20%,14%)] rounded-xl flex items-end p-3 gap-1">
            {[40, 65, 45, 80, 60, 90, 75, 55, 85, 70, 95, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `hsl(200, 80%, ${45 + i}%)` }} />
            ))}
          </div>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(220,20%,11%)] border border-[hsl(220,15%,18%)] rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2 text-[hsl(200,80%,60%)]">{f.title}</h3>
              <p className="text-xs text-[hsl(220,15%,50%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,15%,12%)] py-8 text-center text-xs text-[hsl(220,10%,40%)]">{d.footer}</footer>
    </div>
  );
}
