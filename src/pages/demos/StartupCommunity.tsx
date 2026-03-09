import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function StartupCommunity() {
  const { t } = useLang();
  const d = (t.demos as any).startupCommunity;
  return (
    <div className="min-h-screen bg-[hsl(45,30%,97%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/13" className="text-sm text-[hsl(220,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(40,80%,45%)]">{d.brand}</span>
        <button className="bg-[hsl(40,80%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg text-sm font-bold">{d.join}</button>
      </nav>
      <section className="max-w-4xl mx-auto text-center px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block bg-[hsl(40,70%,90%)] text-[hsl(40,80%,35%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(40,80%,45%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-8">{d.heroSubtitle}</p>
          <button className="bg-[hsl(40,80%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold">{d.join}</button>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-16">
        <h2 className="text-xl font-bold mb-6">{d.eventsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {d.events.map((e: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(220,15%,92%)] rounded-xl p-5">
              <p className="text-xs font-bold text-[hsl(40,80%,45%)] mb-2">{e.date}</p>
              <h3 className="font-bold text-sm mb-1">{e.title}</h3>
              <p className="text-xs text-[hsl(220,15%,55%)]">{e.type}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-xl font-bold mb-6">{d.partnersTitle}</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {d.partners.map((p: string, i: number) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="px-6 py-3 bg-[hsl(0,0%,100%)] border border-[hsl(220,15%,92%)] rounded-lg text-sm font-medium text-[hsl(220,15%,40%)]">{p}</motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,15%,92%)] py-8 text-center text-xs text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
