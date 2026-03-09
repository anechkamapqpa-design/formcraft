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

/* ============ NEW 18 TEMPLATES ============ */

export function MiniFitnessTracker() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,3%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(145,80%,45%)]/10 blur-[120px]" />
        <div className="max-w-6xl mx-auto px-8 pt-24 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[hsl(145,80%,50%)] mb-6">Track · Train · Transform</span>
              <h1 className="text-7xl font-black leading-[0.9] mb-6">YOUR<br />BODY.<br /><span className="text-[hsl(145,80%,50%)]">YOUR RULES.</span></h1>
              <p className="text-lg text-[hsl(0,0%,50%)] mb-8 max-w-md">AI-powered fitness tracking that adapts to your goals.</p>
              <span className="bg-[hsl(145,80%,45%)] text-[hsl(0,0%,0%)] px-8 py-4 font-bold uppercase tracking-wider text-sm">Start Free Trial</span>
            </div>
            <div className="flex flex-col gap-4">
              {[{ label: "Calories", val: "2,847", pct: 78 }, { label: "Steps", val: "12,459", pct: 62 }, { label: "Heart Rate", val: "72 bpm", pct: 45 }].map(s => (
                <div key={s.label} className="bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-xl p-4">
                  <div className="flex justify-between mb-2"><span className="text-xs text-[hsl(0,0%,50%)]">{s.label}</span><span className="text-sm font-bold text-[hsl(145,80%,50%)]">{s.val}</span></div>
                  <div className="w-full h-2 bg-[hsl(0,0%,15%)] rounded-full"><div className="h-full bg-[hsl(145,80%,45%)] rounded-full" style={{ width: `${s.pct}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniRestaurantMenu() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(30,30%,8%)] text-[hsl(40,30%,90%)] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,30%,8%)] via-[hsl(25,40%,12%)] to-[hsl(30,30%,8%)]" />
        <div className="relative z-10 text-center pt-20">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(35,60%,55%)] mb-4">Est. 2018 · Fine Dining</p>
          <h1 className="text-8xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>La Maison</h1>
          <div className="w-32 h-px bg-[hsl(35,60%,40%)] mx-auto mb-4" />
          <p className="text-[hsl(40,20%,55%)] text-lg mb-10">Where culinary art meets timeless elegance</p>
          <div className="flex justify-center gap-8 max-w-3xl mx-auto">
            {[{ name: "Truffle Risotto", price: "$48" }, { name: "Wagyu Steak", price: "$89" }, { name: "Lobster Bisque", price: "$32" }].map(d => (
              <div key={d.name} className="text-center">
                <div className="w-48 h-48 rounded-full bg-[hsl(30,20%,15%)] border border-[hsl(35,40%,25%)] mx-auto mb-4 flex items-center justify-center text-[hsl(35,60%,45%)] text-4xl">✦</div>
                <h3 className="text-sm font-semibold mb-1">{d.name}</h3>
                <p className="text-[hsl(35,60%,55%)] text-xs">{d.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniMusicFestival() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(270,50%,5%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(300,100%,50%)]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(40,100%,50%)]/10 rounded-full blur-[120px]" />
        <div className="relative z-10 text-center pt-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(300,80%,70%)] mb-6">August 15-17 · 2026</p>
          <h1 className="text-[9rem] font-black leading-[0.8] uppercase tracking-tight">
            <span style={{ background: "linear-gradient(to right, hsl(300,100%,65%), hsl(40,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SONIC</span>
            <br />
            <span className="text-[hsl(0,0%,100%)]">BLOOM</span>
          </h1>
          <p className="text-xl text-[hsl(270,30%,60%)] mt-6 mb-8">3 Days · 50+ Artists · 4 Stages</p>
          <span className="inline-block bg-gradient-to-r from-[hsl(300,100%,60%)] to-[hsl(40,100%,55%)] text-[hsl(0,0%,0%)] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider">Get Tickets</span>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniRealEstate() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(210,25%,97%)] text-[hsl(210,30%,15%)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[hsl(210,80%,50%)] tracking-wider uppercase mb-4 block">Premium Real Estate</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6">Find Your<br /><span className="text-[hsl(210,80%,50%)]">Dream Home</span></h1>
              <p className="text-lg text-[hsl(210,15%,50%)] mb-8">Luxury properties in prime locations worldwide.</p>
              <div className="flex gap-3">
                <span className="bg-[hsl(210,80%,50%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-lg font-semibold text-sm">Browse Listings</span>
                <span className="border border-[hsl(210,20%,85%)] text-[hsl(210,15%,40%)] px-6 py-3 rounded-lg font-semibold text-sm">Book Viewing</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ price: "$1.2M", beds: "3 Bed", sqft: "2,400 sqft" }, { price: "$2.8M", beds: "5 Bed", sqft: "4,200 sqft" }, { price: "$890K", beds: "2 Bed", sqft: "1,800 sqft" }, { price: "$3.5M", beds: "6 Bed", sqft: "5,100 sqft" }].map((p, i) => (
                <div key={i} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(210,20%,90%)] p-4">
                  <div className="w-full h-20 bg-[hsl(210,20%,90%)] rounded-lg mb-3" />
                  <p className="font-bold text-sm text-[hsl(210,80%,50%)]">{p.price}</p>
                  <p className="text-xs text-[hsl(210,15%,55%)]">{p.beds} · {p.sqft}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniPhotoPortfolio() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,2%)] text-[hsl(0,0%,95%)] overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/3 flex flex-col justify-center px-12">
            <h1 className="text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>James<br />Walker</h1>
            <div className="w-12 h-px bg-[hsl(0,0%,30%)] mb-4" />
            <p className="text-sm text-[hsl(0,0%,45%)] mb-8">Capturing moments that tell stories beyond words.</p>
            <span className="text-xs tracking-[0.3em] uppercase text-[hsl(0,0%,50%)] border-b border-[hsl(0,0%,30%)] pb-1 inline-block w-fit">View Gallery</span>
          </div>
          <div className="w-2/3 grid grid-cols-3 gap-1 p-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[hsl(0,0%,10%)]" style={{ background: `hsl(${i * 40}, 10%, ${12 + i * 3}%)` }} />
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniMedicalClinic() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(200,30%,98%)] text-[hsl(200,30%,15%)] overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 pt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[hsl(170,60%,92%)] text-[hsl(170,60%,35%)] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(170,60%,45%)]" />Accepting New Patients
          </div>
          <h1 className="text-6xl font-extrabold mb-6 text-[hsl(200,35%,15%)]">Your Health,<br /><span className="text-[hsl(170,60%,40%)]">Our Priority</span></h1>
          <p className="text-lg text-[hsl(200,15%,50%)] max-w-xl mx-auto mb-10">Compassionate care with cutting-edge medical technology.</p>
          <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ icon: "🏥", label: "General" }, { icon: "🦷", label: "Dental" }, { icon: "👁", label: "Eye Care" }, { icon: "💊", label: "Pharmacy" }].map(s => (
              <div key={s.label} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(200,20%,90%)] p-5 text-center">
                <span className="text-3xl mb-2 block">{s.icon}</span>
                <p className="text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniTravelAgency() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(200,60%,12%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,60%,15%)] via-[hsl(190,50%,10%)] to-[hsl(220,40%,8%)]" />
        <div className="relative z-10 text-center pt-20">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(40,80%,65%)] mb-6">Adventure Awaits</p>
          <h1 className="text-8xl font-black leading-[0.85] mb-6">
            EXPLORE<br />
            <span style={{ background: "linear-gradient(to right, hsl(40,80%,60%), hsl(190,80%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>THE WORLD</span>
          </h1>
          <p className="text-[hsl(200,30%,60%)] text-lg mb-10">Curated journeys to extraordinary destinations</p>
          <div className="flex justify-center gap-6 max-w-3xl mx-auto">
            {[{ dest: "Bali", price: "$1,299" }, { dest: "Santorini", price: "$1,899" }, { dest: "Patagonia", price: "$2,499" }].map(d => (
              <div key={d.dest} className="bg-[hsl(200,40%,15%)] border border-[hsl(200,30%,22%)] rounded-xl p-5 w-48 text-center">
                <div className="w-full h-24 bg-[hsl(200,30%,20%)] rounded-lg mb-3" />
                <h3 className="font-bold text-sm">{d.dest}</h3>
                <p className="text-xs text-[hsl(40,80%,60%)] mt-1">{d.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniGamingHub() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(260,40%,4%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[hsl(280,100%,50%)]/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[hsl(180,100%,50%)]/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-20">
          <div className="text-center">
            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase bg-[hsl(280,100%,65%)]/15 text-[hsl(280,100%,70%)] px-4 py-1.5 rounded-full mb-6">Season 12 Now Live</span>
            <h1 className="text-[8rem] font-black leading-[0.8] uppercase tracking-tight mb-4">
              <span style={{ background: "linear-gradient(to bottom, hsl(280,100%,70%), hsl(180,100%,60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NEXUS</span>
            </h1>
            <p className="text-xl text-[hsl(260,20%,50%)] mb-8">The Ultimate Gaming Experience</p>
            <div className="flex justify-center gap-4">
              <span className="bg-gradient-to-r from-[hsl(280,100%,60%)] to-[hsl(180,100%,50%)] text-[hsl(0,0%,0%)] px-8 py-3.5 rounded-lg font-bold text-sm">Play Now</span>
              <span className="border border-[hsl(280,100%,50%)]/30 text-[hsl(280,100%,70%)] px-8 py-3.5 rounded-lg font-bold text-sm">Watch Trailer</span>
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniEducationPlatform() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(45,40%,97%)] text-[hsl(220,30%,15%)] overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 pt-20 text-center">
          <span className="inline-block bg-[hsl(45,80%,85%)] text-[hsl(30,80%,35%)] px-4 py-1.5 rounded-full text-xs font-bold mb-6">🎓 10,000+ Students Enrolled</span>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">Learn Without<br /><span className="text-[hsl(260,70%,55%)]">Limits</span></h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-xl mx-auto mb-10">Master new skills with world-class instructors and interactive courses.</p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[{ title: "Web Dev", count: "42 courses", color: "hsl(260,70%,55%)" }, { title: "Design", count: "38 courses", color: "hsl(340,75%,55%)" }, { title: "Data Science", count: "29 courses", color: "hsl(170,60%,45%)" }].map(c => (
              <div key={c.title} className="bg-[hsl(0,0%,100%)] rounded-xl border border-[hsl(220,20%,90%)] p-5">
                <div className="w-10 h-10 rounded-lg mb-3 mx-auto" style={{ background: c.color }} />
                <h3 className="font-bold text-sm">{c.title}</h3>
                <p className="text-xs text-[hsl(220,15%,55%)] mt-1">{c.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniWeddingPlanner() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(340,30%,97%)] text-[hsl(340,20%,20%)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(340,50%,85%)]/30 rounded-full blur-[120px]" />
        <div className="relative z-10 text-center pt-24">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(340,50%,60%)] mb-6">Your Dream Wedding</p>
          <h1 className="text-7xl mb-6" style={{ fontFamily: "'Georgia', serif", fontWeight: 400 }}>Forever<br />Starts Here</h1>
          <div className="w-20 h-px bg-[hsl(340,50%,75%)] mx-auto mb-6" />
          <p className="text-[hsl(340,15%,50%)] text-lg max-w-md mx-auto mb-10">Bespoke wedding planning for your most magical day</p>
          <span className="inline-block bg-[hsl(340,50%,60%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider">Begin Your Journey</span>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniArchitectureStudio() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,8%)] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-center px-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[hsl(0,0%,50%)] mb-6">Architecture · Design · Build</span>
            <h1 className="text-7xl font-bold leading-[0.85] mb-6">Form<br />Follows<br /><span className="text-[hsl(0,0%,45%)]">Function</span></h1>
            <div className="w-16 h-0.5 bg-[hsl(0,0%,0%)] mb-6" />
            <p className="text-sm text-[hsl(0,0%,50%)] max-w-xs">Award-winning architectural solutions that blend aesthetics with purpose.</p>
          </div>
          <div className="bg-[hsl(0,0%,5%)] flex items-center justify-center relative">
            <div className="absolute inset-8 border border-[hsl(0,0%,20%)]" />
            <span className="text-[hsl(0,0%,30%)] text-xs tracking-[0.4em] uppercase">Project Showcase</span>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniCryptoDashboard() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(230,25%,6%)] text-[hsl(0,0%,100%)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold bg-[hsl(45,90%,55%)]/10 text-[hsl(45,90%,55%)] px-4 py-1.5 rounded-full mb-5">₿ Live Trading</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6">Trade Crypto<br /><span style={{ background: "linear-gradient(to right, hsl(45,90%,55%), hsl(25,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Like a Pro</span></h1>
              <p className="text-lg text-[hsl(230,15%,50%)] mb-8">Advanced trading platform with real-time analytics.</p>
            </div>
            <div className="space-y-3">
              {[{ coin: "BTC", price: "$67,842", change: "+2.4%", color: "hsl(45,90%,55%)" }, { coin: "ETH", price: "$3,421", change: "+1.8%", color: "hsl(230,70%,60%)" }, { coin: "SOL", price: "$178.32", change: "+5.2%", color: "hsl(280,80%,60%)" }].map(c => (
                <div key={c.coin} className="bg-[hsl(230,20%,10%)] border border-[hsl(230,15%,18%)] rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full" style={{ background: c.color }} />
                    <span className="font-bold text-sm">{c.coin}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{c.price}</p>
                    <p className="text-xs text-[hsl(145,70%,50%)]">{c.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniFashionMagazine() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,5%)] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          <div className="bg-[hsl(0,0%,5%)] flex items-center justify-center">
            <span className="text-[hsl(0,0%,25%)] text-[12rem] font-black leading-none" style={{ writingMode: "vertical-lr" }}>V</span>
          </div>
          <div className="flex flex-col justify-center px-16">
            <span className="text-[10px] tracking-[0.6em] uppercase text-[hsl(0,0%,50%)] mb-8">Spring/Summer 2026</span>
            <h1 className="text-7xl font-black leading-[0.85] uppercase mb-6">VOGUE<br />NOIR</h1>
            <div className="w-20 h-0.5 bg-[hsl(0,0%,0%)] mb-6" />
            <p className="text-sm text-[hsl(0,0%,45%)] max-w-sm leading-relaxed">The intersection of high fashion and contemporary culture. Redefining style for a new era.</p>
            <span className="mt-8 text-xs tracking-[0.3em] uppercase border-b border-[hsl(0,0%,0%)] pb-1 inline-block w-fit font-semibold">Read Issue →</span>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniPodcastLanding() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(20,30%,6%)] text-[hsl(0,0%,100%)] overflow-hidden relative">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[hsl(15,80%,50%)]/10 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-20">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[hsl(15,80%,55%)] mb-6 block">🎙 Weekly Podcast</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6">Stories That<br /><span className="text-[hsl(15,80%,55%)]">Matter</span></h1>
              <p className="text-lg text-[hsl(20,15%,50%)] mb-8 max-w-md">Deep conversations with the world's most fascinating minds.</p>
              <div className="flex gap-3">
                <span className="bg-[hsl(15,80%,50%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-full font-semibold text-sm">Listen Now</span>
                <span className="border border-[hsl(20,20%,25%)] text-[hsl(20,20%,60%)] px-6 py-3 rounded-full font-semibold text-sm">Subscribe</span>
              </div>
            </div>
            <div className="space-y-3">
              {[{ ep: "EP 142", title: "The Future of AI", dur: "48 min" }, { ep: "EP 141", title: "Building in Public", dur: "52 min" }, { ep: "EP 140", title: "Creative Burnout", dur: "41 min" }].map(e => (
                <div key={e.ep} className="bg-[hsl(20,20%,10%)] border border-[hsl(20,15%,18%)] rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(15,80%,50%)]/15 flex items-center justify-center text-[hsl(15,80%,55%)] text-lg">▶</div>
                  <div className="flex-1">
                    <p className="text-[10px] text-[hsl(15,80%,55%)]">{e.ep}</p>
                    <h3 className="text-sm font-semibold">{e.title}</h3>
                  </div>
                  <span className="text-xs text-[hsl(20,15%,45%)]">{e.dur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniYogaStudio() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(150,20%,96%)] text-[hsl(150,20%,15%)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(150,40%,80%)]/20 rounded-full blur-[150px]" />
        <div className="relative z-10 text-center pt-28">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(150,40%,45%)] mb-6">Mind · Body · Soul</p>
          <h1 className="text-7xl mb-6" style={{ fontFamily: "'Georgia', serif", fontWeight: 300 }}>Find Your<br />Inner Peace</h1>
          <div className="w-12 h-px bg-[hsl(150,40%,55%)] mx-auto mb-6" />
          <p className="text-[hsl(150,15%,45%)] text-lg max-w-md mx-auto mb-10">Guided yoga, meditation, and wellness programs for every level.</p>
          <div className="flex justify-center gap-4">
            <span className="bg-[hsl(150,40%,40%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm">Start Free Class</span>
            <span className="border border-[hsl(150,30%,70%)] text-[hsl(150,30%,35%)] px-8 py-3.5 rounded-full font-semibold text-sm">View Schedule</span>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniPetCare() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(35,40%,96%)] text-[hsl(25,30%,18%)] overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(30,70%,75%)]/20 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-20">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-[hsl(25,70%,50%)] mb-4 block">🐾 Happy Pets, Happy Life</span>
              <h1 className="text-6xl font-extrabold leading-tight mb-6">Because They<br />Deserve The<br /><span className="text-[hsl(25,70%,50%)]">Best</span></h1>
              <p className="text-lg text-[hsl(25,15%,45%)] mb-8">Premium pet care, grooming, and veterinary services.</p>
              <span className="bg-[hsl(25,70%,50%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full font-semibold text-sm">Book Appointment</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ service: "Grooming", icon: "✂️" }, { service: "Vet Care", icon: "🩺" }, { service: "Training", icon: "🦮" }, { service: "Boarding", icon: "🏠" }].map(s => (
                <div key={s.service} className="bg-[hsl(0,0%,100%)] rounded-2xl border border-[hsl(35,30%,88%)] p-5 text-center">
                  <span className="text-3xl mb-2 block">{s.icon}</span>
                  <h3 className="text-sm font-bold">{s.service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniLawFirm() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(215,35%,10%)] text-[hsl(40,20%,90%)] overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 pt-24 text-center">
          <div className="w-16 h-0.5 bg-[hsl(40,50%,50%)] mx-auto mb-8" />
          <h1 className="text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>Justice.<br />Integrity.<br /><span className="text-[hsl(40,50%,55%)]">Results.</span></h1>
          <p className="text-[hsl(215,15%,55%)] text-lg max-w-lg mx-auto mb-10">Over 25 years of legal excellence protecting your rights.</p>
          <div className="flex justify-center gap-4">
            <span className="bg-[hsl(40,50%,50%)] text-[hsl(215,35%,10%)] px-8 py-3.5 font-semibold text-sm">Free Consultation</span>
            <span className="border border-[hsl(40,30%,30%)] text-[hsl(40,30%,65%)] px-8 py-3.5 font-semibold text-sm">Our Practice Areas</span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[{ area: "Corporate", cases: "500+" }, { area: "Criminal", cases: "1,200+" }, { area: "Family", cases: "800+" }, { area: "Real Estate", cases: "350+" }].map(a => (
              <div key={a.area} className="border border-[hsl(215,20%,18%)] rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-[hsl(40,50%,55%)]">{a.cases}</p>
                <p className="text-xs text-[hsl(215,15%,50%)] mt-1">{a.area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledPreview>
  );
}

export function MiniCoffeeShop() {
  return (
    <ScaledPreview>
      <div className="w-[1280px] h-[800px] bg-[hsl(25,35%,10%)] text-[hsl(35,30%,90%)] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,35%,12%)] to-[hsl(20,30%,6%)]" />
        <div className="relative z-10 text-center pt-20">
          <p className="text-xs tracking-[0.5em] uppercase text-[hsl(30,50%,55%)] mb-4">Artisan Coffee Since 2015</p>
          <h1 className="text-8xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>Brew &<br />Beyond</h1>
          <div className="w-24 h-px bg-[hsl(30,50%,40%)] mx-auto mb-4" />
          <p className="text-[hsl(30,20%,50%)] text-lg mb-10">Single-origin beans, crafted with passion</p>
          <div className="flex justify-center gap-8 max-w-3xl mx-auto">
            {[{ name: "Espresso", price: "$4.50" }, { name: "Pour Over", price: "$5.50" }, { name: "Cold Brew", price: "$6.00" }].map(d => (
              <div key={d.name} className="text-center">
                <div className="w-36 h-36 rounded-full bg-[hsl(25,25%,15%)] border border-[hsl(30,30%,22%)] mx-auto mb-4 flex items-center justify-center text-[hsl(30,50%,45%)] text-3xl">☕</div>
                <h3 className="text-sm font-semibold mb-1">{d.name}</h3>
                <p className="text-[hsl(30,50%,55%)] text-xs">{d.price}</p>
              </div>
            ))}
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
  "Fitness Tracker": MiniFitnessTracker,
  "Restaurant Menu": MiniRestaurantMenu,
  "Music Festival": MiniMusicFestival,
  "Real Estate": MiniRealEstate,
  "Photo Portfolio": MiniPhotoPortfolio,
  "Medical Clinic": MiniMedicalClinic,
  "Travel Agency": MiniTravelAgency,
  "Gaming Hub": MiniGamingHub,
  "Education Platform": MiniEducationPlatform,
  "Wedding Planner": MiniWeddingPlanner,
  "Architecture Studio": MiniArchitectureStudio,
  "Crypto Dashboard": MiniCryptoDashboard,
  "Fashion Magazine": MiniFashionMagazine,
  "Podcast Landing": MiniPodcastLanding,
  "Yoga Studio": MiniYogaStudio,
  "Pet Care": MiniPetCare,
  "Law Firm": MiniLawFirm,
  "Coffee Shop": MiniCoffeeShop,
};
