import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function MedicalClinic() {
  const { t } = useLang();
  const d = (t.demos as any).medicalClinic;

  return (
    <div className="min-h-screen bg-[hsl(200,30%,98%)] text-[hsl(200,30%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto border-b border-[hsl(200,20%,90%)]">
        <Link to="/template/12" className="text-sm text-[hsl(200,15%,50%)] hover:text-[hsl(200,30%,15%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(170,60%,40%)]">✚ MediCare+</span>
        <button className="text-sm bg-[hsl(170,60%,40%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg">{d.bookNow}</button>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[hsl(170,60%,92%)] text-[hsl(170,60%,35%)] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(170,60%,45%)]" />{d.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{d.heroTitle1}<br /><span className="text-[hsl(170,60%,40%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(200,15%,50%)] max-w-xl mx-auto mb-10">{d.heroSubtitle}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {d.services.map((s: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(200,20%,90%)] p-5 text-center hover:shadow-lg transition">
              <span className="text-3xl mb-2 block">{s.icon}</span>
              <p className="text-sm font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(200,20%,90%)] py-8 text-center text-sm text-[hsl(200,15%,60%)]">{d.footer}</footer>
    </div>
  );
}
