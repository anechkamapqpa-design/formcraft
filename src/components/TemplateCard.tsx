import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import type { Template } from "@/data/templates";
import { useLang, useLangPath } from "@/lib/i18n";
import { miniPreviewMap } from "@/components/MiniPreviews";

interface TemplateCardProps {
  template: Template;
  index: number;
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  const { t } = useLang();

  const catKey = template.category as keyof typeof t.categories;
  const localCategory = t.categories[catKey] || template.category;

  const tdKey = template.title as keyof typeof t.templateData;
  const localTitle = t.templateData[tdKey]?.title || template.title;
  const localDesc = t.templateData[tdKey]?.description || template.description;

  const MiniPreview = miniPreviewMap[template.title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/template/${template.id}`}
        className="group block rounded-2xl overflow-hidden border border-border/50 hover:border-[hsl(220,20%,30%)] transition-all duration-500 hover:shadow-2xl"
      >
        <div className="relative h-40 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          {MiniPreview ? (
            <MiniPreview />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[hsl(220,20%,20%)] to-[hsl(220,20%,8%)] flex items-center justify-center">
              <span className="text-foreground/80 text-xs sm:text-sm font-semibold tracking-wider uppercase">{template.title}</span>
            </div>
          )}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 bg-background/40 backdrop-blur-md border border-foreground/10 rounded-md text-[10px] font-medium text-foreground/80">
              {localCategory}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-md">
              <Eye className="w-3 h-3" />
              {t.collection.preview}
            </div>
          </div>
        </div>
        <div className="p-4 bg-[hsl(220,20%,10%)]">
          <h3 className="font-display font-bold text-sm sm:text-base text-foreground group-hover:text-gradient transition-colors duration-300">
            {localTitle}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-1 leading-relaxed">
            {localDesc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function TemplateCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border/50">
      <div className="h-40 bg-muted animate-pulse" />
      <div className="p-5 bg-[hsl(220,20%,10%)] space-y-3">
        <div className="h-5 w-2/3 bg-muted rounded animate-pulse" />
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}
