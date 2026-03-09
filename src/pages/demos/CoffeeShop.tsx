import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CoffeeShop() {
  const { t } = useLang();
  const d = (t.demos as any).coffeeShop;

  return (
    <div className="min-h-screen bg-[hsl(25,35%,10%)] text-[hsl(35,30%,90%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(25,20%,16%)]">
        <Link to="/template/24" className="text-xs text-[hsl(30,15%,45%)] hover:text-[hsl(35,30%,90%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>Brew & Beyond</h1>
        <span className="text-xs text-[hsl(30,15%,45%)]">{d.visit}</span>
      </nav>
      <section className="text-center py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,35%,12%)] to-[hsl(20,30%,6%)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(30,50%,55%)] mb-4">{d.badge}</p>
          <h2 className="text-5xl md:text-8xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle1}<br />{d.heroTitle2}</h2>
          <div className="w-24 h-px bg-[hsl(30,50%,40%)] mx-auto mb-4" />
          <p className="text-[hsl(30,20%,50%)] text-lg mb-10 max-w-lg mx-auto">{d.heroSubtitle}</p>
        </motion.div>
        <div className="relative z-10 flex justify-center gap-8 max-w-3xl mx-auto">
          {d.drinks.map((drink: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-36 h-36 rounded-full bg-[hsl(25,25%,15%)] border border-[hsl(30,30%,22%)] mx-auto mb-4 flex items-center justify-center text-[hsl(30,50%,45%)] text-3xl">☕</div>
              <h3 className="text-sm font-semibold mb-1">{drink.name}</h3>
              <p className="text-[hsl(30,50%,55%)] text-xs">{drink.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(25,20%,14%)] py-8 text-center text-xs text-[hsl(25,15%,38%)]">{d.footer}</footer>
    </div>
  );
}
