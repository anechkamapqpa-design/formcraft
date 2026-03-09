import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function RestaurantWebsite() {
  const { t } = useLang();
  const d = (t.demos as any).restaurantWebsite;
  return (
    <div className="min-h-screen bg-[hsl(30,30%,8%)] text-[hsl(40,30%,90%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(35,30%,18%)]/30">
        <Link to="/template/22" className="text-xs text-[hsl(35,20%,50%)] tracking-[0.2em] uppercase">{d.back}</Link>
        <h1 className="font-serif text-2xl tracking-wider">{d.brand}</h1>
        <button className="bg-[hsl(35,60%,45%)] text-[hsl(30,30%,8%)] px-5 py-2 rounded text-sm font-semibold">{d.reserve}</button>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,30%,10%)] via-[hsl(25,40%,12%)] to-[hsl(30,30%,8%)]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(35,60%,55%)] mb-4">{d.badge}</p>
          <h2 className="font-serif text-6xl md:text-8xl mb-4">{d.heroTitle}</h2>
          <div className="w-32 h-px bg-[hsl(35,60%,40%)] mx-auto mb-4" />
          <p className="text-[hsl(40,20%,55%)] text-lg">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12">{d.menuTitle}</h2>
        <div className="space-y-6">
          {d.dishes.map((dish: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center justify-between border-b border-[hsl(35,20%,18%)]/30 pb-4">
              <div>
                <h3 className="font-serif text-lg">{dish.name}</h3>
                <p className="text-xs text-[hsl(35,20%,45%)]">{dish.desc}</p>
              </div>
              <span className="text-[hsl(35,60%,55%)] font-semibold">{dish.price}</span>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(35,20%,15%)]/30 py-12 text-center">
        <p className="font-serif text-xl text-[hsl(40,25%,75%)]">{d.brand}</p>
        <p className="text-xs text-[hsl(35,15%,40%)] tracking-[0.2em] uppercase mt-2">{d.footerAddr}</p>
      </footer>
    </div>
  );
}
