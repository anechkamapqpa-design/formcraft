import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function PodcastLanding() {
  const { t } = useLang();
  const d = (t.demos as any).podcastLanding;

  return (
    <div className="min-h-screen bg-[hsl(20,30%,6%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(20,30%,6%)]/90 backdrop-blur-md">
        <Link to="/template/20" className="text-xs text-[hsl(20,15%,45%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold text-[hsl(15,80%,55%)]">🎙 {d.brand}</h1>
        <span className="text-xs text-[hsl(20,15%,45%)]">{d.subscribe}</span>
      </nav>
      <section className="max-w-5xl mx-auto px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[hsl(15,80%,55%)] mb-6 block">{d.badge}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(15,80%,55%)]">{d.heroTitle2}</span></h2>
            <p className="text-lg text-[hsl(20,15%,50%)] mb-8 max-w-md">{d.heroSubtitle}</p>
            <div className="flex gap-3">
              <button className="bg-[hsl(15,80%,50%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(15,80%,40%)] transition">{d.listenNow}</button>
              <button className="border border-[hsl(20,20%,25%)] text-[hsl(20,20%,60%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(20,20%,12%)] transition">{d.subscribeCta}</button>
            </div>
          </motion.div>
          <div className="space-y-3">
            {d.episodes.map((e: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(20,20%,10%)] border border-[hsl(20,15%,18%)] rounded-xl p-4 flex items-center gap-4 hover:border-[hsl(15,80%,50%)]/30 transition">
                <div className="w-12 h-12 rounded-lg bg-[hsl(15,80%,50%)]/15 flex items-center justify-center text-[hsl(15,80%,55%)] text-lg shrink-0">▶</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-[hsl(15,80%,55%)]">{e.ep}</p>
                  <h3 className="text-sm font-semibold truncate">{e.title}</h3>
                </div>
                <span className="text-xs text-[hsl(20,15%,45%)] shrink-0">{e.dur}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[hsl(20,15%,12%)] py-8 text-center text-xs text-[hsl(20,15%,35%)]">{d.footer}</footer>
    </div>
  );
}
