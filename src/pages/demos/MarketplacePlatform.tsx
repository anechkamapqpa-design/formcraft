import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function MarketplacePlatform() {
  const { t } = useLang();
  const d = (t.demos as any).marketplacePlatform;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto border-b border-[hsl(220,15%,92%)]">
        <Link to="/template/11" className="text-sm text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(175,60%,40%)]">{d.brand}</span>
        <button className="bg-[hsl(175,60%,40%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-semibold">{d.sell}</button>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(175,60%,40%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-8">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="max-w-6xl mx-auto px-8 pb-16">
        <h2 className="text-xl font-bold mb-6">{d.popularTitle}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {d.items.map((item: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(220,20%,98%)] border border-[hsl(220,15%,92%)] rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-[hsl(175,30%,90%)] to-[hsl(175,20%,85%)] group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-[hsl(220,15%,55%)]">{item.seller}</p>
                <p className="text-sm font-bold text-[hsl(175,60%,40%)] mt-1">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-xl font-bold mb-6">{d.sellersTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {d.sellers.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 p-4 border border-[hsl(220,15%,92%)] rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[hsl(175,40%,85%)]" />
              <div><p className="font-semibold text-sm">{s.name}</p><p className="text-xs text-[hsl(220,15%,55%)]">{s.items}</p></div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,15%,92%)] py-8 text-center text-xs text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
