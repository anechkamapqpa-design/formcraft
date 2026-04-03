import { useLang } from "@/lib/i18n";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LangSwitcher() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => {
    const newLang = lang === "en" ? "ru" : "en";
    const pathWithoutLang = location.pathname.replace(/^\/(en|ru)/, "") || "/";
    navigate(`/${newLang}${pathWithoutLang}${location.search}${location.hash}`);
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
