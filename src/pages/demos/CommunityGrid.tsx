import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MessageSquare, Star, MapPin, Clock } from "lucide-react";
import { useLang, useLangPath } from "@/lib/i18n";

export default function CommunityGrid() {
  const { t } = useLang();
  const lp = useLangPath();
  const d = (t.demos as any).communityGrid;

  return (
    <div className="min-h-screen bg-[hsl(250,30%,98%)] text-[hsl(250,20%,15%)] font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[hsl(250,30%,98%)]/80 border-b border-[hsl(250,15%,90%)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <Link to={lp("/")} className="text-sm font-medium text-[hsl(250,15%,50%)] hover:text-[hsl(250,20%,15%)] transition-colors">{d.back}</Link>
          <span className="text-xl font-extrabold tracking-tight">Community<span className="text-[hsl(270,80%,55%)]">Grid</span></span>
          <button className="hidden md:inline-flex items-center gap-2 bg-[hsl(270,80%,55%)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[hsl(270,80%,48%)] transition-colors">
            {d.joinBtn}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(270,80%,85%)] via-[hsl(30,90%,85%)] to-[hsl(200,80%,85%)] rounded-full blur-[120px] opacity-40 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[hsl(270,80%,95%)] text-[hsl(270,80%,45%)] text-xs font-semibold rounded-full mb-6 border border-[hsl(270,80%,88%)]">
            <Users className="w-3 h-3" /> {d.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            {d.heroTitle1}<br />
            <span className="bg-gradient-to-r from-[hsl(270,80%,55%)] to-[hsl(30,90%,55%)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-[hsl(250,10%,45%)] max-w-2xl mx-auto mb-10">
            {d.heroSubtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button className="group inline-flex items-center gap-2 bg-[hsl(270,80%,55%)] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[hsl(270,80%,48%)] transition-colors shadow-lg shadow-[hsl(270,80%,55%)]/25">
              {d.joinBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="px-8 py-3.5 rounded-full text-sm font-semibold border border-[hsl(250,15%,85%)] hover:bg-[hsl(250,20%,96%)] transition-colors">
              {d.learnMore}
            </button>
          </motion.div>
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center justify-center gap-8 md:gap-16">
            {d.stats.map((s: { val: string; label: string }, i: number) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-[hsl(270,80%,55%)]">{s.val}</p>
                <p className="text-xs text-[hsl(250,10%,50%)] mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(270,80%,55%)] mb-2 block">{d.eventsLabel}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{d.eventsTitle}</h2>
            </div>
            <span className="text-sm font-semibold text-[hsl(270,80%,55%)] cursor-pointer hover:underline hidden md:inline">{d.viewAll}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.events.map((e: { title: string; date: string; time: string; location: string; attendees: number; tag: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-[hsl(250,15%,92%)] p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[hsl(270,80%,95%)] text-[hsl(270,80%,45%)] px-3 py-1 rounded-full mb-4">{e.tag}</span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[hsl(270,80%,55%)] transition-colors">{e.title}</h3>
                <div className="space-y-2 text-sm text-[hsl(250,10%,45%)]">
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-[hsl(270,80%,55%)]" />{e.date}</div>
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[hsl(270,80%,55%)]" />{e.time}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[hsl(270,80%,55%)]" />{e.location}</div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[hsl(250,15%,94%)]">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map(j => (
                      <div key={j} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: `hsl(${270 + j * 40},60%,70%)` }} />
                    ))}
                  </div>
                  <span className="text-xs text-[hsl(250,10%,50%)]">{e.attendees}+ {d.attending}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-[hsl(250,30%,98%)] to-[hsl(270,20%,96%)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(30,90%,50%)] mb-2 block">{d.membersLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{d.membersTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {d.members.map((m: { name: string; role: string; color: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all border border-[hsl(250,15%,92%)]"
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ background: m.color }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-bold text-sm">{m.name}</h3>
                <p className="text-xs text-[hsl(250,10%,50%)] mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(270,80%,55%)] mb-2 block">{d.storiesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{d.storiesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.stories.map((s: { quote: string; name: string; role: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[hsl(250,15%,92%)] shadow-sm"
              >
                <MessageSquare className="w-8 h-8 text-[hsl(270,80%,80%)] mb-4" />
                <p className="text-sm leading-relaxed text-[hsl(250,10%,35%)] mb-6">"{s.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: `hsl(${270 + i * 30},70%,55%)` }}>
                    {s.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{s.name}</p>
                    <p className="text-xs text-[hsl(250,10%,50%)]">{s.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[hsl(250,20%,15%)] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(270,80%,70%)] mb-2 block">{d.sponsorsLabel}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10">{d.sponsorsTitle}</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {d.sponsors.map((s: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-lg md:text-xl font-black tracking-tight text-white/30 hover:text-white/80 transition-colors cursor-pointer"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,95%)] via-[hsl(250,30%,98%)] to-[hsl(30,80%,95%)] -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star className="w-10 h-10 text-[hsl(30,90%,55%)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 whitespace-pre-line">{d.ctaTitle}</h2>
            <p className="text-lg text-[hsl(250,10%,45%)] mb-8 max-w-xl mx-auto">{d.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input type="email" placeholder={d.emailPlaceholder} className="flex-1 w-full px-5 py-3.5 rounded-full border border-[hsl(250,15%,88%)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(270,80%,55%)] focus:border-transparent" />
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[hsl(270,80%,55%)] text-white rounded-full text-sm font-semibold hover:bg-[hsl(270,80%,48%)] transition-colors shadow-lg shadow-[hsl(270,80%,55%)]/25">
                {d.joinBtn}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-10 border-t border-[hsl(250,15%,90%)] bg-[hsl(250,30%,98%)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xs font-medium text-[hsl(250,10%,50%)]">{d.footer}</span>
          <span className="text-sm font-bold">Community<span className="text-[hsl(270,80%,55%)]">Grid</span></span>
        </div>
      </footer>
    </div>
  );
}
