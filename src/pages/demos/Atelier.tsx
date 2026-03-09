import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { useRef, useEffect, useCallback } from "react";

const projects = [
  { id: 1, title: "Lumina", category: "Brand Identity", img: "/images/demos/atelier-project1.jpg", size: "large" },
  { id: 2, title: "Aura App", category: "Digital Design", img: "/images/demos/atelier-project2.jpg", size: "small" },
  { id: 3, title: "Noir", category: "Packaging", img: "/images/demos/atelier-project3.jpg", size: "small" },
  { id: 4, title: "Volume 04", category: "Editorial", img: "/images/demos/atelier-project4.jpg", size: "large" },
];

function AbstractCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  const draw = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    ctx.clearRect(0, 0, W, H);

    // Organic blob shapes
    const blobs = [
      { cx: W * (0.25 + mx * 0.1), cy: H * (0.35 + my * 0.1), r: 220, color: "hsla(0,0%,15%,0.08)", phase: 0 },
      { cx: W * (0.7 - mx * 0.08), cy: H * (0.55 - my * 0.08), r: 180, color: "hsla(0,0%,20%,0.06)", phase: 2 },
      { cx: W * (0.5 + mx * 0.05), cy: H * (0.7 + my * 0.05), r: 150, color: "hsla(0,0%,10%,0.05)", phase: 4 },
    ];

    for (const blob of blobs) {
      ctx.beginPath();
      const points = 8;
      for (let j = 0; j <= points; j++) {
        const angle = (j / points) * Math.PI * 2;
        const wobble = Math.sin(time * 0.0008 + blob.phase + angle * 3) * 30 + Math.cos(time * 0.0006 + angle * 2) * 20;
        const x = blob.cx + Math.cos(angle) * (blob.r + wobble);
        const y = blob.cy + Math.sin(angle) * (blob.r + wobble);
        if (j === 0) ctx.moveTo(x, y);
        else {
          const prevAngle = ((j - 1) / points) * Math.PI * 2;
          const prevWobble = Math.sin(time * 0.0008 + blob.phase + prevAngle * 3) * 30 + Math.cos(time * 0.0006 + prevAngle * 2) * 20;
          const cpx = blob.cx + Math.cos((angle + prevAngle) / 2) * (blob.r + (wobble + prevWobble) / 2) * 1.15;
          const cpy = blob.cy + Math.sin((angle + prevAngle) / 2) * (blob.r + (wobble + prevWobble) / 2) * 1.15;
          ctx.quadraticCurveTo(cpx, cpy, x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = blob.color;
      ctx.fill();
    }

    // Flowing lines
    for (let l = 0; l < 5; l++) {
      ctx.beginPath();
      ctx.strokeStyle = `hsla(0,0%,${20 + l * 8}%,${0.12 - l * 0.015})`;
      ctx.lineWidth = 1.5;
      const yBase = H * (0.2 + l * 0.15);
      for (let x = 0; x < W; x += 4) {
        const xn = x / W;
        const wave = Math.sin(xn * 6 + time * 0.001 + l) * 40
          + Math.sin(xn * 3 - time * 0.0007 + l * 2) * 25
          + Math.cos(xn * 10 + time * 0.0005) * 10;
        const y = yBase + wave + (my - 0.5) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Geometric accents
    const t = time * 0.001;
    ctx.save();
    ctx.translate(W * 0.72, H * 0.28);
    ctx.rotate(t * 0.3);
    ctx.strokeStyle = "hsla(0,0%,25%,0.12)";
    ctx.lineWidth = 1;
    ctx.strokeRect(-40, -40, 80, 80);
    ctx.restore();

    ctx.save();
    ctx.translate(W * 0.2, H * 0.7);
    ctx.rotate(-t * 0.2);
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.strokeStyle = "hsla(0,0%,20%,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(W * 0.85, H * 0.65);
    ctx.rotate(t * 0.15);
    const triSize = 35;
    ctx.beginPath();
    ctx.moveTo(0, -triSize);
    ctx.lineTo(triSize * 0.866, triSize * 0.5);
    ctx.lineTo(-triSize * 0.866, triSize * 0.5);
    ctx.closePath();
    ctx.strokeStyle = "hsla(0,0%,22%,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Scattered dots
    for (let i = 0; i < 12; i++) {
      const dx = ((i * 137.5) % W);
      const dy = ((i * 83.7 + Math.sin(t + i) * 20) % H);
      ctx.beginPath();
      ctx.arc(dx, dy, 2, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(0,0%,30%,0.15)";
      ctx.fill();
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const move = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", move);

    animRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Atelier() {
  const { t } = useLang();
  const d = t.demos.atelier;

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] text-[hsl(0,0%,10%)] selection:bg-[hsl(0,0%,10%)] selection:text-[hsl(0,0%,98%)] font-sans" ref={containerRef}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
        <Link to="/template/11" className="text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity">{d.back}</Link>
        <span className="text-xl font-bold tracking-tighter">Atelier</span>
        <span className="text-xs tracking-[0.2em] uppercase font-medium hidden sm:block">Creative Studio</span>
      </nav>

      {/* Hero — Abstract Creative */}
      <section ref={heroRef} className="h-screen relative overflow-hidden bg-[hsl(0,0%,96%)]">
        <AbstractCanvas />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] tracking-[0.5em] uppercase text-[hsl(0,0%,45%)] mb-8"
          >
            Creative Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.04em] leading-[0.9] mb-8"
          >
            Atelier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-[hsl(0,0%,40%)] max-w-md leading-relaxed"
          >
            {d.manifestoSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 w-px h-16 bg-[hsl(0,0%,70%)] mx-auto animate-pulse"
          />
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-12 font-semibold text-[hsl(0,0%,40%)]">{d.manifestoLabel}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            {d.manifestoTitle}
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(0,0%,30%)] max-w-2xl leading-relaxed">
            {d.manifestoSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-8">
        <p className="text-xs tracking-[0.3em] uppercase mb-16 font-semibold px-4 max-w-7xl mx-auto">{d.projectsLabel}</p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'}`}
              style={{ marginTop: project.size === 'small' && i % 2 !== 0 ? '10vh' : '0' }}
            >
              <div className="overflow-hidden bg-[hsl(0,0%,90%)] mb-6 aspect-[4/5] md:aspect-auto md:h-[600px]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-sm text-[hsl(0,0%,50%)]">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-8 bg-[hsl(0,0%,10%)] text-[hsl(0,0%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
              <p className="text-xs tracking-[0.3em] uppercase mb-8 font-semibold text-[hsl(0,0%,50%)]">{d.servicesLabel}</p>
              <h2 className="text-4xl font-bold tracking-tight">{d.servicesTitle}</h2>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {d.services.map((service, i) => (
                <div key={i} className="border-t border-[hsl(0,0%,20%)] pt-8">
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-[hsl(0,0%,60%)] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Image */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-12 font-semibold text-[hsl(0,0%,40%)] text-center">{d.teamLabel}</p>
          <div className="aspect-video w-full overflow-hidden bg-[hsl(0,0%,90%)]">
            <img src="/images/demos/atelier-team.jpg" alt="Our Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-[hsl(0,0%,90%)] flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">{d.contactTitle}</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[hsl(0,0%,10%)] text-[hsl(0,0%,98%)] px-10 py-5 rounded-full text-lg font-medium mb-32"
        >
          {d.contactBtn}
        </motion.button>
        <p className="text-sm text-[hsl(0,0%,50%)]">{d.footer}</p>
      </footer>
    </div>
  );
}
