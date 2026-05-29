import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Menu, Calendar, ChevronDown } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

// ---- warm vintage palette (from reference) ----
const CREAM = "#F4EEDD", MUSTARD = "#E8A93C", CORAL = "#E8857C", PINK = "#ECA9B2",
  MINT = "#86C8BD", GREEN = "#1E5C4C", TERRA = "#C96A4E", INK = "#1B1A17";

const terrazzo =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><rect width='90' height='90' fill='%23bfdcc9'/><circle cx='14' cy='20' r='5' fill='%23e8857c'/><circle cx='60' cy='12' r='4' fill='%23e8a93c'/><circle cx='78' cy='48' r='6' fill='%23f4eedd'/><circle cx='30' cy='60' r='5' fill='%231e5c4c'/><circle cx='50' cy='74' r='4' fill='%23eca9b2'/><circle cx='8' cy='78' r='3' fill='%23c96a4e'/><circle cx='44' cy='34' r='3' fill='%23f4eedd'/><circle cx='72' cy='80' r='4' fill='%23e8857c'/></svg>\")";

const anton = { fontFamily: "'Anton', sans-serif" };

/* ---------- drawn collage cut-outs (the "illustrated" layer) ---------- */
function Bust({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden>
      <g>
        <path d="M60 250 Q40 180 70 140 Q50 120 60 80 Q70 20 110 20 Q160 22 158 90 Q156 120 140 140 Q170 180 150 250 Z" fill="#dcd6c8" />
        <path d="M110 20 Q160 22 158 90 Q156 120 140 140 Q155 175 152 250 L120 250 Q128 170 116 120 Q100 70 110 20 Z" fill="#c3bbab" />
        <ellipse cx="100" cy="80" rx="44" ry="52" fill="#e4ded1" />
        <path d="M100 60 L94 96 L108 96 Z" fill="#c3bbab" />
        <path d="M70 70 Q80 64 90 70" stroke="#b3a994" strokeWidth="3" fill="none" />
        <path d="M110 70 Q120 64 130 70" stroke="#b3a994" strokeWidth="3" fill="none" />
        <path d="M88 106 Q100 114 114 106" stroke="#b3a994" strokeWidth="3" fill="none" />
        <path d="M58 56 Q70 18 110 22 Q150 26 146 60 Q120 38 88 44 Q70 48 58 56 Z" fill="#cfc8b8" />
      </g>
    </svg>
  );
}
function EyeCut({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden>
      <rect width="220" height="150" rx="8" fill="#e9e7e2" />
      <rect width="220" height="150" rx="8" fill="#000" opacity="0.04" />
      <path d="M20 80 Q110 10 200 80 Q110 140 20 80 Z" fill="#fff" />
      <circle cx="110" cy="80" r="36" fill="#7d756a" />
      <circle cx="110" cy="80" r="17" fill="#1b1a17" />
      <circle cx="120" cy="70" r="6" fill="#fff" />
      <path d="M20 80 Q110 10 200 80" stroke="#1b1a17" strokeWidth="4" fill="none" />
      <path d="M30 52 Q110 22 192 54" stroke="#1b1a17" strokeWidth="6" fill="none" opacity="0.8" />
      <g stroke="#1b1a17" strokeWidth="2">{[40, 70, 110, 150, 180].map((x, i) => <line key={i} x1={x} y1={80 - 38} x2={x} y2={80 - 52} />)}</g>
    </svg>
  );
}
function Monstera({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden>
      <path d="M100 215 Q96 150 96 110" stroke="#1E5C4C" strokeWidth="7" fill="none" />
      <path d="M100 120 C 20 120 10 40 70 10 C 150 -10 195 60 170 130 C 150 185 110 180 100 120 Z" fill="#2f7a5e" />
      <g fill="#1E5C4C">
        <path d="M70 40 l26 12 l-24 14 Z" /><path d="M120 36 l26 14 l-26 12 Z" />
        <path d="M64 86 l30 8 l-28 18 Z" /><path d="M128 84 l28 12 l-30 14 Z" />
        <path d="M96 120 l24 -6 l-2 26 Z" />
      </g>
    </svg>
  );
}
function KeyTag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden>
      <g transform="rotate(-14 100 150)">
        <rect x="40" y="40" width="120" height="180" rx="14" fill={TERRA} />
        <rect x="52" y="52" width="96" height="156" rx="8" fill="none" stroke="#f4eedd" strokeWidth="2" opacity="0.7" />
        <circle cx="100" cy="62" r="9" fill="#f4eedd" />
        <text x="100" y="110" textAnchor="middle" fill="#f4eedd" fontSize="20" style={anton}>LUMIÈRE</text>
        <text x="100" y="150" textAnchor="middle" fill="#f4eedd" fontSize="12" fontFamily="monospace">PLEASE MAKE UP</text>
        <text x="100" y="168" textAnchor="middle" fill="#f4eedd" fontSize="12" fontFamily="monospace">MY ROOM</text>
        <text x="100" y="198" textAnchor="middle" fill="#f4eedd" fontSize="11" fontFamily="monospace" opacity="0.8">— THANK YOU —</text>
        <g transform="translate(96 18)"><circle cx="4" cy="4" r="12" fill="none" stroke="#9a9a9a" strokeWidth="4" /><rect x="2" y="14" width="4" height="34" fill="#9a9a9a" /><rect x="2" y="40" width="12" height="4" fill="#9a9a9a" /></g>
      </g>
    </svg>
  );
}
function Bellhop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" className={className} aria-hidden>
      {/* suitcases */}
      <rect x="40" y="320" width="100" height="70" rx="8" fill={PINK} /><rect x="40" y="340" width="100" height="6" fill="#d98a96" />
      <rect x="160" y="330" width="100" height="62" rx="8" fill="#e89bb0" /><rect x="160" y="348" width="100" height="6" fill="#cf7d92" />
      {/* body */}
      <path d="M104 320 Q96 220 120 180 L180 180 Q204 220 196 320 Z" fill={GREEN} />
      <g fill={MUSTARD}>{[210, 240, 270, 300].map((y, i) => <circle key={i} cx="150" cy={y - 30} r="5" />)}</g>
      <rect x="118" y="186" width="64" height="10" fill="#163f34" />
      {/* head */}
      <circle cx="150" cy="150" r="34" fill="#e6b58f" />
      <path d="M120 138 Q150 120 180 138" stroke="#7a4a2a" strokeWidth="6" fill="none" />
      {/* cap */}
      <path d="M116 120 Q150 96 184 120 L184 128 L116 128 Z" fill={GREEN} />
      <rect x="112" y="126" width="76" height="10" rx="4" fill="#163f34" />
      <text x="150" y="116" textAnchor="middle" fill={MUSTARD} fontSize="11" style={anton}>LUMIÈRE</text>
      {/* arms */}
      <path d="M120 200 Q90 250 110 300" stroke={GREEN} strokeWidth="20" fill="none" strokeLinecap="round" />
      <path d="M180 200 Q210 250 190 300" stroke={GREEN} strokeWidth="20" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Postcard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden>
      <g transform="rotate(6 110 80)">
        <rect x="6" y="6" width="208" height="148" rx="6" fill="#fff" />
        <rect x="14" y="14" width="150" height="132" fill={MINT} />
        <rect x="14" y="92" width="150" height="54" fill={CORAL} />
        <circle cx="60" cy="50" r="20" fill={MUSTARD} />
        <rect x="172" y="18" width="34" height="40" fill="none" stroke="#bbb" strokeWidth="2" />
        <text x="150" y="40" textAnchor="middle" fill="#fff" fontSize="22" style={anton}>AMALFI</text>
      </g>
    </svg>
  );
}

