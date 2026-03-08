import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, contact, projectType, timeline, description } = await req.json();

    if (!name || !contact) {
      return new Response(
        JSON.stringify({ error: "Name and contact are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return new Response(
        JSON.stringify({
          error: "Telegram is not configured. Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const safeName = escapeHtml(String(name).trim());
    const safeContact = escapeHtml(String(contact).trim());
    const safeProjectType = escapeHtml(String(projectType || "—"));
    const safeTimeline = escapeHtml(String(timeline || "—"));
    const safeDescription = escapeHtml(String(description || "—"));

    const message = `
<b>Новая заявка с сайта FormCraft</b>

<b>Имя:</b> ${safeName}
<b>Контакт:</b> ${safeContact}
<b>Тип проекта:</b> ${safeProjectType}
<b>Сроки:</b> ${safeTimeline}
<b>Описание:</b> ${safeDescription}
`.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      console.error("Telegram API error:", telegramData);

      return new Response(
        JSON.stringify({
          error: "Failed to send Telegram message",
          details: telegramData,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Function error:", error);

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
