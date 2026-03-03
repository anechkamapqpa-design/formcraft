import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  const toggle = () => {
    setLang(lang === "en" ? "ru" : "en");
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggle} className="gap-1.5 text-muted-foreground">
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase text-xs font-semibold tracking-wider">
        {lang === "en" ? "RU" : "EN"}
      </span>
    </Button>
  );
}
