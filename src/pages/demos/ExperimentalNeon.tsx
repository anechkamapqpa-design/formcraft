import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function ExperimentalNeon() {
  const { t } = useLang();
  const d = t.demos.experimentalNeon;

  return (
    <div className="min-h-screen bg-[hsl(260,30%,5%)] text-[hsl(0,0%,100%)] overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(260,30%,5%)]/80 backdrop-blur-md">
        <Link to="/template/2" className="text-xs text-[hsl(280,30%,50%)] hover:text-[hsl(180,100%,70%)] transition">{d.back}</Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="text-[hsl(280,30%,60%)] hover:text-[hsl(180,100%,70%)] transition">{d.work}</a>
          <button className="border border-[hsl(180,100%,50%)] text-[hsl(180,100%,70%)] px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[hsl(180,100%,50%)]/10 transition">{d.connect}</button>
        </div>
      </nav>
      <section className="relative h-screen flex items-center justify-center">
        <img src="/images/demos/neon-hero.jpg" alt="Neon waves" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,30%,5%)]/60 via-transparent to-[hsl(260,30%,5%)]" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] uppercase tracking-tighter">
            <span className="block bg-gradient-to-r from-[hsl(280,100%,70%)] via-[hsl(200,100%,70%)] to-[hsl(180,100%,60%)] bg-clip-text text-transparent">{d.heroTitle1}</span>
            <span className="block text-[hsl(0,0%,100%)]/90">{d.heroTitle2}</span>
            <span className="block bg-gradient-to-r from-[hsl(180,100%,60%)] to-[hsl(320,100%,65%)] bg-clip-text text-transparent">{d.heroTitle3}</span>
          </h1>
          <div className="flex justify-center gap-4 mt-12">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-[hsl(280,100%,60%)] to-[hsl(320,100%,60%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">{d.portfolioHighlights}</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="border-2 border-[hsl(180,100%,50%)] text-[hsl(180,100%,70%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[hsl(180,100%,50%)]/10 transition">{d.connect}</motion.button>
          </div>
        </motion.div>
      </section>
      <section id="work" className="px-8 py-24 max-w-6xl mx-auto">
        <h3 className="text-center text-5xl font-black mb-16 bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(180,100%,60%)] bg-clip-text text-transparent">{d.featuredWork}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {d.works.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group" style={{ background: `linear-gradient(135deg, hsl(${260+i*30}, 80%, 15%), hsl(${200+i*20}, 70%, 10%))` }}>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs text-[hsl(180,100%,60%)] tracking-[0.2em] uppercase mb-1">{w.category}</span>
                <h4 className="text-2xl font-bold">{w.title}</h4>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(180,100%,50%)]/30 rounded-2xl transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(280,30%,15%)] py-8 text-center text-xs text-[hsl(280,20%,40%)]">{d.footer}</footer>
    </div>
  );
}
