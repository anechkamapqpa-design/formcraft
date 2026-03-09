import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function ProductShowcase() {
  const { t } = useLang();
  const d = (t.demos as any).productShowcase;
  return (
    <div className="min-h-screen bg-[hsl(225,30%,8%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/6" className="text-xs text-[hsl(225,15%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] px-5 py-2 rounded-lg text-sm font-bold">{d.buyNow}</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-xs tracking-[0.3em] uppercase text-[hsl(270,80%,65%)] mb-4 block">{d.badge}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span style={{ background: "linear-gradient(to right, hsl(270,80%,60%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(225,15%,55%)] mb-8">{d.heroSubtitle}</p>
          <button className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] px-8 py-3.5 rounded-lg font-bold text-sm">{d.buyNow}</button>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-[hsl(225,25%,12%)] rounded-2xl border border-[hsl(225,20%,18%)] p-8 aspect-square flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[hsl(270,80%,55%)]/30 to-[hsl(30,90%,55%)]/20 flex items-center justify-center text-6xl">🎧</div>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">{d.specsTitle}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {d.specs.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(225,25%,12%)] border border-[hsl(225,20%,18%)] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[hsl(270,80%,65%)]">{s.val}</p>
              <p className="text-xs text-[hsl(225,15%,50%)] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">{d.reviewsTitle}</h2>
        {d.reviews.map((r: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-[hsl(225,15%,15%)] py-6">
            <p className="text-[hsl(225,10%,60%)] italic mb-2">"{r.text}"</p>
            <p className="text-xs font-medium">{r.name}</p>
          </motion.div>
        ))}
      </section>
      <footer className="border-t border-[hsl(225,15%,12%)] py-8 text-center text-xs text-[hsl(225,10%,40%)]">{d.footer}</footer>
    </div>
  );
}
