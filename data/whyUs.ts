import { FileCode2, Gauge, Eye, Layers, ShieldCheck, LifeBuoy } from "lucide-react";
import type { CredibilityCard } from "./types";

export const WHY_US: CredibilityCard[] = [
  {
    icon: FileCode2,
    title: "Source Code Ownership",
    description: "Bạn sở hữu toàn bộ source code sau khi hoàn tất — không ràng buộc, không phụ thuộc nền tảng đóng.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description: "Tối ưu tốc độ tải trang và hiệu năng hệ thống ngay từ giai đoạn kiến trúc, không xử lý muộn.",
  },
  {
    icon: Eye,
    title: "Transparent Development",
    description: "Cập nhật tiến độ rõ ràng theo từng giai đoạn — không có hộp đen trong suốt quá trình phát triển.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Kiến trúc được thiết kế để mở rộng khi nghiệp vụ tăng trưởng, không phải xây lại từ đầu.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Xác thực dữ liệu, kiểm soát truy cập và xử lý lỗi được coi là yêu cầu bắt buộc, không phải tùy chọn.",
  },
  {
    icon: LifeBuoy,
    title: "After-launch Support",
    description: "Đồng hành sau khi triển khai để đảm bảo hệ thống vận hành ổn định trong thực tế lâu dài.",
  },
];
