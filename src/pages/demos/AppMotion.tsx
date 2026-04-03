import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang, useLangPath } from "@/lib/i18n";
import { Smartphone, Zap, Shield, BarChart3, Star, Download, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const screens = [
  "/images/demos/appmotion-screen1.jpg",
  "/images/demos/appmotion-screen2.jpg",
  "/images/demos/appmotion-screen3.jpg",
];

export default function AppMotion() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = (t.demos as any).appMotion;
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="min-h-screen bg-[hsl(240,15%,98%)] text-[hsl(240,20%,15%)]" style={{ fontFamily: "'system-ui', -apple-system, sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[hsl(240,15%,98%)]/80 backdrop-blur-xl border-b border-[hsl(240,10%,90%)]/50">
        <Link to={lp("/template/8")} className="text-[hsl(240,10%,50%)] text-sm hover:text-[hsl(260,80%,55%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] bg-clip-text text-transparent">
          AppMotion
        </h1>
        <a href="#download" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[hsl(260,80%,55%)]/25 transition-all">
          {d.downloadBtn}
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-[hsl(260,80%,85%)] rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[hsl(200,90%,85%)] rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(280,70%,90%)] rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(260,80%,95%)] text-[hsl(260,80%,45%)] text-xs font-semibold rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" />{d.badge}
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              {d.heroTitle1}<br />
              <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] bg-clip-text text-transparent">{d.heroTitle2}</span><br />
              {d.heroTitle3}
            </h2>
            <p className="text-lg text-[hsl(240,10%,45%)] max-w-lg mb-8 leading-relaxed">{d.heroSubtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#download" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[hsl(260,80%,55%)]/25 transition-all">
                <Download className="w-4 h-4" />{d.downloadApp}
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[hsl(240,10%,85%)] text-[hsl(240,20%,30%)] font-semibold rounded-full hover:border-[hsl(260,80%,55%)] hover:text-[hsl(260,80%,55%)] transition-all">
                {d.learnMore}<ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {(d.heroStats as any[]).map((stat: any, i: number) => (
                <div key={i}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] bg-clip-text text-transparent">{stat.val}</p>
                  <p className="text-xs text-[hsl(240,10%,50%)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-[hsl(260,80%,85%)] to-[hsl(200,90%,85%)] rounded-[3rem] blur-2xl opacity-40" />
              <div className="relative w-[260px] h-[520px] bg-[hsl(240,20%,10%)] rounded-[2.5rem] p-2 shadow-2xl shadow-[hsl(260,50%,30%)]/20 border border-[hsl(240,10%,25%)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[hsl(240,20%,10%)] rounded-b-2xl z-10" />
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img src="/images/demos/appmotion-hero-bg.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(260,80%,55%)] mb-3 block">{d.featuresLabel}</span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{d.featuresTitle}</h3>
            <p className="text-[hsl(240,10%,45%)] max-w-2xl mx-auto">{d.featuresSubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {([Smartphone, Zap, Shield, BarChart3] as const).map((Icon, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[hsl(240,10%,92%)] hover:border-[hsl(260,80%,80%)] hover:shadow-lg hover:shadow-[hsl(260,80%,90%)]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{d.features[i].title}</h4>
                <p className="text-sm text-[hsl(240,10%,45%)] leading-relaxed">{d.features[i].desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Function Demo */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[hsl(260,30%,12%)] to-[hsl(240,25%,8%)] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(200,90%,65%)] mb-3 block">{d.demoLabel}</span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{d.demoTitle}</h3>
            <p className="text-[hsl(240,10%,65%)] max-w-2xl mx-auto">{d.demoSubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {(d.demoFeatures as any[]).map((feat: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveScreen(i)}
                  className={`p-5 rounded-xl cursor-pointer transition-all ${activeScreen === i ? 'bg-white/10 border border-[hsl(260,80%,55%)]/50 shadow-lg' : 'hover:bg-white/5 border border-transparent'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${activeScreen === i ? 'bg-gradient-to-br from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)]' : 'bg-white/10'}`}>
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feat.title}</h4>
                      <p className="text-sm text-[hsl(240,10%,60%)]">{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div key={activeScreen} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-[hsl(260,80%,45%)] to-[hsl(200,90%,45%)] rounded-[3rem] blur-2xl opacity-20" />
                <div className="relative w-[240px] h-[480px] bg-[hsl(240,20%,8%)] rounded-[2.5rem] p-2 shadow-2xl border border-[hsl(240,10%,20%)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[hsl(240,20%,8%)] rounded-b-xl z-10" />
                  <div className="w-full h-full rounded-[2rem] overflow-hidden">
                    <img src={screens[activeScreen]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(260,80%,55%)] mb-3 block">{d.screensLabel}</span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">{d.screensTitle}</h3>
          </motion.div>
          <div className="flex gap-6 justify-center flex-wrap">
            {screens.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative group">
                <div className="w-[200px] h-[400px] bg-[hsl(240,20%,10%)] rounded-[2rem] p-1.5 shadow-xl group-hover:shadow-2xl group-hover:shadow-[hsl(260,80%,55%)]/15 transition-all group-hover:-translate-y-2 duration-500 border border-[hsl(240,10%,25%)]">
                  <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 md:px-12 bg-[hsl(240,15%,96%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(260,80%,55%)] mb-3 block">{d.reviewsLabel}</span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">{d.reviewsTitle}</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(d.reviews as any[]).map((review: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-[hsl(240,10%,92%)] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[hsl(45,95%,55%)] text-[hsl(45,95%,55%)]" />
                  ))}
                </div>
                <p className="text-sm text-[hsl(240,10%,35%)] leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-[hsl(240,10%,50%)]">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] p-12 md:p-16 text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{d.ctaTitle}</h3>
              <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">{d.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[hsl(260,80%,45%)] font-bold rounded-full hover:shadow-xl transition-all">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </button>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur text-white font-bold rounded-full border border-white/30 hover:bg-white/25 transition-all">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                  Google Play
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/70">
                {(d.ctaFeatures as string[]).map((f: string, i: number) => (
                  <span key={i} className="flex items-center gap-1.5"><Check className="w-4 h-4" />{f}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(240,10%,90%)] py-10 text-center">
        <p className="text-xl font-bold bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] bg-clip-text text-transparent mb-2">AppMotion</p>
        <p className="text-xs text-[hsl(240,10%,55%)]">{d.footer}</p>
      </footer>
    </div>
  );
}
