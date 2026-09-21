"use client";

import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/motion";

export default function About() {
  const fadeUp = useFadeUp();

  return (
    <section id="about" className="bg-base py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-wider text-accent"
        >
          About
        </motion.span>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          variants={fadeUp}
          className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          A small technical studio.
          <br />
          Built for serious products.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          variants={fadeUp}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          HU Web Services được vận hành bởi một kỹ sư phần mềm duy nhất — không phải một agency với
          nhiều đội song song. Mỗi dự án được trực tiếp khảo sát, thiết kế kiến trúc và phát triển,
          không qua nhiều lớp giao tiếp trung gian.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={3}
          variants={fadeUp}
          className="mt-4 text-lg leading-relaxed text-muted"
        >
          Vì chỉ nhận một số lượng dự án giới hạn tại một thời điểm, chất lượng và khả năng bảo trì
          lâu dài được ưu tiên hơn việc mở rộng số lượng khách hàng. Đây là lựa chọn có chủ đích —
          không phải giới hạn quy mô.
        </motion.p>
      </div>
    </section>
  );
}
