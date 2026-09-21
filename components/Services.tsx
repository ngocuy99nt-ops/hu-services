"use client";

import { motion } from "framer-motion";
import { useItemFade, useStagger } from "@/lib/motion";

const SERVICE_CARDS = [
  {
    number: "01",
    category: "Website doanh nghiệp",
    title: "Website chuyên nghiệp cho doanh nghiệp",
    description:
      "Thiết kế website hiện đại, responsive, tối ưu tốc độ và tập trung vào việc giới thiệu thương hiệu, dịch vụ và chuyển đổi khách hàng.",
    items: ["Website giới thiệu", "Landing page", "Website đa ngôn ngữ", "Form nhận khách hàng"],
  },
  {
    number: "02",
    category: "Hệ thống kinh doanh",
    title: "Web Application & Management System",
    description:
      "Xây dựng hệ thống theo đúng quy trình vận hành của doanh nghiệp thay vì ép doanh nghiệp sử dụng một template có sẵn.",
    items: ["Quản lý đơn hàng", "Quản lý kho", "CRM", "Dashboard & báo cáo"],
  },
  {
    number: "03",
    category: "AI & Automation",
    title: "Tự động hóa quy trình bằng AI",
    description:
      "Ứng dụng AI và automation để giảm các công việc thủ công, xử lý tài liệu và kết nối dữ liệu giữa nhiều hệ thống.",
    items: ["OCR tài liệu", "AI Document Processing", "Workflow Automation", "RAG & Knowledge Search"],
  },
];

export default function Services() {
  const container = useStagger(0.12);
  const item = useItemFade();

  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Giải pháp</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Những gì HU có thể xây dựng
          </h2>
          <p className="mt-4 text-lg text-muted">
            Website, hệ thống quản lý và giải pháp tự động hóa được thiết kế theo nhu cầu thực tế của doanh nghiệp.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {SERVICE_CARDS.map((service) => (
            <motion.div
              key={service.number}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-7 transition-colors hover:border-white/20 sm:p-8"
            >
              <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
                <span className="text-6xl font-extrabold leading-none tracking-tighter text-white/10">
                  {service.number}
                </span>
                <span className="pb-1 text-right text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {service.category}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold leading-snug text-ink sm:text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 lg:mt-auto">
                {service.items.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="h-px w-4 shrink-0 bg-accent/60" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
