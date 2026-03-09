import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function YogaStudio() {
  const { t } = useLang();
  const d = (t.demos as any).yogaStudio;

  return (
    <div className="min-h-screen bg-[hsl(150,20%,96%)] text-[hsl(150,20%,15%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(150,15%,88%)]">
        <Link to="/template/21" className="text-xs text-[hsl(150,15%,50%)] hover:text-[hsl(150,20%,15%)] transition">{d.back}</Link>
        <h1 className="text-xl" style={{ fontFamily: "'Georgia', serif" }}>Serenity</h1>
        <span className="text-xs text-[hsl(150,15%,50%)]">{d.schedule}</span>
      </nav>
      <section className="text-center py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(150,40%,80%)]/20 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(150,40%,45%)] mb-6">{d.badge}</p>
          <h2 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: "'Georgia', serif", fontWeight: 300 }}>{d.heroTitle1}<br />{d.heroTitle2}</h2>
          <div className="w-12 h-px bg-[hsl(150,40%,55%)] mx-auto mb-6" />
          <p className="text-[hsl(150,15%,45%)] text-lg max-w-md mx-auto mb-10">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[hsl(150,40%,40%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[hsl(150,40%,35%)] transition">{d.startFree}</button>
            <button className="border border-[hsl(150,30%,70%)] text-[hsl(150,30%,35%)] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[hsl(150,20%,92%)] transition">{d.viewSchedule}</button>
          </div>
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h3 className="text-2xl text-center mb-10" style={{ fontFamily: "'Georgia', serif" }}>{d.classesTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {d.classes.map((c: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-2xl border border-[hsl(150,15%,88%)] p-6 text-center">
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-sm text-[hsl(150,15%,50%)]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(150,15%,88%)] py-8 text-center text-xs text-[hsl(150,15%,50%)]">{d.footer}</footer>
    </div>
  );
}
