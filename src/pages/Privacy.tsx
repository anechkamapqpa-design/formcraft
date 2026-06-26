import { AnnaNavbar } from "@/components/AnnaNavbar";
import { AnnaFooter } from "@/components/AnnaFooter";

const UPDATED = "June 26, 2026";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnaNavbar />
      <main className="flex-1 pt-28 sm:pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Privacy Policy — <span className="text-gradient">FormCraft Social</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {UPDATED}</p>
          </header>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              FormCraft Social ("the App", "we", "our") is an AI-assisted tool that helps Instagram creators manage
              incoming comments and direct messages. This Privacy Policy explains what data the App processes, how it is
              used, and how it is protected.
            </p>
            <p>
              The App is used by the account owner (the creator) to assist with their own Instagram account, with their
              explicit authorization through the Instagram Graph API.
            </p>

            <Section title="1. What Data We Collect">
              <p>When connected to an Instagram account via the official Instagram Graph API, the App may process:</p>
              <List items={[
                "The text content of incoming direct messages and comments",
                "The sender's Instagram-provided identifier (User ID)",
                "Timestamps of messages and comments",
                "Whether a message was a comment or a direct message",
              ]} />
              <p>
                We do not collect any data beyond what is provided through the standard Instagram Graph API webhook. We do
                not access contact lists, browsing history, location data, or any information outside the scope of the
                connected Instagram account's messages and comments.
              </p>
            </Section>

            <Section title="2. How We Use This Data">
              <p>The data is used solely to operate the App's core function: helping the creator respond to their audience. Specifically:</p>
              <List items={[
                "Incoming messages and comments are classified by type (e.g., emoji reaction, thank-you, common question, non-standard question) using an AI model (Anthropic's Claude).",
                "Based on this classification, the App generates a response using a pre-approved knowledge base and the creator's defined communication style.",
                "Routine, low-risk responses (such as emoji reactions, thank-yous, and answers to common questions) may be sent automatically.",
                "Anything outside these routine categories — including non-standard questions and post drafts — is sent to the creator for manual review via a private Telegram interface before anything is published or sent. The App does not act fully autonomously on sensitive or ambiguous content.",
              ]} />
              <p>We do not use this data for advertising, profiling, or any purpose unrelated to operating the App.</p>
            </Section>

            <Section title="3. How Data Is Stored and Protected">
              <List items={[
                "API credentials and access tokens are stored as environment variables on the hosting server, not in plain text within the application code, and are not exposed publicly.",
                "Access to stored credentials and logs is limited to the App's owner/operator.",
                "Message data is logged only as needed for operating and auditing the App (for example, to confirm whether a message was handled automatically or sent for review). Logs are not kept indefinitely as a permanent archive of personal data and are periodically reviewed and cleared.",
              ]} />
            </Section>

            <Section title="4. Third-Party Data Sharing">
              <p>We do not sell or share user data with third parties for advertising or marketing purposes.</p>
              <p>
                To generate responses, message content is sent to Anthropic's Claude API for processing. Anthropic acts as
                a data processor in this context, handling the text solely to generate a response; it is not used to build
                advertising profiles or shared further by us for marketing purposes. Anthropic's own privacy practices
                govern how it handles data sent to its API.
              </p>
              <p>No other third parties receive user data through this App.</p>
            </Section>

            <Section title="5. Your Rights">
              <p>
                If you have interacted with an Instagram account that uses FormCraft Social and would like to request
                information about, or deletion of, data associated with your messages, you can contact us using the email
                below. We will respond to verified requests in accordance with applicable data protection laws.
              </p>
            </Section>

            <Section title="6. Contact">
              <p>For questions about this Privacy Policy or to make a data request, contact:</p>
              <p className="text-foreground">
                Email:{" "}
                <a href="mailto:G.Anna1@internet.ru" className="text-primary hover:underline">G.Anna1@internet.ru</a>
                <br />
                Telegram:{" "}
                <a href="https://t.me/formcrafttech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@formcrafttech</a>
              </p>
            </Section>

            <Section title="7. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in how the App operates. The "Last
                updated" date at the top of this page will reflect the most recent revision.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <AnnaFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-4">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
