import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Clock, User, TrendingUp, Mail, Bookmark } from "lucide-react";
import { useState } from "react";

const articles = [
  { img: "/images/demos/echopress-hero.jpg", featured: true },
  { img: "/images/demos/echopress-article1.jpg", featured: false },
  { img: "/images/demos/echopress-article2.jpg", featured: false },
  { img: "/images/demos/echopress-article3.jpg", featured: false },
  { img: "/images/demos/echopress-article4.jpg", featured: false },
];

export default function EchoPress() {
  const { t } = useLang();
  const d = (t.demos as any).echoPress;
  const [activeCat, setActiveCat] = useState(0);

  return (
    <div className="min-h-screen bg-[hsl(40,20%,97%)] text-[hsl(20,10%,12%)]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(40,20%,97%)]/90 backdrop-blur-xl border-b border-[hsl(20,10%,88%)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/template/9" className="text-[hsl(20,10%,50%)] text-sm hover:text-[hsl(0,85%,45%)] transition">{d.back}</Link>
          <h1 className="text-2xl font-black tracking-tight uppercase" style={{ fontFamily: "'Georgia', serif" }}>
            Echo<span className="text-[hsl(0,85%,45%)]">Press</span>
          </h1>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-[hsl(20,10%,40%)]">
            {(d.navLinks as string[]).map((link: string, i: number) => (
              <span key={i} className="hover:text-[hsl(0,85%,45%)] transition cursor-pointer">{link}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — Featured Article */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-sm overflow-hidden border border-[hsl(20,10%,90%)] group cursor-pointer">
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={articles[0].img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[hsl(0,85%,45%)] text-white text-xs font-bold tracking-wider uppercase">{d.featuredTag}</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-[hsl(20,10%,50%)] mb-4">
                <span className="font-semibold text-[hsl(0,85%,45%)] uppercase tracking-wider">{d.heroCategory}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{d.heroReadTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                {d.heroTitle}
              </h2>
              <p className="text-[hsl(20,10%,40%)] leading-relaxed mb-6">{d.heroExcerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(20,10%,85%)] flex items-center justify-center">
                  <User className="w-5 h-5 text-[hsl(20,10%,50%)]" />
                </div>
                <div>
                  <p className="text-sm font-bold">{d.heroAuthor}</p>
                  <p className="text-xs text-[hsl(20,10%,50%)]">{d.heroDate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {(d.categories as string[]).map((cat: string, i: number) => (
            <button key={i} onClick={() => setActiveCat(i)}
              className={`px-5 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${activeCat === i ? 'bg-[hsl(20,10%,12%)] text-white' : 'bg-white border border-[hsl(20,10%,88%)] text-[hsl(20,10%,40%)] hover:border-[hsl(20,10%,70%)]'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>{d.latestTitle}</h3>
          <span className="text-sm font-semibold text-[hsl(0,85%,45%)] flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">{d.viewAll}<ArrowRight className="w-4 h-4" /></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(d.articles as any[]).map((article: any, i: number) => (
            <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-sm overflow-hidden border border-[hsl(20,10%,92%)] hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={articles[(i % 4) + 1].img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3">
                  <Bookmark className="w-5 h-5 text-white drop-shadow-md hover:fill-white transition" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-[hsl(20,10%,50%)] mb-3">
                  <span className="font-semibold text-[hsl(0,85%,45%)] uppercase tracking-wider">{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-lg font-bold leading-snug mb-2 group-hover:text-[hsl(0,85%,45%)] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>{article.title}</h4>
                <p className="text-sm text-[hsl(20,10%,45%)] line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[hsl(20,10%,93%)]">
                  <div className="w-7 h-7 rounded-full bg-[hsl(20,10%,88%)] flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[hsl(20,10%,55%)]" />
                  </div>
                  <span className="text-xs font-medium text-[hsl(20,10%,40%)]">{article.author}</span>
                  <span className="text-xs text-[hsl(20,10%,60%)] ml-auto">{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-[hsl(20,10%,90%)]">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-[hsl(0,85%,45%)]" />
          <h3 className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>{d.trendingTitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(d.trending as any[]).map((item: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex gap-5 group cursor-pointer">
              <span className="text-5xl font-black text-[hsl(20,10%,88%)] group-hover:text-[hsl(0,85%,45%)] transition-colors leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="text-xs font-semibold text-[hsl(0,85%,45%)] uppercase tracking-wider">{item.category}</span>
                <h4 className="text-lg font-bold leading-snug mt-1 group-hover:text-[hsl(0,85%,45%)] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h4>
                <p className="text-xs text-[hsl(20,10%,50%)] mt-2">{item.author} · {item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[hsl(20,10%,12%)] text-white rounded-sm p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(0,85%,45%)]/10 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-xl">
            <Mail className="w-10 h-10 text-[hsl(0,85%,45%)] mb-4" />
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>{d.newsletterTitle}</h3>
            <p className="text-[hsl(20,10%,65%)] mb-8">{d.newsletterDesc}</p>
            <div className="flex gap-3">
              <input type="email" placeholder={d.newsletterPlaceholder} className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[hsl(0,85%,45%)]" />
              <button className="px-6 py-3 bg-[hsl(0,85%,45%)] text-white font-bold text-sm rounded-sm hover:bg-[hsl(0,85%,40%)] transition-colors">{d.newsletterBtn}</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Authors */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-[hsl(20,10%,90%)]">
        <h3 className="text-2xl font-black tracking-tight mb-8" style={{ fontFamily: "'Georgia', serif" }}>{d.authorsTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(d.authors as any[]).map((author: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[hsl(20,10%,88%)] mx-auto mb-3 flex items-center justify-center group-hover:bg-[hsl(0,85%,45%)]/10 transition-colors">
                <User className="w-8 h-8 text-[hsl(20,10%,55%)] group-hover:text-[hsl(0,85%,45%)] transition-colors" />
              </div>
              <p className="font-bold text-sm">{author.name}</p>
              <p className="text-xs text-[hsl(20,10%,50%)]">{author.role}</p>
              <p className="text-xs text-[hsl(0,85%,45%)] mt-1">{author.articles}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(20,10%,88%)] py-10 text-center bg-white">
        <p className="text-xl font-black tracking-tight uppercase" style={{ fontFamily: "'Georgia', serif" }}>
          Echo<span className="text-[hsl(0,85%,45%)]">Press</span>
        </p>
        <p className="text-xs text-[hsl(20,10%,55%)] mt-2">{d.footer}</p>
      </footer>
    </div>
  );
}
