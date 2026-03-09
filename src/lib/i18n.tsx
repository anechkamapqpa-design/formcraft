import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ru";

const translations = {
  en: {
    nav: {
      templates: "Templates",
      showcase: "Showcase",
      about: "About Project",
      getStarted: "Get Started",
      searchPlaceholder: "Search templates...",
    },
    hero: {
      badge: "Premium Templates",
      line1: "Crafting",
      line2: "Digital",
      line3: "Excellence.",
      subtitle: "High-converting landing page templates built with precision. Designed to elevate your brand.",
      explore: "Explore Templates",
      viewShowcase: "View Showcase",
      templateCount: "6 Templates",
      responsive: "Fully Responsive",
      updates: "Free Updates",
    },
    featured: {
      label: "Featured",
      title: "Top Picks",
    },
    collection: {
      label: "Collection",
      title: "All Templates",
      all: "All",
      noResults: "No templates found",
      noResultsHint: "Try selecting a different category.",
      clearFilters: "Clear Filters",
      preview: "Preview",
    },
    detail: {
      back: "Back to Templates",
      getTemplate: "Get this Template",
      livePreview: "Live Preview",
      included: "What's Included",
      creators: "200+ creators",
      creatorsDesc: "already using this template",
      notFound: "Template Not Found",
      notFoundDesc: "The template you're looking for doesn't exist or has been removed.",
      returnHome: "Return Home",
      features: {
        responsive: "Fully Responsive",
        responsiveDesc: "Pixel-perfect on every screen size and device.",
        performance: "Performance First",
        performanceDesc: "Optimized for speed, SEO, and conversions.",
        code: "Clean Code",
        codeDesc: "Well-structured, commented, and easy to extend.",
        design: "Custom Design",
        designDesc: "Unique, hand-crafted design with attention to detail.",
        browser: "Cross-Browser",
        browserDesc: "Tested across all modern browsers.",
        practices: "Best Practices",
        practicesDesc: "Built with accessibility and security in mind.",
      },
    },
    footer: {
      title: "Ready to Launch?",
      subtitle: "Describe your project — I'll suggest structure, format and timeline. Response within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        contact: "Contact (Telegram or Email)",
        contactPlaceholder: "@telegram or email",
        projectType: "Project Type",
        projectTypes: ["Landing", "Redesign", "Other"] as readonly string[],
        timeline: "Timeline",
        timelines: ["Standard", "Fast 3–5 days"] as readonly string[],
        description: "Short Description",
        descriptionPlaceholder: "Tell me about your project...",
        submit: "Start a Project",
      },
      contacts: {
        telegram: "Telegram",
        telegramDesc: "Fastest response",
        email: "Email",
        emailDesc: "For official inquiries",
      },
      remote: "Remote worldwide · RU / EN",
      rights: "FormCraft. All rights reserved.",
    },
    about: {
      title: "About Project",
      content: [
        "I design landing pages as strategic conversion systems.",
        "Every project starts with product analysis, audience psychology, and growth positioning — not visuals.",
        "First comes logic.\nThen structure.\nThen visual direction.\nOnly after that — impact.",
        "I work across styles — from refined luxury aesthetics to bold digital experiences —\nbut the foundation never changes:",
        "Clarity.\nAttention control.\nConversion.",
        "A landing page is not decoration.\nIt's a controlled interaction scenario.",
        "And every pixel serves a purpose.",
      ],
    },
    marquee: ["Landing Pages", "E-Commerce", "SaaS", "Portfolio", "Creative", "Luxury", "Interactive", "Minimal"] as readonly string[],
    categories: {
      "All": "All",
      "E-commerce": "E-commerce",
      "Creative": "Creative",
      "Luxury": "Luxury",
      "Personal": "Personal",
      "Product": "Product",
      "SaaS": "SaaS",
    } as Record<string, string>,
    templateData: {
      "Ecom Drop": { title: "Ecom Drop", description: "A high-conversion landing page tailored for e-commerce dropshipping." },
      "Experimental Neon": { title: "Experimental Neon", description: "A bold, futuristic landing page for creative agencies and artists." },
      "Luxury Art": { title: "Luxury Art", description: "An elegant, minimalist design perfect for luxury brands and galleries." },
      "Personal Brand": { title: "Personal Brand", description: "A clean, professional page to showcase your portfolio and services." },
      "Product Interactive": { title: "Product Interactive", description: "An engaging, interactive landing page to showcase digital products." },
      "SaaS Clean": { title: "SaaS Clean", description: "A modern, converting landing page designed specifically for SaaS products." },
    } as Record<string, { title: string; description: string }>,
  },
  ru: {
    nav: {
      templates: "Шаблоны",
      showcase: "Витрина",
      about: "О проекте",
      getStarted: "Начать",
      searchPlaceholder: "Поиск шаблонов...",
    },
    hero: {
      badge: "Премиум шаблоны",
      line1: "Создаём",
      line2: "цифровое",
      line3: "совершенство.",
      subtitle: "Высококонверсионные шаблоны лендингов, созданные с точностью. Разработаны для продвижения вашего бренда.",
      explore: "Смотреть шаблоны",
      viewShowcase: "Витрина работ",
      templateCount: "6 шаблонов",
      responsive: "Адаптивный дизайн",
      updates: "Бесплатные обновления",
    },
    featured: {
      label: "Избранное",
      title: "Лучшие работы",
    },
    collection: {
      label: "Коллекция",
      title: "Все шаблоны",
      all: "Все",
      noResults: "Шаблоны не найдены",
      noResultsHint: "Попробуйте выбрать другую категорию.",
      clearFilters: "Сбросить фильтры",
      preview: "Просмотр",
    },
    detail: {
      back: "Назад к шаблонам",
      getTemplate: "Получить шаблон",
      livePreview: "Живой просмотр",
      included: "Что включено",
      creators: "200+ авторов",
      creatorsDesc: "уже используют этот шаблон",
      notFound: "Шаблон не найден",
      notFoundDesc: "Шаблон, который вы ищете, не существует или был удалён.",
      returnHome: "На главную",
      features: {
        responsive: "Полная адаптивность",
        responsiveDesc: "Идеальное отображение на любом устройстве.",
        performance: "Высокая скорость",
        performanceDesc: "Оптимизирован для скорости, SEO и конверсий.",
        code: "Чистый код",
        codeDesc: "Хорошо структурированный, понятный и легко расширяемый.",
        design: "Уникальный дизайн",
        designDesc: "Авторский дизайн с вниманием к деталям.",
        browser: "Кросс-браузерность",
        browserDesc: "Протестирован во всех современных браузерах.",
        practices: "Лучшие практики",
        practicesDesc: "Создан с учётом доступности и безопасности.",
      },
    },
    footer: {
      title: "Готовы к запуску?",
      subtitle: "Опишите проект — я предложу структуру, формат и сроки. Ответ в течение 24 часов.",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        contact: "Контакт (Telegram или Email)",
        contactPlaceholder: "@telegram или email",
        projectType: "Тип проекта",
        projectTypes: ["Лендинг", "Редизайн", "Другое"] as readonly string[],
        timeline: "Сроки",
        timelines: ["Стандарт", "Быстро 3–5 дней"] as readonly string[],
        description: "Краткое описание",
        descriptionPlaceholder: "Расскажите о вашем проекте...",
        submit: "Начать проект",
      },
      contacts: {
        telegram: "Telegram",
        telegramDesc: "Самый быстрый ответ",
        email: "Email",
        emailDesc: "Для официальных запросов",
      },
      remote: "Удалённо по всему миру · RU / EN",
      rights: "FormCraft. Все права защищены.",
    },
    about: {
      title: "О проекте",
      content: [
        "Я создаю лендинги как стратегический инструмент влияния.",
        "Каждый проект начинается не с дизайна —\nа с анализа продукта, аудитории и точки роста.",
        "Сначала — логика.\nЗатем — структура.\nПотом — визуал.\nИ только после — эффект.",
        "Я работаю в разных стилях —\nот сдержанной luxury-эстетики до смелого digital —\nно неизменно одно:",
        "Чёткость.\nКонтроль внимания.\nКонверсия.",
        "Лендинг — это не просто красивая страница.\nЭто управляемый сценарий взаимодействия.",
        "И каждый пиксель в нём имеет цель.",
      ],
    },
    marquee: ["Лендинги", "Интернет-магазины", "SaaS", "Портфолио", "Креатив", "Люкс", "Интерактив", "Минимализм"] as readonly string[],
    categories: {
      "All": "Все",
      "E-commerce": "Интернет-магазин",
      "Creative": "Креатив",
      "Luxury": "Люкс",
      "Personal": "Персональный",
      "Product": "Продукт",
      "SaaS": "SaaS",
    } as Record<string, string>,
    templateData: {
      "Ecom Drop": { title: "Eком Дроп", description: "Высококонверсионный лендинг для дропшиппинга и интернет-магазинов." },
      "Experimental Neon": { title: "Экспериментальный Неон", description: "Смелый футуристический лендинг для креативных агентств и художников." },
      "Luxury Art": { title: "Люкс Арт", description: "Элегантный минималистичный дизайн для люксовых брендов и галерей." },
      "Personal Brand": { title: "Личный Бренд", description: "Чистая профессиональная страница для демонстрации портфолио и услуг." },
      "Product Interactive": { title: "Продукт Интерактив", description: "Вовлекающий интерактивный лендинг для демонстрации цифровых продуктов." },
      "SaaS Clean": { title: "SaaS Клин", description: "Современный конверсионный лендинг для SaaS-продуктов." },
    } as Record<string, { title: string; description: string }>,
  },
} as const;

export type Translations = (typeof translations)["en"] | (typeof translations)["ru"];

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("anna-lang");
      if (saved === "ru" || saved === "en") return saved;
    }
    return "en";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("anna-lang", newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
