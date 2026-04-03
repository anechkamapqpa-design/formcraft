import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang, useLangPath } from "@/lib/i18n";

const artworks = [
  { id: 1, title: "Eternal Whispers", artist: "Elena Vasquez", price: "$12,400", img: "/images/demos/art1.jpg" },
  { id: 2, title: "Cerulean Dreams", artist: "Marco Bellini", price: "$8,900", img: "/images/demos/art2.jpg" },
  { id: 3, title: "Golden Horizon", artist: "Yuki Tanaka", price: "$15,200", img: "/images/demos/art1.jpg" },
  { id: 4, title: "Midnight Reverie", artist: "Sofia Laurent", price: "$11,600", img: "/images/demos/art2.jpg" },
  { id: 5, title: "Velvet Echoes", artist: "Dmitri Volkov", price: "$9,800", img: "/images/demos/art1.jpg" },
  { id: 6, title: "Silent Passage", artist: "Amara Osei", price: "$13,500", img: "/images/demos/art2.jpg" },
];

export default function LuxuryArt() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.luxuryArt;

  return (
    <div className="min-h-screen bg-[hsl(30,10%,5%)] text-[hsl(40,30%,90%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(30,10%,5%)]/80 backdrop-blur-md border-b border-[hsl(40,40%,30%)]/20">
        <Link to={lp("/template/3")} className="text-[hsl(40,30%,70%)] text-xs tracking-[0.3em] uppercase hover:text-[hsl(40,40%,85%)] transition">{d.back}</Link>
        <h1 className="font-serif text-xl tracking-[0.2em] uppercase text-[hsl(40,40%,85%)]">Siberiana</h1>
        <span className="text-xs tracking-[0.2em] uppercase text-[hsl(40,30%,60%)]">{d.livingGallery}</span>
      </nav>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="/images/demos/luxury-hero.jpg" alt="Gallery interior" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,5%)] via-transparent to-[hsl(30,10%,5%)]/50" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative text-center z-10">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,50%,70%)] mb-4">{d.exclusiveCollection}</p>
          <h2 className="font-serif text-6xl md:text-8xl tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{d.heroTitle1}<br />{d.heroTitle2}</h2>
          <div className="w-20 h-px bg-[hsl(40,50%,50%)] mx-auto mb-6" />
          <p className="text-[hsl(40,20%,60%)] text-lg max-w-md mx-auto">{d.heroSubtitle}</p>
        </motion.div>
      </section>
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <h3 className="text-center font-serif text-4xl mb-16 text-[hsl(40,30%,85%)]">{d.worksForSale}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((work, i) => (
            <motion.div key={work.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h4 className="font-serif text-lg text-[hsl(40,30%,85%)]">{work.title}</h4>
              <p className="text-sm text-[hsl(40,20%,50%)]">{work.artist}</p>
              <p className="text-sm text-[hsl(40,50%,65%)] mt-1">{work.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(40,40%,20%)]/30 py-16 text-center">
        <p className="font-serif text-2xl text-[hsl(40,30%,80%)] mb-2">{d.footerName}</p>
        <p className="text-xs text-[hsl(40,20%,45%)] tracking-[0.3em] uppercase">{d.footerCities}</p>
      </footer>
    </div>
  );
}
