import { useRef, useEffect, useState } from "react";

function ScaledPreview({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / 1280);
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

export function MiniMinimalPortfolio() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)] overflow-hidden">
    <div className="max-w-5xl mx-auto px-8 pt-24 text-center">
      <h1 className="text-7xl font-light leading-tight mb-6">Design with Purpose</h1>
      <p className="text-lg text-[hsl(0,0%,45%)] max-w-lg mx-auto mb-14">Minimal. Intentional. Beautiful.</p>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[1,2,3].map(i => <div key={i} className="aspect-[4/3] bg-[hsl(0,0%,94%)] rounded-lg" />)}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniDarkStudio() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(240,15%,5%)] text-[hsl(0,0%,95%)] overflow-hidden relative">
    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[hsl(300,100%,50%)]/10 rounded-full blur-[180px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(180,100%,50%)]/8 rounded-full blur-[150px]" />
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <h1 className="text-[9rem] font-black leading-[0.85] uppercase tracking-tighter">
        <span style={{ background: "linear-gradient(to right, hsl(300,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Digital</span>
        <br /><span className="text-[hsl(0,0%,100%)]/90">Canvas</span>
      </h1>
    </div>
  </div></ScaledPreview>);
}

export function MiniSaaSStartup() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)] overflow-hidden">
    <div className="max-w-4xl mx-auto text-center px-8 pt-20">
      <span className="inline-block text-xs font-semibold bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full mb-6">AI-Powered Platform</span>
      <h1 className="text-6xl font-extrabold leading-tight mb-6">Scale Your Business<br /><span className="text-[hsl(230,70%,50%)]">With Intelligence</span></h1>
      <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">The modern platform for growing startups.</p>
      <div className="flex justify-center gap-4">
        <span className="bg-[hsl(230,70%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold">Get Started</span>
        <span className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold">Watch Demo</span>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniCreativeAgency() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,5%)] overflow-hidden">
    <div className="max-w-6xl mx-auto px-8 pt-24">
      <h1 className="text-8xl font-black leading-[0.9] uppercase mb-6">We Create<br /><span className="text-[hsl(350,85%,50%)]">Impact</span></h1>
      <p className="text-xl text-[hsl(0,0%,45%)] max-w-lg mb-10">Bold ideas. Measurable results.</p>
      <div className="grid grid-cols-2 gap-6 mt-12 max-w-4xl">
        {[1,2].map(i => <div key={i} className="aspect-[16/10] rounded-xl" style={{ background: `linear-gradient(135deg, hsl(${350+i*20},70%,90%), hsl(${10+i*30},60%,85%))` }} />)}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniPersonalBrand() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(30,25%,97%)] text-[hsl(20,15%,20%)] overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 pt-16 grid grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,75%,50%)] mb-4 block">Your Personal Brand</span>
        <h1 className="text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>Build & Grow Your Online Presence.</h1>
        <p className="text-lg text-[hsl(20,10%,45%)] mb-8 max-w-lg">Expert coaching for authentic personal brands.</p>
        <span className="bg-[hsl(350,75%,50%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-lg font-semibold inline-block">Let's Work Together →</span>
      </div>
      <div><img src="/images/demos/creator-portrait.jpg" alt="" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" /></div>
    </div>
  </div></ScaledPreview>);
}

export function MiniProductShowcase() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(225,30%,8%)] text-[hsl(0,0%,100%)] overflow-hidden">
    <div className="max-w-6xl mx-auto px-8 pt-20 grid grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-xs tracking-[0.3em] uppercase text-[hsl(270,80%,65%)] mb-4 block">Next Generation</span>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">Experience<br /><span style={{ background: "linear-gradient(to right, hsl(270,80%,60%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pure Sound</span></h1>
        <p className="text-lg text-[hsl(225,15%,55%)] mb-8">Revolutionary audio technology.</p>
      </div>
      <div className="bg-[hsl(225,25%,12%)] rounded-2xl border border-[hsl(225,20%,18%)] aspect-square flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[hsl(270,80%,55%)]/30 to-[hsl(30,90%,55%)]/20 flex items-center justify-center text-6xl">🎧</div>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniStartupPitch() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)] overflow-hidden">
    <div className="max-w-4xl mx-auto text-center px-8 pt-28">
      <h1 className="text-7xl font-extrabold leading-tight mb-6">The Future of<br /><span className="text-[hsl(145,70%,40%)]">Green Energy</span></h1>
      <p className="text-xl text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-10">Join us in building a sustainable tomorrow.</p>
      <span className="bg-[hsl(145,70%,40%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold">Invest Now</span>
    </div>
  </div></ScaledPreview>);
}

