import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

// Palette — eclectic vintage salon: deep emerald, magenta, cream, gold
const GREEN = "hsl(158,42%,15%)";
const GREEN_MID = "hsl(156,38%,22%)";
const CREAM = "hsl(42,46%,90%)";
const MAGENTA = "hsl(322,52%,48%)";
const GOLD = "hsl(42,78%,62%)";

const harlequin = {
  backgroundImage: "repeating-conic-gradient(from 45deg, hsl(0,0%,8%) 0deg 90deg, hsl(42,46%,90%) 90deg 180deg)",
  backgroundSize: "64px 64px",
};

function Floaty({ emoji, className, delay = 0, dur = 7, drift = 16, rot = 8 }: { emoji: string; className?: string; delay?: number; dur?: number; drift?: number; rot?: number }) {
  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none select-none absolute ${className ?? ""}`}
      animate={{ y: [0, -drift, 0], rotate: [0, rot, -rot * 0.6, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {emoji}
    </motion.span>
  );
}

const wordUp = {
  hidden: { opacity: 0, y: 60, rotate: -3 },
  visible: (i: number) => ({ opacity: 1, y: 0, rotate: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

export default function Curiosa() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.curiosa;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const driftSlow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const driftFast = useTransform(scrollYProgress, [0, 1], [0, 160]);

  const marquee = [...d.marquee, ...d.marquee];

  return (
    <div className="min-h-screen font-sans selection:bg-[hsl(322,52%,48%)] selection:text-white" style={{ background: GREEN, color: CREAM }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-3.5 backdrop-blur-md" style={{ background: "hsl(158,42%,15%,0.82)", borderBottom: `1px solid hsl(42,46%,90%,0.12)` }}>
        <Link to={lp("/")} className="text-xs md:text-sm font-medium tracking-wide opacity-70 hover:opacity-100 transition-opacity">{d.back}</Link>
        <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Curi<span style={{ color: GOLD }}>🔑</span>sa
        </span>
        <span className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full cursor-pointer transition-transform hover:scale-105" style={{ background: MAGENTA, color: "white" }}>
          {d.reserve}
        </span>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 md:pt-28">
        {/* floating collage */}
        <motion.div style={{ y: driftSlow }} className="absolute inset-0 pointer-events-none text-4xl md:text-6xl">
          <Floaty emoji="🦩" className="top-[14%] left-[8%] text-5xl md:text-7xl" dur={8} drift={22} />
          <Floaty emoji="🌙" className="top-[20%] right-[10%]" delay={0.5} dur={9} rot={12} />
          <Floaty emoji="🌹" className="bottom-[26%] left-[14%]" delay={1} dur={7} />
          <Floaty emoji="🕯️" className="top-[46%] left-[46%] text-3xl md:text-5xl" delay={0.3} dur={6} drift={10} />
        </motion.div>
        <motion.div style={{ y: driftFast }} className="absolute inset-0 pointer-events-none text-4xl md:text-6xl">
          <Floaty emoji="🎻" className="bottom-[30%] right-[12%]" delay={0.8} dur={8} rot={14} />
          <Floaty emoji="🍄" className="top-[30%] left-[24%] text-3xl md:text-4xl" delay={1.4} dur={6} />
          <Floaty emoji="🦋" className="bottom-[40%] right-[30%] text-3xl md:text-4xl" delay={0.2} dur={7} drift={20} />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 flex-1 flex flex-col justify-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-xs md:text-sm uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>
            {d.heroKicker}
          </motion.p>
          <h1 className="font-black leading-[0.88] tracking-tight text-[clamp(3rem,13vw,11rem)]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {[d.heroTitle1, d.heroTitle2, d.heroTitle3].map((line: string, i: number) => (
              <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={wordUp} className="block" style={i === 2 ? { color: GOLD, fontStyle: "italic" } : undefined}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-7 max-w-xl text-base md:text-xl leading-relaxed opacity-80">
            {d.heroSubtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-9 flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105" style={{ background: MAGENTA, color: "white" }}>
              {d.heroBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-7 py-3.5 rounded-full text-sm font-bold border transition-colors hover:bg-[hsl(42,46%,90%)] hover:text-[hsl(158,42%,15%)]" style={{ borderColor: "hsl(42,46%,90%,0.4)", color: CREAM }}>
              {d.heroBtn2}
            </button>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative z-10 overflow-hidden py-4 border-t" style={{ borderColor: "hsl(42,46%,90%,0.14)", background: GREEN_MID }}>
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 32s linear infinite" }}>
            {marquee.map((item: string, i: number) => (
              <span key={i} className="mx-6 text-sm font-semibold uppercase tracking-[0.2em] flex items-center gap-4" style={{ color: i % 2 ? GOLD : CREAM }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: MAGENTA }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome on harlequin */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={harlequin}>
        <div className="absolute inset-0" style={{ background: "hsl(158,42%,15%,0.55)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-2xl mx-auto px-8 py-12 md:py-16 text-center rounded-[2rem] shadow-2xl"
          style={{ background: CREAM, color: GREEN }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: MAGENTA }}>{d.welcomeLabel}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{d.welcomeTitle}</h2>
          <p className="mt-5 text-base md:text-lg opacity-70 leading-relaxed">{d.welcomeText}</p>
          <Floaty emoji="☕" className="-top-7 -left-3 text-5xl" dur={6} />
          <Floaty emoji="🎩" className="-bottom-6 -right-2 text-5xl" delay={0.6} dur={7} rot={12} />
        </motion.div>
      </section>

      {/* Concept */}
      <section className="py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.4em] block mb-5" style={{ color: GOLD }}>{d.conceptLabel}</motion.span>
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight whitespace-pre-line max-w-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            {d.conceptTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-base md:text-lg opacity-75 leading-relaxed">
            {d.conceptText}
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {d.conceptPoints.map((p: { emoji: string; title: string; desc: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
                className="rounded-3xl p-7 cursor-default"
                style={{ background: GREEN_MID, border: `1px solid hsl(42,46%,90%,0.1)` }}
              >
                <motion.span className="text-5xl block mb-4" animate={{ rotate: [0, 8, -6, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}>{p.emoji}</motion.span>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 md:py-28 px-5 md:px-10" style={{ background: GREEN_MID }}>
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: GOLD }}>{d.spacesLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>{d.spacesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {d.spaces.map((s: { emoji: string; title: string; desc: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.025, rotate: i % 2 ? 0.8 : -0.8 }}
                className="group flex items-start gap-5 rounded-3xl p-7 cursor-pointer"
                style={{ background: GREEN, border: `1px solid hsl(42,46%,90%,0.1)` }}
              >
                <span className="text-5xl shrink-0 transition-transform group-hover:scale-110">{s.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-1.5" style={{ fontFamily: "'Playfair Display', serif", color: GOLD }}>{s.title}</h3>
                  <p className="text-sm opacity-75 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: GOLD }}>{d.eventsLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>{d.eventsTitle}</h2>
          <div className="space-y-3">
            {d.events.map((e: { date: string; title: string; type: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ x: 8 }}
                className="group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 cursor-pointer"
                style={{ background: GREEN_MID, border: `1px solid hsl(42,46%,90%,0.1)` }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold uppercase tracking-widest w-24 shrink-0" style={{ color: GOLD }}>{e.date}</span>
                  <span className="text-lg md:text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{e.title}</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shrink-0" style={{ background: MAGENTA, color: "white" }}>{e.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="relative py-20 md:py-28 px-5 md:px-10 overflow-hidden" style={{ background: CREAM, color: GREEN }}>
        <Floaty emoji="🍰" className="top-10 right-[8%] text-5xl md:text-6xl" dur={7} />
        <Floaty emoji="🫖" className="bottom-10 left-[8%] text-5xl md:text-6xl" delay={0.7} dur={8} rot={10} />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: MAGENTA }}>{d.menuLabel}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{d.menuTitle}</h2>
          <p className="mt-4 opacity-70">{d.menuText}</p>
          <div className="mt-10 space-y-4 text-left">
            {d.menuItems.map((m: { name: string; price: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-end gap-3"
              >
                <span className="text-lg md:text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{m.name}</span>
                <span className="flex-1 border-b border-dotted mb-1.5" style={{ borderColor: "hsl(158,42%,15%,0.3)" }} />
                <span className="text-lg md:text-xl font-black" style={{ color: MAGENTA }}>{m.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-36 px-5 md:px-10 overflow-hidden text-center" style={{ background: MAGENTA, color: "white" }}>
        <Floaty emoji="🔑" className="top-[18%] left-[12%] text-5xl md:text-7xl" dur={8} drift={20} />
        <Floaty emoji="🌙" className="bottom-[18%] right-[14%] text-5xl md:text-7xl" delay={0.6} dur={9} rot={12} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            {d.ctaTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-lg opacity-90 max-w-xl mx-auto">
            {d.ctaText}
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group mt-9 inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-black uppercase tracking-wider transition-transform hover:scale-105" style={{ background: CREAM, color: GREEN }}>
            {d.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 md:px-10" style={{ background: GREEN }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Curi<span style={{ color: GOLD }}>🔑</span>sa</span>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm opacity-75">
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: GOLD }} />{d.address}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" style={{ color: GOLD }} />{d.hours}</span>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-6 text-xs opacity-40 text-center md:text-left">{d.footer}</p>
      </footer>
    </div>
  );
}
