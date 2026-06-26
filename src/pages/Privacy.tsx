import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { AnnaNavbar } from "@/components/AnnaNavbar";
import { AnnaFooter } from "@/components/AnnaFooter";

export default function Privacy() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnaNavbar />
      <main className="flex-1 pt-24 sm:pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            {isRu ? "Политика конфиденциальности" : "Privacy Policy"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            {isRu ? (
              <>
                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">1. Общие положения</h2>
                  <p>
                    Настоящая Политика конфиденциальности описывает, как FormCraft Social (далее — «Сервис») собирает,
                    использует и защищает данные пользователей. Используя Сервис, вы соглашаетесь с условиями
                    настоящей Политики.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">2. Какие данные собираются</h2>
                  <p>Сервис может получать доступ к следующим данным через Instagram Graph API:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Комментарии к публикациям и их метаданные</li>
                    <li>Входящие личные сообщения и их метаданные</li>
                    <li>Публичная информация профиля Instagram (имя, username, аватар)</li>
                  </ul>
                  <p>
                    Сервис не собирает пароли, данные банковских карт или иные конфиденциальные данные без явного
                    согласия пользователя.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">3. Цели обработки данных</h2>
                  <p>Данные используются исключительно для:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Анализа входящих сообщений и комментариев с помощью AI</li>
                    <li>Подготовки черновиков ответов в голосе креатора</li>
                    <li>Автоматизации рутинных взаимодействий</li>
                    <li>Предоставления интерфейса ревью в Telegram</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">4. Хранение и защита</h2>
                  <p>
                    Данные хранятся на защищённых серверах с ограниченным доступом. Доступ к сообщениям имеет только
                    авторизованный AI-агент и сам пользователь через интерфейс ревью. Мы не передаём данные третьим лицам
                    и не используем их для рекламы.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">5. Human-in-the-loop</h2>
                  <p>
                    Все чувствительные или нестандартные ответы требуют явного подтверждения пользователя перед
                    отправкой. AI-агент не отправляет сообщения автоматически без финального одобрения креатора.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">6. Удаление данных</h2>
                  <p>
                    По запросу пользователя все связанные данные могут быть удалены в течение 7 рабочих дней.
                    Для запроса на удаление обратитесь через контакты, указанные на главной странице.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">7. Контакты</h2>
                  <p>
                    По вопросам, связанным с конфиденциальностью, пишите на{" "}
                    <a href="mailto:launch.flow@yandex.ru" className="text-primary hover:underline">
                      launch.flow@yandex.ru
                    </a>{" "}
                    или в Telegram{" "}
                    <a href="https://t.me/formcrafttech" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      @formcrafttech
                    </a>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">1. General</h2>
                  <p>
                    This Privacy Policy describes how FormCraft Social (the “Service”) collects, uses, and protects user
                    data. By using the Service, you agree to the terms of this Policy.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">2. Data We Collect</h2>
                  <p>The Service may access the following data via the Instagram Graph API:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Post comments and their metadata</li>
                    <li>Incoming direct messages and their metadata</li>
                    <li>Public Instagram profile information (name, username, avatar)</li>
                  </ul>
                  <p>
                    The Service does not collect passwords, credit card details, or other sensitive data without
                    explicit user consent.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">3. Purpose of Processing</h2>
                  <p>Data is used solely for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Analysing incoming messages and comments with AI</li>
                    <li>Drafting replies in the creator&apos;s voice</li>
                    <li>Automating routine interactions</li>
                    <li>Providing a Telegram-based review interface</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">4. Storage and Security</h2>
                  <p>
                    Data is stored on secured servers with restricted access. Only the authorised AI agent and the user
                    themselves (via the review interface) can access messages. We do not share data with third parties
                    or use it for advertising.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">5. Human-in-the-loop</h2>
                  <p>
                    All sensitive or non-standard replies require explicit user confirmation before sending. The AI agent
                    does not send messages automatically without the creator&apos;s final approval.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">6. Data Deletion</h2>
                  <p>
                    Upon user request, all related data can be deleted within 7 business days. To request deletion,
                    contact us via the details on the home page.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-lg font-semibold text-foreground">7. Contact</h2>
                  <p>
                    For privacy-related questions, email{" "}
                    <a href="mailto:launch.flow@yandex.ru" className="text-primary hover:underline">
                      launch.flow@yandex.ru
                    </a>{" "}
                    or reach out on Telegram{" "}
                    <a href="https://t.me/formcrafttech" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      @formcrafttech
                    </a>.
                  </p>
                </section>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <AnnaFooter />
    </div>
  );
}
