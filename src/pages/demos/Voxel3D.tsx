import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, ChevronRight, Zap, Shield, Cpu, Globe, Layers, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FloatingCube() {
  return (
    <div className="perspective-[800px] w-48 h-48 md:w-64 md:h-64">
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          animation: "rotateCube 12s ease-in-out infinite",
        }}
      >
        {[
          { transform: "translateZ(80px)", bg: "linear-gradient(135deg, hsl(260,80%,55%), hsl(200,90%,55%))" },
          { transform: "rotateY(180deg) translateZ(80px)", bg: "linear-gradient(135deg, hsl(200,90%,55%), hsl(170,80%,50%))" },
          { transform: "rotateY(-90deg) translateZ(80px)", bg: "linear-gradient(135deg, hsl(320,80%,55%), hsl(260,80%,55%))" },
          { transform: "rotateY(90deg) translateZ(80px)", bg: "linear-gradient(135deg, hsl(170,80%,50%), hsl(60,80%,50%))" },
          { transform: "rotateX(90deg) translateZ(80px)", bg: "linear-gradient(135deg, hsl(260,80%,60%), hsl(320,80%,55%))" },
          { transform: "rotateX(-90deg) translateZ(80px)", bg: "linear-gradient(135deg, hsl(200,90%,60%), hsl(260,80%,55%))" },
        ].map((face, i) => (
          <div
            key={i}
            className="absolute inset-[15%] rounded-2xl border border-white/20 backdrop-blur-sm"
            style={{
              transform: face.transform,
              background: face.bg,
              opacity: 0.75,
              boxShadow: "0 0 40px hsl(260,80%,55%,0.3), inset 0 0 30px rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(target.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Voxel3D() {
  const { t } = useLang();
  const d = (t.demos as any).voxel3D;

  return (
    <div className="min-h-screen bg-[hsl(240,20%,4%)] text-white overflow-hidden">
      <style>{`
        @keyframes rotateCube {
          0% { transform: rotateX(-20deg) rotateY(0deg); }
          25% { transform: rotateX(-10deg) rotateY(90deg); }
          50% { transform: rotateX(-25deg) rotateY(180deg); }
          75% { transform: rotateX(-15deg) rotateY(270deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes grid-scroll {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(80px); }
        }
      `}</style>

      {/* BG Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(260,80%,50%)] rounded-full blur-[250px] opacity-15" style={{ animation: "pulse-glow 6s ease-in-out infinite" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(200,90%,50%)] rounded-full blur-[200px] opacity-10" style={{ animation: "pulse-glow 8s ease-in-out infinite 2s" }} />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-[hsl(320,80%,50%)] rounded-full blur-[200px] opacity-8" style={{ animation: "pulse-glow 7s ease-in-out infinite 4s" }} />
      </div>

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/[0.06]">
        <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          {d.back}
        </Link>
        <span className="text-xl font-black tracking-tight">
          Voxel<span className="bg-gradient-to-r from-[hsl(260,80%,65%)] to-[hsl(200,90%,60%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>3D</span>
        </span>
        <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_hsl(260,80%,55%,0.4)] transition-shadow cursor-pointer">
          {d.getStarted}
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-[90vh] flex items-center px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(260,80%,55%)]/10 text-[hsl(260,80%,70%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(260,80%,55%)]/20">
              <Zap className="w-3 h-3" /> {d.badge}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
              {d.heroTitle1}<br />
              <span className="bg-gradient-to-r from-[hsl(260,80%,65%)] via-[hsl(200,90%,60%)] to-[hsl(170,80%,55%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                {d.heroTitle2}
              </span><br />
              {d.heroTitle3}
            </h1>
            <p className="text-lg text-white/40 max-w-lg mb-8 leading-relaxed">{d.heroSubtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_30px_hsl(260,80%,55%,0.4)] transition-all">
                {d.startBtn} <ChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 border border-white/15 text-white/70 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-all">
                <Play className="w-4 h-4" /> {d.watchDemo}
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex justify-center"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <FloatingCube />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-16 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {d.stats.map((s: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[hsl(260,80%,65%)] to-[hsl(200,90%,60%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                <AnimatedCounter target={s.val} suffix={s.val.replace(/[0-9]/g, "")} />
              </div>
              <p className="text-sm text-white/35 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Product Demo */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(260,80%,65%)] mb-3 block">{d.demoLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{d.demoTitle}</h2>
          </div>
          <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6">
              {d.demoFeatures.map((f: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-[hsl(260,80%,55%)]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(260,80%,55%)]/20 to-[hsl(200,90%,55%)]/20 border border-[hsl(260,80%,55%)]/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(260,80%,55%,0.2)] transition-shadow">
                    <span className="text-xl">{f.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(200,90%,60%)] mb-3 block">{d.featuresLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{d.featuresTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features.map((f: any, i: number) => {
              const icons = [Zap, Shield, Cpu, Globe, Layers, Rocket];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[hsl(260,80%,55%)]/30 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(260,80%,55%)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-8 h-8 text-[hsl(260,80%,65%)] mb-4" />
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(170,80%,55%)] mb-3 block">{d.techLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{d.techTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {d.techStack.map((tech: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center hover:bg-white/[0.07] hover:border-[hsl(260,80%,55%)]/20 transition-all group cursor-default"
              >
                <span className="text-2xl mb-2 block">{tech.icon}</span>
                <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
                <p className="text-[11px] text-white/30">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(320,80%,60%)] mb-3 block">{d.pricingLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{d.pricingTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.plans.map((plan: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl p-6 border transition-all ${
                  i === 1
                    ? "bg-gradient-to-b from-[hsl(260,80%,55%)]/10 to-[hsl(200,90%,55%)]/5 border-[hsl(260,80%,55%)]/30 shadow-[0_0_40px_hsl(260,80%,55%,0.1)]"
                    : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-xs font-bold rounded-full">
                    {d.popular}
                  </span>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-white/30">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f: string, fi: number) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(260,80%,65%)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    i === 1
                      ? "bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white hover:shadow-[0_0_20px_hsl(260,80%,55%,0.4)]"
                      : "bg-white/[0.06] border border-white/[0.1] text-white/70 hover:bg-white/[0.1]"
                  }`}
                >
                  {d.getStarted}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(260,80%,55%)]/10 via-[hsl(200,90%,55%)]/5 to-[hsl(320,80%,55%)]/10 rounded-3xl blur-[60px]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 whitespace-pre-line">{d.ctaTitle}</h2>
            <p className="text-lg text-white/35 max-w-xl mx-auto mb-10">{d.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder={d.emailPlaceholder}
                className="w-full sm:w-80 px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-white/25 outline-none focus:border-[hsl(260,80%,55%)]/40 transition-colors"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_30px_hsl(260,80%,55%,0.4)] transition-all">
                {d.ctaBtn}
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-8 px-6 text-center">
        <p className="text-sm text-white/25">{d.footer}</p>
      </footer>
    </div>
  );
}
