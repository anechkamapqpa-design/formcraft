import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Shield, BarChart3, Users, Globe } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

const featureIcons = [Zap, Shield, BarChart3, Users, Globe, CheckCircle];

export default function SaaSClean() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.saasClean;

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to={lp("/template/6")} className="text-sm text-[hsl(220,15%,50%)] hover:text-[hsl(220,25%,15%)] transition">{d.back}</Link>
          <span className="text-xl font-bold text-[hsl(230,70%,55%)]">✦ Saasify</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-[hsl(220,15%,45%)]">{d.logIn}</button>
          <button className="text-sm bg-[hsl(230,70%,55%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg hover:bg-[hsl(230,70%,45%)] transition">{d.startFree}</button>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto text-center px-8 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-xs font-semibold bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full mb-6">{d.badge}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[hsl(220,30%,12%)]">{d.heroTitle1}<br />{d.heroTitle2}</h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">{d.heroSubtitle}</p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[hsl(350,80%,55%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(350,80%,45%)] transition shadow-lg">{d.getStarted}</button>
            <button className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(220,20%,95%)] transition">{d.watchDemo}</button>
          </div>
        </motion.div>
      </section>
      <section id="features" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-center text-3xl font-bold mb-3">{d.featuresTitle}</h2>
        <p className="text-center text-[hsl(220,15%,50%)] mb-12">{d.featuresSubtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {d.features.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(220,20%,92%)] hover:shadow-lg transition-all">
                <Icon className="w-10 h-10 text-[hsl(230,70%,55%)] mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-[hsl(220,15%,50%)]">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,20%,90%)] py-8 text-center text-sm text-[hsl(220,15%,60%)]">{d.footer}</footer>
    </div>
  );
}
