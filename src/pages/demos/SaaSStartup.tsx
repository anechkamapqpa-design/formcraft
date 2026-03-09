import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { CheckCircle, Zap, Shield, Users, Code, Headphones } from "lucide-react";

const featureIcons = [Zap, Shield, Users, Code, Headphones, CheckCircle];

export default function SaaSStartup() {
  const { t } = useLang();
  const d = (t.demos as any).saasStartup;
  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/template/3" className="text-sm text-[hsl(220,15%,50%)] hover:text-[hsl(220,25%,15%)] transition">{d.back}</Link>
        <span className="text-xl font-bold text-[hsl(230,70%,50%)]">{d.brand}</span>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-[hsl(220,15%,45%)] cursor-pointer hover:text-[hsl(220,25%,15%)] transition">{d.logIn}</span>
          <button className="text-sm bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] px-5 py-2 rounded-lg hover:bg-[hsl(230,70%,45%)] transition">{d.startFree}</button>
        </div>
      </nav>

      {/* Hero with mock dashboard */}
      <section className="max-w-5xl mx-auto text-center px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span className="text-[hsl(230,70%,50%)]">{d.heroTitle2}</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">{d.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(230,70%,45%)] transition shadow-lg shadow-[hsl(230,70%,50%)]/25">{d.getStarted}</button>
            <button className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold hover:border-[hsl(220,20%,70%)] transition">{d.watchDemo}</button>
          </div>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-16 bg-[hsl(0,0%,100%)] rounded-2xl border border-[hsl(220,20%,90%)] shadow-2xl shadow-[hsl(230,70%,50%)]/10 p-4 max-w-4xl mx-auto">
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,70%,60%)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,80%,55%)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(120,50%,55%)]" />
          </div>
          <div className="grid grid-cols-4 gap-3 mb-3">
            {[{ v: "$48.2K", l: "Revenue", c: "hsl(230,70%,50%)" }, { v: "2,841", l: "Users", c: "hsl(160,60%,45%)" }, { v: "4.8%", l: "Conv. Rate", c: "hsl(280,60%,55%)" }, { v: "+32%", l: "Growth", c: "hsl(20,80%,55%)" }].map((m, i) => (
              <div key={i} className="bg-[hsl(220,20%,98%)] rounded-lg p-3 text-left">
                <p className="text-[10px] text-[hsl(220,15%,55%)]">{m.l}</p>
                <p className="text-lg font-bold" style={{ color: m.c }}>{m.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(220,20%,98%)] rounded-lg h-32 flex items-end p-3 gap-1">
            {[30, 45, 38, 62, 55, 72, 48, 80, 65, 88, 75, 92, 68, 85, 78, 95].map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-t bg-[hsl(230,70%,50%)]" initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.05, duration: 0.4, ease: "easeOut" }} style={{ opacity: 0.6 + (h / 250) }} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trusted by logos */}
      <section className="max-w-4xl mx-auto px-8 py-8 text-center">
        <p className="text-xs text-[hsl(220,15%,60%)] tracking-wider uppercase mb-6">Trusted by 500+ companies</p>
        <div className="flex justify-center gap-10 opacity-30">
          {["ACME", "GLOBEX", "INITECH", "SOYLENT", "UMBRELLA"].map((name, i) => (
            <span key={i} className="text-sm font-bold tracking-wider">{name}</span>
          ))}
        </div>
      </section>

      {/* Features with icons */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">{d.featuresTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.features.map((f: any, i: number) => {
            const Icon = featureIcons[i] || CheckCircle;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="bg-[hsl(0,0%,100%)] border border-[hsl(220,20%,92%)] rounded-xl p-6 hover:shadow-lg hover:shadow-[hsl(230,70%,50%)]/5 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[hsl(230,70%,95%)] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[hsl(230,70%,50%)]" />
                </div>
                <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-[hsl(220,15%,55%)] leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">{d.pricingTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {d.plans.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className={`rounded-xl p-6 border relative overflow-hidden ${i === 1 ? "bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] border-transparent shadow-xl shadow-[hsl(230,70%,50%)]/25" : "bg-[hsl(0,0%,100%)] border-[hsl(220,20%,92%)]"}`}>
              {i === 1 && <div className="absolute top-0 right-0 bg-[hsl(45,90%,55%)] text-[hsl(0,0%,0%)] text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
              <h3 className="font-bold text-lg mb-1">{p.name}</h3>
              <p className="text-3xl font-extrabold mb-3">{p.price}</p>
              <p className={`text-xs mb-4 ${i === 1 ? "text-[hsl(0,0%,100%)]/70" : "text-[hsl(220,15%,55%)]"}`}>{p.desc}</p>
              <div className="space-y-2">
                {["Unlimited projects", "API access", "Priority support"].map((feat, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs">
                    <CheckCircle className={`w-3.5 h-3.5 ${i === 1 ? "text-[hsl(120,60%,70%)]" : "text-[hsl(230,70%,50%)]"}`} />
                    <span className={i === 1 ? "text-[hsl(0,0%,100%)]/80" : "text-[hsl(220,15%,45%)]"}>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,20%,92%)] py-8 text-center text-sm text-[hsl(220,15%,55%)]">{d.footer}</footer>
    </div>
  );
}
