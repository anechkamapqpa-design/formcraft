import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function EducationPlatform() {
  const { t } = useLang();
  const d = (t.demos as any).educationPlatform;
  return (
    <div className="min-h-screen bg-[hsl(45,40%,97%)] text-[hsl(220,30%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/16" className="text-sm text-[hsl(220,15%,50%)] hover:text-[hsl(220,30%,15%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(260,70%,55%)]">🎓 EduFlow</span>
        <button className="text-sm bg-[hsl(260,70%,55%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg">{d.signUp}</button>
      </nav>
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-[hsl(45,80%,85%)] text-[hsl(30,80%,35%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(260,70%,55%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-10">{d.heroSubtitle}</p>
          <button className="bg-[hsl(260,70%,55%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(260,70%,45%)] transition">{d.startLearning}</button>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
          {d.courses.map((c: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(220,20%,90%)] p-5 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg mb-3 mx-auto" style={{ background: c.color }} />
              <h3 className="font-bold text-sm">{c.title}</h3>
              <p className="text-xs text-[hsl(220,15%,55%)] mt-1">{c.count}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">{d.instructorsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.instructors.map((inst: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(260,50%,90%)] mx-auto mb-3" />
              <h3 className="font-bold text-sm">{inst.name}</h3>
              <p className="text-xs text-[hsl(220,15%,55%)]">{inst.subject}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,20%,90%)] py-8 text-center text-sm text-[hsl(220,15%,60%)]">{d.footer}</footer>
    </div>
  );
}
