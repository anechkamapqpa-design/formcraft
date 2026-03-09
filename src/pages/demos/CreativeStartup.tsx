import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CreativeStartup() {
  const { t } = useLang();
  const d = (t.demos as any).creativeStartup;
  return (
    <div className="min-h-screen bg-[hsl(30,15%,96%)] text-[hsl(0,0%,12%)] overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/24" className="text-sm text-[hsl(0,0%,50%)]">{d.back}</Link>
        <span className="text-xl font-black">{d.brand}</span>
        <button className="bg-[hsl(5,75%,55%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-full text-sm font-bold">{d.explore}</button>
      </nav>
      <section className="max-w-7xl mx-auto px-8 py-20 relative">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[hsl(5,75%,55%)]/15 blur-[80px]" />
        <div className="absolute bottom-10 left-20 w-40 h-40 rounded-[30%] rotate-45 bg-[hsl(40,80%,70%)]/20 blur-[60px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
              {d.heroTitle1}<br />
              <span className="text-[hsl(5,75%,55%)]">{d.heroTitle2}</span><br />
              {d.heroTitle3}
            </h1>
            <p className="text-lg text-[hsl(0,0%,45%)] max-w-lg mb-8">{d.heroSubtitle}</p>
            <button className="bg-[hsl(5,75%,55%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-bold">{d.cta}</button>
          </div>
          <div className="space-y-4">
            {d.highlights.map((h: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }} className="p-4 rounded-2xl border border-[hsl(0,0%,88%)] bg-[hsl(0,0%,100%)]" style={{ borderRadius: `${20 + i * 8}px ${10 + i * 5}px` }}>
                <h3 className="font-bold text-sm">{h.title}</h3>
                <p className="text-xs text-[hsl(0,0%,50%)] mt-1">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {d.values.map((v: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(0,0%,88%)] p-5 text-center" style={{ borderRadius: `${15 + i * 10}px` }}>
              <span className="text-2xl mb-2 block">{v.icon}</span>
              <h3 className="font-bold text-sm">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,88%)] py-8 text-center text-xs text-[hsl(0,0%,50%)]">{d.footer}</footer>
    </div>
  );
}
