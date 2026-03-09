import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { Search, Star, Heart, ShoppingCart } from "lucide-react";

export default function MarketplacePlatform() {
  const { t } = useLang();
  const d = (t.demos as any).marketplacePlatform;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto border-b border-[hsl(220,15%,92%)]">
        <Link to="/template/11" className="text-sm text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(175,60%,40%)]">{d.brand}</span>
        <div className="flex items-center gap-4">
          <Search className="w-4 h-4 text-[hsl(220,15%,50%)]" />
          <ShoppingCart className="w-4 h-4 text-[hsl(220,15%,50%)]" />
          <button className="bg-[hsl(175,60%,40%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-semibold">{d.sell}</button>
        </div>
      </nav>

      {/* Hero with search */}
      <section className="max-w-5xl mx-auto px-8 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(175,60%,40%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-8">{d.heroSubtitle}</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-lg mx-auto flex items-center bg-[hsl(220,20%,98%)] border border-[hsl(220,15%,90%)] rounded-xl overflow-hidden">
            <Search className="w-4 h-4 text-[hsl(220,15%,55%)] ml-4" />
            <input className="flex-1 bg-transparent px-3 py-3.5 text-sm outline-none" placeholder="Search templates, icons, fonts..." />
            <button className="bg-[hsl(175,60%,40%)] text-[hsl(0,0%,100%)] px-6 py-3.5 text-sm font-semibold m-1 rounded-lg">Search</button>
          </motion.div>
          <div className="flex justify-center gap-3 mt-4">
            {["UI Kits", "Icons", "Fonts", "Templates"].map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-[hsl(175,40%,93%)] text-[hsl(175,50%,35%)] rounded-full cursor-pointer hover:bg-[hsl(175,50%,88%)] transition">{tag}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular items with full cards */}
      <section className="max-w-6xl mx-auto px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">{d.popularTitle}</h2>
          <span className="text-sm text-[hsl(175,60%,40%)] cursor-pointer">View all →</span>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {d.items.map((item: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(220,15%,92%)] rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-square relative overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${175 + i * 15},30%,90%), hsl(${175 + i * 20},25%,85%))` }}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[hsl(0,0%,100%)]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-3.5 h-3.5 text-[hsl(0,70%,55%)]" />
                </div>
                {i === 0 && <div className="absolute top-3 left-3 bg-[hsl(175,60%,40%)] text-[hsl(0,0%,100%)] text-[10px] font-bold px-2 py-0.5 rounded">BEST SELLER</div>}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <div className="flex items-center gap-1 my-1">
                  <Star className="w-3 h-3 fill-[hsl(45,90%,50%)] text-[hsl(45,90%,50%)]" />
                  <span className="text-xs text-[hsl(220,15%,55%)]">4.{8 - i} ({120 - i * 20})</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-bold text-[hsl(175,60%,40%)]">{item.price}</p>
                  <p className="text-xs text-[hsl(220,15%,55%)]">{item.seller}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[hsl(175,40%,97%)] py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-xl font-bold mb-8 text-center">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ name: "UI Kits", count: "2,400+", emoji: "🎨" }, { name: "Icons", count: "1,800+", emoji: "✨" }, { name: "Templates", count: "950+", emoji: "📄" }, { name: "Fonts", count: "640+", emoji: "🔤" }].map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-xl p-5 text-center cursor-pointer hover:shadow-md transition-shadow border border-[hsl(175,20%,90%)]">
                <span className="text-3xl mb-2 block">{cat.emoji}</span>
                <h3 className="font-bold text-sm">{cat.name}</h3>
                <p className="text-xs text-[hsl(220,15%,55%)]">{cat.count} items</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top sellers */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-xl font-bold mb-6">{d.sellersTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {d.sellers.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 p-4 border border-[hsl(220,15%,92%)] rounded-xl hover:border-[hsl(175,50%,70%)] transition-colors">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg" style={{ background: `hsl(${175 + i * 20}, 40%, 88%)` }}>
                {["🎯", "🖌️", "⚡"][i]}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-[hsl(220,15%,55%)]">{s.items}</p>
              </div>
              <div className="flex gap-0.5">{[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-[hsl(45,90%,50%)] text-[hsl(45,90%,50%)]" />)}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,15%,92%)] py-8 text-center text-xs text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
