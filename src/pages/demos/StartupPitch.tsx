import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function StartupPitch() {
  const { t } = useLang();
  const d = (t.demos as any).startupPitch;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(220,15%,92%)]">
        <Link to="/template/7" className="text-sm text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(145,70%,40%)]">{d.brand}</span>
        <button className="bg-[hsl(145,70%,40%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-semibold">{d.invest}</button>
      </nav>
      <section className="max-w-4xl mx-auto text-center px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">{d.heroTitle}</h1>
          <p className="text-xl text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-10">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      {d.sections.map((s: any, i: number) => (
        <section key={i} className={`px-8 py-16 ${i % 2 === 0 ? "bg-[hsl(220,20%,97%)]" : ""}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(145,70%,40%)] mb-3 block">{s.label}</span>
            <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
            <p className="text-[hsl(220,15%,50%)] max-w-2xl">{s.desc}</p>
          </motion.div>
        </section>
      ))}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">{d.teamTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.team.map((m: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-[hsl(145,50%,90%)] mx-auto mb-3" />
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
