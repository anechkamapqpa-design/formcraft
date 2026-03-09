import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function AIProductLanding() {
  const { t } = useLang();
  const d = (t.demos as any).aiProductLanding;
  return (
    <div className="min-h-screen bg-[hsl(230,30%,5%)] text-[hsl(0,0%,100%)] overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/23" className="text-xs text-[hsl(230,15%,50%)]">{d.back}</Link>
        <span className="text-xl font-bold">{d.brand}</span>
        <button className="border border-[hsl(200,100%,50%)] text-[hsl(200,100%,65%)] px-5 py-2 rounded-full text-xs">{d.tryFree}</button>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[hsl(200,100%,50%)]/8 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[hsl(280,80%,50%)]/6 rounded-full blur-[150px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[hsl(200,100%,50%)] to-[hsl(280,80%,55%)] flex items-center justify-center text-2xl">✦</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            {d.heroTitle1}<br />
            <span style={{ background: "linear-gradient(to right, hsl(200,100%,60%), hsl(280,80%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span>
          </h1>
          <p className="text-lg text-[hsl(230,15%,50%)] max-w-lg mx-auto mb-10">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-[hsl(200,100%,50%)] to-[hsl(280,80%,55%)] px-8 py-3.5 rounded-full font-bold text-sm">{d.getStarted}</button>
            <button className="border border-[hsl(230,15%,25%)] text-[hsl(230,10%,60%)] px-8 py-3.5 rounded-full font-bold text-sm">{d.watchDemo}</button>
          </div>
        </motion.div>
      </section>
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(230,20%,8%)] border border-[hsl(230,15%,15%)] rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[hsl(200,100%,50%)]/5 rounded-full blur-[40px]" />
              <h3 className="font-bold text-sm mb-2 text-[hsl(200,100%,65%)]">{f.title}</h3>
              <p className="text-xs text-[hsl(230,10%,50%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(230,15%,10%)] py-8 text-center text-xs text-[hsl(230,10%,35%)]">{d.footer}</footer>
    </div>
  );
}
