import type { WorkConcept } from "./types";

/**
 * These are concept / technical demo explorations, not paid client projects.
 * Never rename these with a proper-noun brand that reads as a real company.
 */
export const WORK_CONCEPTS: WorkConcept[] = [
  {
    category: "Premium Corporate Website",
    title: "Corporate Website Concept",
    description: "Website doanh nghiệp tối giản, tập trung vào tốc độ tải trang và chuyển đổi khách hàng.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    detail:
      "Khám phá cách dựng một website doanh nghiệp tối giản, tốc độ tải nhanh và cấu trúc rõ ràng cho việc chuyển đổi khách hàng — không dùng hiệu ứng thừa, tập trung vào nội dung và hiệu năng.",
  },
  {
    category: "E-commerce / Booking Platform",
    title: "Commerce Platform Concept",
    description: "Nền tảng bán hàng/đặt lịch với luồng thanh toán rõ ràng và quản trị đơn hàng tập trung.",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    detail:
      "Kiến trúc mẫu cho nền tảng thương mại điện tử hoặc đặt lịch: luồng thanh toán rõ ràng, đồng bộ trạng thái đơn hàng và khả năng chịu tải khi lượng truy cập tăng đột biến.",
  },
  {
    category: "AI / Automation Dashboard",
    title: "Automation Dashboard Concept",
    description: "Dashboard giám sát quy trình tự động hóa và dữ liệu xử lý bằng AI theo thời gian thực.",
    tech: ["React", "Go", "AI / OCR"],
    detail:
      "Minh họa một dashboard vận hành: theo dõi trạng thái các tác vụ tự động hóa, dữ liệu được xử lý qua OCR/AI, và cảnh báo khi quy trình gặp lỗi — thiết kế cho người vận hành, không phải cho lập trình viên.",
  },
];
