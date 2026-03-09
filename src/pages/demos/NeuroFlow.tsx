import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function NeuroFlow() {
  const { t } = useLang();
  const d = t.demos.neuroFlow;

  return (
    <div className="min-h-screen bg-[hsl(250,25%,6%)] text-[hsl(0,0%,95%)] font-sans overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[hsl(270,80%,50%)] rounded-full blur-[200px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[hsl(200,90%,50%)] rounded-full blur-[180px] opacity-10" />
      </div>

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-5 border-b border-[hsl(270,30%,20%)]/40">
        <Link to="/template/12" className="text-sm text-[hsl(270,40%,70%)] hover:text-white transition">{d.back}</Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[hsl(270,80%,60%)] to-[hsl(200,90%,55%)] flex items-center justify-center text-xs font-black">N</div>
          <span className="font-bold text-lg tracking-tight">NeuroFlow</span>
        </div>
        <span className="text-sm font-medium px-5 py-2 rounded-full bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(200,90%,50%)] text-white">{d.getStarted}</span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(270,60%,50%)]/15 text-[hsl(270,80%,70%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(270,60%,50%)]/30">
              ⚡ {d.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              {d.heroTitle1}<br />
              <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(200,90%,60%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                {d.heroTitle2}
              </span><br />
              {d.heroTitle3}
            </h1>
            <p className="text-lg text-[hsl(250,15%,55%)] max-w-lg mb-8 leading-relaxed">{d.heroSubtitle}</p>
            <div className="flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(200,90%,50%)] font-semibold shadow-lg shadow-[hsl(270,80%,50%)]/25">
                {d.startTrial}
              </motion.button>
              <button className="px-8 py-3.5 rounded-xl border border-[hsl(270,30%,25%)] text-[hsl(250,20%,65%)] font-semibold hover:border-[hsl(270,50%,40%)] transition">
                {d.watchDemo}
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,50%)]/20 to-[hsl(200,90%,50%)]/20 rounded-2xl blur-xl" />
            <div className="relative bg-[hsl(250,20%,10%)] rounded-2xl border border-[hsl(270,30%,18%)] p-6 shadow-2xl">
              {/* Dashboard mockup */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {d.dashStats.map((stat, i) => (
                  <div key={i} className="bg-[hsl(250,20%,13%)] rounded-xl p-4 border border-[hsl(270,20%,16%)]">
                    <p className="text-[10px] text-[hsl(250,15%,45%)] uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xl font-bold mt-1" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[hsl(250,20%,13%)] rounded-xl p-4 border border-[hsl(270,20%,16%)] h-32 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, hsl(270,80%,55%), hsl(200,90%,55%))`, opacity: 0.7 + (i * 0.025) }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-10 border-y border-[hsl(270,20%,15%)] py-12 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-8">
          {d.stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-3xl font-extrabold bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(200,90%,60%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>{stat.val}</p>
              <p className="text-sm text-[hsl(250,15%,45%)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(270,60%,60%)] font-semibold mb-4">{d.featuresLabel}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{d.featuresTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.features.map((feat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-[hsl(250,20%,10%)] border border-[hsl(270,20%,16%)] rounded-2xl p-8 hover:border-[hsl(270,50%,35%)] transition group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(270,80%,55%)]/20 to-[hsl(200,90%,50%)]/20 flex items-center justify-center mb-5 text-xl">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-[hsl(250,15%,50%)] leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(270,60%,60%)] font-semibold mb-4">{d.pricingLabel}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{d.pricingTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border ${i === 1 ? 'bg-gradient-to-b from-[hsl(270,40%,15%)] to-[hsl(250,25%,10%)] border-[hsl(270,60%,40%)] scale-105' : 'bg-[hsl(250,20%,10%)] border-[hsl(270,20%,16%)]'}`}>
              {i === 1 && <span className="inline-block text-xs font-bold bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(200,90%,50%)] px-3 py-1 rounded-full mb-4">{d.popular}</span>}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}<span className="text-sm text-[hsl(250,15%,45%)] font-normal">{plan.period}</span></p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[hsl(250,15%,55%)]">
                    <span className="text-[hsl(270,80%,60%)]">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold ${i === 1 ? 'bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(200,90%,50%)] text-white' : 'border border-[hsl(270,30%,25%)] text-[hsl(250,20%,65%)] hover:border-[hsl(270,50%,40%)]'} transition`}>
                {d.getStarted}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,60%,20%)]/20 to-transparent" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{d.ctaTitle}</h2>
          <p className="text-lg text-[hsl(250,15%,50%)] mb-10 max-w-lg mx-auto">{d.ctaSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(200,90%,50%)] font-bold text-lg shadow-xl shadow-[hsl(270,80%,50%)]/20">
            {d.startTrial}
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[hsl(270,20%,15%)] py-12 text-center">
        <p className="text-sm text-[hsl(250,15%,35%)]">{d.footer}</p>
      </footer>
    </div>
  );
}
