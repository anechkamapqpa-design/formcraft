import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function FashionMagazine() {
  const { t } = useLang();
  const d = (t.demos as any).fashionMagazine;

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,5%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(0,0%,90%)]">
        <Link to="/template/19" className="text-xs text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,5%)] transition">{d.back}</Link>
        <h1 className="text-2xl font-black tracking-[0.2em] uppercase">VOGUE NOIR</h1>
        <span className="text-xs tracking-[0.2em] uppercase text-[hsl(0,0%,50%)]">{d.subscribe}</span>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="bg-[hsl(0,0%,5%)] flex items-center justify-center min-h-[400px]">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-[hsl(0,0%,25%)] text-[12rem] font-black leading-none" style={{ writingMode: "vertical-lr" }}>V</motion.span>
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[10px] tracking-[0.6em] uppercase text-[hsl(0,0%,50%)] mb-8 block">{d.season}</span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.85] uppercase mb-6">{d.heroTitle1}<br />{d.heroTitle2}</h2>
            <div className="w-20 h-0.5 bg-[hsl(0,0%,0%)] mb-6" />
            <p className="text-sm text-[hsl(0,0%,45%)] max-w-sm leading-relaxed">{d.heroSubtitle}</p>
            <span className="mt-8 text-xs tracking-[0.3em] uppercase border-b border-[hsl(0,0%,0%)] pb-1 inline-block cursor-pointer font-semibold">{d.readIssue}</span>
          </motion.div>
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,90%)] py-8 text-center text-xs text-[hsl(0,0%,50%)]">{d.footer}</footer>
    </div>
  );
}
