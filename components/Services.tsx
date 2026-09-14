"use client";

import { motion, type Variants } from "framer-motion";
import { Check, LayoutDashboard, Network, Workflow, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    icon: LayoutDashboard,
    title: "Hệ thống Quản lý Nội bộ",
    description:
      "Xây dựng ứng dụng web theo đúng quy trình vận hành của doanh nghiệp, giúp quản lý dữ liệu tập trung và giảm phụ thuộc vào Excel.",
    features: [
      "Quản lý đơn hàng, khách hàng và trạng thái xử lý",
      "Quản lý nhập – xuất – tồn kho",
      "Phân quyền theo nhân viên và phòng ban",
      "Dashboard và báo cáo theo dữ liệu thực tế",
    ],
  },
  {
    icon: Workflow,
    title: "Tự động hóa Quy trình Nghiệp vụ",
    description:
      "Tự động hóa các thao tác lặp lại từ nhập liệu, phê duyệt, tạo tài liệu đến thông báo và báo cáo.",
    features: [
      "Quy trình duyệt và xử lý trạng thái",
      "Import / Export Excel, CSV",
      "Tự động tạo PDF, báo giá, hóa đơn, báo cáo",
      "Email, thông báo và tác vụ định kỳ",
    ],
  },
  {
    icon: Network,
    title: "Tích hợp API & Hệ thống",
    description:
      "Kết nối hệ thống nội bộ với website, cổng thanh toán và các dịch vụ bên thứ ba để dữ liệu được đồng bộ xuyên suốt.",
    features: [
      "REST API & Webhook",
      "Tích hợp thanh toán và dịch vụ bên thứ ba",
      "Đồng bộ dữ liệu giữa nhiều hệ thống",
      "Kết nối hệ thống cũ với ứng dụng mới",
    ],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Dịch vụ mũi nhọn
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Số hóa quy trình vận hành doanh nghiệp
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Xây dựng hệ thống quản lý nội bộ, tự động hóa quy trình và kết nối các hệ thống hiện có theo nhu cầu thực tế.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {feature}
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
