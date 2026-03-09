import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { useRef } from "react";

const projects = [
  { gradient: "from-[hsl(220,30%,92%)] to-[hsl(200,25%,88%)]", w: "col-span-2", aspect: "aspect-[2/1]" },
  { gradient: "from-[hsl(0,0%,90%)] to-[hsl(40,15%,87%)]", w: "", aspect: "aspect-[3/4]" },
  { gradient: "from-[hsl(170,20%,88%)] to-[hsl(200,20%,85%)]", w: "", aspect: "aspect-[3/4]" },
  { gradient: "from-[hsl(280,15%,90%)] to-[hsl(320,12%,87%)]", w: "col-span-2", aspect: "aspect-[2/1]" },
];

export default function MinimalPortfolio() {
  const { t } = useLang();
  const d = (t.demos as any).minimalPortfolio;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/template/1" className="text-sm text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,8%)] transition">{d.back}</Link>
        <span className="text-lg font-bold tracking-[0.15em] uppercase">{d.brand}</span>
        <span className="text-sm text-[hsl(0,0%,50%)]">{d.contact}</span>
      </nav>

      {/* Hero with animated line */}
      <section className="max-w-5xl mx-auto px-8 py-24 text-center relative">
        <motion.div className="absolute top-0 left-1/2 w-px bg-[hsl(0,0%,85%)]" initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 1.2, ease: "easeOut" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">{d.heroTitle}</h1>
          <p className="text-lg text-[hsl(0,0%,45%)] max-w-lg mx-auto mb-10">{d.heroSubtitle}</p>
          <motion.div className="w-12 h-px bg-[hsl(0,0%,30%)] mx-auto" initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 0.5, duration: 0.6 }} />
        </motion.div>
      </section>

      {/* Masonry-like portfolio grid */}
      <section ref={ref} className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {d.projects.map((p: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${projects[i]?.w || ""}`}
            >
              <div className={`${projects[i]?.aspect || "aspect-[4/3]"} bg-gradient-to-br ${projects[i]?.gradient || "from-[hsl(0,0%,94%)] to-[hsl(0,0%,90%)]"} rounded-lg mb-3 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-[hsl(0,0%,0%)]/0 group-hover:bg-[hsl(0,0%,0%)]/5 transition-colors duration-500" />
                <motion.div className="w-full h-full" style={{ y }} />
                {/* Decorative grid dots */}
                <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1 opacity-30">
                  {Array.from({length: 9}).map((_, j) => <div key={j} className="w-1 h-1 rounded-full bg-[hsl(0,0%,50%)]" />)}
                </div>
              </div>
              <h3 className="font-medium text-sm group-hover:tracking-wider transition-all duration-300">{p.title}</h3>
              <p className="text-xs text-[hsl(0,0%,50%)]">{p.type}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats ribbon */}
      <section className="border-y border-[hsl(0,0%,92%)] py-12">
        <div className="max-w-4xl mx-auto flex justify-around text-center">
          {[{ val: "150+", label: "Projects" }, { val: "12", label: "Awards" }, { val: "8yr", label: "Experience" }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
              <p className="text-3xl font-light text-[hsl(0,0%,20%)]">{s.val}</p>
              <p className="text-xs text-[hsl(0,0%,55%)] mt-1 tracking-wider uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials with large quotes */}
      <section className="max-w-3xl mx-auto px-8 py-20">
        <h2 className="text-2xl font-light text-center mb-10">{d.testimonialsTitle}</h2>
        {d.testimonials.map((r: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} className="border-t border-[hsl(0,0%,90%)] py-8 relative">
            <span className="absolute -top-4 left-0 text-6xl font-serif text-[hsl(0,0%,88%)] leading-none">"</span>
            <p className="text-[hsl(0,0%,35%)] italic text-lg pl-8 mb-3">{r.text}</p>
            <p className="text-xs font-medium pl-8">{r.name} — <span className="text-[hsl(0,0%,50%)]">{r.role}</span></p>
          </motion.div>
        ))}
      </section>
      <footer className="border-t border-[hsl(0,0%,92%)] py-8 text-center text-xs text-[hsl(0,0%,55%)]">{d.footer}</footer>
    </div>
  );
}
