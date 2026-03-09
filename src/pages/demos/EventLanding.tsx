import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function EventLanding() {
  const { t } = useLang();
  const d = (t.demos as any).eventLanding;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/15" className="text-xs text-[hsl(0,0%,50%)]">{d.back}</Link>
        <span className="text-xl font-black uppercase">{d.brand}</span>
        <button className="bg-gradient-to-r from-[hsl(0,85%,55%)] to-[hsl(30,90%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-full text-sm font-bold">{d.tickets}</button>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[hsl(0,80%,50%)]/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[hsl(30,90%,50%)]/8 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(30,80%,60%)] mb-6">{d.date}</p>
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.8] uppercase">
            <span style={{ background: "linear-gradient(to right, hsl(0,85%,55%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle1}</span>
            <br /><span>{d.heroTitle2}</span>
          </h1>
          <p className="text-xl text-[hsl(0,0%,50%)] mt-6">{d.heroSubtitle}</p>
          <button className="mt-10 bg-gradient-to-r from-[hsl(0,85%,55%)] to-[hsl(30,90%,50%)] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider">{d.getTickets}</button>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{d.speakersTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {d.speakers.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(0,70%,25%)] to-[hsl(30,60%,20%)] mx-auto mb-3" />
              <h3 className="font-bold text-sm">{s.name}</h3>
              <p className="text-xs text-[hsl(0,0%,50%)]">{s.topic}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{d.scheduleTitle}</h2>
        {d.schedule.map((s: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-6 border-b border-[hsl(0,0%,12%)] py-4">
            <span className="text-sm font-bold text-[hsl(30,80%,55%)] w-20">{s.time}</span>
            <div><h3 className="font-semibold text-sm">{s.title}</h3><p className="text-xs text-[hsl(0,0%,50%)]">{s.speaker}</p></div>
          </motion.div>
        ))}
      </section>
      <footer className="border-t border-[hsl(0,0%,10%)] py-8 text-center text-xs text-[hsl(0,0%,40%)]">{d.footer}</footer>
    </div>
  );
}
