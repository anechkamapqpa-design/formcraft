import { motion, useScroll, useTransform } from "framer-motion";
import { useLang, useLangPath } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, Play, ArrowRight } from "lucide-react";
import { useRef } from "react";

function ParallaxSection({ children, className = "", offset = 50 }: { children: React.ReactNode; className?: string; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export default function StoryBrand() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = (t.demos as any).storyBrand;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.8], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[hsl(160,15%,5%)] text-[hsl(40,20%,90%)] overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-difference">
        <Link to={lp("/")} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          {d.back}
        </Link>
        <h1 className="text-lg tracking-[0.15em] uppercase font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Story<span className="italic font-normal">Brand</span>
        </h1>
        <span className="text-xs tracking-[0.2em] uppercase text-white/50 hidden md:block">{d.navRight}</span>
      </nav>

      {/* Hero - Full screen cinematic */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <img src="/images/storybrand/hero.jpg" alt={d.heroTitle1} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(160,20%,8%)]/70 via-[hsl(160,15%,5%)]/70 to-[hsl(160,15%,5%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(35,40%,20%,0.3),transparent_70%)]" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs tracking-[0.5em] uppercase text-[hsl(35,50%,60%)] mb-8"
          >
            {d.heroLabel}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {d.heroTitle1}<br />
            <em className="font-normal italic text-[hsl(35,50%,65%)]">{d.heroTitle2}</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-[hsl(40,15%,55%)] max-w-xl mx-auto mb-12 leading-relaxed"
          >
            {d.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center justify-center gap-6"
          >
            <button className="flex items-center gap-2 bg-[hsl(35,40%,45%)] text-[hsl(160,15%,5%)] px-8 py-3.5 rounded-none font-semibold text-sm tracking-wider uppercase hover:bg-[hsl(35,50%,55%)] transition-colors">
              {d.exploreBtn}
            </button>
            <button className="flex items-center gap-3 text-[hsl(35,50%,65%)] text-sm tracking-wider uppercase hover:text-[hsl(35,50%,80%)] transition-colors group">
              <span className="w-12 h-12 rounded-full border border-[hsl(35,40%,40%)] flex items-center justify-center group-hover:bg-[hsl(35,40%,40%)]/20 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              {d.watchFilm}
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(40,15%,40%)]"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">{d.scrollHint}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Brand Story Chapter 1 */}
      <section className="relative py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ParallaxSection offset={30}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35,50%,55%)] mb-4 block">{d.ch1Label}</span>
              <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {d.ch1Title}
              </h3>
              <p className="text-[hsl(40,15%,50%)] leading-relaxed mb-4">{d.ch1P1}</p>
              <p className="text-[hsl(40,15%,50%)] leading-relaxed">{d.ch1P2}</p>
            </motion.div>
          </ParallaxSection>
          <ParallaxSection offset={-20}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] bg-gradient-to-br from-[hsl(35,25%,18%)] to-[hsl(160,15%,10%)] rounded-sm overflow-hidden relative"
            >
              <img src="/images/storybrand/chapter1.jpg" alt={d.ch1Title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160,15%,5%)] via-[hsl(160,15%,5%)]/30 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs tracking-[0.3em] uppercase text-[hsl(35,50%,60%)]">{d.ch1ImageCaption}</span>
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Full-width cinematic divider */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(160,15%,5%)] via-[hsl(35,20%,12%)] to-[hsl(160,15%,5%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6"
        >
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold italic leading-[1.15] max-w-4xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            "{d.quote}"
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.3em] uppercase text-[hsl(35,50%,55%)]">— {d.quoteAuthor}</p>
        </motion.div>
      </section>

      {/* Product Highlights */}
      <section className="relative py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35,50%,55%)] mb-4 block">{d.productsLabel}</span>
            <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {d.productsTitle}
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {d.products.map((p: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[hsl(35,20%,15%)] to-[hsl(160,15%,8%)] mb-6 overflow-hidden relative">
                  <img src={`/images/storybrand/product-${i + 1}.jpg`} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160,15%,5%)]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[hsl(35,40%,40%)]/10" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-[hsl(35,50%,65%)]">{d.viewProduct}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h4>
                <p className="text-sm text-[hsl(40,15%,45%)] mb-2">{p.desc}</p>
                <span className="text-sm text-[hsl(35,50%,60%)] font-semibold">{p.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Asymmetric grid */}
      <section className="relative py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35,50%,55%)] mb-4 block">{d.galleryLabel}</span>
            <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{d.galleryTitle}</h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {d.galleryItems.map((item: any, i: number) => {
              const spans = ["md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2", "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${spans[i]} relative overflow-hidden group cursor-pointer`}
                >
                  <img src={`/images/storybrand/gallery-${i + 1}.jpg`} alt={item} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160,15%,5%)]/50 to-transparent" />
                  <div className="absolute inset-0 bg-[hsl(160,15%,5%)]/0 group-hover:bg-[hsl(160,15%,5%)]/40 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-[hsl(35,50%,70%)]">{item}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="relative py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ParallaxSection offset={-25}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-tl from-[hsl(35,20%,15%)] to-[hsl(160,20%,10%)] relative overflow-hidden"
            >
              <img src="/images/storybrand/bts.jpg" alt={d.btsTitle} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(160,15%,5%)]/60 via-transparent to-transparent" />
            </motion.div>
          </ParallaxSection>
          <ParallaxSection offset={25}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35,50%,55%)] mb-4 block">{d.btsLabel}</span>
              <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {d.btsTitle}
              </h3>
              <p className="text-[hsl(40,15%,50%)] leading-relaxed mb-6">{d.btsP1}</p>
              <p className="text-[hsl(40,15%,50%)] leading-relaxed mb-8">{d.btsP2}</p>
              <div className="grid grid-cols-3 gap-6">
                {d.btsStats.map((s: any, i: number) => (
                  <div key={i}>
                    <span className="text-2xl font-bold text-[hsl(35,50%,60%)]">{s.val}</span>
                    <p className="text-xs text-[hsl(40,15%,40%)] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Shop Teaser */}
      <section className="relative py-32 px-6 md:px-16 border-t border-[hsl(40,15%,15%)]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35,50%,55%)] mb-4 block">{d.shopLabel}</span>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
              {d.shopTitle}
            </h3>
            <p className="text-lg text-[hsl(40,15%,50%)] max-w-xl mx-auto mb-10">{d.shopSubtitle}</p>
            <button className="inline-flex items-center gap-3 bg-[hsl(35,40%,45%)] text-[hsl(160,15%,5%)] px-10 py-4 font-semibold text-sm tracking-wider uppercase hover:bg-[hsl(35,50%,55%)] transition-colors">
              {d.shopBtn} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(40,15%,12%)] py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg tracking-[0.15em] uppercase font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Story<em className="font-normal italic">Brand</em>
          </span>
          <p className="text-xs text-[hsl(40,15%,35%)]">{d.footer}</p>
        </div>
      </footer>
    </div>
  );
}