export function MiniDigitalArtGallery() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(30,10%,5%)] text-[hsl(40,30%,90%)] overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,5%)] via-[hsl(30,10%,8%)] to-[hsl(30,10%,5%)]/50" />
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <div>
        <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,50%,70%)] mb-4">Digital Art Exhibition</p>
        <h2 className="font-serif text-8xl tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond<br />Reality</h2>
        <div className="w-20 h-px bg-[hsl(40,50%,50%)] mx-auto mb-6" />
        <p className="text-[hsl(40,20%,60%)] text-lg max-w-md mx-auto">Immersive digital art experiences</p>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniCorporateWebsite() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(210,15%,97%)] text-[hsl(210,30%,15%)] overflow-hidden">
    <div className="max-w-5xl mx-auto text-center px-8 pt-24">
      <h1 className="text-6xl font-bold leading-tight mb-6">Building Trust.<br /><span className="text-[hsl(210,60%,45%)]">Delivering Results.</span></h1>
      <p className="text-lg text-[hsl(210,15%,50%)] max-w-2xl mx-auto mb-8">Enterprise solutions for a connected world.</p>
      <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
        {[{ v: "500+", l: "Clients" }, { v: "15", l: "Years" }, { v: "99%", l: "Satisfaction" }, { v: "24/7", l: "Support" }].map(s => (
          <div key={s.l} className="bg-[hsl(0,0%,100%)] border border-[hsl(210,15%,90%)] rounded-lg p-5 text-center">
            <p className="text-2xl font-bold text-[hsl(210,60%,40%)]">{s.v}</p>
            <p className="text-xs text-[hsl(210,15%,55%)] mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniStartupAnimation() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(260,30%,6%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(260,80%,50%)]/12 rounded-full blur-[200px]" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(180,80%,50%)]/8 rounded-full blur-[150px]" />
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <h1 className="text-[8rem] font-black leading-[0.85] uppercase tracking-tighter">
        <span style={{ background: "linear-gradient(135deg, hsl(260,80%,65%), hsl(180,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Motion</span>
        <br /><span className="text-[hsl(0,0%,100%)]/80">Forward</span>
      </h1>
    </div>
  </div></ScaledPreview>);
}

export function MiniMarketplacePlatform() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(220,25%,15%)] overflow-hidden">
    <div className="max-w-5xl mx-auto px-8 pt-16 text-center">
      <h1 className="text-6xl font-extrabold leading-tight mb-6">Discover &<br /><span className="text-[hsl(175,60%,40%)]">Create</span></h1>
      <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-10">The marketplace for digital creators.</p>
      <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-[hsl(220,20%,98%)] border border-[hsl(220,15%,92%)] rounded-xl overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-[hsl(175,30%,90%)] to-[hsl(175,20%,85%)]" />
            <div className="p-3"><p className="font-semibold text-xs">Item {i}</p><p className="text-xs text-[hsl(175,60%,40%)] font-bold">$29</p></div>
          </div>
        ))}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniMobileAppLanding() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(250,30%,98%)] text-[hsl(250,25%,15%)] overflow-hidden">
    <div className="max-w-6xl mx-auto px-8 pt-16 grid grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block bg-[hsl(260,60%,92%)] text-[hsl(260,70%,50%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">📱 New Release</span>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">Your Life,<br /><span className="text-[hsl(260,70%,55%)]">Simplified</span></h1>
        <p className="text-lg text-[hsl(250,15%,50%)] mb-8">Download now on iOS and Android.</p>
        <div className="flex gap-3">
          <span className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-xl text-sm font-semibold">🍎 App Store</span>
          <span className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-xl text-sm font-semibold">▶ Google Play</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-48 h-[380px] bg-[hsl(0,0%,8%)] rounded-[2rem] border-4 border-[hsl(250,15%,20%)] p-2">
          <div className="w-full h-full bg-gradient-to-b from-[hsl(260,60%,55%)] to-[hsl(300,50%,50%)] rounded-[1.5rem]" />
        </div>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniStartupCommunity() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(45,30%,97%)] text-[hsl(220,25%,15%)] overflow-hidden">
    <div className="max-w-4xl mx-auto text-center px-8 pt-24">
      <span className="inline-block bg-[hsl(40,70%,90%)] text-[hsl(40,80%,35%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">🤝 5,000+ Members</span>
      <h1 className="text-6xl font-extrabold leading-tight mb-6">Connect &<br /><span className="text-[hsl(40,80%,45%)]">Grow Together</span></h1>
      <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-10">The community for builders and creators.</p>
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
        {["Meetup", "Workshop", "Hackathon"].map(e => (
          <div key={e} className="bg-[hsl(0,0%,100%)] border border-[hsl(220,15%,92%)] rounded-xl p-4 text-center">
            <p className="text-xs font-bold text-[hsl(40,80%,45%)]">Mar 15</p>
            <h3 className="font-bold text-sm mt-1">{e}</h3>
          </div>
        ))}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniLuxuryBrand() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,4%)] text-[hsl(40,20%,85%)] overflow-hidden flex items-center justify-center">
    <div className="text-center">
      <div className="w-px h-16 bg-[hsl(40,40%,40%)] mx-auto mb-8" />
      <h2 className="font-serif text-8xl tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>MAISON</h2>
      <div className="w-24 h-px bg-[hsl(40,40%,40%)] mx-auto mb-6" />
      <p className="text-sm text-[hsl(40,15%,45%)] tracking-widest uppercase">Timeless Elegance</p>
    </div>
  </div></ScaledPreview>);
}

