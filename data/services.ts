import { Globe, Building2, Workflow, BrainCircuit } from "lucide-react";
import type { ServiceCategory } from "./types";

export const SERVICES: ServiceCategory[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Xây dựng nền tảng web đúng chuẩn cho doanh nghiệp — nhanh, chuyên nghiệp và dễ mở rộng khi quy mô tăng.",
    items: ["Website doanh nghiệp", "Landing Page", "E-commerce", "Website theo yêu cầu riêng"],
  },
  {
    icon: Building2,
    title: "Business Systems",
    description:
      "Số hóa nghiệp vụ nội bộ để doanh nghiệp vận hành bằng dữ liệu thật, giảm phụ thuộc vào Excel và quy trình rời rạc.",
    items: ["CRM", "Quản lý đơn hàng", "Quản lý kho", "Hệ thống nội bộ riêng"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Loại bỏ thao tác lặp lại, giảm sai sót thủ công và giải phóng thời gian cho công việc quan trọng hơn.",
    items: ["Tự động hóa quy trình", "Tích hợp API", "Hệ thống thông báo", "Xử lý dữ liệu"],
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Ứng dụng AI vào đúng bài toán vận hành thực tế — không chạy theo trào lưu, chỉ triển khai khi tạo giá trị thật.",
    items: ["Tích hợp AI", "OCR", "Xử lý tài liệu", "Hệ thống Knowledge / RAG"],
  },
];
