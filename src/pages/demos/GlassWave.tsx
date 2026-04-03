import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang, useLangPath } from "@/lib/i18n";

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}

function GradientOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`} />;
}

export default function GlassWave() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.glassWave;

  return (
    <div className="min-h-screen bg-[hsl(220,35%,8%)] text-white font-sans overflow-hidden relative">
      {/* Background orbs */}
      <GradientOrb className="w-[500px] h-[500px] bg-[hsl(210,90%,55%)] opacity-20 top-[-10%] right-[-5%]" />
      <GradientOrb className="w-[400px] h-[400px] bg-[hsl(280,80%,55%)] opacity-15 top-[30%] left-[-10%]" />
      <GradientOrb className="w-[350px] h-[350px] bg-[hsl(170,70%,50%)] opacity-12 bottom-[10%] right-[10%]" />
      <GradientOrb className="w-[300px] h-[300px] bg-[hsl(320,80%,55%)] opacity-10 bottom-[-5%] left-[20%]" />

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-5">
        <Link to={lp("/template/13")} className="text-sm text-white/50 hover:text-white transition">{d.back}</Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[hsl(210,90%,60%)] to-[hsl(280,80%,60%)] flex items-center justify-center text-xs font-black">G</div>
          <span className="font-bold text-lg">GlassWave</span>
        </div>
        <span className="text-sm font-medium px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition cursor-pointer">{d.getStarted}</span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/10 text-[hsl(210,80%,70%)] text-xs font-semibold rounded-full mb-8">
            ✨ {d.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            {d.heroTitle1}<br />
            <span className="bg-gradient-to-r from-[hsl(210,90%,65%)] via-[hsl(260,80%,70%)] to-[hsl(320,80%,65%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
              {d.heroTitle2}
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg text-white/40 max-w-2xl mx-auto mb-10">{d.heroSubtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(260,80%,60%)] font-semibold shadow-lg shadow-[hsl(220,80%,50%)]/20 hover:shadow-[hsl(220,80%,50%)]/30 transition">
              {d.startTrial}
            </button>
            <button className="px-8 py-3.5 rounded-xl bg-white/[0.07] backdrop-blur-sm border border-white/10 font-semibold text-white/70 hover:bg-white/[0.12] transition">
              {d.watchDemo}
            </button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          <GlassCard className="max-w-5xl mx-auto p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[hsl(0,80%,60%)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,60%)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(130,60%,50%)]" />
              <div className="flex-1" />
              <div className="h-7 w-48 bg-white/[0.06] rounded-lg" />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {d.dashStats.map((stat, i) => (
                <GlassCard key={i} className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-[hsl(130,60%,55%)] mt-1">+{stat.trend}%</p>
                </GlassCard>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <GlassCard className="col-span-2 p-4 h-40">
                <p className="text-xs text-white/30 mb-3">{d.chartLabel}</p>
                <div className="flex items-end gap-[6px] h-24">
                  {[35, 50, 40, 65, 55, 80, 60, 90, 70, 85, 75, 95, 68, 88, 72].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t transition-all"
                      style={{ height: `${h}%`, background: `linear-gradient(to top, hsl(210,90%,55%), hsl(260,80%,65%))`, opacity: 0.5 + i * 0.03 }} />
                  ))}
                </div>
              </GlassCard>
              <GlassCard className="p-4 h-40">
                <p className="text-xs text-white/30 mb-3">{d.activityLabel}</p>
                <div className="space-y-3">
                  {[
                    { color: "hsl(210,90%,60%)", w: "85%" },
                    { color: "hsl(260,80%,65%)", w: "65%" },
                    { color: "hsl(170,70%,55%)", w: "45%" },
                    { color: "hsl(320,80%,60%)", w: "75%" },
                  ].map((bar, i) => (
                    <div key={i} className="h-4 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: bar.w, backgroundColor: bar.color, opacity: 0.7 }} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(210,80%,65%)] font-semibold mb-4">{d.featuresLabel}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{d.featuresTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.features.map((feat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <GlassCard className="p-8 h-full hover:bg-white/[0.1] transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(210,90%,55%)]/20 to-[hsl(280,80%,60%)]/20 border border-white/10 flex items-center justify-center mb-5 text-xl group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-white/40 leading-relaxed">{feat.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[hsl(210,80%,65%)] font-semibold mb-4">{d.integrationsLabel}</p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-12">{d.integrationsTitle}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {d.integrations.map((name, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <GlassCard className="px-6 py-3 hover:bg-white/[0.12] transition cursor-default">
                <span className="text-sm font-medium text-white/60">{name}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(210,80%,65%)] font-semibold mb-4">{d.pricingLabel}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{d.pricingTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className={`p-8 h-full ${i === 1 ? 'bg-white/[0.1] border-[hsl(210,80%,60%)]/30 scale-105' : ''}`}>
                {i === 1 && <span className="inline-block text-xs font-bold bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(260,80%,60%)] px-3 py-1 rounded-full mb-4">{d.popular}</span>}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-6">{plan.price}<span className="text-sm text-white/30 font-normal">{plan.period}</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="text-[hsl(210,90%,65%)]">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(260,80%,60%)]' : 'bg-white/[0.07] border border-white/10 text-white/70 hover:bg-white/[0.12]'}`}>
                  {d.getStarted}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(210,80%,65%)] font-semibold mb-4">{d.testimonialsLabel}</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{d.testimonialsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="p-8 h-full">
                <p className="text-white/50 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-white/30">{t.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 text-center">
        <GradientOrb className="w-[600px] h-[600px] bg-[hsl(220,90%,50%)] opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{d.ctaTitle}</h2>
          <p className="text-lg text-white/40 mb-10 max-w-lg mx-auto">{d.ctaSubtitle}</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[hsl(210,90%,55%)] to-[hsl(260,80%,60%)] font-bold text-lg shadow-xl shadow-[hsl(220,80%,50%)]/20">
            {d.startTrial}
          </motion.button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06] py-12 text-center">
        <p className="text-sm text-white/20">{d.footer}</p>
      </footer>
    </div>
  );
}
