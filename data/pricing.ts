import type { PricingTier } from "./types";

/**
 * Single source of truth for pricing shown on the site.
 * Edit values here only — do not restate prices in any component.
 */
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Business Website",
    price: "Liên hệ nhận báo giá",
    description: "Website doanh nghiệp, landing page hoặc website giới thiệu sản phẩm/dịch vụ.",
    features: ["Thiết kế theo brand riêng", "Responsive & SEO cơ bản", "Bàn giao source code"],
  },
  {
    name: "Web Application",
    price: "Báo giá theo dự án",
    description: "Hệ thống nghiệp vụ, CRM, quản lý kho/đơn hàng hoặc ứng dụng nội bộ theo yêu cầu riêng.",
    features: ["Kiến trúc theo đúng nghiệp vụ", "Phân quyền & báo cáo", "Hỗ trợ sau triển khai"],
    highlighted: true,
  },
  {
    name: "Automation",
    price: "Báo giá theo dự án",
    description: "Tự động hóa quy trình, tích hợp API, hệ thống thông báo và xử lý dữ liệu.",
    features: ["Khảo sát quy trình hiện tại", "Tích hợp hệ thống có sẵn", "Giám sát vận hành"],
  },
  {
    name: "AI Solution",
    price: "Báo giá theo dự án",
    description: "Tích hợp AI, OCR, xử lý tài liệu hoặc hệ thống Knowledge/RAG cho nghiệp vụ cụ thể.",
    features: ["Đánh giá bài toán phù hợp", "Triển khai theo dữ liệu thật", "Tối ưu sau khi có kết quả"],
  },
];