export function MiniEventLanding() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[hsl(0,80%,50%)]/10 rounded-full blur-[180px]" />
    <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[hsl(30,90%,50%)]/8 rounded-full blur-[150px]" />
    <div className="relative z-10 text-center pt-20">
      <p className="text-xs tracking-[0.4em] uppercase text-[hsl(30,80%,60%)] mb-6">June 20-22 · 2026</p>
      <h1 className="text-[9rem] font-black leading-[0.8] uppercase">
        <span style={{ background: "linear-gradient(to right, hsl(0,85%,55%), hsl(30,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SUMMIT</span>
        <br /><span>2026</span>
      </h1>
      <p className="text-xl text-[hsl(0,0%,50%)] mt-6">The Future of Innovation</p>
    </div>
  </div></ScaledPreview>);
}

export function MiniEducationPlatform() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(45,40%,97%)] text-[hsl(220,30%,15%)] overflow-hidden">
    <div className="max-w-5xl mx-auto px-8 pt-20 text-center">
      <span className="inline-block bg-[hsl(45,80%,85%)] text-[hsl(30,80%,35%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">🎓 10,000+ Students</span>
      <h1 className="text-6xl font-extrabold leading-tight mb-6">Learn Without<br /><span className="text-[hsl(260,70%,55%)]">Limits</span></h1>
      <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-10">Interactive courses from world-class instructors.</p>
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {[{ t: "Web Dev", c: "hsl(260,70%,55%)" }, { t: "Design", c: "hsl(340,75%,55%)" }, { t: "Data", c: "hsl(170,60%,45%)" }].map(x => (
          <div key={x.t} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(220,20%,90%)] p-5">
            <div className="w-10 h-10 rounded-lg mb-3 mx-auto" style={{ background: x.c }} />
            <h3 className="font-bold text-sm">{x.t}</h3>
          </div>
        ))}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniCreativeBlog() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(40,25%,97%)] text-[hsl(220,20%,15%)] overflow-hidden">
    <div className="max-w-3xl mx-auto px-8 pt-24">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(350,60%,50%)] mb-4 block">Featured</span>
      <h2 className="text-5xl leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>The Art of Digital Storytelling in Modern Design</h2>
      <p className="text-lg text-[hsl(220,10%,45%)] leading-relaxed">Exploring how visual narratives shape our understanding of brand identity...</p>
    </div>
  </div></ScaledPreview>);
}

