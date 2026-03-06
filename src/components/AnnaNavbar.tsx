import { useState, useCallback } from "react";
import logoImg from "@/assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/components/LangSwitcher";
import { useLang } from "@/lib/i18n";

export function AnnaNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.templates, href: "/#templates", hash: "templates" },
    { label: t.nav.about, href: "/about", hash: null },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent, link: { href: string; hash: string | null }) => {
    if (link.hash) {
      e.preventDefault();
      if (location.pathname === "/") {
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.hash!)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setMobileMenuOpen(false);
  }, [location.pathname, navigate]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-2 sm:mx-4 mt-2 sm:mt-4">
          <div className="max-w-7xl mx-auto bg-card/60 backdrop-blur-2xl border border-border/50 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2.5 sm:py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <Link to="/" className="shrink-0 font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                Form<span className="text-gradient">Craft</span>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Button key={link.label} variant="ghost" size="sm" asChild>
                    {link.hash ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground"
                        onClick={(e) => handleNavClick(e, link)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className={location.pathname === link.href ? "text-foreground bg-secondary" : "text-muted-foreground"}
                      >
                        {link.label}
                      </Link>
                    )}
                  </Button>
                ))}
              </nav>

              <div className="flex items-center gap-1 sm:gap-2">
                <LangSwitcher />
                <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
                  {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
                </Button>
                <Button
                  className="hidden md:inline-flex rounded-lg"
                  onClick={(e) => handleNavClick(e, { href: "/#contact", hash: "contact" })}
                >
                  {t.nav.getStarted}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                  <span className="sr-only">Menu</span>
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
                  </div>
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {searchOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="pt-3 mt-3 border-t border-border/50">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="search"
                        placeholder={t.nav.searchPlaceholder}
                        className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                        autoFocus
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  {link.hash ? (
                    <a href={link.href} onClick={(e) => handleNavClick(e, link)} className="font-display text-3xl font-bold text-foreground">{link.label}</a>
                  ) : (
                    <Link to={link.href} onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl font-bold text-foreground">{link.label}</Link>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.1 }}>
                <LangSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
