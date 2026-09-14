"use client";

import { motion, type Variants } from "framer-motion";
import { Cloud, Code2, Layers, Search, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Khảo sát & Chốt phạm vi",
    description:
      "Phân tích quy trình hiện tại, xác định vấn đề cần giải quyết, chức năng cần có và thống nhất phạm vi trước khi phát triển.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Thiết kế Giải pháp",
    description:
      "Phác thảo luồng màn hình, cấu trúc dữ liệu và cách hệ thống vận hành. Ưu tiên giải pháp đơn giản, dễ sử dụng và dễ mở rộng.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Phát triển & Kiểm thử",
    description:
      "Xây dựng hệ thống theo từng chức năng, kiểm thử nghiệp vụ, phân quyền, dữ liệu và các trường hợp lỗi trước khi bàn giao.",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Triển khai & Hỗ trợ",
    description:
      "Đưa hệ thống lên server/cloud, cấu hình môi trường thực tế, hướng dẫn sử dụng và hỗ trợ xử lý vấn đề sau triển khai.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Workflow() {
  return (
    <section id="workflow" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Quy trình làm việc
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Từ bài toán thực tế đến hệ thống vận hành
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Quy trình rõ ràng, tập trung vào đúng nhu cầu và tránh phát triển những chức năng không cần thiết.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="relative mt-20 grid gap-10 lg:grid-cols-4 lg:gap-8"
        >
          <div aria-hidden className="absolute top-6 right-0 left-0 hidden h-px bg-slate-300 lg:block" />

          {STEPS.map((step) => (
            <motion.div key={step.number} variants={item} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-blue-600">
                <step.icon className="h-5 w-5" />
              </div>
              <span className="mt-5 text-sm font-bold text-blue-600">{step.number}</span>
              <h3 className="mt-1 text-lg font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