/* sticker word for headlines */
function Sticker({ children, rotate = 0 }: { children: React.ReactNode; rotate?: number }) {
  return (
    <span className="inline-block bg-white text-[#1B1A17] px-3 py-0.5 leading-none shadow-[3px_4px_0_rgba(0,0,0,0.12)]" style={{ ...anton, transform: `rotate(${rotate}deg)` }}>
      {children}
    </span>
  );
}

const NAV_COLORS = [PINK, MINT, CREAM, CORAL, MINT];

export default function Lumiere() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.lumiere;
  const [mood, setMood] = useState<number | null>(null);
  const [roomIdx, setRoomIdx] = useState(0);
  const room = d.rooms[roomIdx];
  const nextRoom = () => setRoomIdx((i) => (i + 1) % d.rooms.length);
  const prevRoom = () => setRoomIdx((i) => (i - 1 + d.rooms.length) % d.rooms.length);

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ background: CREAM, color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      {/* ---- segmented nav ---- */}
      <header className="w-full flex items-stretch border-b-2 border-[#1B1A17] text-xs md:text-sm font-bold uppercase tracking-wider">
        <Link to={lp("/")} className="flex flex-col justify-center px-4 md:px-6 py-3 bg-[#F4EEDD] border-r-2 border-[#1B1A17] shrink-0">
          <span className="text-lg md:text-2xl leading-none" style={anton}>LUMIÈRE</span>
          <span className="text-[8px] md:text-[9px] tracking-[0.25em] opacity-70">{d.brandSub}</span>
        </Link>
        <nav className="hidden md:flex flex-1">
          {[d.nav[0], d.nav[1], "CUISINE", d.nav[3] ?? "GALLERY", d.nav[4]].map((n, i) => (
            <span key={i} className="flex-1 flex items-center justify-center border-r-2 border-[#1B1A17] cursor-pointer hover:brightness-95" style={{ background: NAV_COLORS[i] }}>{n}</span>
          ))}
          <span className="flex items-center justify-center px-6 cursor-pointer" style={{ background: MUSTARD }}>{d.bookNow}</span>
        </nav>
        <button className="flex items-center justify-center px-4 ml-auto md:ml-0" style={{ background: MUSTARD }} aria-label="Menu"><Menu className="w-5 h-5" /></button>
      </header>

      {/* ---- hero ---- */}
      <section className="grid md:grid-cols-[0.95fr_1.1fr] border-b-2 border-[#1B1A17]">
        <div className="relative px-6 md:px-10 py-10 md:py-14 overflow-hidden" style={{ background: MUSTARD }}>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-5 opacity-80">{d.heroKicker}</p>
          <h1 className="flex flex-col items-start gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <Sticker rotate={-2}>{d.heroTitle1}</Sticker>
            <Sticker rotate={1}>{d.heroTitle2}</Sticker>
            <Sticker rotate={-1}>{d.heroTitle3}</Sticker>
          </h1>
          <p className="mt-7 max-w-xs text-sm md:text-base font-bold uppercase tracking-wide leading-relaxed">{d.heroSub}</p>
          <button className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide" style={{ background: PINK, color: INK }}>
            {d.heroCta} <ArrowRight className="w-4 h-4" />
          </button>
          <Bust className="absolute -bottom-2 left-2 w-20 md:w-28 opacity-95" />
          <Monstera className="absolute top-4 right-2 w-16 md:w-24 -scale-x-100" />
        </div>
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <img src="/images/demos/lumiere-hero.jpg" alt="Lumière hero" className="absolute inset-0 w-full h-full object-cover" />
          <EyeCut className="absolute bottom-3 left-3 w-24 md:w-36 rounded-lg shadow-lg" />
        </div>
      </section>

      {/* ---- choose your stay mood ---- */}
      <section className="border-b-2 border-[#1B1A17]" style={{ backgroundImage: terrazzo, backgroundSize: "90px 90px" }}>
        <div className="grid lg:grid-cols-[0.7fr_2fr]">
          <div className="relative px-6 md:px-10 py-10 flex flex-col justify-center bg-[#F4EEDD] lg:bg-transparent">
            <h2 className="text-4xl md:text-5xl" style={anton}><Sticker>{d.moodsLabel.split(" ").slice(0, 2).join(" ")}</Sticker><br /><span className="inline-block mt-2"><Sticker rotate={-2}>{d.moodsLabel.split(" ").slice(2).join(" ")}</Sticker></span></h2>
            <KeyTag className="w-28 md:w-36 mt-8" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 md:p-6">
            {d.moods.map((m, i) => {
              const active = mood === i;
              return (
                <motion.button
                  key={m.key}
                  onClick={() => setMood(active ? null : i)}
                  whileHover={{ y: -6 }}
                  className="text-left rounded-xl overflow-hidden border-2 transition-all"
                  style={{ background: `hsl(${m.color})`, borderColor: active ? INK : "transparent" }}
                >
                  <div className="p-2.5">
                    <div className="rounded-t-[60px] overflow-hidden aspect-[3/4] bg-black/10">
                      <img src={m.img} alt={m.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider leading-tight">{m.title}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] opacity-70 line-clamp-2 pr-2">{m.line}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- rooms (slider) ---- */}
      <section className="grid md:grid-cols-[0.8fr_1.4fr] border-b-2 border-[#1B1A17]">
        <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col justify-center" style={{ background: CORAL }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 opacity-80">{d.roomsLabel}</p>
          <motion.h2 key={roomIdx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl leading-[0.9] uppercase" style={anton}>{room.name}</motion.h2>
          <motion.p key={`l-${roomIdx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 max-w-xs text-sm md:text-base leading-relaxed">{room.line}</motion.p>
          <div className="mt-4 text-2xl" style={anton}>{room.price}<span className="text-xs font-normal opacity-60 ml-1" style={{ fontFamily: "'DM Sans',sans-serif" }}>/ {d.roomNight}</span></div>
          <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide cursor-pointer">{d.roomReserve.split(" ")[0]} <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="relative min-h-[340px] md:min-h-[520px]">
          <motion.img key={room.img} src={room.img} alt={room.name} initial={{ opacity: 0.3, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-5 right-5 flex items-center gap-3 bg-[#F4EEDD] rounded-full px-3 py-2 border-2 border-[#1B1A17]">
            <button onClick={prevRoom} className="p-1.5 hover:opacity-60" aria-label="Previous room"><ArrowLeft className="w-4 h-4" /></button>
            <span className="text-sm font-bold tabular-nums" style={anton}>{String(roomIdx + 1).padStart(2, "0")} / {String(d.rooms.length).padStart(2, "0")}</span>
            <button onClick={nextRoom} className="p-1.5 hover:opacity-60" aria-label="Next room"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* ---- booking ---- */}
      <section className="relative px-6 md:px-10 py-12 md:py-16 overflow-hidden" style={{ background: GREEN, color: CREAM }}>
        <div className="grid lg:grid-cols-[1fr_auto_1.1fr] gap-8 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-6xl leading-[0.9] uppercase" style={anton}>{d.bookingTitle}</h2>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide cursor-pointer border-b-2 border-[#F4EEDD] pb-1">{d.checkAvail.split(" ")[0]} {d.guests.split(" ")[0]} <ArrowRight className="w-4 h-4" /></a>
          </div>
          <Bellhop className="w-44 md:w-56 mx-auto" />
          <div className="rounded-2xl p-5 md:p-6 border-2 border-[#163f34]" style={{ background: "#256b58" }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><p className="text-[10px] uppercase tracking-widest opacity-70">{d.checkIn}</p><p className="mt-1 flex items-center gap-2 text-xl" style={anton}>{d.checkInVal}<Calendar className="w-4 h-4 opacity-70" /></p></div>
              <div><p className="text-[10px] uppercase tracking-widest opacity-70">{d.checkOut}</p><p className="mt-1 flex items-center gap-2 text-xl" style={anton}>{d.checkOutVal}<Calendar className="w-4 h-4 opacity-70" /></p></div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-end">
              <div><p className="text-[10px] uppercase tracking-widest opacity-70">{d.guests}</p><p className="mt-1 flex items-center gap-2 text-xl" style={anton}>{d.guestsVal}<ChevronDown className="w-4 h-4 opacity-70" /></p></div>
              <button className="rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: PINK, color: INK }}>{d.checkAvail}</button>
            </div>
          </div>
        </div>
        <Postcard className="absolute top-6 right-6 w-28 hidden md:block opacity-95" />
      </section>

      {/* ---- footer ---- */}
      <footer className="px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs uppercase tracking-widest" style={{ background: CREAM }}>
        <span className="text-xl" style={anton}>LUMIÈRE</span>
        <span className="opacity-60">{d.footer}</span>
      </footer>
    </div>
  );
}
