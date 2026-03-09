import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

const caseImages = [
  "from-[hsl(350,70%,85%)] via-[hsl(340,60%,75%)] to-[hsl(320,50%,70%)]",
  "from-[hsl(200,60%,80%)] via-[hsl(220,50%,70%)] to-[hsl(240,45%,65%)]",
  "from-[hsl(140,40%,80%)] via-[hsl(160,45%,70%)] to-[hsl(180,40%,65%)]",
  "from-[hsl(30,70%,80%)] via-[hsl(20,65%,70%)] to-[hsl(10,60%,65%)]",
];

export default function CreativeAgency() {
  const { t } = useLang();
  const d = (t.demos as any).creativeAgency;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,5%)]">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[hsl(0,0%,90%)]">
        <Link to="/template/4" className="text-sm text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,5%)] transition">{d.back}</Link>
        <span className="text-xl font-black uppercase tracking-wider">{d.brand}</span>
        <button className="bg-[hsl(350,85%,50%)] text-[hsl(0,0%,100%)] px-6 py-2 rounded-full text-sm font-bold hover:bg-[hsl(350,85%,45%)] transition">{d.hireus}</button>
      </nav>

      {/* Hero with large typography and animated counter */}
      <section className="max-w-6xl mx-auto px-8 py-24 relative">
        <div className="absolute top-20 right-0 text-[20rem] font-black text-[hsl(0,0%,96%)] leading-none select-none pointer-events-none">B</div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase mb-6">{d.heroTitle1}<br /><span className="text-[hsl(350,85%,50%)]">{d.heroTitle2}</span></h1>
          <p className="text-xl text-[hsl(0,0%,45%)] max-w-lg mb-10">{d.heroSubtitle}</p>
          <div className="flex gap-8 mt-12">
            {[{ val: "200+", label: "Projects" }, { val: "50+", label: "Clients" }, { val: "15", label: "Awards" }].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }}>
                <p className="text-3xl font-black text-[hsl(350,85%,50%)]">{s.val}</p>
                <p className="text-xs text-[hsl(0,0%,55%)] uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Cases with hover reveal */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black uppercase">{d.casesTitle}</h2>
          <span className="text-xs tracking-wider uppercase text-[hsl(0,0%,50%)]">View all →</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {d.cases.map((c: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className={`aspect-[16/10] bg-gradient-to-br ${caseImages[i]} rounded-xl mb-4 overflow-hidden relative`}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                {/* Overlay with arrow */}
                <div className="absolute inset-0 bg-[hsl(0,0%,0%)]/0 group-hover:bg-[hsl(0,0%,0%)]/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} whileHover={{ opacity: 1, scale: 1 }} className="w-12 h-12 rounded-full bg-[hsl(0,0%,100%)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[hsl(0,0%,5%)]" />
                  </motion.div>
                </div>
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[hsl(0,0%,100%)] flex items-center justify-center text-xs font-bold">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[hsl(350,85%,50%)] transition-colors">{c.title}</h3>
                  <p className="text-sm text-[hsl(0,0%,50%)]">{c.client}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[hsl(0,0%,70%)] group-hover:text-[hsl(350,85%,50%)] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-2xl font-black uppercase mb-10">What We Do</h2>
          {["Brand Strategy", "Digital Design", "Motion Graphics", "Web Development"].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-between border-b border-[hsl(0,0%,15%)] py-6 group cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="text-xs text-[hsl(0,0%,40%)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-2xl font-bold group-hover:text-[hsl(350,85%,50%)] transition-colors">{s}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[hsl(0,0%,40%)] group-hover:text-[hsl(350,85%,50%)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(0,0%,90%)] py-8 text-center text-xs text-[hsl(0,0%,50%)]">{d.footer}</footer>
    </div>
  );
}
