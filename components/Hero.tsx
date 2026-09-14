"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "5+ năm", label: "Kinh nghiệm doanh nghiệp" },
  { value: "Clean Code", label: "Chuẩn quốc tế, dễ mở rộng" },
  { value: "Trọn đời", label: "Đồng hành bảo trì & hỗ trợ" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_10%,#f8fafc_85%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
          </span>
          Đang nhận dự án mới
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl md:text-7xl"
        >
          Xây dựng <span className="text-blue-600">Hệ thống Vận hành Số</span> vững chắc cho doanh nghiệp của bạn
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl"
        >
          Đồng hành cùng chủ kho bãi, thương hiệu TMĐT và doanh nghiệp SME trong hành trình số hóa —
          từ Quản lý Kho, Bán hàng Đa kênh đến hệ thống ERP nội bộ.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
          >
            Đặt lịch tư vấn miễn phí
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:border-slate-400 hover:bg-slate-100 sm:w-auto"
          >
            Xem dịch vụ
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-6 divide-y divide-slate-200 sm:flex-row sm:gap-0 sm:divide-x sm:divide-y-0"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-8 pt-6 first:pt-0 sm:pt-0">
              <span className="text-2xl font-bold text-slate-950">{stat.value}</span>
              <span className="mt-1 text-sm text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
