import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/data/contact";

type ContactPayload = {
  name: string;
  contact: string;
  service: string;
  budget: string;
  message: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
// In-memory only: correct because this app runs as a single long-lived Node process
// (Docker container, not serverless/edge) — do not reuse this pattern behind multiple instances.
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (requestLog.size > 500) {
    for (const [key, timestamps] of requestLog) {
      if (timestamps.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: Request): string {
  // Best-effort signal only: assumes the reverse proxy in front of this container sets/overwrites
  // x-forwarded-for rather than passing an attacker-supplied value through untouched.
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isSameOrigin(request: Request): boolean {
  // CSRF mitigation for this endpoint: it is stateless and cookie-less, so there is no session
  // to steal and token-based CSRF is inapplicable. Same-origin enforcement is the relevant check.
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

const CONTACT_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^[+0-9()\-.\s]{7,20}$/;

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const { name, contact, service, budget, message } = data as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    name.length <= 100 &&
    typeof contact === "string" &&
    CONTACT_PATTERN.test(contact.trim()) &&
    typeof service === "string" &&
    (SERVICE_OPTIONS as readonly string[]).includes(service) &&
    typeof budget === "string" &&
    (BUDGET_OPTIONS as readonly string[]).includes(budget) &&
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.length <= 2000
  );
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Yêu cầu không hợp lệ." }, { status: 403 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Bạn gửi yêu cầu quá nhanh. Vui lòng thử lại sau ít phút." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable");
    return NextResponse.json(
      { error: "Máy chủ chưa cấu hình gửi email. Vui lòng liên hệ trực tiếp qua email." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "company" field. If a bot filled it,
  // report success without sending anything, so it has no signal to learn from.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company) {
    return NextResponse.json({ success: true });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Vui lòng điền đầy đủ và đúng định dạng thông tin." }, { status: 400 });
  }

  const { name, contact, service, budget, message } = body;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "HU Web Services <onboarding@resend.dev>",
      to: toEmail,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `Yêu cầu tư vấn mới từ ${name}`,
      text: `Họ tên: ${name}\nLiên hệ: ${contact}\nDịch vụ: ${service}\nNgân sách: ${budget}\n\nMô tả dự án:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Gửi email thất bại. Vui lòng thử lại sau." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error sending contact email:", error);
    return NextResponse.json({ error: "Gửi email thất bại. Vui lòng thử lại sau." }, { status: 500 });
  }
}
