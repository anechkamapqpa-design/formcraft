import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function SaaSStartup() {
  const { t } = useLang();
  const d = (t.demos as any).saasStartup;
  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/3" className="text-sm text-[hsl(220,15%,50%)] hover:text-[hsl(220,25%,15%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(230,70%,50%)]">{d.brand}</span>
        <div className="flex gap-3">
          <span className="text-sm text-[hsl(220,15%,45%)]">{d.logIn}</span>
          <button className="text-sm bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg">{d.startFree}</button>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto text-center px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(230,70%,50%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold">{d.getStarted}</button>
            <button className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold">{d.watchDemo}</button>
          </div>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">{d.featuresTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(220,20%,92%)] rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-[hsl(220,15%,55%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">{d.pricingTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.plans.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`rounded-xl p-6 border ${i === 1 ? "bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] border-transparent" : "bg-[hsl(0,0%,100%)] border-[hsl(220,20%,92%)]"}`}>
              <h3 className="font-bold text-lg mb-1">{p.name}</h3>
              <p className="text-3xl font-extrabold mb-3">{p.price}</p>
              <p className={`text-xs ${i === 1 ? "text-[hsl(0,0%,100%)]/70" : "text-[hsl(220,15%,55%)]"}`}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,20%,92%)] py-8 text-center text-sm text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
