import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function TravelAgency() {
  const { t } = useLang();
  const d = (t.demos as any).travelAgency;

  return (
    <div className="min-h-screen bg-[hsl(200,60%,12%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(200,60%,12%)]/80 backdrop-blur-md">
        <Link to="/template/13" className="text-xs text-[hsl(200,30%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold text-[hsl(40,80%,65%)]">✈ Wanderlust</h1>
        <span className="text-xs text-[hsl(200,30%,50%)]">{d.contact}</span>
      </nav>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,60%,15%)] via-[hsl(190,50%,10%)] to-[hsl(220,40%,8%)]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center px-8">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,80%,65%)] mb-6">{d.badge}</p>
          <h2 className="text-5xl md:text-8xl font-black leading-[0.85] mb-6">{d.heroTitle1}<br /><span style={{ background: "linear-gradient(to right, hsl(40,80%,60%), hsl(190,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span></h2>
          <p className="text-[hsl(200,30%,60%)] text-lg mb-10 max-w-lg mx-auto">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">{d.destinations}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {d.trips.map((trip: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(200,40%,15%)] border border-[hsl(200,30%,22%)] rounded-xl p-5 text-center hover:border-[hsl(40,80%,55%)] transition">
              <div className="w-full h-32 bg-[hsl(200,30%,20%)] rounded-lg mb-4" />
              <h4 className="font-bold">{trip.dest}</h4>
              <p className="text-xs text-[hsl(40,80%,60%)] mt-1">{trip.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(200,30%,18%)] py-8 text-center text-xs text-[hsl(200,20%,40%)]">{d.footer}</footer>
    </div>
  );
}
