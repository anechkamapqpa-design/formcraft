import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function GamingHub() {
  const { t } = useLang();
  const d = (t.demos as any).gamingHub;

  return (
    <div className="min-h-screen bg-[hsl(260,40%,4%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(260,40%,4%)]/80 backdrop-blur-md">
        <Link to="/template/14" className="text-xs text-[hsl(260,20%,50%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-black tracking-wider uppercase" style={{ background: "linear-gradient(to right, hsl(280,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NEXUS</h1>
        <span className="text-xs text-[hsl(280,100%,70%)]">{d.signIn}</span>
      </nav>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[hsl(280,100%,50%)]/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[hsl(180,100%,50%)]/5 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 text-center px-8">
          <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase bg-[hsl(280,100%,65%)]/15 text-[hsl(280,100%,70%)] px-4 py-1.5 rounded-full mb-6">{d.badge}</span>
          <h2 className="text-6xl md:text-[8rem] font-black leading-[0.8] uppercase tracking-tight mb-6">
            <span style={{ background: "linear-gradient(to bottom, hsl(280,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle}</span>
          </h2>
          <p className="text-xl text-[hsl(260,20%,50%)] mb-8">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-[hsl(280,100%,60%)] to-[hsl(180,100%,50%)] text-[hsl(0,0%,0%)] px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition">{d.playNow}</button>
            <button className="border border-[hsl(280,100%,50%)]/30 text-[hsl(280,100%,70%)] px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-[hsl(280,100%,50%)]/10 transition">{d.watchTrailer}</button>
          </div>
        </motion.div>
      </section>
      <footer className="border-t border-[hsl(260,20%,10%)] py-8 text-center text-xs text-[hsl(260,15%,30%)]">{d.footer}</footer>
    </div>
  );
}
