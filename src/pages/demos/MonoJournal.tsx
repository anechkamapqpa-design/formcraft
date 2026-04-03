import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, ChevronRight } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

export default function MonoJournal() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = (t.demos as any).monoJournal;

  return (
    <div className="min-h-screen bg-[hsl(40,20%,97%)] text-[hsl(20,10%,12%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(40,20%,97%)]/90 backdrop-blur-lg border-b border-[hsl(20,10%,88%)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <Link to={lp("/")} className="text-sm text-[hsl(20,10%,45%)] hover:text-[hsl(20,10%,12%)] transition-colors">{d.back}</Link>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mono<span className="text-[hsl(0,75%,45%)]">Journal</span>
          </h1>
          <button className="hidden md:inline text-xs font-semibold uppercase tracking-widest text-[hsl(0,75%,45%)] hover:underline">{d.subscribe}</button>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-3 flex items-center gap-6 overflow-x-auto hide-scrollbar">
          {d.categories.map((cat: string, i: number) => (
            <span key={i} className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${i === 0 ? "text-[hsl(0,75%,45%)]" : "text-[hsl(20,10%,50%)] hover:text-[hsl(20,10%,12%)]"}`}>
              {cat}
            </span>
          ))}
        </div>
      </nav>

      {/* Featured Article */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[hsl(20,10%,88%)]">
            <div className="aspect-[4/3] md:aspect-auto bg-[hsl(20,5%,85%)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,10%,25%)] to-[hsl(0,0%,40%)]" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-[hsl(0,75%,45%)] text-white text-[10px] font-bold uppercase tracking-wider">{d.featuredTag}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">{d.featured.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[hsl(0,75%,45%)] mb-3">{d.featured.category}</span>
              <h2 className="text-2xl md:text-4xl font-black leading-[1.1] mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {d.featured.title}
              </h2>
              <p className="text-sm text-[hsl(20,10%,45%)] leading-relaxed mb-6">{d.featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-[hsl(20,10%,50%)]">
                <span className="flex items-center gap-1"><User className="w-3 h-3" />{d.featured.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{d.featured.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{d.latestTitle}</h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(0,75%,45%)] cursor-pointer hover:underline hidden md:inline">{d.viewAll}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.articles.map((a: { title: string; category: string; excerpt: string; author: string; readTime: string; date: string }, i: number) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[hsl(20,5%,80%)] to-[hsl(20,5%,70%)] mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[hsl(20,10%,25%)]/10 group-hover:bg-[hsl(20,10%,25%)]/20 transition-colors" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(0,75%,45%)]">{a.category}</span>
                <h3 className="text-lg font-bold leading-tight mt-1 mb-2 group-hover:text-[hsl(0,75%,45%)] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {a.title}
                </h3>
                <p className="text-xs text-[hsl(20,10%,50%)] leading-relaxed line-clamp-2 mb-3">{a.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] text-[hsl(20,10%,55%)]">
                  <span>{a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Editorial */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-[hsl(20,10%,12%)] text-[hsl(40,20%,90%)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[hsl(0,75%,55%)] mb-4 block">{d.editorialLabel}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {d.editorialTitle}
              </h2>
              <p className="text-sm leading-relaxed text-[hsl(40,10%,60%)]">{d.editorialDesc}</p>
            </div>
            <div className="space-y-6 border-l border-[hsl(0,0%,25%)] pl-8">
              {d.editorialArticles.map((a: { title: string; category: string }, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[hsl(0,75%,55%)]">{a.category}</span>
                  <h3 className="text-lg font-bold leading-tight mt-1 group-hover:text-[hsl(0,75%,55%)] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {a.title}
                  </h3>
                  {i < d.editorialArticles.length - 1 && <div className="h-px bg-[hsl(0,0%,20%)] mt-6" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>{d.authorsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {d.authors.map((a: { name: string; role: string; articles: string; initial: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 border border-[hsl(20,10%,88%)] hover:border-[hsl(0,75%,45%)] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(20,10%,12%)] text-[hsl(40,20%,90%)] flex items-center justify-center text-sm font-bold shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {a.initial}
                </div>
                <div>
                  <h3 className="text-sm font-bold group-hover:text-[hsl(0,75%,45%)] transition-colors">{a.name}</h3>
                  <p className="text-[10px] text-[hsl(20,10%,50%)]">{a.role} · {a.articles}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[hsl(20,10%,88%)]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{d.newsletterTitle}</h2>
            <p className="text-sm text-[hsl(20,10%,45%)] mb-8 leading-relaxed">{d.newsletterDesc}</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input type="email" placeholder={d.newsletterPlaceholder} className="flex-1 w-full px-5 py-3 border border-[hsl(20,10%,85%)] bg-transparent text-sm focus:outline-none focus:border-[hsl(0,75%,45%)] transition-colors" />
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[hsl(20,10%,12%)] text-[hsl(40,20%,90%)] px-6 py-3 text-sm font-semibold hover:bg-[hsl(0,75%,45%)] transition-colors">
                {d.subscribe} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-10 border-t border-[hsl(20,10%,88%)] bg-[hsl(40,20%,97%)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[hsl(20,10%,50%)]">{d.footer}</span>
          <span className="text-lg font-black tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mono<span className="text-[hsl(0,75%,45%)]">Journal</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
