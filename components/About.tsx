"use client";

import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Hiểu bài toán trước khi viết code",
    description:
      "Chúng tôi bắt đầu bằng việc hiểu quy trình, người sử dụng và vấn đề cần giải quyết trước khi quyết định giải pháp kỹ thuật.",
  },
  {
    number: "02",
    title: "Rõ ràng trong từng giai đoạn",
    description:
      "Phạm vi công việc, tiến độ và cách triển khai được trao đổi rõ ràng để hạn chế phát sinh và những kỳ vọng không thống nhất.",
  },
  {
    number: "03",
    title: "Xây để tiếp tục phát triển",
    description: (
      <>
        <span className="block">Sản phẩm không chỉ cần chạy ở ngày bàn giao.</span>
        <span className="mt-3 block">
          Chúng tôi chú trọng khả năng bảo trì, mở rộng và tiếp tục phát triển khi doanh nghiệp thay đổi.
        </span>
      </>
    ),
  },
];

export default function About() {
  const fadeUp = useFadeUp();

  return (
    <section id="about" className="bg-base py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Về HU</span>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            <span className="block">
              Chúng tôi không chỉ xây cho sản phẩm chạy.
            </span>
            <span className="mt-5 block text-slate-300">
              Chúng tôi xây để doanh nghiệp có thể dùng lâu dài.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-muted">
            HU Web Services tập trung vào việc biến nhu cầu kinh doanh thành những sản phẩm số rõ ràng, ổn định và dễ
            phát triển.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Từ website, hệ thống quản lý đến automation và AI, mỗi giải pháp đều bắt đầu từ bài toán thực tế — không
            bắt đầu từ framework hay công nghệ.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          variants={fadeUp}
          className="border-t border-white/10"
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/10 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:py-8"
            >
              <span className="pt-1 text-xs font-semibold tracking-wider text-white/30">{principle.number}</span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{principle.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
