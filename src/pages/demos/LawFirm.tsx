import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function LawFirm() {
  const { t } = useLang();
  const d = (t.demos as any).lawFirm;

  return (
    <div className="min-h-screen bg-[hsl(215,35%,10%)] text-[hsl(40,20%,90%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(215,20%,15%)]">
        <Link to="/template/23" className="text-xs text-[hsl(215,15%,45%)] hover:text-[hsl(40,20%,90%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>Sterling & Associates</h1>
        <span className="text-xs text-[hsl(40,50%,55%)]">{d.contact}</span>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-0.5 bg-[hsl(40,50%,50%)] mx-auto mb-8" />
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle1}<br />{d.heroTitle2}<br /><span className="text-[hsl(40,50%,55%)]">{d.heroTitle3}</span></h2>
          <p className="text-[hsl(215,15%,55%)] text-lg max-w-lg mx-auto mb-10">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[hsl(40,50%,50%)] text-[hsl(215,35%,10%)] px-8 py-3.5 font-semibold text-sm hover:bg-[hsl(40,50%,45%)] transition">{d.consultation}</button>
            <button className="border border-[hsl(40,30%,30%)] text-[hsl(40,30%,65%)] px-8 py-3.5 font-semibold text-sm hover:bg-[hsl(215,25%,13%)] transition">{d.practiceAreas}</button>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto">
          {d.areas.map((a: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="border border-[hsl(215,20%,18%)] rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[hsl(40,50%,55%)]">{a.cases}</p>
              <p className="text-xs text-[hsl(215,15%,50%)] mt-1">{a.area}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(215,20%,15%)] py-8 text-center text-xs text-[hsl(215,15%,40%)]">{d.footer}</footer>
    </div>
  );
}
