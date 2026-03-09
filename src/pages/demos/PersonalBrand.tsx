import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Youtube, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PersonalBrand() {
  const { t } = useLang();
  const d = t.demos.personalBrand;

  return (
    <div className="min-h-screen bg-[hsl(30,25%,97%)] text-[hsl(20,15%,20%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/5" className="text-sm text-[hsl(20,10%,55%)] hover:text-[hsl(20,15%,20%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(350,75%,50%)]">Creator Kit</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-[hsl(20,10%,45%)]">
          <a href="#services">{d.servicesTitle}</a>
          <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition">{d.bookCall}</button>
        </div>
      </nav>

      {/* Hero with portrait and floating badges */}
      <section className="max-w-7xl mx-auto px-8 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,75%,50%)] mb-4 block">{d.badge}</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle}</h1>
            <p className="text-lg text-[hsl(20,10%,45%)] mb-8 max-w-lg">{d.heroSubtitle}</p>
            <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition flex items-center gap-2 shadow-lg shadow-[hsl(350,75%,50%)]/20">{d.cta} <ArrowRight className="w-4 h-4" /></button>
            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[hsl(30,25%,97%)]" style={{ background: `hsl(${350 + i * 30}, 40%, ${75 + i * 5}%)` }} />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-[hsl(45,90%,50%)] text-[hsl(45,90%,50%)]" />)}</div>
                <p className="text-xs text-[hsl(20,10%,50%)]">100+ happy clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
            <img src="/images/demos/creator-portrait.jpg" alt="Creator" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
            {/* Floating badge */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-4 top-1/4 bg-[hsl(0,0%,100%)] rounded-xl shadow-lg p-3 border border-[hsl(20,15%,92%)]">
              <p className="text-xs font-bold text-[hsl(350,75%,50%)]">🎯 300%</p>
              <p className="text-[10px] text-[hsl(20,10%,50%)]">Avg. Growth</p>
            </motion.div>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute -left-4 bottom-1/4 bg-[hsl(0,0%,100%)] rounded-xl shadow-lg p-3 border border-[hsl(20,15%,92%)]">
              <p className="text-xs font-bold">⭐ 4.9/5</p>
              <p className="text-[10px] text-[hsl(20,10%,50%)]">Client Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services with hover cards */}
      <section id="services" className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-10">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsla(350,75%,50%,0.15)" }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(20,15%,90%)] transition-all">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl" style={{ background: `hsl(${350 + i * 20}, 70%, 95%)` }}>
                {["🎯", "📸", "📱"][i]}
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(20,10%,50%)] mb-4">{s.desc}</p>
              <p className="text-[hsl(350,75%,50%)] font-semibold">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials with cards */}
      <section className="bg-[hsl(30,20%,94%)] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-10">{d.successStories}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.testimonials.map((tm: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 relative">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-[hsl(45,90%,50%)] text-[hsl(45,90%,50%)]" />)}</div>
                <p className="text-[hsl(20,10%,40%)] mb-4 italic text-sm leading-relaxed">"{tm.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full" style={{ background: `hsl(${350 + i * 40}, 50%, 75%)` }} />
                  <div>
                    <p className="font-semibold text-sm">{tm.name}</p>
                    <p className="text-xs text-[hsl(20,10%,55%)]">{tm.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Instagram className="w-5 h-5 text-[hsl(20,10%,50%)] hover:text-[hsl(350,75%,50%)] transition cursor-pointer" />
          <Linkedin className="w-5 h-5 text-[hsl(20,10%,50%)] hover:text-[hsl(350,75%,50%)] transition cursor-pointer" />
          <Youtube className="w-5 h-5 text-[hsl(20,10%,50%)] hover:text-[hsl(350,75%,50%)] transition cursor-pointer" />
        </div>
        <p className="text-sm text-[hsl(20,10%,55%)]">{d.footer}</p>
      </footer>
    </div>
  );
}
