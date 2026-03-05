import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT_EMAIL = "launch.flow@yandex.ru";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, contact, projectType, timeline, description } = await req.json();

    if (!name || !contact) {
      return new Response(
        JSON.stringify({ error: "Name and contact are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <h2>Новая заявка с сайта FormCraft</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Имя:</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Контакт:</td><td style="padding:8px;">${contact}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Тип проекта:</td><td style="padding:8px;">${projectType || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Сроки:</td><td style="padding:8px;">${timeline || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Описание:</td><td style="padding:8px;">${description || "—"}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FormCraft <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        subject: `Новая заявка: ${name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