export function MiniFreelancerLanding() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(160,20%,12%)] overflow-hidden">
    <div className="max-w-5xl mx-auto px-8 pt-20 grid grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">Design That<br /><span className="text-[hsl(160,60%,35%)]">Delivers</span></h1>
        <p className="text-lg text-[hsl(160,10%,45%)] mb-8">Freelance designer & developer.</p>
        <span className="bg-[hsl(160,60%,35%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold inline-block">Hire Me</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[1,2,3,4].map(i => <div key={i} className="aspect-square rounded-xl" style={{ background: `linear-gradient(135deg, hsl(${160+i*20},30%,85%), hsl(${180+i*15},20%,80%))` }} />)}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniStartupDashboard() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(220,25%,7%)] text-[hsl(0,0%,100%)] overflow-hidden">
    <div className="max-w-6xl mx-auto px-8 pt-16 grid grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block text-xs font-bold bg-[hsl(200,80%,50%)]/15 text-[hsl(200,80%,60%)] px-4 py-1.5 rounded-full mb-5">Analytics Dashboard</span>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">Your Data,<br /><span style={{ background: "linear-gradient(to right, hsl(200,80%,55%), hsl(170,70%,50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Way</span></h1>
      </div>
      <div className="bg-[hsl(220,20%,11%)] rounded-2xl border border-[hsl(220,15%,18%)] p-6">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[{ l: "Revenue", v: "$128K", c: "hsl(130,60%,50%)" }, { l: "Users", v: "24.8K", c: "hsl(200,80%,60%)" }, { l: "Conv.", v: "4.2%", c: "hsl(40,90%,55%)" }, { l: "Growth", v: "+32%", c: "hsl(0,85%,55%)" }].map(m => (
            <div key={m.l} className="bg-[hsl(220,20%,14%)] rounded-xl p-3">
              <p className="text-[10px] text-[hsl(220,15%,50%)]">{m.l}</p>
              <p className="text-lg font-bold mt-0.5" style={{ color: m.c }}>{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniArchitectureStudio() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)] overflow-hidden">
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col justify-center px-16">
        <span className="text-[10px] tracking-[0.5em] uppercase text-[hsl(0,0%,50%)] mb-6">Architecture · Design · Build</span>
        <h1 className="text-7xl font-bold leading-[0.85] mb-6">Form<br />Follows<br /><span className="text-[hsl(0,0%,45%)]">Function</span></h1>
        <div className="w-16 h-0.5 bg-[hsl(0,0%,0%)] mb-6" />
      </div>
      <div className="bg-[hsl(0,0%,5%)] flex items-center justify-center relative">
        <div className="absolute inset-8 border border-[hsl(0,0%,20%)]" />
        <span className="text-[hsl(0,0%,30%)] text-xs tracking-[0.4em] uppercase">Showcase</span>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniFitnessBrand() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(0,0%,3%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(80,80%,50%)]/10 blur-[120px]" />
    <div className="max-w-6xl mx-auto px-8 pt-24 relative z-10 grid grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[hsl(80,80%,50%)] mb-6 block">Push · Grind · Conquer</span>
        <h1 className="text-7xl font-black leading-[0.9] uppercase mb-6">NO<br />LIMITS.<br /><span className="text-[hsl(80,80%,50%)]">NO EXCUSES.</span></h1>
      </div>
      <div className="flex flex-col gap-4">
        {[{ l: "Workouts", v: "200+" }, { l: "Trainers", v: "50+" }, { l: "Members", v: "10K+" }].map(s => (
          <div key={s.l} className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-xl p-4 flex justify-between">
            <span className="text-sm text-[hsl(0,0%,50%)]">{s.l}</span>
            <span className="text-lg font-black text-[hsl(80,80%,50%)]">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniRestaurantWebsite() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(30,30%,8%)] text-[hsl(40,30%,90%)] overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,30%,10%)] via-[hsl(25,40%,12%)] to-[hsl(30,30%,8%)]" />
    <div className="relative z-10 text-center pt-24">
      <p className="text-xs tracking-[0.5em] uppercase text-[hsl(35,60%,55%)] mb-4">Est. 2018 · Fine Dining</p>
      <h1 className="text-8xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>La Maison</h1>
      <div className="w-32 h-px bg-[hsl(35,60%,40%)] mx-auto mb-4" />
      <p className="text-[hsl(40,20%,55%)] text-lg">Where culinary art meets elegance</p>
    </div>
  </div></ScaledPreview>);
}

export function MiniAIProductLanding() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(230,30%,5%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[hsl(200,100%,50%)]/8 rounded-full blur-[200px]" />
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <div>
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[hsl(200,100%,50%)] to-[hsl(280,80%,55%)] flex items-center justify-center text-2xl">✦</div>
        <h1 className="text-7xl font-extrabold leading-tight mb-6">Intelligence<br /><span style={{ background: "linear-gradient(to right, hsl(200,100%,60%), hsl(280,80%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Amplified</span></h1>
        <p className="text-lg text-[hsl(230,15%,50%)] max-w-lg mx-auto">Next-gen AI that transforms your workflow.</p>
      </div>
    </div>
  </div></ScaledPreview>);
}

export function MiniCreativeStartup() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(30,15%,96%)] text-[hsl(0,0%,12%)] overflow-hidden relative">
    <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[hsl(5,75%,55%)]/15 blur-[80px]" />
    <div className="absolute bottom-10 left-20 w-40 h-40 rounded-[30%] rotate-45 bg-[hsl(40,80%,70%)]/20 blur-[60px]" />
    <div className="relative z-10 max-w-6xl mx-auto px-8 pt-24">
      <h1 className="text-7xl font-black leading-[0.9] mb-6">Break The<br /><span className="text-[hsl(5,75%,55%)]">Rules</span><br />Build New</h1>
      <p className="text-lg text-[hsl(0,0%,45%)] max-w-lg">Experimental design for brave startups.</p>
    </div>
  </div></ScaledPreview>);
}

