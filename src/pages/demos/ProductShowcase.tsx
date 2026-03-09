import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { Star, Check } from "lucide-react";

export default function ProductShowcase() {
  const { t } = useLang();
  const d = (t.demos as any).productShowcase;
  return (
    <div className="min-h-screen bg-[hsl(225,30%,8%)] text-[hsl(0,0%,100%)] overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/6" className="text-xs text-[hsl(225,15%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] px-5 py-2 rounded-lg text-sm font-bold">{d.buyNow}</button>
      </nav>

      {/* Hero with 3D-like product */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[hsl(270,80%,50%)]/8 rounded-full blur-[200px]" />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-[hsl(270,80%,65%)] mb-4 block">{d.badge}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span style={{ background: "linear-gradient(to right, hsl(270,80%,60%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(225,15%,55%)] mb-8">{d.heroSubtitle}</p>
          <div className="flex gap-4 items-center">
            <button className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] px-8 py-3.5 rounded-lg font-bold text-sm shadow-lg shadow-[hsl(270,80%,50%)]/25">{d.buyNow}</button>
            <span className="text-[hsl(225,15%,50%)] text-sm">$349.99</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative z-10">
          <div className="bg-[hsl(225,25%,12%)] rounded-3xl border border-[hsl(225,20%,18%)] p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,55%)]/5 to-transparent" />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative">
              <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-[hsl(270,80%,55%)]/30 to-[hsl(30,90%,55%)]/20 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[hsl(270,60%,40%)] to-[hsl(30,70%,40%)] flex items-center justify-center shadow-2xl">
                  <span className="text-5xl">🎧</span>
                </div>
              </div>
            </motion.div>
            {/* Floating specs */}
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-6 right-6 bg-[hsl(225,20%,15%)] border border-[hsl(225,15%,22%)] rounded-lg px-3 py-1.5">
              <p className="text-[10px] text-[hsl(270,80%,65%)]">Active Noise Cancel</p>
            </motion.div>
            <motion.div animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="absolute bottom-6 left-6 bg-[hsl(225,20%,15%)] border border-[hsl(225,15%,22%)] rounded-lg px-3 py-1.5">
              <p className="text-[10px] text-[hsl(30,90%,60%)]">40h Battery</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Color options */}
      <section className="max-w-2xl mx-auto px-8 pb-12 flex justify-center gap-3">
        {["hsl(0,0%,15%)", "hsl(0,0%,85%)", "hsl(30,50%,50%)", "hsl(200,50%,40%)"].map((c, i) => (
          <motion.div key={i} whileHover={{ scale: 1.2 }} className={`w-8 h-8 rounded-full cursor-pointer ${i === 0 ? "ring-2 ring-[hsl(270,80%,55%)] ring-offset-2 ring-offset-[hsl(225,30%,8%)]" : ""}`} style={{ background: c }} />
        ))}
      </section>

      {/* Specs */}
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">{d.specsTitle}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {d.specs.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4, borderColor: "hsl(270,80%,55%)" }} className="bg-[hsl(225,25%,12%)] border border-[hsl(225,20%,18%)] rounded-xl p-5 text-center transition-colors">
              <p className="text-2xl font-bold text-[hsl(270,80%,65%)]">{s.val}</p>
              <p className="text-xs text-[hsl(225,15%,50%)] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's in the box */}
      <section className="max-w-3xl mx-auto px-8 pb-16">
        <h2 className="text-xl font-bold text-center mb-8">What's in the Box</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Headphones", "USB-C Cable", "Carry Case", "Audio Jack"].map((item, i) => (
            <div key={i} className="bg-[hsl(225,25%,12%)] border border-[hsl(225,20%,18%)] rounded-xl p-4 text-center">
              <Check className="w-4 h-4 text-[hsl(270,80%,65%)] mx-auto mb-2" />
              <p className="text-xs text-[hsl(225,15%,55%)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">{d.reviewsTitle}</h2>
        {d.reviews.map((r: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-[hsl(225,15%,15%)] py-6">
            <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-[hsl(30,90%,55%)] text-[hsl(30,90%,55%)]" />)}</div>
            <p className="text-[hsl(225,10%,60%)] italic mb-2">"{r.text}"</p>
            <p className="text-xs font-medium text-[hsl(225,15%,70%)]">{r.name}</p>
          </motion.div>
        ))}
      </section>
      <footer className="border-t border-[hsl(225,15%,12%)] py-8 text-center text-xs text-[hsl(225,10%,40%)]">{d.footer}</footer>
    </div>
  );
}
