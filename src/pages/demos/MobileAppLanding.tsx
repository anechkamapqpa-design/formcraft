import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function MobileAppLanding() {
  const { t } = useLang();
  const d = (t.demos as any).mobileAppLanding;
  return (
    <div className="min-h-screen bg-[hsl(250,30%,98%)] text-[hsl(250,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/12" className="text-sm text-[hsl(250,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(260,70%,55%)]">{d.brand}</span>
        <button className="bg-[hsl(260,70%,55%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-full text-sm font-semibold">{d.download}</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="inline-block bg-[hsl(260,60%,92%)] text-[hsl(260,70%,50%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(260,70%,55%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(250,15%,50%)] mb-8">{d.heroSubtitle}</p>
          <div className="flex gap-3">
            <button className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">🍎 App Store</button>
            <button className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">▶ Google Play</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex justify-center">
          <div className="w-56 h-[450px] bg-[hsl(0,0%,8%)] rounded-[2.5rem] border-4 border-[hsl(250,15%,20%)] p-3 relative">
            <div className="w-full h-full bg-gradient-to-b from-[hsl(260,60%,55%)] to-[hsl(300,50%,50%)] rounded-[2rem] flex items-center justify-center">
              <span className="text-[hsl(0,0%,100%)] text-lg font-bold">{d.brand}</span>
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-[hsl(0,0%,8%)] rounded-full" />
          </div>
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(250,15%,92%)] rounded-xl p-6 text-center">
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h3 className="font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-[hsl(250,15%,55%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(250,15%,92%)] py-8 text-center text-xs text-[hsl(250,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
