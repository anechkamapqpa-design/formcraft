import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Send, CheckCircle2, Sparkles, Zap, Palette, Code2, MessageSquare, Clock, Rocket, ChevronRight } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const content = {
  en: {
    meta: {
      title: "Formcraft — Premium Web Design Studio | Landing Pages & Websites",
      description: "We create high-converting landing pages and websites with clean UX, elegant design, and fast delivery. Elevate your brand with Formcraft.",
    },
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      label: "Web Design Studio",
      title1: "We Design",
      title2: "Experiences",
      title3: "That Convert.",
      subtitle: "Premium landing pages and websites crafted with precision. Clean UX, elegant design, fast delivery.",
      cta: "Start Project",
      scroll: "Scroll to explore",
    },
    services: {
      label: "What We Do",
      title: "Services",
      items: [
        {
          icon: "Palette",
          title: "Landing Pages",
          desc: "High-converting landing pages designed for maximum impact. Every element optimized for your goals.",
        },
        {
          icon: "Code2",
          title: "Website Redesign",
          desc: "Transform your existing site into a modern, fast, and conversion-focused experience.",
        },
        {
          icon: "Sparkles",
          title: "AI-Powered Sites",
          desc: "Next-generation websites enhanced with AI tools for personalization, automation, and smart interactions.",
        },
      ],
    },
    portfolio: {
      label: "Our Work",
      title: "Selected Projects",
      subtitle: "A curated selection of our recent work. Each project is crafted with attention to detail and purpose.",
      items: [
        { title: "LuxeAura", category: "Luxury Brand", desc: "Premium fashion e-commerce" },
        { title: "NeuroFlow", category: "AI Startup", desc: "SaaS platform landing" },
        { title: "Atelier", category: "Creative Studio", desc: "Portfolio & showcase" },
        { title: "GlassWave", category: "SaaS Product", desc: "Glassmorphism design" },
        { title: "StoryBrand", category: "Lifestyle", desc: "Cinematic storytelling" },
        { title: "MonoJournal", category: "Editorial", desc: "Magazine template" },
      ],
      viewProject: "View Project",
    },
    process: {
      label: "How We Work",
      title: "Our Process",
      subtitle: "A refined workflow designed to deliver exceptional results on time.",
      steps: [
        { num: "01", title: "Discovery", desc: "We analyze your brand, audience, and goals to define the perfect strategy." },
        { num: "02", title: "Design", desc: "Wireframes and visual concepts crafted with your feedback at every stage." },
        { num: "03", title: "Development", desc: "Clean, performant code built with modern technologies and best practices." },
        { num: "04", title: "Launch", desc: "Thorough testing, optimization, and deployment. Your project goes live." },
      ],
    },
    contact: {
      title: "Let's Create Together",
      subtitle: "Tell us about your project. We respond within 24 hours.",
      form: {
        name: "Your Name",
        namePlaceholder: "John Smith",
        contact: "Email or Telegram",
        contactPlaceholder: "@username or email",
        message: "Project Details",
        messagePlaceholder: "Describe your project, goals, and timeline...",
        submit: "Send Message",
        sending: "Sending...",
      },
      channels: {
        telegram: "Telegram",
        telegramDesc: "Fastest way to reach us",
        email: "Email",
        emailDesc: "For detailed inquiries",
      },
    },
    footer: {
      tagline: "Premium web design, crafted with care.",
      rights: "All rights reserved.",
      remote: "Remote worldwide",
    },
  },
  ru: {
    meta: {
      title: "Formcraft — Студия веб-дизайна | Лендинги и сайты под ключ",
      description: "Создаём лендинги и сайты под ключ: стильный дизайн, высокая конверсия, быстрая разработка. Превратите идею в результат с Formcraft.",
    },
    nav: {
      services: "Услуги",
      portfolio: "Портфолио",
      process: "Процесс",
      contact: "Контакт",
    },
    hero: {
      label: "Студия веб-дизайна",
      title1: "Создаём",
      title2: "Лендинги",
      title3: "Которые продают.",
      subtitle: "Лендинги и сайты под ключ. Стильный дизайн, высокая конверсия, быстрая разработка.",
      cta: "Начать проект",
      scroll: "Листайте вниз",
    },
    services: {
      label: "Что мы делаем",
      title: "Услуги",
      items: [
        {
          icon: "Palette",
          title: "Лендинги под ключ",
          desc: "Продающие посадочные страницы с фокусом на конверсию. Каждый элемент работает на результат.",
        },
        {
          icon: "Code2",
          title: "Редизайн сайтов",
          desc: "Превращаем устаревший сайт в современный, быстрый и конверсионный инструмент.",
        },
        {
          icon: "Sparkles",
          title: "AI-сайты",
          desc: "Сайты нового поколения с AI-инструментами: персонализация, автоматизация, умные интерфейсы.",
        },
      ],
    },
    portfolio: {
      label: "Наши работы",
      title: "Избранные проекты",
      subtitle: "Подборка наших последних работ. Каждый проект создан с вниманием к деталям.",
      items: [
        { title: "LuxeAura", category: "Luxury бренд", desc: "Премиум e-commerce" },
        { title: "NeuroFlow", category: "AI стартап", desc: "Лендинг SaaS" },
        { title: "Atelier", category: "Креативная студия", desc: "Портфолио" },
        { title: "GlassWave", category: "SaaS продукт", desc: "Glassmorphism дизайн" },
        { title: "StoryBrand", category: "Lifestyle", desc: "Кинематографичный стиль" },
        { title: "MonoJournal", category: "Медиа", desc: "Журнальный шаблон" },
      ],
      viewProject: "Смотреть проект",
    },
    process: {
      label: "Как мы работаем",
      title: "Наш процесс",
      subtitle: "Отлаженный процесс для исключительного результата точно в срок.",
      steps: [
        { num: "01", title: "Анализ", desc: "Изучаем ваш бренд, аудиторию и цели для выбора оптимальной стратегии." },
        { num: "02", title: "Дизайн", desc: "Прототипы и визуальные концепции с вашей обратной связью на каждом этапе." },
        { num: "03", title: "Разработка", desc: "Чистый, производительный код на современных технологиях." },
        { num: "04", title: "Запуск", desc: "Тестирование, оптимизация и деплой. Ваш проект выходит в свет." },
      ],
    },
    contact: {
      title: "Давайте создадим вместе",
      subtitle: "Расскажите о проекте. Ответим в течение 24 часов.",
      form: {
        name: "Ваше имя",
        namePlaceholder: "Иван Иванов",
        contact: "Email или Telegram",
        contactPlaceholder: "@username или email",
        message: "О проекте",
        messagePlaceholder: "Опишите проект, цели и сроки...",
        submit: "Отправить",
        sending: "Отправка...",
      },
      channels: {
        telegram: "Telegram",
        telegramDesc: "Самый быстрый способ связи",
        email: "Email",
        emailDesc: "Для подробных запросов",
      },
    },
    footer: {
      tagline: "Премиальный веб-дизайн, созданный с душой.",
      rights: "Все права защищены.",
      remote: "Работаем удалённо по всему миру",
    },
  },
};

