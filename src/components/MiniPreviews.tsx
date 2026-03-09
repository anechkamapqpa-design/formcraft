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

export const miniPreviewMap: Record<string, () => JSX.Element> = {
  "Luxury Art": MiniLuxuryArt,
  "SaaS Clean": MiniSaaSClean,
  "Ecom Drop": MiniEcomDrop,
  "Personal Brand": MiniPersonalBrand,
  "Experimental Neon": MiniExperimentalNeon,
  "Product Interactive": MiniProductInteractive,
};
