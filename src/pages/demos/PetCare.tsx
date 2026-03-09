import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function PetCare() {
  const { t } = useLang();
  const d = (t.demos as any).petCare;

  return (
    <div className="min-h-screen bg-[hsl(35,40%,96%)] text-[hsl(25,30%,18%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/22" className="text-sm text-[hsl(25,15%,50%)] hover:text-[hsl(25,30%,18%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(25,70%,50%)]">🐾 PawPal</span>
        <button className="text-sm bg-[hsl(25,70%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-full">{d.bookNow}</button>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold tracking-wider uppercase text-[hsl(25,70%,50%)] mb-4 block">{d.badge}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br />{d.heroTitle2}<br /><span className="text-[hsl(25,70%,50%)]">{d.heroTitle3}</span></h1>
            <p className="text-lg text-[hsl(25,15%,45%)] mb-8">{d.heroSubtitle}</p>
            <button className="bg-[hsl(25,70%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[hsl(25,70%,40%)] transition">{d.cta}</button>
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            {d.services.map((s: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-2xl border border-[hsl(35,30%,88%)] p-5 text-center hover:shadow-lg transition">
                <span className="text-3xl mb-2 block">{s.icon}</span>
                <h3 className="text-sm font-bold">{s.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[hsl(35,25%,88%)] py-8 text-center text-xs text-[hsl(25,15%,50%)]">{d.footer}</footer>
    </div>
  );
}
