import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Shield, BarChart3, Users, Globe } from "lucide-react";
const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Process tasks 10x faster with our AI-powered engine" },
  { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant with end-to-end encryption" },
  { icon: BarChart3, title: "Smart Analytics", desc: "Real-time dashboards and custom reporting" },
  { icon: Users, title: "Team Collaboration", desc: "Seamless workflow for distributed teams" },
  { icon: Globe, title: "Global CDN", desc: "99.99% uptime with worldwide edge delivery" },
  { icon: CheckCircle, title: "Integrations", desc: "Connect with 200+ tools you already use" },
];
export default function SaaSClean() {
  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] text-[hsl(220,25%,15%)]">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/template/6" className="text-sm text-[hsl(220,15%,50%)] hover:text-[hsl(220,25%,15%)] transition">← Back</Link>
          <span className="text-xl font-bold text-[hsl(230,70%,55%)]">✦ Saasify</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-[hsl(220,15%,45%)]">Log in</button>
          <button className="text-sm bg-[hsl(230,70%,55%)] text-[hsl(0,0%,100%)] px-5 py-2.5 rounded-lg hover:bg-[hsl(230,70%,45%)] transition">Start Free →</button>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto text-center px-8 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-xs font-semibold bg-[hsl(230,70%,95%)] text-[hsl(230,70%,50%)] px-4 py-1.5 rounded-full mb-6">🚀 Now with AI-powered automation</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[hsl(220,30%,12%)]">Boost Your Productivity<br />& Simplify Your Workflow</h1>
          <p className="text-lg text-[hsl(220,15%,50%)] max-w-2xl mx-auto mb-8">The all-in-one platform that helps teams manage projects, automate tasks, and ship faster.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[hsl(350,80%,55%)] text-[hsl(0,0%,100%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(350,80%,45%)] transition shadow-lg">Get Started Free</button>
            <button className="border border-[hsl(220,20%,85%)] text-[hsl(220,15%,40%)] px-8 py-3.5 rounded-lg font-semibold hover:bg-[hsl(220,20%,95%)] transition">Watch Demo</button>
          </div>
        </motion.div>
      </section>
      <section id="features" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-center text-3xl font-bold mb-3">Powerful Features</h2>
        <p className="text-center text-[hsl(220,15%,50%)] mb-12">Everything you need to run your business efficiently</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(220,20%,92%)] hover:shadow-lg transition-all">
              <f.icon className="w-10 h-10 text-[hsl(230,70%,55%)] mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[hsl(220,15%,50%)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="border-t border-[hsl(220,20%,90%)] py-8 text-center text-sm text-[hsl(220,15%,60%)]">© 2026 Saasify. All rights reserved.</footer>
    </div>
  );
}
