import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutGrid } from "lucide-react";
import { templates } from "@/data/templates";
import { TemplateCard, TemplateCardSkeleton } from "@/components/TemplateCard";
import { AnnaNavbar } from "@/components/AnnaNavbar";
import { AnnaFooter } from "@/components/AnnaFooter";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function MarqueeStrip() {
  const { t } = useLang();
  const items = t.marquee as readonly string[];
  return (
    <div className="relative overflow-hidden py-4 sm:py-6 border-y border-border/30">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-4 sm:mx-8 text-xs sm:text-sm font-medium text-muted-foreground/40 uppercase tracking-[0.2em] flex items-center gap-3 sm:gap-4">
            <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary/30" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { t } = useLang();

  const categories = useMemo(() => {
    const uniqueCategories = new Set(templates.map((t) => t.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, []);

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "All") return templates;
    return templates.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnaNavbar />
      <main className="flex-1">
        <section className="relative h-screen flex flex-col justify-between overflow-x-hidden overflow-y-hidden items-start">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/[0.03] rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-24 flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.05] sm:leading-[0.95] text-left">
              <AnimatedText text={t.hero.line1} /><br />
              <AnimatedText text={t.hero.line2} className="text-gradient" /><br />
              <AnimatedText text={t.hero.line3} />
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed text-left">{t.hero.subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Button size="lg" className="rounded-xl w-full sm:w-auto" asChild>
                <a href="#templates">{t.hero.explore}<ArrowRight className="w-4 h-4" /></a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-6 sm:mt-10 flex flex-wrap items-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary animate-pulse" /><span>{t.hero.templateCount}</span></div>
              <div className="w-px h-4 bg-border" /><span>{t.hero.responsive}</span>
              <div className="w-px h-4 bg-border" /><span>{t.hero.updates}</span>
            </motion.div>
          </div>
          <div className="w-full pb-6">
            <MarqueeStrip />
          </div>
        </section>
        <section id="templates" className="sm:min-h-screen sm:flex sm:flex-col sm:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 sm:mb-5">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{t.collection.title}</h2>
          </motion.div>
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-3 mb-4 flex-wrap">
            {categories.map((category) => {
              const catKey = category as keyof typeof t.categories;
              const localCat = t.categories[catKey] || category;
              return (
                <Button key={category} variant={selectedCategory === category ? "default" : "secondary"} size="sm" onClick={() => setSelectedCategory(category)} className="rounded-lg">{localCat}</Button>
              );
            })}
          </div>
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredTemplates.map((template, index) => (
                <TemplateCard key={template.id} template={template} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <LayoutGrid className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">{t.collection.noResults}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.collection.noResultsHint}</p>
              <Button variant="secondary" size="sm" onClick={() => setSelectedCategory("All")} className="mt-6 rounded-lg">{t.collection.clearFilters}</Button>
            </div>
          )}
        </section>
      </main>
      <AnnaFooter />
    </div>
  );
}