const demoRoutes: Record<string, string> = {
  LuxeAura: "/demo/luxe-aura",
  NeuroFlow: "/demo/neuro-flow",
  Atelier: "/demo/atelier",
  GlassWave: "/demo/glass-wave",
  StoryBrand: "/demo/story-brand",
  MonoJournal: "/demo/mono-journal",
};

const portfolioImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3579?w=800&q=80",
  "https://images.unsplash.com/photo-1618556450994-a163d8d74e26?w=800&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
];

function AnimatedLine({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
}

function SectionReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export default function LandingPage() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const currentLang = (lang === "ru" ? "ru" : "en") as "en" | "ru";
  const t = content[currentLang];
  const otherLang = currentLang === "en" ? "ru" : "en";

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim()) {
      toast.error(currentLang === "en" ? "Please fill in name and contact" : "Заполните имя и контакт");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: name.trim(),
          contact: contact.trim(),
          projectType: "Landing",
          timeline: "Standard",
          description: message.trim(),
        },
      });
      if (error) throw error;
      toast.success(currentLang === "en" ? "Message sent!" : "Сообщение отправлено!");
      setName("");
      setContact("");
      setMessage("");
    } catch {
      toast.error(currentLang === "en" ? "Error sending. Try again later." : "Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="alternate" hrefLang="en" href="https://www.formcraft.tech/en" />
        <link rel="alternate" hrefLang="ru" href="https://www.formcraft.tech/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://www.formcraft.tech/en" />
        <link rel="canonical" href={`https://www.formcraft.tech/${currentLang}`} />
        <html lang={currentLang} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground landing-page">
        {/* Navbar */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-3 sm:mx-6 mt-3 sm:mt-5">
            <div className="max-w-6xl mx-auto bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl px-5 sm:px-8 py-3 sm:py-3.5">
              <div className="flex items-center justify-between">
                <Link to={`/${currentLang}`} className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  Form<span className="text-landing-gold">craft</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                  {[
                    { label: t.nav.services, id: "services" },
                    { label: t.nav.portfolio, id: "portfolio" },
                    { label: t.nav.process, id: "process" },
                    { label: t.nav.contact, id: "contact" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/${otherLang}`}
                    className="text-xs font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
                  >
                    {otherLang}
                  </Link>
                  <Button
                    size="sm"
                    className="hidden sm:inline-flex bg-landing-gold text-background hover:bg-landing-gold/90 rounded-lg text-xs font-semibold"
                    onClick={() => scrollTo("contact")}
                  >
                    {t.hero.cta}
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-landing-gold/[0.04] rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-landing-gold/[0.03] rounded-full blur-[120px]" />
          </div>

          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-landing-gold/20 bg-landing-gold/[0.05] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-landing-gold animate-pulse" />
              <span className="text-xs font-medium text-landing-gold tracking-wide uppercase">{t.hero.label}</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95]">
              <AnimatedLine text={t.hero.title1} delay={0.3} />
              <br />
              <AnimatedLine text={t.hero.title2} className="text-landing-gold" delay={0.5} />
              <br />
              <AnimatedLine text={t.hero.title3} delay={0.7} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-landing-gold text-background hover:bg-landing-gold/90 rounded-xl px-8 text-sm font-semibold"
                onClick={() => scrollTo("contact")}
              >
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">{t.hero.scroll}</span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/20 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-landing-gold/50" />
                <span className="text-xs font-semibold text-landing-gold uppercase tracking-[0.2em]">{t.services.label}</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{t.services.title}</h2>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {t.services.items.map((item, i) => (
                <SectionReveal key={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-8 rounded-2xl border border-border/30 bg-card/30 hover:border-landing-gold/20 hover:bg-card/50 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-landing-gold/10 flex items-center justify-center text-landing-gold mb-6 group-hover:bg-landing-gold/15 transition-colors">
                      {iconMap[item.icon]}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-landing-gold/50" />
                <span className="text-xs font-semibold text-landing-gold uppercase tracking-[0.2em]">{t.portfolio.label}</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{t.portfolio.title}</h2>
              <p className="mt-4 text-muted-foreground max-w-xl text-lg">{t.portfolio.subtitle}</p>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
              {t.portfolio.items.map((item, i) => (
                <SectionReveal key={i}>
                  <Link
                    to={demoRoutes[item.title] || `/${currentLang}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={portfolioImages[i]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-sm font-medium text-foreground flex items-center gap-2">
                          {t.portfolio.viewProject}
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[11px] text-landing-gold font-medium uppercase tracking-wider">{item.category}</span>
                      <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-landing-gold/50" />
                <span className="text-xs font-semibold text-landing-gold uppercase tracking-[0.2em]">{t.process.label}</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{t.process.title}</h2>
              <p className="mt-4 text-muted-foreground max-w-xl text-lg">{t.process.subtitle}</p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {t.process.steps.map((step, i) => (
                <SectionReveal key={i}>
                  <div className="relative">
                    <span className="font-display text-6xl font-bold text-landing-gold/10">{step.num}</span>
                    <h3 className="font-display text-xl font-semibold mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8">
                        <ChevronRight className="w-4 h-4 text-landing-gold/20" />
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 sm:py-32 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-landing-gold/[0.03] rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{t.contact.title}</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">{t.contact.subtitle}</p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <SectionReveal className="lg:col-span-3">
                <div className="rounded-2xl border border-border/30 bg-card/30 p-6 sm:p-8">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.form.name}</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.contact.form.namePlaceholder}
                          className="w-full px-4 py-3 bg-background/60 border border-border/40 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-landing-gold/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.form.contact}</label>
                        <input
                          type="text"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder={t.contact.form.contactPlaceholder}
                          className="w-full px-4 py-3 bg-background/60 border border-border/40 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-landing-gold/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.form.message}</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full px-4 py-3 bg-background/60 border border-border/40 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-landing-gold/40 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      className="w-full py-6 text-sm font-semibold bg-landing-gold text-background hover:bg-landing-gold/90 rounded-xl"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                      {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                    </Button>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal className="lg:col-span-2 flex flex-col gap-4">
                <a
                  href="https://t.me/formcrafttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl border border-border/30 bg-card/30 hover:border-landing-gold/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-landing-gold/10 flex items-center justify-center text-landing-gold group-hover:bg-landing-gold/15 transition-colors">
                    <SiTelegram className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm">{t.contact.channels.telegram}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.contact.channels.telegramDesc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-landing-gold transition-colors" />
                </a>

                <a
                  href="mailto:launch.flow@yandex.ru"
                  className="group flex items-center gap-4 p-5 rounded-xl border border-border/30 bg-card/30 hover:border-landing-gold/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-landing-gold/10 flex items-center justify-center text-landing-gold group-hover:bg-landing-gold/15 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm">{t.contact.channels.email}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.contact.channels.emailDesc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-landing-gold transition-colors" />
                </a>

                <div className="flex items-center justify-center gap-2 mt-2 px-4 py-3">
                  <Globe className="w-3.5 h-3.5 text-muted-foreground/40" />
                  <span className="text-xs text-muted-foreground/40 tracking-wide">{t.footer.remote}</span>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link to={`/${currentLang}`} className="font-display text-xl font-bold tracking-tight">
                Form<span className="text-landing-gold">craft</span>
              </Link>
              <span className="text-xs text-muted-foreground/40">{t.footer.tagline}</span>
            </div>
            <p className="text-xs text-muted-foreground/40">© {new Date().getFullYear()} Formcraft. {t.footer.rights}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
