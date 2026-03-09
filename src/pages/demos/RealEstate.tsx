import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function RealEstate() {
  const { t } = useLang();
  const d = (t.demos as any).realEstate;

  return (
    <div className="min-h-screen bg-[hsl(210,25%,97%)] text-[hsl(210,30%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/10" className="text-sm text-[hsl(210,15%,50%)] hover:text-[hsl(210,30%,15%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(210,80%,50%)]">HomeVista</span>
        <span className="text-sm text-[hsl(210,15%,45%)]">{d.contact}</span>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold text-[hsl(210,80%,50%)] tracking-wider uppercase mb-4 block">{d.badge}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(210,80%,50%)]">{d.heroTitle2}</span></h1>
            <p className="text-lg text-[hsl(210,15%,50%)] mb-8">{d.heroSubtitle}</p>
            <div className="flex gap-3">
              <button className="bg-[hsl(210,80%,50%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[hsl(210,80%,40%)] transition">{d.browse}</button>
              <button className="border border-[hsl(210,20%,85%)] text-[hsl(210,15%,40%)] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[hsl(210,20%,95%)] transition">{d.bookViewing}</button>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {d.listings.map((p: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(210,20%,90%)] p-4 hover:shadow-lg transition">
                <div className="w-full h-24 bg-[hsl(210,20%,90%)] rounded-lg mb-3" />
                <p className="font-bold text-[hsl(210,80%,50%)]">{p.price}</p>
                <p className="text-xs text-[hsl(210,15%,55%)]">{p.beds} · {p.sqft}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[hsl(210,20%,90%)] py-8 text-center text-sm text-[hsl(210,15%,60%)]">{d.footer}</footer>
    </div>
  );
}
