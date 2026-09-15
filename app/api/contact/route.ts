import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const { name, email, phone, message } = data as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof phone === "string" &&
    phone.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length > 0
  );
}

export async function POST(request: Request) {
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

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Vui lòng điền đầy đủ và đúng định dạng thông tin." }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Kernel Portfolio <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `Yêu cầu tư vấn mới từ ${name}`,
      text: `Họ tên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\n\nNội dung yêu cầu:\n${message}`,
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
