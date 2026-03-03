import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { AnnaNavbar } from "@/components/AnnaNavbar";
import { AnnaFooter } from "@/components/AnnaFooter";

export default function About() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnaNavbar />
      <main className="flex-1 min-h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-12 sm:mb-16">{t.about.title}</motion.h1>
          <div className="space-y-8 sm:space-y-10">
            {t.about.content.map((block, i) => {
              const isShortBlock = block.split("\n").every((line) => line.length < 40);
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}>
                  {isShortBlock ? (
                    <p className="text-lg sm:text-2xl md:text-3xl font-display font-semibold text-primary leading-snug whitespace-pre-line">{block}</p>
                  ) : (
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">{block}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <AnnaFooter />
    </div>
  );
}
