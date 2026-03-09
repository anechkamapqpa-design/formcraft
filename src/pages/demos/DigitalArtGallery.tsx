import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

const artGradients = [
  "from-[hsl(30,40%,25%)] via-[hsl(35,50%,20%)] to-[hsl(25,30%,15%)]",
  "from-[hsl(200,30%,20%)] via-[hsl(210,40%,18%)] to-[hsl(220,35%,15%)]",
  "from-[hsl(45,50%,25%)] via-[hsl(40,45%,20%)] to-[hsl(35,35%,15%)]",
  "from-[hsl(280,25%,20%)] via-[hsl(290,30%,18%)] to-[hsl(300,25%,14%)]",
  "from-[hsl(10,35%,22%)] via-[hsl(15,40%,18%)] to-[hsl(5,30%,14%)]",
  "from-[hsl(160,25%,18%)] via-[hsl(170,30%,15%)] to-[hsl(180,20%,12%)]",
];

export default function DigitalArtGallery() {
  const { t } = useLang();
  const d = (t.demos as any).digitalArtGallery;
  return (
    <div className="min-h-screen bg-[hsl(30,10%,5%)] text-[hsl(40,30%,90%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(30,10%,5%)]/80 backdrop-blur-md border-b border-[hsl(40,40%,30%)]/20">
        <Link to="/template/8" className="text-[hsl(40,30%,70%)] text-xs tracking-[0.3em] uppercase">{d.back}</Link>
        <h1 className="font-serif text-xl tracking-[0.2em] uppercase text-[hsl(40,40%,85%)]">{d.brand}</h1>
        <span className="text-xs tracking-[0.2em] uppercase text-[hsl(40,30%,60%)]">{d.gallery}</span>
      </nav>

      {/* Cinematic hero */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,5%)] via-[hsl(30,10%,8%)] to-[hsl(30,10%,5%)]/50" />
        {/* Decorative circles */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] border border-[hsl(40,40%,30%)]/10 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] border border-[hsl(40,40%,30%)]/5 rounded-full -translate-x-12 -translate-y-12" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative text-center z-10">
          <motion.p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,50%,70%)] mb-4" initial={{ letterSpacing: "0.2em" }} animate={{ letterSpacing: "0.5em" }} transition={{ duration: 2 }}>{d.badge}</motion.p>
          <h2 className="font-serif text-6xl md:text-8xl tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{d.heroTitle1}<br />{d.heroTitle2}</h2>
          <motion.div className="w-20 h-px bg-[hsl(40,50%,50%)] mx-auto mb-6" initial={{ width: 0 }} animate={{ width: 80 }} transition={{ delay: 0.8, duration: 0.8 }} />
          <p className="text-[hsl(40,20%,60%)] text-lg max-w-md mx-auto">{d.heroSubtitle}</p>
          <motion.div className="mt-10 w-6 h-10 border border-[hsl(40,30%,50%)]/40 rounded-full mx-auto flex justify-center pt-2" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }}>
            <motion.div className="w-1 h-2.5 bg-[hsl(40,40%,60%)] rounded-full" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery with varied sizes */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <h3 className="text-center font-serif text-4xl mb-16 text-[hsl(40,30%,85%)]">{d.worksTitle}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {d.artworks.map((w: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.7 }} viewport={{ once: true }} className={`group cursor-pointer ${i === 0 || i === 5 ? "row-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 || i === 5 ? "aspect-[3/5]" : "aspect-[3/4]"} mb-4 rounded-lg bg-gradient-to-br ${artGradients[i]}`}>
                {/* Overlay with art frame */}
                <div className="absolute inset-3 border border-[hsl(40,40%,40%)]/20 rounded group-hover:border-[hsl(40,40%,50%)]/40 transition-colors duration-700" />
                <div className="absolute inset-0 bg-[hsl(30,10%,5%)]/0 group-hover:bg-[hsl(30,10%,5%)]/20 transition-colors duration-500" />
                {/* Art number */}
                <div className="absolute bottom-4 left-4 text-xs font-mono text-[hsl(40,30%,50%)]/60">No. {String(i + 1).padStart(3, "0")}</div>
              </div>
              <h4 className="font-serif text-lg text-[hsl(40,30%,85%)] group-hover:text-[hsl(40,50%,70%)] transition-colors">{w.title}</h4>
              <p className="text-sm text-[hsl(40,20%,50%)]">{w.artist}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visit info */}
      <section className="max-w-3xl mx-auto px-8 py-16 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border border-[hsl(40,40%,20%)]/30 rounded-2xl p-12">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(40,40%,55%)] mb-4">Visit Us</p>
          <p className="font-serif text-2xl text-[hsl(40,30%,80%)] mb-4">Tuesday — Sunday</p>
          <p className="text-[hsl(40,20%,50%)]">10:00 — 20:00</p>
          <div className="w-12 h-px bg-[hsl(40,40%,40%)] mx-auto my-6" />
          <p className="text-sm text-[hsl(40,20%,50%)]">Free admission on the first Sunday of each month</p>
        </motion.div>
      </section>

      <footer className="border-t border-[hsl(40,40%,20%)]/30 py-16 text-center">
        <p className="font-serif text-2xl text-[hsl(40,30%,80%)] mb-2">{d.footerName}</p>
        <p className="text-xs text-[hsl(40,20%,45%)] tracking-[0.3em] uppercase">{d.footerCities}</p>
      </footer>
    </div>
  );
}
