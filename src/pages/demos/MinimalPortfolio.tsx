import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function MinimalPortfolio() {
  const { t } = useLang();
  const d = (t.demos as any).minimalPortfolio;
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/template/1" className="text-sm text-[hsl(0,0%,50%)] hover:text-[hsl(0,0%,8%)] transition">{d.back}</Link>
        <span className="text-lg font-bold tracking-[0.15em] uppercase">{d.brand}</span>
        <span className="text-sm text-[hsl(0,0%,50%)]">{d.contact}</span>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">{d.heroTitle}</h1>
          <p className="text-lg text-[hsl(0,0%,45%)] max-w-lg mx-auto mb-10">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {d.projects.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[hsl(0,0%,94%)] rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[hsl(0,0%,90%)] to-[hsl(0,0%,85%)] group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-medium text-sm">{p.title}</h3>
              <p className="text-xs text-[hsl(0,0%,50%)]">{p.type}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-light text-center mb-10">{d.testimonialsTitle}</h2>
        {d.testimonials.map((r: any, i: number) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-[hsl(0,0%,90%)] py-6">
            <p className="text-[hsl(0,0%,35%)] italic mb-2">"{r.text}"</p>
            <p className="text-xs font-medium">{r.name} — <span className="text-[hsl(0,0%,50%)]">{r.role}</span></p>
          </motion.div>
        ))}
      </section>
      <footer className="border-t border-[hsl(0,0%,92%)] py-8 text-center text-xs text-[hsl(0,0%,55%)]">{d.footer}</footer>
    </div>
  );
}
