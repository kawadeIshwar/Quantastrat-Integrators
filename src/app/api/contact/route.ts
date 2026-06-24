import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name = "", email = "", company = "", phone = "", interest = "", message = "" } = body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;

  // If SMTP isn't configured, log and accept gracefully (dev-friendly)
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] SMTP not configured. Form submission:", { name, email, company, phone, interest, message });
    return NextResponse.json({ ok: true, delivered: false, note: "SMTP not configured; logged on server." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const subject = `New enquiry — ${interest || "General"} — ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      `Phone: ${phone || "-"}`,
      `Interest: ${interest || "-"}`,
      "",
      "Message:",
      message
    ].join("\n");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0a0a0a">
        <h2 style="margin:0 0 12px;color:#E85D04">New enquiry from quantastrat.com</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
          <tr><td><b>Name</b></td><td>${escape(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escape(email)}</td></tr>
          <tr><td><b>Company</b></td><td>${escape(company)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escape(phone)}</td></tr>
          <tr><td><b>Interest</b></td><td>${escape(interest)}</td></tr>
        </table>
        <p style="margin-top:16px;white-space:pre-wrap">${escape(message)}</p>
      </div>`;

    await transporter.sendMail({
      from: SMTP_FROM || `Quantastrat <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err: any) {
    console.error("[contact] send error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again later." }, { status: 500 });
  }
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
