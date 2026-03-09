import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function LuxeAuraBrand() {
  const { t } = useLang();
  const d = (t.demos as any).luxeAuraBrand;
  return (
    <div className="min-h-screen bg-[hsl(240,10%,7%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-[hsl(240,5%,15%)]/50">
        <Link to="/template/25" className="text-xs text-[hsl(240,5%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold tracking-[0.15em]">{d.brand}</h1>
        <button className="text-xs border border-[hsl(240,5%,25%)] text-[hsl(0,0%,70%)] px-5 py-2 rounded hover:bg-[hsl(240,5%,15%)] transition">{d.explore}</button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,15%,10%)] via-[hsl(240,10%,7%)] to-[hsl(240,10%,7%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(270,60%,40%)]/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(200,60%,40%)]/6 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10 text-center max-w-4xl px-8">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(270,40%,65%)] mb-6">{d.badge}</p>
          <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8">{d.heroTitle}</h2>
          <p className="text-lg text-[hsl(240,5%,50%)] max-w-2xl mx-auto mb-10">{d.heroSubtitle}</p>
          <button className="bg-[hsl(0,0%,100%)] text-[hsl(240,10%,7%)] px-8 py-3.5 rounded font-semibold hover:bg-[hsl(0,0%,90%)] transition">{d.cta}</button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{d.featuresTitle}</h2>
        <p className="text-[hsl(240,5%,45%)] text-center mb-16 max-w-xl mx-auto">{d.featuresSubtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}
              className="bg-[hsl(240,8%,11%)] border border-[hsl(240,5%,16%)] rounded-2xl overflow-hidden group hover:border-[hsl(270,40%,40%)]/40 transition-colors">
              <img src={f.image} alt={f.title} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-[hsl(240,5%,50%)]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[hsl(240,8%,11%)] border border-[hsl(240,5%,16%)] rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">{d.aboutTitle}</h2>
          <p className="text-[hsl(240,5%,50%)] text-lg leading-relaxed">{d.aboutText}</p>
        </motion.div>
      </section>

      <footer className="border-t border-[hsl(240,5%,12%)] py-10 text-center text-xs text-[hsl(240,5%,35%)]">{d.footer}</footer>
    </div>
  );
}
