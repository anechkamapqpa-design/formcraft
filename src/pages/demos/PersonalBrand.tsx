import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
const services = [
  { title: "Brand Strategy", desc: "Define your unique positioning and visual identity", price: "From $2,500" },
  { title: "Content Creation", desc: "Professional photography, video, and copywriting", price: "From $1,800" },
  { title: "Social Media Management", desc: "Full-service content calendar and engagement", price: "From $3,000/mo" },
];
const testimonials = [
  { name: "Sarah K.", role: "Fitness Coach", text: "My followers grew 300% in just 3 months. Game changer!" },
  { name: "Alex M.", role: "Tech Influencer", text: "The brand strategy session alone was worth every penny." },
  { name: "Jordan L.", role: "Chef & Author", text: "Finally, my online presence matches my real-world reputation." },
];
export default function PersonalBrand() {
  return (
    <div className="min-h-screen bg-[hsl(30,25%,97%)] text-[hsl(20,15%,20%)]">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link to="/template/4" className="text-sm text-[hsl(20,10%,55%)] hover:text-[hsl(20,15%,20%)] transition">← Back</Link>
        <span className="text-xl font-bold text-[hsl(350,75%,50%)]">Creator Kit</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-[hsl(20,10%,45%)]">
          <a href="#services">Services</a>
          <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition">Book a Call</button>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-8 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,75%,50%)] mb-4 block">Your Personal Brand Partner</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>Helping You Build & Grow Your Online Presence.</h1>
            <p className="text-lg text-[hsl(20,10%,45%)] mb-8 max-w-lg">I help creators, coaches, and entrepreneurs build authentic personal brands that attract opportunities and grow revenue.</p>
            <button className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-lg font-semibold hover:bg-[hsl(350,75%,42%)] transition flex items-center gap-2">Let's Work Together <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <img src="/images/demos/creator-portrait.jpg" alt="Creator" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>
      <section id="services" className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-10">Services & Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(20,15%,90%)] hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(20,10%,50%)] mb-4">{s.desc}</p>
              <p className="text-[hsl(350,75%,50%)] font-semibold">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[hsl(30,20%,94%)] py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-10">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6">
                <p className="text-[hsl(20,10%,40%)] mb-4 italic">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-[hsl(20,10%,55%)]">{t.role}</p>
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
        <p className="text-sm text-[hsl(20,10%,55%)]">© 2026 Creator Kit. All rights reserved.</p>
      </footer>
    </div>
  );
}
