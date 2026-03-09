import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PersonalBrand() {
  const { t } = useLang();
  const d = t.demos.personalBrand;

  return (
    <div className="min-h-screen bg-[hsl(30,25%,97%)] text-[hsl(20,15%,20%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/4" className="text-sm text-[hsl(20,10%,55%)] hover:text-[hsl(20,15%,20%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(350,75%,50%)]">Creator Kit</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-[hsl(20,10%,45%)]">
          <a href="#services">{d.servicesTitle}</a>
          <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition">{d.bookCall}</button>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-8 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,75%,50%)] mb-4 block">{d.badge}</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>{d.heroTitle}</h1>
            <p className="text-lg text-[hsl(20,10%,45%)] mb-8 max-w-lg">{d.heroSubtitle}</p>
            <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition flex items-center gap-2">{d.cta} <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <img src="/images/demos/creator-portrait.jpg" alt="Creator" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>
      <section id="services" className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-10">{d.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(20,15%,90%)] hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(20,10%,50%)] mb-4">{s.desc}</p>
              <p className="text-[hsl(350,75%,50%)] font-semibold">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[hsl(30,20%,94%)] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-10">{d.successStories}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.testimonials.map((tm, i) => (
              <div key={i} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6">
                <p className="text-[hsl(20,10%,40%)] mb-4 italic">"{tm.text}"</p>
                <p className="font-semibold">{tm.name}</p>
                <p className="text-xs text-[hsl(20,10%,55%)]">{tm.role}</p>
              </div>
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