export function MiniLuxeAuraBrand() {
  return (<ScaledPreview><div className="w-[1280px] h-[800px] bg-[hsl(240,10%,7%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(270,60%,40%)]/8 rounded-full blur-[200px]" />
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <div>
        <p className="text-xs tracking-[0.4em] uppercase text-[hsl(270,40%,65%)] mb-6">Premium Brand Template</p>
        <h1 className="text-8xl font-bold leading-[0.9] mb-8">LuxeAura</h1>
        <p className="text-lg text-[hsl(240,5%,50%)] max-w-lg mx-auto">Elegant design meets dark aesthetics</p>
      </div>
    </div>
  </div></ScaledPreview>);
}

export const miniPreviewMap: Record<string, () => JSX.Element> = {
  "Nova Studio": MiniMinimalPortfolio,
  "DarkMatter": MiniDarkStudio,
  "Launchpad": MiniSaaSStartup,
  "Velour": MiniCreativeAgency,
  "Orbit": MiniPersonalBrand,
  "Craftfolio": MiniProductShowcase,
  "Pulse Agency": MiniStartupPitch,
  "Elevate": MiniDigitalArtGallery,
  "Flow SaaS": MiniCorporateWebsite,
  "Canvas": MiniStartupAnimation,
  "Momentum": MiniMarketplacePlatform,
  "Atlas": MiniMobileAppLanding,
  "Spotlight": MiniStartupCommunity,
  "Eventra": MiniLuxuryBrand,
  "AppWave": MiniEventLanding,
  "Marketly": MiniEducationPlatform,
  "EduSpark": MiniCreativeBlog,
  "Urban Arch": MiniFreelancerLanding,
  "FitMotion": MiniStartupDashboard,
  "TasteCraft": MiniArchitectureStudio,
  "NeoBlog": MiniFitnessBrand,
  "Freelance Hub": MiniRestaurantWebsite,
  "Quantum": MiniAIProductLanding,
  "Infinity Grid": MiniCreativeStartup,
  "LuxeAura": MiniLuxeAuraBrand,
};
