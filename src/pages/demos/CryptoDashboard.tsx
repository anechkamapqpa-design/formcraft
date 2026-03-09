import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export default function CryptoDashboard() {
  const { t } = useLang();
  const d = (t.demos as any).cryptoDashboard;

  const coins = [
    { coin: "BTC", price: "$67,842", change: "+2.4%", color: "hsl(45,90%,55%)" },
    { coin: "ETH", price: "$3,421", change: "+1.8%", color: "hsl(230,70%,60%)" },
    { coin: "SOL", price: "$178.32", change: "+5.2%", color: "hsl(280,80%,60%)" },
    { coin: "ADA", price: "$0.68", change: "-0.5%", color: "hsl(200,70%,55%)" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(230,25%,6%)] text-[hsl(0,0%,100%)]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(230,25%,6%)]/90 backdrop-blur-md border-b border-[hsl(230,15%,12%)]">
        <Link to="/template/18" className="text-xs text-[hsl(230,15%,45%)] hover:text-[hsl(0,0%,100%)] transition">{d.back}</Link>
        <h1 className="text-xl font-bold text-[hsl(45,90%,55%)]">₿ CryptoVault</h1>
        <button className="text-sm bg-[hsl(45,90%,55%)] text-[hsl(230,25%,6%)] px-5 py-2 rounded-lg font-semibold">{d.startTrading}</button>
      </nav>
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold bg-[hsl(45,90%,55%)]/10 text-[hsl(45,90%,55%)] px-4 py-1.5 rounded-full mb-5">{d.badge}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{d.heroTitle1}<br /><span style={{ background: "linear-gradient(to right, hsl(45,90%,55%), hsl(25,90%,55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{d.heroTitle2}</span></h2>
            <p className="text-lg text-[hsl(230,15%,50%)] mb-8">{d.heroSubtitle}</p>
          </motion.div>
          <div className="space-y-3">
            {coins.map((c, i) => (
              <motion.div key={c.coin} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-[hsl(230,20%,10%)] border border-[hsl(230,15%,18%)] rounded-xl p-4 flex items-center justify-between hover:border-[hsl(45,90%,55%)]/30 transition">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full" style={{ background: c.color }} />
                  <span className="font-bold text-sm">{c.coin}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">{c.price}</p>
                  <p className={`text-xs ${c.change.startsWith('+') ? 'text-[hsl(145,70%,50%)]' : 'text-[hsl(0,70%,55%)]'}`}>{c.change}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[hsl(230,15%,12%)] py-8 text-center text-xs text-[hsl(230,15%,35%)]">{d.footer}</footer>
    </div>
  );
}
