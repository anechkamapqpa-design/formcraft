import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, MapPin } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

const BG = "hsl(36,12%,7%)";
const CREAM = "hsl(40,30%,84%)";
const MUTED = "hsl(40,8%,52%)";
const PAPER = "hsl(40,30%,90%)";

const acc = (a: string) => `hsl(${a})`;

// animated film grain as an inline SVG data-uri
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

function Grain() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.13]"
      style={{ backgroundImage: GRAIN, backgroundSize: "140px 140px" }}
      animate={{ backgroundPosition: ["0px 0px", "30px -20px", "-15px 25px", "0px 0px"] }}
      transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
    />
  );
}

function Scanlines() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] opacity-[0.5]"
        style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.18) 3px, transparent 4px)" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 z-[55] h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)" }}
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

function GlitchTitle({ text, className, color }: { text: string; className?: string; color?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ""}`} style={{ color: color ?? CREAM }}>
      <motion.span aria-hidden className="absolute inset-0 mix-blend-screen" style={{ color: "hsl(320,90%,60%)" }} animate={{ x: [0, -2.5, 1.5, 0], opacity: [0.6, 0.9, 0.5, 0.6] }} transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 2.4 }}>{text}</motion.span>
      <motion.span aria-hidden className="absolute inset-0 mix-blend-screen" style={{ color: "hsl(190,90%,60%)" }} animate={{ x: [0, 2.5, -1.5, 0], opacity: [0.6, 0.5, 0.9, 0.6] }} transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 2.4 }}>{text}</motion.span>
      <span className="relative">{text}</span>
    </span>
  );
}

function Polaroid({ img, place, year, line, rotate = 0, className, accent }: { img: string; place: string; year: string; line: string; rotate?: number; className?: string; accent: string }) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`group relative bg-[hsl(40,30%,90%)] p-2.5 pb-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] ${className ?? ""}`}
      style={{ rotate }}
    >
      <div className="relative overflow-hidden">
        <img src={img} alt={`${place} ${year}`} className="w-full h-full object-cover aspect-[4/5] saturate-[0.8] contrast-[1.05]" loading="lazy" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)" }}>
          <p className="text-[hsl(40,30%,92%)] text-xs leading-snug" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.05rem" }}>{line}</p>
        </div>
        <span className="absolute top-2 right-2 text-[9px] font-mono tracking-widest px-1.5 py-0.5" style={{ background: acc(accent), color: BG }}>{year}</span>
      </div>
      <p className="absolute bottom-2.5 left-3 text-[hsl(36,18%,28%)]" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.25rem", lineHeight: 1 }}>{place}</p>
    </motion.div>
  );
}

export default function Archive() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.archive;

  const [mood, setMood] = useState(0);
  const accent = d.moods[mood].accent;

  // hero scatter + projector tremble
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const pL = useTransform(heroP, [0, 1], [0, -260]);
  const pR = useTransform(heroP, [0, 1], [0, 300]);
  const pUp = useTransform(heroP, [0, 1], [0, -180]);
  const rotL = useTransform(heroP, [0, 1], [-8, -26]);
  const rotR = useTransform(heroP, [0, 1], [7, 24]);

  // voice waveform reacts to scroll
  const voiceRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: voiceP } = useScroll({ target: voiceRef, offset: ["start 0.9", "end 0.4"] });
  const [played, setPlayed] = useState(0);
  useMotionValueEvent(voiceP, "change", (v) => setPlayed(v));
  const bars = 56;
  const barHeights = Array.from({ length: bars }, (_, i) => 18 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6)) * 80);

  // parallax map
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mapP } = useScroll({ target: mapRef, offset: ["start end", "end start"] });
  const mapShift = useTransform(mapP, [0, 1], ["-8%", "8%"]);
  const mapScale = useTransform(mapP, [0, 1], [1.15, 1]);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-[hsl(320,80%,55%)] selection:text-white" style={{ background: BG, color: CREAM }}>
      <Grain />
      <Scanlines />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-3.5 backdrop-blur-sm" style={{ background: "hsl(36,12%,7%,0.7)", borderBottom: "1px solid hsl(40,30%,84%,0.1)" }}>
        <Link to={lp("/")} className="text-[11px] md:text-xs font-mono uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity">{d.back}</Link>
        <span className="font-mono text-sm md:text-base tracking-[0.3em] uppercase">{d.brand}<span className="opacity-50 lowercase tracking-normal italic" style={{ fontFamily: "'Caveat', cursive" }}> {d.brandSub}</span></span>
        <span className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-widest">
          <motion.span className="w-2 h-2 rounded-full" style={{ background: "hsl(0,80%,58%)" }} animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
          {d.rec}
        </span>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5">
        {/* flicker */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} animate={{ opacity: [0.7, 0.55, 0.8, 0.6] }} transition={{ duration: 0.25, repeat: Infinity }} />

        {/* scattered polaroids */}
        <motion.div style={{ x: pL, y: pUp, rotate: rotL }} className="absolute left-[6%] md:left-[14%] top-[22%] w-32 md:w-52 z-[2]">
          <Polaroid img={d.memories[0].img} place={d.memories[0].place} year={d.memories[0].year} line={d.memories[0].line} accent={accent} />
        </motion.div>
        <motion.div style={{ x: pR, y: pUp, rotate: rotR }} className="absolute right-[5%] md:right-[13%] top-[26%] w-32 md:w-48 z-[2]">
          <Polaroid img={d.memories[3].img} place={d.memories[3].place} year={d.memories[3].year} line={d.memories[3].line} accent={accent} />
        </motion.div>
        <motion.div style={{ x: pL, rotate: rotR }} className="absolute left-[10%] md:left-[20%] bottom-[14%] w-28 md:w-40 z-[2] hidden sm:block">
          <Polaroid img={d.memories[4].img} place={d.memories[4].place} year={d.memories[4].year} line={d.memories[4].line} accent={accent} />
        </motion.div>

        {/* projector tremble title block */}
        <motion.div
          className="relative z-10 text-center"
          animate={{ x: [0, -0.7, 0.5, -0.3, 0], y: [0, 0.4, -0.6, 0.3, 0] }}
          transition={{ duration: 0.22, repeat: Infinity }}
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6" style={{ color: MUTED }}>
            {d.heroKicker}
          </motion.p>
          <h1 className="font-black leading-[0.82] tracking-tight text-[clamp(3.5rem,15vw,13rem)]" style={{ fontFamily: "'Playfair Display', serif" }}>
            <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="block">{d.heroTitle1}</motion.span>
            <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9 }} className="block italic font-normal" style={{ color: MUTED }}>{d.heroTitle2}</motion.span>
            <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="block">
              <GlitchTitle text={d.heroTitle3} />
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-8 max-w-md mx-auto text-sm md:text-lg leading-relaxed" style={{ color: "hsl(40,15%,68%)" }}>
            {d.heroSub}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{ scale: 1.04 }}
            className="group mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-mono uppercase tracking-widest"
            style={{ background: acc(accent), color: BG }}
          >
            <Play className="w-4 h-4 fill-current" /> {d.heroCta}
          </motion.button>
        </motion.div>

        <motion.span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] z-10" style={{ color: MUTED }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }}>
          {d.scrollHint}
        </motion.span>
      </section>

      {/* Manifesto */}
      <section className="relative py-28 md:py-40 px-5 md:px-10 z-10">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] block mb-7" style={{ color: acc(accent) }}>{d.manifestoLabel}</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-6xl font-black leading-[1.05] tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            {d.manifestoTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-7 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "hsl(40,12%,62%)" }}>
            {d.manifestoText}
          </motion.p>
        </div>
      </section>

      {/* Mood selector — instead of filters */}
      <section className="relative py-20 md:py-28 px-5 md:px-10 z-10" style={{ borderTop: "1px solid hsl(40,30%,84%,0.08)", borderBottom: "1px solid hsl(40,30%,84%,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] block mb-3" style={{ color: acc(accent) }}>{d.moodsLabel}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>{d.moodsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.moods.map((m, i) => {
              const active = mood === i;
              return (
                <motion.button
                  key={m.key}
                  onClick={() => setMood(i)}
                  whileHover={{ y: -6 }}
                  className="text-left rounded-2xl p-6 h-full transition-colors duration-500 relative overflow-hidden"
                  style={{
                    background: active ? acc(m.accent) : "hsl(40,12%,11%)",
                    color: active ? BG : CREAM,
                    border: `1px solid ${active ? acc(m.accent) : "hsl(40,30%,84%,0.1)"}`,
                  }}
                >
                  <span className="font-mono text-[10px] tracking-widest opacity-60">{String(i + 1).padStart(2, "0")} / 04</span>
                  <h3 className="mt-4 text-xl md:text-2xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ opacity: active ? 0.85 : 0.6 }}>{m.desc}</p>
                  <AnimatePresence>
                    {active && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full" style={{ background: BG }} />
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured memory — voice message + note + ticket */}
      <section ref={voiceRef} className="relative py-24 md:py-32 px-5 md:px-10 z-10">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] block mb-10" style={{ color: acc(accent) }}>{d.featuredLabel}</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* voice message */}
            <div className="lg:col-span-7 rounded-3xl p-6 md:p-8" style={{ background: "hsl(40,12%,11%)", border: "1px solid hsl(40,30%,84%,0.1)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: acc(accent), color: BG }}>
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{d.voiceSender}</p>
                  <p className="font-mono text-[11px]" style={{ color: MUTED }}>{d.voiceDuration}</p>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-20">
                {barHeights.map((h, i) => {
                  const isPlayed = i / bars <= played;
                  return (
                    <motion.span
                      key={i}
                      className="flex-1 rounded-full"
                      style={{ height: `${h}%`, background: isPlayed ? acc(accent) : "hsl(40,30%,84%,0.16)" }}
                      animate={{ scaleY: isPlayed ? [1, 0.7, 1] : 1 }}
                      transition={{ duration: 0.9, repeat: isPlayed ? Infinity : 0, delay: i * 0.02 }}
                    />
                  );
                })}
              </div>
              <p className="mt-7 text-base md:text-lg leading-relaxed italic" style={{ color: "hsl(40,15%,68%)" }}>“{d.voiceTranscript}”</p>
            </div>

            {/* note + ticket */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, rotate: -4 }} whileInView={{ opacity: 1, rotate: -2 }} viewport={{ once: true }} className="flex-1 rounded-sm p-6 shadow-2xl" style={{ background: PAPER, color: "hsl(36,20%,22%)" }}>
                <p className="whitespace-pre-line leading-snug" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.8rem" }}>{d.noteText}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-lg overflow-hidden" style={{ background: PAPER, color: "hsl(36,20%,20%)" }}>
                <div className="flex items-center justify-between px-5 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.3em]">{d.ticketTitle}</span>
                  <span className="font-mono text-[10px]" style={{ color: "hsl(0,60%,45%)" }}>★ ★ ★</span>
                </div>
                <div className="grid grid-cols-2 gap-3 px-5 py-4">
                  <div><p className="font-mono text-[9px] opacity-50">{d.ticketFrom}</p><p className="font-bold text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>{d.ticketFromVal}</p></div>
                  <div className="text-right"><p className="font-mono text-[9px] opacity-50">{d.ticketTo}</p><p className="font-bold text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>{d.ticketToVal}</p></div>
                  <div><p className="font-mono text-[9px] opacity-50">{d.ticketPassenger}</p><p className="font-mono text-sm">{d.ticketPassengerVal}</p></div>
                  <div className="text-right"><p className="font-mono text-[9px] opacity-50">·</p><p className="font-mono text-sm">{d.ticketSeat}</p></div>
                </div>
                {/* perforation + barcode */}
                <div className="border-t border-dashed px-5 py-3 flex items-center justify-between" style={{ borderColor: "hsl(36,20%,60%)" }}>
                  <div className="flex items-end gap-[2px] h-7">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <span key={i} className="w-[2px] bg-[hsl(36,20%,20%)]" style={{ height: `${40 + ((i * 37) % 60)}%`, opacity: i % 3 ? 1 : 0.4 }} />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold rotate-[-8deg] border-2 px-2 py-1" style={{ color: "hsl(0,60%,42%)", borderColor: "hsl(0,60%,42%)" }}>{d.ticketStamp}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax map */}
      <section ref={mapRef} className="relative h-[80vh] overflow-hidden z-10 flex items-center">
        <motion.div className="absolute inset-0" style={{ y: mapShift, scale: mapScale }}>
          <img src="/images/demos/archive-map.jpg" alt="" className="w-full h-full object-cover opacity-50" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(36,12%,7%) 5%, transparent 50%, hsl(36,12%,7%) 95%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 w-full">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] block mb-4 inline-flex items-center gap-2" style={{ color: acc(accent) }}><MapPin className="w-3.5 h-3.5" />{d.mapLabel}</span>
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            {d.mapTitle}
          </motion.h2>
          <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: "hsl(40,15%,68%)" }}>{d.mapText}</p>
        </div>
      </section>

      {/* The archive grid */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 z-10">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] block mb-3" style={{ color: acc(accent) }}>{d.archiveLabel}</span>
          <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-[1.0] whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>{d.archiveTitle}</h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest" style={{ color: MUTED }}>{d.archiveHint}</p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {d.memories.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: i % 2 ? 4 : -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
                className="w-full max-w-[260px] mx-auto"
              >
                <Polaroid img={m.img} place={m.place} year={m.year} line={m.line} accent={accent} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-40 px-5 md:px-10 z-10 text-center overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0 -z-0" style={{ background: `radial-gradient(ellipse at center, ${acc(accent)} 0%, transparent 60%)`, opacity: 0.12 }} animate={{ opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 4, repeat: Infinity }} />
        <div className="relative max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            <GlitchTitle text={d.ctaTitle.split("\n")[0]} /><br />
            <span style={{ color: MUTED }} className="italic font-normal">{d.ctaTitle.split("\n")[1]}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-7 text-lg" style={{ color: "hsl(40,15%,68%)" }}>{d.ctaText}</motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.04 }} className="group mt-9 inline-flex items-center gap-3 px-10 py-5 rounded-full text-sm font-mono uppercase tracking-widest" style={{ background: acc(accent), color: BG }}>
            {d.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-5 md:px-10" style={{ borderTop: "1px solid hsl(40,30%,84%,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: MUTED }}>
          <span>{d.brand} <span className="opacity-60">{d.brandSub}</span></span>
          <span className="flex items-center gap-2"><motion.span className="w-2 h-2 rounded-full" style={{ background: "hsl(0,80%,58%)" }} animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />{d.rec} · 00:47:12</span>
        </div>
        <p className="max-w-6xl mx-auto mt-5 text-[10px]" style={{ color: "hsl(40,8%,38%)" }}>{d.footer}</p>
      </footer>
    </div>
  );
}
