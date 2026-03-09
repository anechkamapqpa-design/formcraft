import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function RestaurantMenu() {
  const { t } = useLang();
  const d = (t.demos as any).restaurantMenu;

  return (
    <div className="min-h-screen bg-[hsl(30,30%,8%)] text-[hsl(40,30%,90%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(35,30%,18%)]">
        <Link to="/template/8" className="text-xs text-[hsl(35,20%,50%)] hover:text-[hsl(40,30%,90%)] transition">{d.back}</Link>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>La Maison</h1>
        <span className="text-xs text-[hsl(35,20%,50%)]">{d.reserve}</span>
      </nav>
      <section className="text-center py-20 px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(35,60%,55%)] mb-4">{d.badge}</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle}</h2>
          <div className="w-32 h-px bg-[hsl(35,60%,40%)] mx-auto mb-4" />
          <p className="text-[hsl(40,20%,55%)] text-lg mb-10 max-w-lg mx-auto">{d.heroSubtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {d.dishes.map((dish: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-48 h-48 rounded-full bg-[hsl(30,20%,15%)] border border-[hsl(35,40%,25%)] mx-auto mb-4 flex items-center justify-center text-[hsl(35,60%,45%)] text-4xl">✦</div>
              <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
              <p className="text-[hsl(35,60%,55%)] text-sm">{dish.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(35,20%,15%)] py-8 text-center text-xs text-[hsl(35,15%,40%)]">{d.footer}</footer>
    </div>
  );
}
