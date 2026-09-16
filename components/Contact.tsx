"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_STATE: FormState = { name: "", email: "", phone: "", message: "" };

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hp926206@gmail.com" },
  { icon: Phone, label: "Điện thoại", value: "+84 978 083 806" },
  { icon: MapPin, label: "Khu vực", value: "Làm việc từ xa — trên toàn quốc" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Gửi yêu cầu thất bại. Vui lòng thử lại.");
      }

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch (err) {
      setStatus("idle");
      setErrorMessage(err instanceof Error ? err.message : "Gửi yêu cầu thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Liên hệ</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Sẵn sàng số hóa vận hành doanh nghiệp?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Để lại thông tin, tôi sẽ phản hồi trong vòng 24 giờ làm việc để lên lịch khảo sát và tư vấn miễn phí.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {CONTACT_INFO.map((info) => (
                <li key={info.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{info.label}</p>
                    <p className="text-sm font-semibold text-slate-950">{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              {status === "success" ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">Đã gửi yêu cầu thành công!</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi qua email hoặc số điện thoại bạn cung cấp trong thời gian sớm nhất.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Gửi một yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Họ và tên
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ban@congty.vn"
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Số điện thoại
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09xx xxx xxx"
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Nội dung yêu cầu
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Mô tả ngắn gọn bài toán vận hành hoặc hệ thống bạn đang cần..."
                      className="resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Gửi yêu cầu tư vấn
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
