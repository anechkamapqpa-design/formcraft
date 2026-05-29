import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useVelocity, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, ChevronDown, X } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

const CREAM = "hsl(40,28%,87%)";
const h = (t: string) => `hsl(${t})`;

const BASE = { accent: "40,45%,78%", bg1: "200,28%,8%", bg2: "210,34%,4%", glow: "200,40%,28%" };

function Beams({ glow }: { glow: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 left-1/2 w-[140%] h-[200%] -translate-x-1/2 opacity-[0.18] mix-blend-screen"
        style={{ background: `conic-gradient(from 200deg at 50% 0%, transparent 0deg, ${h(glow)} 18deg, transparent 40deg, transparent 320deg, ${h(glow)} 345deg, transparent 360deg)` }}
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const glass = "backdrop-blur-2xl bg-white/[0.055] border border-white/[0.12]";

export default function Lumiere() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.lumiere;

  const [moodIdx, setMoodIdx] = useState<number | null>(null);
  const theme = moodIdx === null ? BASE : d.moods[moodIdx];

  // ---- "the hotel remembers you" ----
  const [seconds, setSeconds] = useState(0);
  const [quick, setQuick] = useState(false);
  const [viewed, setViewed] = useState<number[]>([]);
  const [whisper, setWhisper] = useState<string | null>(null);
  const velRef = useRef(0);
  const wasSlow = useRef(true);
  const whisperTimer = useRef<number | undefined>(undefined);

  const { scrollY } = useScroll();
  const scrollVel = useVelocity(scrollY);
  useMotionValueEvent(scrollVel, "change", (v) => { velRef.current = v; });

  const say = (text: string) => {
    setWhisper(text);
    window.clearTimeout(whisperTimer.current);
    whisperTimer.current = window.setTimeout(() => setWhisper(null), 3400);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => s + 1);
      const fast = Math.abs(velRef.current) > 900;
      setQuick(fast);
      if (!fast && !wasSlow.current) { wasSlow.current = true; say(d.whisperSlow); }
      if (fast) wasSlow.current = false;
    }, 1000);
    return () => window.clearInterval(id);
  }, [d.whisperSlow]);

  const applyMood = (i: number, remembered = false) => {
    setMoodIdx(i);
    if (remembered) say(`${d.whisperMood} “${d.moods[i].title}”.`);
  };

  const dwell = useRef<number | undefined>(undefined);
  const onMoodHover = (i: number) => {
    window.clearTimeout(dwell.current);
    dwell.current = window.setTimeout(() => applyMood(i, true), 1100);
  };
  const offMoodHover = () => window.clearTimeout(dwell.current);

  // ---- room "camera enters" ----
  const [room, setRoom] = useState<number | null>(null);
  const openRoom = (i: number) => {
    setRoom(i);
    setViewed((v) => (v.includes(i) ? v : [...v, i]));
  };

  // ---- cursor-reactive reflection ----
  const mx = useMotionValue(0.5), my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const reflX = useTransform(sx, [0, 1], ["8%", "-8%"]);
  const reflY = useTransform(sy, [0, 1], ["6%", "-6%"]);
  const ghostOpacity = useMotionValue(0);
  const ghostX = useTransform(sx, [0, 1], ["20%", "80%"]);

  // ---- hero parallax ----
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroP, [0, 1], ["0%", "28%"]);
  const heroScale = useTransform(heroP, [0, 1], [1.05, 1.2]);

  // ---- infinite lobby ----
  const lobbyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lobbyP } = useScroll({ target: lobbyRef, offset: ["start start", "end end"] });
  const lobbyScale = useTransform(lobbyP, [0, 1], [1.1, 1.9]);
  const lobbyImgY = useTransform(lobbyP, [0, 1], ["0%", "-10%"]);
  const [stop, setStop] = useState(0);
  useMotionValueEvent(lobbyP, "change", (v) => setStop(Math.min(d.lobbyStops.length - 1, Math.floor(v * d.lobbyStops.length))));

  const mins = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div
      className="relative min-h-screen overflow-x-hidden font-sans selection:bg-white/20"
      style={{ background: `linear-gradient(165deg, ${h(theme.bg1)}, ${h(theme.bg2)})`, color: CREAM, transition: "background 900ms ease" }}
    >
      {/* dynamic vignette reacting to pace */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[40]" style={{ boxShadow: "inset 0 0 320px rgba(0,0,0,0.9)", opacity: quick ? 0.35 : 0.7, transition: "opacity 1.2s ease" }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-5 md:px-7 py-3 ${glass}`}>
          <Link to={lp("/")} className="leading-none">
            <span className="block font-bold tracking-[0.2em] text-sm md:text-base" style={{ fontFamily: "'Playfair Display',serif" }}>{d.brand}</span>
            <span className="block text-[9px] tracking-[0.3em] uppercase opacity-60">{d.brandSub}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest opacity-80">
            {d.nav.map((n) => <span key={n} className="cursor-pointer hover:opacity-100 transition-opacity">{n}</span>)}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70">
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: h(theme.accent) }} animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
              {d.rememberLabel}
            </span>
            <span className="rounded-full px-4 py-2 text-xs font-semibold" style={{ background: h(theme.accent), color: h(theme.bg2) }}>{d.bookNow}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src="/images/demos/lumiere-hero.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${h(theme.bg2)} 6%, transparent 45%, ${h(theme.bg2)}88 100%)`, transition: "background 900ms ease" }} />
        <Beams glow={theme.glow} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-[11px] md:text-sm uppercase tracking-[0.4em] mb-5" style={{ color: h(theme.accent) }}>
            {d.heroKicker}
          </motion.p>
          <h1 className="font-black leading-[0.85] tracking-tight text-[clamp(3rem,11vw,9rem)]" style={{ fontFamily: "'Playfair Display',serif" }}>
            {[d.heroTitle1, d.heroTitle2, d.heroTitle3].map((l, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="block">{l}</motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.9 }} className="mt-7 max-w-md text-sm md:text-lg leading-relaxed opacity-80">{d.heroSub}</motion.p>
          <motion.button initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} whileHover={{ scale: 1.04 }} className={`group mt-9 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold ${glass}`}>
            {d.heroCta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Smart reflection panel */}
      <section className="relative z-10 px-5 md:px-8 py-20 md:py-28">
        <div
          className={`relative max-w-7xl mx-auto h-[280px] md:h-[420px] rounded-[2rem] overflow-hidden ${glass}`}
          onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height); }}
          onMouseEnter={() => ghostOpacity.set(0.5)}
          onMouseLeave={() => ghostOpacity.set(0)}
        >
          <motion.div className="absolute inset-[-10%]" style={{ x: reflX, y: reflY }}>
            <img src="/images/demos/lumiere-rooftop.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          </motion.div>
          {/* delayed city reflection (water) */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${h(theme.bg2)}cc, transparent 50%, ${h(theme.glow)}33)` }} />
          {/* specular highlight following cursor */}
          <motion.div className="absolute w-[60%] h-[60%] rounded-full mix-blend-screen pointer-events-none" style={{ left: useTransform(sx, [0, 1], ["-10%", "60%"]), top: useTransform(sy, [0, 1], ["-10%", "60%"]), background: `radial-gradient(circle, ${h(theme.accent)}55, transparent 60%)` }} />
          {/* ghost silhouette on hover */}
          <motion.div className="absolute bottom-0 w-24 h-3/4 rounded-t-full blur-2xl pointer-events-none" style={{ left: ghostX, opacity: ghostOpacity, background: `linear-gradient(to top, ${h(theme.accent)}66, transparent)` }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <span className="text-[11px] uppercase tracking-[0.4em] mb-3" style={{ color: h(theme.accent) }}>Smart reflections</span>
            <p className="text-2xl md:text-4xl font-light max-w-2xl leading-snug" style={{ fontFamily: "'Playfair Display',serif" }}>The glass watches the room. Move, and the city moves a heartbeat later.</p>
          </div>
        </div>
      </section>

      {/* Mood selector */}
      <section className="relative z-10 px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: h(theme.accent) }}>{d.moodsLabel}</span>
          <h2 className="mt-3 text-3xl md:text-6xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display',serif" }}>{d.moodsTitle}</h2>
          <p className="mt-3 text-sm opacity-60">{d.moodsHint}</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {d.moods.map((m, i) => {
              const active = moodIdx === i;
              return (
                <motion.button
                  key={m.key}
                  onClick={() => applyMood(i)}
                  onHoverStart={() => onMoodHover(i)}
                  onHoverEnd={offMoodHover}
                  whileHover={{ y: -6 }}
                  className={`relative text-left rounded-2xl p-5 h-44 md:h-56 flex flex-col justify-between overflow-hidden ${glass}`}
                  style={{ borderColor: active ? h(m.accent) : undefined, background: active ? `linear-gradient(160deg, ${h(m.bg1)}, ${h(m.bg2)})` : undefined }}
                >
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full blur-2xl" style={{ background: h(m.glow), opacity: active ? 0.7 : 0.25, transition: "opacity 0.5s" }} />
                  <span className="relative text-[10px] font-mono opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative">
                    <h3 className="text-lg md:text-xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display',serif", color: active ? h(m.accent) : CREAM }}>{m.title}</h3>
                    <p className="mt-2 text-[11px] leading-snug opacity-70">{m.line}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memory panel */}
      <section className="relative z-10 px-5 md:px-8 py-10">
        <div className={`max-w-7xl mx-auto rounded-3xl p-6 md:p-8 ${glass}`}>
          <div className="flex items-center gap-2 mb-6">
            <motion.span className="w-2 h-2 rounded-full" style={{ background: h(theme.accent) }} animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
            <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: h(theme.accent) }}>{d.rememberLabel}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { l: d.memTime, v: mins },
              { l: d.memPace, v: quick ? d.memPaceQuick : d.memPaceCalm },
              { l: d.memMood, v: moodIdx === null ? d.memMoodNone : d.moods[moodIdx].title },
              { l: d.memRooms, v: `${viewed.length} / ${d.rooms.length}` },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-widest opacity-50">{s.l}</p>
                <p className="mt-1 text-xl md:text-2xl font-light" style={{ fontFamily: "'Playfair Display',serif", color: h(theme.accent) }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms — dolly */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
          <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: h(theme.accent) }}>{d.roomsLabel}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display',serif" }}>{d.roomsTitle}</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto hide-scrollbar px-5 md:px-8 pb-4 snap-x">
          {d.rooms.map((r, i) => (
            <motion.button
              key={i}
              onClick={() => openRoom(i)}
              whileHover={{ y: -8 }}
              className="group relative shrink-0 w-[78vw] sm:w-[420px] snap-center text-left"
            >
              <motion.div layoutId={`room-img-${i}`} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 55%)" }} />
                <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded" style={{ background: h(theme.accent), color: h(theme.bg2) }}>{String(i + 1).padStart(2, "0")} / {String(d.rooms.length).padStart(2, "0")}</span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif" }}>{r.name}</h3>
                  <p className="text-xs opacity-75 mt-1 line-clamp-2">{r.line}</p>
                </div>
              </motion.div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100" style={{ color: h(theme.accent) }}>
                {d.roomReserve.split(" ")[0]} <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Room transition overlay — camera enters */}
      <AnimatePresence>
        {room !== null && (
          <motion.div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-8" initial={{ background: "rgba(0,0,0,0)" }} animate={{ background: "rgba(0,0,0,0.85)" }} exit={{ background: "rgba(0,0,0,0)" }}>
            <motion.div className="absolute inset-0 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setRoom(null)} />
            <motion.div layoutId={`room-img-${room}`} className="relative w-full max-w-5xl rounded-t-3xl md:rounded-3xl overflow-hidden">
              <img src={d.rooms[room].img} alt="" className="w-full h-[55vh] md:h-[68vh] object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${h(theme.bg2)} 4%, transparent 50%)` }} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: h(theme.accent) }}>{d.roomEntering}</span>
                <h3 className="mt-2 text-3xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display',serif" }}>{d.rooms[room].name}</h3>
                <p className="mt-2 max-w-lg text-sm md:text-base opacity-80">{d.rooms[room].line}</p>
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  <span className="text-2xl font-light" style={{ fontFamily: "'Playfair Display',serif" }}>{d.rooms[room].price}<span className="text-xs opacity-50 ml-1">/ {d.roomNight}</span></span>
                  <button className="rounded-full px-6 py-3 text-sm font-semibold" style={{ background: h(theme.accent), color: h(theme.bg2) }}>{d.roomReserve}</button>
                </div>
              </motion.div>
            </motion.div>
            <button onClick={() => setRoom(null)} className={`absolute top-5 right-5 z-10 rounded-full p-3 ${glass}`}><X className="w-5 h-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infinite lobby */}
      <section ref={lobbyRef} className="relative z-10 h-[240vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div className="absolute inset-0" style={{ scale: lobbyScale, y: lobbyImgY }}>
            <img src="/images/demos/lumiere-corridor.jpg" alt="" className="w-full h-full object-cover opacity-70" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${h(theme.bg2)} 85%)` }} />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8">
            <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: h(theme.accent) }}>{d.lobbyLabel}</span>
            <h2 className="mt-3 text-3xl md:text-6xl font-black tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display',serif" }}>{d.lobbyTitle}</h2>
            <p className="mt-5 max-w-md text-sm md:text-base opacity-75">{d.lobbyText}</p>
            <div className="mt-10 flex items-center gap-3 flex-wrap">
              {d.lobbyStops.map((s, i) => (
                <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-500" style={{ background: i === stop ? h(theme.accent) : "rgba(255,255,255,0.06)", color: i === stop ? h(theme.bg2) : CREAM, opacity: i === stop ? 1 : 0.5 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="relative z-10 overflow-hidden">
        <img src="/images/demos/lumiere-pool.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${h(theme.bg2)}, ${h(theme.bg1)}cc)` }} />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
          <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tight whitespace-pre-line" style={{ fontFamily: "'Playfair Display',serif" }}>{d.bookingTitle}</h2>
          <p className="mt-5 max-w-md opacity-75">{d.bookingSub}</p>
          <div className={`mt-10 rounded-3xl p-5 md:p-6 flex flex-col lg:flex-row gap-4 lg:items-end ${glass}`}>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div><p className="text-[10px] uppercase tracking-widest opacity-50">{d.checkIn}</p><p className="mt-1 flex items-center gap-2 font-semibold"><Calendar className="w-4 h-4 opacity-60" />{d.checkInVal}</p></div>
              <div><p className="text-[10px] uppercase tracking-widest opacity-50">{d.checkOut}</p><p className="mt-1 flex items-center gap-2 font-semibold"><Calendar className="w-4 h-4 opacity-60" />{d.checkOutVal}</p></div>
              <div><p className="text-[10px] uppercase tracking-widest opacity-50">{d.guests}</p><p className="mt-1 flex items-center gap-2 font-semibold">{d.guestsVal}<ChevronDown className="w-4 h-4 opacity-60" /></p></div>
            </div>
            <button className="rounded-2xl px-7 py-4 text-sm font-semibold whitespace-nowrap" style={{ background: h(theme.accent), color: h(theme.bg2) }}>{d.checkAvail}</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-5 md:px-8 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-widest opacity-60">
          <span style={{ fontFamily: "'Playfair Display',serif" }} className="text-base tracking-[0.2em] opacity-100">{d.brand}</span>
          <span>{d.footer}</span>
        </div>
      </footer>

      {/* Whisper — the hotel speaks */}
      <AnimatePresence>
        {whisper && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] rounded-full px-6 py-3 text-sm ${glass}`}
            style={{ color: CREAM }}
          >
            <span className="opacity-60 mr-2" style={{ color: h(theme.accent) }}>✦</span>{whisper}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
