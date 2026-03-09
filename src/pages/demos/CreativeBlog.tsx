import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CreativeBlog() {
  const { t } = useLang();
  const d = (t.demos as any).creativeBlog;
  return (
    <div className="min-h-screen bg-[hsl(40,25%,97%)] text-[hsl(220,20%,15%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-5xl mx-auto border-b border-[hsl(220,10%,90%)]">
        <Link to="/template/17" className="text-sm text-[hsl(220,10%,50%)]">{d.back}</Link>
        <h1 className="text-xl font-serif font-bold italic">{d.brand}</h1>
        <span className="text-sm text-[hsl(220,10%,50%)]">{d.subscribe}</span>
      </nav>
      <section className="max-w-3xl mx-auto px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,60%,50%)] mb-4 block">{d.featuredLabel}</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">{d.featuredTitle}</h2>
          <p className="text-lg text-[hsl(220,10%,45%)] leading-relaxed mb-6">{d.featuredExcerpt}</p>
          <span className="text-sm font-semibold text-[hsl(350,60%,50%)]">{d.readMore} →</span>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-serif mb-8">{d.latestTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {d.posts.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="cursor-pointer group">
              <div className="aspect-[16/10] bg-[hsl(220,10%,90%)] rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[hsl(40,20%,90%)] to-[hsl(350,20%,88%)] group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[hsl(350,60%,50%)]">{p.category}</span>
              <h3 className="font-serif text-lg mt-1 mb-2">{p.title}</h3>
              <p className="text-xs text-[hsl(220,10%,50%)]">{p.date}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,10%,90%)] py-8 text-center text-xs text-[hsl(220,10%,55%)]">{d.footer}</footer>
    </div>
  );
}
