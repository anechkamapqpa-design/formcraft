import { useRef, useEffect, useState } from "react";

function ScaledPreview({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      setScale(w / 1280);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden relative">
      <div className="absolute top-0 left-0 pointer-events-none select-none" style={{ width: "1280px", height: "800px", transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

export function MiniLuxuryArt() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(30,10%,5%)] text-[hsl(40,30%,90%)] relative overflow-hidden">
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[hsl(30,10%,5%)]/80 backdrop-blur-md border-b border-[hsl(40,40%,30%)]/20">
          <span className="text-[hsl(40,30%,70%)] text-xs tracking-[0.3em] uppercase">← Back</span>
          <h1 className="font-serif text-xl tracking-[0.2em] uppercase text-[hsl(40,40%,85%)]">Siberiana</h1>
          <span className="text-xs tracking-[0.2em] uppercase text-[hsl(40,30%,60%)]">Living Gallery</span>
        </nav>
        <div className="w-full h-full flex items-center justify-center relative">
          <img src="/images/demos/luxury-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,5%)] via-transparent to-[hsl(30,10%,5%)]/50" />
          <div className="relative text-center z-10">
            <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,50%,70%)] mb-4">Exclusive Collection</p>
            <h2 className="font-serif text-8xl tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Artistry Beyond<br />Limits</h2>
            <div className="w-20 h-px bg-[hsl(40,50%,50%)] mx-auto mb-6" />
            <p className="text-[hsl(40,20%,60%)] text-lg max-w-md mx-auto">Curated masterpieces from the world's most visionary contemporary artists</p>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniSaaSClean() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-8 pt-20 pb-12">
          <span className="inline-block text-xs font-semibold bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full mb-6">Now with AI-powered automation</span>
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-[hsl(220,30%,12%)]">Boost Your Productivity<br />& Simplify Your Workflow</h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">The all-in-one platform that helps teams manage projects, automate tasks, and ship faster.</p>
          <div className="flex items-center justify-center gap-4">
            <span className="bg-[hsl(350,80%,55%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold shadow-lg">Get Started Free</span>
            <span className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold">Watch Demo</span>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniEcomDrop() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] relative overflow-hidden">
        <div className="w-full h-full flex items-center relative">
          <img src="/images/demos/ecom-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%)] via-[hsl(0,0%,4%)]/70 to-transparent" />
          <div className="relative z-10 px-16 max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase bg-[hsl(0,80%,50%)] px-4 py-1.5 mb-6">Drop 004</span>
            <h2 className="text-8xl font-black leading-[0.9] mb-4">Limited<br />Drop<br />Now Live</h2>
            <p className="text-4xl font-black text-[hsl(0,0%,70%)] mb-8">€149</p>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniPersonalBrand() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(30,25%,97%)] text-[hsl(20,15%,20%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 pt-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,75%,50%)] mb-4 block">Your Personal Brand Partner</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>Helping You Build & Grow Your Online Presence.</h1>
              <p className="text-lg text-[hsl(20,10%,45%)] mb-8 max-w-lg">I help creators, coaches, and entrepreneurs build authentic personal brands.</p>
              <span className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">Let's Work Together →</span>
            </div>
            <div>
              <img src="/images/demos/creator-portrait.jpg" alt="" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniExperimentalNeon() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(260,30%,5%)] text-[hsl(0,0%,100%)] relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center relative">
          <img src="/images/demos/neon-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,30%,5%)]/60 via-transparent to-[hsl(260,30%,5%)]" />
          <div className="relative z-10 text-center">
            <h1 className="text-[10rem] font-black leading-[0.85] uppercase tracking-tighter">
              <span className="block" style={{ background: "linear-gradient(to right, hsl(280,100%,70%), hsl(200,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Next Level</span>
              <span className="block text-[hsl(0,0%,100%)]/90">Digital</span>
              <span className="block" style={{ background: "linear-gradient(to right, hsl(180,100%,60%), hsl(320,100%,65%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experiences</span>
            </h1>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniProductInteractive() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(225,30%,8%)] text-[hsl(0,0%,100%)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 pt-20">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold bg-[hsl(0,85%,55%)]/15 text-[hsl(0,85%,60%)] px-4 py-1.5 rounded-full mb-5 tracking-wide">New: AI-Powered Insights</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6">
                Get Insights.<br />Automate.<br />
                <span style={{ background: "linear-gradient(to right, hsl(0,85%,55%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Grow Faster.</span>
              </h1>
              <p className="text-lg text-[hsl(225,15%,55%)] mb-8 max-w-lg">The unified analytics platform that turns raw data into actionable insights.</p>
            </div>
            <div className="bg-[hsl(225,25%,12%)] rounded-2xl border border-[hsl(225,20%,18%)] p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Revenue", val: "$128.4K", color: "hsl(130,60%,50%)" },
                  { label: "Users", val: "24,891", color: "hsl(200,80%,60%)" },
                  { label: "Conversion", val: "4.2%", color: "hsl(40,90%,55%)" },
                  { label: "Growth", val: "+32%", color: "hsl(0,85%,55%)" },
                ].map((c) => (
                  <div key={c.label} className="bg-[hsl(225,25%,15%)] rounded-xl p-3">
                    <p className="text-[10px] text-[hsl(225,15%,50%)]">{c.label}</p>
                    <p className="text-lg font-bold mt-0.5" style={{ color: c.color }}>{c.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniLuxeAura() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(30,8%,4%)] text-[hsl(40,25%,88%)] relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center relative">
          <img src="/images/demos/luxeaura-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,8%,4%)]/40 via-[hsl(30,8%,4%)]/20 to-[hsl(30,8%,4%)]" />
          <div className="relative z-10 text-center">
            <p className="text-xs tracking-[0.6em] uppercase text-[hsl(40,60%,65%)] mb-4">Premium Brand</p>
            <h2 className="text-8xl font-light tracking-wider leading-[0.95]" style={{ fontFamily: "'Georgia', serif" }}>
              Timeless<br /><em className="font-normal italic text-[hsl(40,60%,72%)]">Elegance</em>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(40,60%,55%)] to-transparent mx-auto mt-6 mb-4" />
            <p className="text-[hsl(40,15%,55%)] text-lg">Where luxury meets artistry</p>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniAppMotion() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(240,15%,98%)] text-[hsl(240,20%,15%)] relative overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-[hsl(260,80%,85%)] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[hsl(200,90%,85%)] rounded-full blur-[120px] opacity-60" />
        <div className="relative w-full h-full flex items-center">
          <div className="pl-24 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(260,80%,95%)] text-[hsl(260,80%,45%)] text-xs font-semibold rounded-full mb-6">⚡ #1 Productivity App</span>
            <h2 className="text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
              Your Ideas.<br />
              <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>In Motion.</span><br />
              Always.
            </h2>
            <p className="text-lg text-[hsl(240,10%,45%)] max-w-md">Transform how you work with the most intuitive app experience.</p>
          </div>
          <div className="absolute right-48 top-1/2 -translate-y-1/2">
            <div className="w-[200px] h-[400px] bg-[hsl(240,20%,10%)] rounded-[2rem] p-1.5 shadow-2xl border border-[hsl(240,10%,25%)]">
              <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
                <img src="/images/demos/appmotion-hero-bg.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniEchoPress() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(40,20%,97%)] text-[hsl(20,10%,12%)] overflow-hidden">
        <div className="flex items-center justify-between px-12 py-5 border-b border-[hsl(20,10%,88%)]">
          <span className="text-2xl font-black tracking-tight uppercase" style={{ fontFamily: "'Georgia', serif" }}>Echo<span style={{ color: "hsl(0,85%,45%)" }}>Press</span></span>
          <div className="flex gap-8 text-sm font-medium text-[hsl(20,10%,40%)]">
            <span>Culture</span><span>Design</span><span>Tech</span><span>Travel</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 h-[700px]">
          <div className="relative overflow-hidden">
            <img src="/images/demos/echopress-hero.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="px-3 py-1 bg-[hsl(0,85%,45%)] text-white text-xs font-bold tracking-wider uppercase">Featured</span>
              <h2 className="text-4xl font-black leading-tight mt-3 text-white drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>The Future of Editorial Design</h2>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-0">
            <div className="relative overflow-hidden border-b border-[hsl(20,10%,90%)]">
              <img src="/images/demos/echopress-article1.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>Architecture Today</h3>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src="/images/demos/echopress-article3.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>Tokyo After Dark</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniMarketSphere() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(210,20%,98%)] text-[hsl(210,20%,15%)] overflow-hidden">
        <header className="h-14 bg-white border-b border-[hsl(210,15%,90%)] flex items-center px-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[hsl(168,76%,36%)] flex items-center justify-center text-white text-xs font-bold">M</div>
            <span className="font-black text-sm">Market<span style={{ color: "hsl(168,76%,36%)" }}>Sphere</span></span>
          </div>
          <div className="flex-1 max-w-md h-9 bg-[hsl(210,15%,96%)] rounded-xl border border-[hsl(210,15%,88%)]" />
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(210,15%,96%)]" />
            <div className="px-3 h-8 rounded-xl bg-[hsl(168,76%,36%)] text-white text-xs font-bold flex items-center">Cart</div>
          </div>
        </header>
        <div className="p-6 flex gap-6">
          <aside className="w-48 bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-4 h-fit">
            <p className="text-xs font-bold mb-3">Filters</p>
            <div className="space-y-2">
              {["Electronics", "Fashion", "Home"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-xs">
                  <div className="w-3.5 h-3.5 rounded bg-[hsl(168,76%,36%)]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </aside>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] overflow-hidden">
                <div className="aspect-square bg-[hsl(210,15%,96%)]">
                  <img src={`/images/demos/marketsphere-product${((i - 1) % 6) + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="h-3 w-2/3 bg-[hsl(210,15%,92%)] rounded mb-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black">${[89, 249, 45, 129, 65, 39][i - 1]}</span>
                    <div className="px-2 py-1 rounded text-[10px] font-bold text-white bg-[hsl(168,76%,36%)]">Add</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniAtelier() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,96%)] text-[hsl(0,0%,10%)] relative overflow-hidden font-sans">
        {/* Abstract shapes */}
        <div className="absolute top-[15%] left-[20%] w-[300px] h-[300px] rounded-full bg-[hsl(0,0%,15%)] opacity-[0.06] blur-[2px]" />
        <div className="absolute top-[40%] right-[15%] w-[220px] h-[220px] rounded-full bg-[hsl(0,0%,20%)] opacity-[0.05] blur-[2px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[180px] h-[180px] rounded-full bg-[hsl(0,0%,10%)] opacity-[0.04] blur-[2px]" />
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1280 800">
          <path d="M0 300 Q320 250 640 320 Q960 390 1280 280" fill="none" stroke="hsl(0,0%,25%)" strokeWidth="1.5" />
          <path d="M0 450 Q320 400 640 470 Q960 540 1280 430" fill="none" stroke="hsl(0,0%,30%)" strokeWidth="1.5" />
          <path d="M0 600 Q320 550 640 620 Q960 690 1280 580" fill="none" stroke="hsl(0,0%,35%)" strokeWidth="1.5" />
        </svg>
        {/* Geometric accents */}
        <div className="absolute top-[22%] right-[25%] w-[60px] h-[60px] border border-[hsl(0,0%,25%)] opacity-[0.1] rotate-45" />
        <div className="absolute bottom-[30%] right-[35%] w-[40px] h-[40px] rounded-full border border-[hsl(0,0%,20%)] opacity-[0.08]" />
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8">
          <span className="text-xl tracking-[0.2em] uppercase font-bold">Atelier</span>
          <span className="text-xs tracking-[0.2em] uppercase text-[hsl(0,0%,45%)]">Creative Studio</span>
        </nav>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[hsl(0,0%,45%)] mb-6">Creative Studio</p>
          <h1 className="text-[9rem] font-bold tracking-[-0.04em] leading-[0.9] mb-6">Atelier</h1>
          <p className="text-xl text-[hsl(0,0%,40%)] max-w-md">Multidisciplinary creative studio focused on brand identity.</p>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniNeuroFlow() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(250,25%,6%)] text-[hsl(0,0%,95%)] relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[hsl(270,80%,50%)] rounded-full blur-[200px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[hsl(200,90%,50%)] rounded-full blur-[180px] opacity-10" />
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center px-16 pt-28">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(270,60%,50%)]/15 text-[hsl(270,80%,70%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(270,60%,50%)]/30">⚡ AI-Powered Platform</span>
            <h1 className="text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Automate.<br />
              <span style={{ background: "linear-gradient(to right, hsl(270,80%,65%), hsl(200,90%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Analyze.</span><br />
              Accelerate.
            </h1>
            <p className="text-lg text-[hsl(250,15%,55%)] max-w-lg">The next-generation AI platform for intelligent decisions.</p>
          </div>
          <div className="bg-[hsl(250,20%,10%)] rounded-2xl border border-[hsl(270,30%,18%)] p-6">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Accuracy", val: "99.2%", color: "hsl(270,80%,65%)" },
                { label: "Processed", val: "2.4M", color: "hsl(200,90%,60%)" },
                { label: "Speed", val: "0.3s", color: "hsl(160,70%,55%)" },
              ].map((s) => (
                <div key={s.label} className="bg-[hsl(250,20%,13%)] rounded-xl p-3 border border-[hsl(270,20%,16%)]">
                  <p className="text-[9px] text-[hsl(250,15%,45%)] uppercase">{s.label}</p>
                  <p className="text-lg font-bold" style={{ color: s.color }}>{s.val}</p>
                </div>
              ))}
            </div>
            <div className="bg-[hsl(250,20%,13%)] rounded-xl p-4 border border-[hsl(270,20%,16%)] h-24 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "linear-gradient(to top, hsl(270,80%,55%), hsl(200,90%,55%))", opacity: 0.7 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniGlassWave() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(220,35%,8%)] text-white relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[hsl(210,90%,55%)] rounded-full blur-[100px] opacity-20 top-[-10%] right-[-5%]" />
        <div className="absolute w-[400px] h-[400px] bg-[hsl(280,80%,55%)] rounded-full blur-[100px] opacity-15 top-[30%] left-[-10%]" />
        <div className="absolute w-[350px] h-[350px] bg-[hsl(170,70%,50%)] rounded-full blur-[100px] opacity-12 bottom-[10%] right-[10%]" />
        <div className="relative z-10 text-center pt-24 px-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.08] border border-white/10 text-[hsl(210,80%,70%)] text-xs font-semibold rounded-full mb-8">✨ Next-Gen SaaS Platform</span>
          <h1 className="text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            Your Data, Crystal Clear.<br />
            <span style={{ background: "linear-gradient(to right, hsl(210,90%,65%), hsl(260,80%,70%), hsl(320,80%,65%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Beautifully Transparent.</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10">A modern analytics platform with glass-smooth interfaces.</p>
          <div className="max-w-4xl mx-auto bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-5">
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Revenue", val: "$184K", color: "hsl(210,90%,65%)" },
                { label: "Users", val: "32.4K", color: "hsl(260,80%,70%)" },
                { label: "Conversion", val: "5.8%", color: "hsl(170,70%,55%)" },
                { label: "Growth", val: "+42%", color: "hsl(320,80%,65%)" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.07] rounded-xl p-3 border border-white/[0.1]">
                  <p className="text-[9px] text-white/30 uppercase">{s.label}</p>
                  <p className="text-lg font-bold" style={{ color: s.color }}>{s.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniBrutalistLab() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(60,5%,96%)] text-[hsl(0,0%,8%)] relative overflow-hidden">
        <div className="absolute top-16 right-0 w-72 h-72 bg-[hsl(50,100%,50%)] -rotate-12 opacity-60" />
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-[hsl(0,80%,50%)] rotate-6 opacity-40" />
        <nav className="flex items-center justify-between px-12 py-4 border-b-4 border-[hsl(0,0%,0%)] relative z-10">
          <span className="text-sm font-bold uppercase tracking-wider">← Back</span>
          <span className="text-2xl font-black uppercase tracking-tight">Brutalist<span style={{ color: "hsl(0,80%,50%)" }}>Lab</span></span>
          <span className="text-xs font-bold uppercase tracking-widest border-2 border-[hsl(0,0%,0%)] px-3 py-1.5">Get Started</span>
        </nav>
        <div className="relative z-10 px-12 pt-16">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] bg-[hsl(50,100%,50%)] text-[hsl(0,0%,0%)] px-4 py-2 border-2 border-[hsl(0,0%,0%)] mb-4">Web3 · AI · Digital</span>
          <h1 className="text-[8rem] font-black leading-[0.85] uppercase tracking-tighter">
            Break<br />
            <span style={{ color: "hsl(0,80%,50%)" }}>The</span><br />
            Rules
          </h1>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniCommunityGrid() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(250,30%,98%)] text-[hsl(250,20%,15%)] relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[hsl(270,80%,85%)] via-[hsl(30,90%,85%)] to-[hsl(200,80%,85%)] rounded-full blur-[120px] opacity-40" />
        <nav className="flex items-center justify-between px-10 py-4 relative z-10 border-b border-[hsl(250,15%,90%)]">
          <span className="text-sm font-medium text-[hsl(250,15%,50%)]">← Back</span>
          <span className="text-xl font-extrabold tracking-tight">Community<span style={{ color: "hsl(270,80%,55%)" }}>Grid</span></span>
          <span className="bg-[hsl(270,80%,55%)] text-white px-5 py-2 rounded-full text-sm font-semibold">Join Now</span>
        </nav>
        <div className="relative z-10 text-center pt-20 px-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(270,80%,95%)] text-[hsl(270,80%,45%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(270,80%,88%)]">👥 2,500+ Members</span>
          <h1 className="text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
            Where Ideas<br />
            <span className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>Connect & Grow</span>
          </h1>
          <p className="text-lg text-[hsl(250,10%,45%)] max-w-2xl mx-auto">The ultimate platform for startup communities and tech networking.</p>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniMonoJournal() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(40,20%,97%)] text-[hsl(20,10%,12%)] overflow-hidden">
        <div className="flex items-center justify-between px-10 py-4 border-b border-[hsl(20,10%,88%)]">
          <span className="text-sm text-[hsl(20,10%,45%)]">← Back</span>
          <span className="text-3xl font-black tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>Mono<span style={{ color: "hsl(0,75%,45%)" }}>Journal</span></span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "hsl(0,75%,45%)" }}>Subscribe</span>
        </div>
        <div className="flex gap-6 text-[10px] font-semibold uppercase tracking-wider px-10 py-3 border-b border-[hsl(20,10%,90%)]">
          {["All", "Culture", "Design", "Tech", "Travel"].map((c, i) => (
            <span key={c} style={{ color: i === 0 ? "hsl(0,75%,45%)" : "hsl(20,10%,50%)" }}>{c}</span>
          ))}
        </div>
        <div className="px-10 pt-8">
          <div className="grid grid-cols-2 gap-0 border border-[hsl(20,10%,88%)]">
            <div className="aspect-[4/3] bg-gradient-to-br from-[hsl(20,10%,25%)] to-[hsl(0,0%,40%)] relative">
              <span className="absolute top-4 left-4 px-3 py-1 bg-[hsl(0,75%,45%)] text-white text-[9px] font-bold uppercase tracking-wider">Featured</span>
            </div>
            <div className="p-10 bg-white flex flex-col justify-center">
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "hsl(0,75%,45%)" }}>Culture</span>
              <h2 className="text-4xl font-black leading-[1.1] mt-2 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>The Art of Minimalism in Modern Publishing</h2>
              <p className="text-sm text-[hsl(20,10%,50%)] mt-4 leading-relaxed">How digital magazines are redefining editorial design with bold typography and white space.</p>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniVoxel3D() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(240,20%,4%)] text-white relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(260,80%,50%)] rounded-full blur-[250px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(200,90%,50%)] rounded-full blur-[200px] opacity-10" />
        <nav className="flex items-center justify-between px-12 py-5 border-b border-white/[0.06] relative z-10">
          <span className="text-sm text-white/50">← Back</span>
          <span className="text-xl font-black">Voxel<span style={{ background: "linear-gradient(to right, hsl(260,80%,65%), hsl(200,90%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>3D</span></span>
          <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(200,90%,55%)] text-white px-5 py-2 rounded-full text-sm font-semibold">Get Started</span>
        </nav>
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center px-16 pt-24">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(260,80%,55%)]/10 text-[hsl(260,80%,70%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(260,80%,55%)]/20">⚡ 3D Product Platform</span>
            <h1 className="text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Build.<br />
              <span style={{ background: "linear-gradient(to right, hsl(260,80%,65%), hsl(200,90%,60%), hsl(170,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Visualize.</span><br />
              Launch.
            </h1>
            <p className="text-lg text-white/40 max-w-lg">Next-gen 3D product experiences that captivate and convert.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 relative" style={{ perspective: "600px" }}>
              <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-20deg) rotateY(35deg)" }} className="w-full h-full relative">
                <div className="absolute inset-[15%] rounded-2xl border border-white/20" style={{ transform: "translateZ(60px)", background: "linear-gradient(135deg, hsl(260,80%,55%), hsl(200,90%,55%))", opacity: 0.75 }} />
                <div className="absolute inset-[15%] rounded-2xl border border-white/20" style={{ transform: "rotateY(90deg) translateZ(60px)", background: "linear-gradient(135deg, hsl(320,80%,55%), hsl(260,80%,55%))", opacity: 0.75 }} />
                <div className="absolute inset-[15%] rounded-2xl border border-white/20" style={{ transform: "rotateX(90deg) translateZ(60px)", background: "linear-gradient(135deg, hsl(260,80%,60%), hsl(320,80%,55%))", opacity: 0.75 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniStoryBrand() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(160,15%,5%)] text-[hsl(40,20%,90%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(35,40%,20%,0.3),transparent_70%)]" />
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 mix-blend-difference text-white">
          <span className="text-sm text-white/50">← Back</span>
          <span className="text-lg tracking-[0.15em] uppercase font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Story<em className="font-normal italic">Brand</em></span>
          <span className="text-xs tracking-[0.2em] uppercase text-white/40">Explore</span>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(35,50%,60%)] mb-8">Cinematic Brand Story</p>
          <h2 className="text-8xl font-bold leading-[0.95] tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Every Brand Has<br /><em className="font-normal italic text-[hsl(35,50%,65%)]">a Story</em>
          </h2>
          <p className="text-lg text-[hsl(40,15%,50%)] max-w-xl">Immersive storytelling experiences for luxury brands</p>
        </div>
      </div>
    </ScaledPreview>
  );
}

export const miniPreviewMap: Record<string, () => JSX.Element> = {
  "Luxury Art": MiniLuxuryArt,
  "SaaS Clean": MiniSaaSClean,
  "Ecom Drop": MiniEcomDrop,
  "Personal Brand": MiniPersonalBrand,
  "Experimental Neon": MiniExperimentalNeon,
  "Product Interactive": MiniProductInteractive,
  "LuxeAura": MiniLuxeAura,
  "AppMotion": MiniAppMotion,
  "EchoPress": MiniEchoPress,
  "MarketSphere": MiniMarketSphere,
  "Atelier": MiniAtelier,
  "NeuroFlow": MiniNeuroFlow,
  "GlassWave": MiniGlassWave,
  "BrutalistLab": MiniBrutalistLab,
  "CommunityGrid": MiniCommunityGrid,
  "MonoJournal": MiniMonoJournal,
  "Voxel3D": MiniVoxel3D,
  "StoryBrand": MiniStoryBrand,
};
