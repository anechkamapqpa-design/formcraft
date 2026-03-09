import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Diamond, Star, MapPin, Mail, Phone } from "lucide-react";
import { useRef } from "react";

const collections = [
  { img: "/images/demos/luxeaura-collection1.jpg", titleKey: "col1Title", descKey: "col1Desc", price: "$2,200" },
  { img: "/images/demos/luxeaura-collection2.jpg", titleKey: "col2Title", descKey: "col2Desc", price: "$3,800" },
  { img: "/images/demos/luxeaura-collection3.jpg", titleKey: "col3Title", descKey: "col3Desc", price: "$1,450" },
];

const galleryImages = [
  "/images/demos/luxeaura-gallery1.jpg",
  "/images/demos/luxeaura-gallery2.jpg",
  "/images/demos/luxeaura-hero.jpg",
  "/images/demos/luxeaura-collection1.jpg",
];

const shopItems = [
  { img: "/images/demos/luxeaura-collection1.jpg", priceKey: "shopPrice1" },
  { img: "/images/demos/luxeaura-collection2.jpg", priceKey: "shopPrice2" },
  { img: "/images/demos/luxeaura-collection3.jpg", priceKey: "shopPrice3" },
  { img: "/images/demos/luxeaura-gallery2.jpg", priceKey: "shopPrice4" },
];

export default function LuxeAura() {
  const { t } = useLang();
  const d = (t.demos as any).luxeAura;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[hsl(30,8%,4%)] text-[hsl(40,25%,88%)]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[hsl(30,8%,4%)]/85 backdrop-blur-xl border-b border-[hsl(40,50%,35%)]/15">
        <Link to="/template/7" className="text-[hsl(40,30%,60%)] text-xs tracking-[0.3em] uppercase hover:text-[hsl(40,50%,80%)] transition">{d.back}</Link>
        <h1 className="text-2xl tracking-[0.25em] uppercase font-light" style={{ fontFamily: "'Georgia', serif", color: "hsl(40,50%,78%)" }}>
          <Diamond className="w-4 h-4 inline-block mr-2 -mt-0.5" />LuxeAura
        </h1>
        <span className="text-xs tracking-[0.2em] uppercase text-[hsl(40,30%,50%)] hidden sm:block">{d.since}</span>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src="/images/demos/luxeaura-hero.jpg" alt="LuxeAura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,8%,4%)]/40 via-[hsl(30,8%,4%)]/20 to-[hsl(30,8%,4%)]" />
        </motion.div>
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-xs tracking-[0.6em] uppercase text-[hsl(40,60%,65%)] mb-6">{d.heroLabel}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2 }} className="text-5xl md:text-8xl lg:text-9xl font-light tracking-wider leading-[0.95] mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            {d.heroTitle1}<br /><em className="font-normal italic text-[hsl(40,60%,72%)]">{d.heroTitle2}</em>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }} className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(40,60%,55%)] to-transparent mx-auto mb-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="text-[hsl(40,15%,55%)] text-lg md:text-xl max-w-lg mx-auto font-light leading-relaxed">{d.heroSubtitle}</motion.p>
          <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} href="#collections" className="inline-flex items-center gap-3 mt-10 px-8 py-3.5 border border-[hsl(40,50%,45%)] text-[hsl(40,50%,75%)] text-sm tracking-[0.2em] uppercase hover:bg-[hsl(40,50%,45%)]/10 transition-all duration-500">
            {d.exploreBtn}<ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="border-y border-[hsl(40,50%,25%)]/20 py-4 overflow-hidden">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex gap-12 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-xs tracking-[0.4em] uppercase text-[hsl(40,30%,40%)]">
              <Diamond className="w-3 h-3 inline mr-4" />{d.marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Collections */}
      <section id="collections" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,60%,60%)] mb-4">{d.collectionsLabel}</p>
          <h3 className="text-4xl md:text-5xl font-light tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>{d.collectionsTitle}</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img src={col.img} alt="" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-[hsl(30,8%,4%)]/30 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(40,50%,45%)] text-[hsl(30,8%,4%)] text-xs tracking-[0.2em] uppercase font-semibold">{d.viewCollection}<ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
              <h4 className="text-xl font-light tracking-wide text-[hsl(40,30%,85%)] mb-1">{d[col.titleKey]}</h4>
              <p className="text-sm text-[hsl(40,15%,45%)] mb-2">{d[col.descKey]}</p>
              <p className="text-sm tracking-wider text-[hsl(40,60%,60%)]">{d.from} {col.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,8%,4%)] via-[hsl(30,12%,8%)] to-[hsl(30,8%,4%)]" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,60%,60%)] mb-6">{d.storyLabel}</p>
              <h3 className="text-4xl md:text-5xl font-light tracking-wider leading-tight mb-8" style={{ fontFamily: "'Georgia', serif" }}>{d.storyTitle}</h3>
              <div className="w-16 h-px bg-[hsl(40,50%,45%)] mb-8" />
              <p className="text-[hsl(40,15%,55%)] leading-relaxed mb-6">{d.storyP1}</p>
              <p className="text-[hsl(40,15%,55%)] leading-relaxed">{d.storyP2}</p>
            </div>
            <div className="relative">
              <img src="/images/demos/luxeaura-gallery1.jpg" alt="" className="w-full rounded-sm" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[hsl(40,50%,35%)]/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,60%,60%)] mb-4">{d.galleryLabel}</p>
          <h3 className="text-4xl md:text-5xl font-light tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>{d.galleryTitle}</h3>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden aspect-square group cursor-pointer">
              <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[hsl(30,8%,4%)]/0 group-hover:bg-[hsl(30,8%,4%)]/40 transition-colors duration-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-[hsl(40,50%,70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-t border-[hsl(40,50%,25%)]/20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,60%,60%)] mb-4">{d.shopLabel}</p>
          <h3 className="text-4xl md:text-5xl font-light tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>{d.shopTitle}</h3>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shopItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-sm text-[hsl(40,30%,80%)] tracking-wide">{d[`shopName${i + 1}`]}</p>
              <p className="text-xs text-[hsl(40,60%,55%)] tracking-wider mt-1">{d[item.priceKey]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[hsl(40,50%,25%)]/20 py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,60%,60%)] mb-4">{d.contactLabel}</p>
            <h3 className="text-4xl md:text-5xl font-light tracking-wider mb-8" style={{ fontFamily: "'Georgia', serif" }}>{d.contactTitle}</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[hsl(40,20%,50%)]">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[hsl(40,50%,55%)]" />{d.contactAddress}</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-[hsl(40,50%,55%)]" />{d.contactEmail}</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[hsl(40,50%,55%)]" />{d.contactPhone}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(40,50%,20%)]/30 py-12 text-center">
        <Diamond className="w-5 h-5 mx-auto text-[hsl(40,50%,50%)] mb-4" />
        <p className="text-lg tracking-[0.3em] uppercase text-[hsl(40,30%,70%)] mb-2">LuxeAura</p>
        <p className="text-xs text-[hsl(40,15%,35%)] tracking-wider">{d.footer}</p>
      </footer>
    </div>
  );
}
