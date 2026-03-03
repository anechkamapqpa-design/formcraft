import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight } from "lucide-react";
const products = [
  { name: "Shadow Hoodie V2", price: "€149", tag: "SOLD OUT" },
  { name: "Phantom Cargo Pants", price: "€119", tag: "NEW" },
  { name: "Stealth Bomber Jacket", price: "€229", tag: "LIMITED" },
  { name: "Obsidian Tee", price: "€69", tag: "NEW" },
];
export default function EcomDrop() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(0,0%,4%)]/90 backdrop-blur-md">
        <Link to="/template/1" className="text-xs text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,100%)] transition">← Back</Link>
        <h1 className="text-2xl font-black tracking-[0.15em] uppercase">NOISE</h1>
        <ShoppingBag className="w-5 h-5 text-[hsl(0,0%,60%)]" />
      </nav>
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="/images/demos/ecom-hero.jpg" alt="Streetwear" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%)] via-[hsl(0,0%,4%)]/70 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase bg-[hsl(0,80%,50%)] px-4 py-1.5 mb-6">Drop 004</span>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-4">Limited<br />Drop<br />Now Live</h2>
            <p className="text-4xl font-black text-[hsl(0,0%,70%)] mb-8">€149</p>
            <div className="flex gap-3">
              <button className="bg-[hsl(0,0%,100%)] text-[hsl(0,0%,0%)] px-6 py-3 text-sm font-bold uppercase tracking-wider">Select Size</button>
              <button className="bg-[hsl(0,80%,50%)] px-6 py-3 text-sm font-bold uppercase tracking-wider">Buy Now</button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-20">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-black uppercase tracking-wider">Latest Drops</h3>
          <a href="#" className="flex items-center gap-1 text-sm text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,100%)] transition">View All <ChevronRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[hsl(0,0%,10%)] rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 flex items-center justify-center text-[hsl(0,0%,20%)] text-6xl font-black">N</div>
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider bg-[hsl(0,0%,15%)] px-2 py-1 rounded">{p.tag}</span>
              </div>
              <h4 className="text-sm font-semibold">{p.name}</h4>
              <p className="text-sm text-[hsl(0,0%,50%)]">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,12%)] py-8 text-center text-xs text-[hsl(0,0%,35%)]">© 2026 NOISE. All rights reserved.</footer>
    </div>
  );
}
