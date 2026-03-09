import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function MusicFestival() {
  const { t } = useLang();
  const d = (t.demos as any).musicFestival;

  return (
    <div className="min-h-screen bg-[hsl(270,50%,5%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(270,50%,5%)]/80 backdrop-blur-md">
        <Link to="/template/9" className="text-xs text-[hsl(270,30%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-black tracking-[0.15em] uppercase" style={{ background: "linear-gradient(to right, hsl(300,100%,65%), hsl(40,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SONIC BLOOM</h1>
        <span className="text-xs text-[hsl(300,80%,70%)]">{d.tickets}</span>
      </nav>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(300,100%,50%)]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(40,100%,50%)]/10 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 text-center px-8">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(300,80%,70%)] mb-6">{d.date}</p>
          <h2 className="text-6xl md:text-[9rem] font-black leading-[0.8] uppercase tracking-tight mb-6">
            <span style={{ background: "linear-gradient(to right, hsl(300,100%,65%), hsl(40,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span><br />
            <span>{d.heroTitle2}</span>
          </h2>
          <p className="text-xl text-[hsl(270,30%,60%)] mb-8">{d.heroSubtitle}</p>
          <button className="bg-gradient-to-r from-[hsl(300,100%,60%)] to-[hsl(40,100%,55%)] text-[hsl(0,0%,0%)] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 transition">{d.getTickets}</button>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">{d.lineup}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {d.artists.map((a: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(270,30%,10%)] border border-[hsl(270,20%,18%)] rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(300,100%,60%)] to-[hsl(40,100%,55%)] flex items-center justify-center text-[hsl(0,0%,0%)] font-bold text-sm">{a.name[0]}</div>
              <div><h4 className="font-bold text-sm">{a.name}</h4><p className="text-xs text-[hsl(270,20%,50%)]">{a.genre}</p></div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(270,20%,12%)] py-8 text-center text-xs text-[hsl(270,20%,35%)]">{d.footer}</footer>
    </div>
  );
}
