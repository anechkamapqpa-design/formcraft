import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang, useLangPath } from "@/lib/i18n";
import { useEffect, useRef } from "react";

function HologramWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "hsla(280, 100%, 70%, 0.55)",
      "hsla(220, 100%, 70%, 0.5)",
      "hsla(180, 100%, 60%, 0.55)",
      "hsla(320, 100%, 65%, 0.45)",
      "hsla(200, 100%, 70%, 0.4)",
    ];

    const draw = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.4 * dpr;
      ctx.lineCap = "round";

      const layers = 28;
      const time = t * 0.0006;

      for (let l = 0; l < layers; l++) {
        const phase = l * 0.18;
        const colorIdx = l % colors.length;
        ctx.strokeStyle = colors[colorIdx];
        ctx.shadowBlur = 14 * dpr;
        ctx.shadowColor = colors[colorIdx];

        ctx.beginPath();
        const baseY = h / 2 + Math.sin(time * 0.7 + l * 0.3) * h * 0.06;
        const amp = h * (0.18 + Math.sin(time * 0.5 + l * 0.4) * 0.06) * (1 - l / (layers * 2.2));
        const freq = 0.0035 + Math.sin(time * 0.3 + l * 0.2) * 0.0008;

        for (let x = 0; x <= w; x += 6 * dpr) {
          const y =
            baseY +
            Math.sin(x * freq + time * 1.4 + phase) * amp +
            Math.sin(x * freq * 2.3 + time * 0.9 + phase * 1.7) * amp * 0.35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default function ExperimentalNeon() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = t.demos.experimentalNeon;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[hsl(260,30%,5%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(260,30%,5%)]/80 backdrop-blur-md">
        <Link to={lp("/template/2")} className="text-xs text-[hsl(280,30%,50%)] hover:text-[hsl(180,100%,70%)] transition">{d.back}</Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="text-[hsl(280,30%,60%)] hover:text-[hsl(180,100%,70%)] transition">{d.work}</a>
          <button className="border border-[hsl(180,100%,50%)] text-[hsl(180,100%,70%)] px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[hsl(180,100%,50%)]/10 transition">{d.connect}</button>
        </div>
      </nav>
      <section className="relative h-screen flex items-center justify-center">
        <motion.img
          src="/images/demos/neon-hero.jpg"
          alt="Neon waves"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          animate={{
            scale: [1.1, 1.18, 1.1],
            x: ["-2%", "2%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,30%,5%)]/60 via-transparent to-[hsl(260,30%,5%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,30%,5%)]/60 via-transparent to-[hsl(260,30%,5%)]" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 w-full text-center overflow-visible px-4">
          <h1 className="text-[4.275rem] md:text-[8.5rem] font-black leading-[0.9] uppercase tracking-tighter overflow-visible py-[0.08em]">
            <span className="block box-border overflow-visible px-[0.08em] bg-gradient-to-r from-[hsl(280,100%,70%)] via-[hsl(200,100%,70%)] to-[hsl(180,100%,60%)] bg-clip-text text-transparent">{d.heroTitle1}</span>
            <span className="block box-border overflow-visible px-[0.08em] text-[hsl(0,0%,100%)]/90">{d.heroTitle2}</span>
            <span className="block box-border overflow-visible px-[0.14em] bg-gradient-to-r from-[hsl(180,100%,60%)] to-[hsl(320,100%,65%)] bg-clip-text text-transparent text-[95%]">{d.heroTitle3}</span>
          </h1>
          <div className="flex justify-center gap-4 mt-12">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-[hsl(280,100%,60%)] to-[hsl(320,100%,60%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">{d.portfolioHighlights}</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="border-2 border-[hsl(180,100%,50%)] text-[hsl(180,100%,70%)] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[hsl(180,100%,50%)]/10 transition">{d.connect}</motion.button>
          </div>
        </motion.div>
      </section>
      <section id="work" className="px-8 py-24 max-w-6xl mx-auto">
        <h3 className="text-center text-5xl font-black mb-16 bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(180,100%,60%)] bg-clip-text text-transparent">{d.featuredWork}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {d.works.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group" style={{ background: `linear-gradient(135deg, hsl(${260+i*30}, 80%, 15%), hsl(${200+i*20}, 70%, 10%))` }}>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs text-[hsl(180,100%,60%)] tracking-[0.2em] uppercase mb-1">{w.category}</span>
                <h4 className="text-2xl font-bold">{w.title}</h4>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(180,100%,50%)]/30 rounded-2xl transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(280,30%,15%)] py-8 text-center text-xs text-[hsl(280,20%,40%)]">{d.footer}</footer>
    </div>
  );
}
