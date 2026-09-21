import { Compass, FileText, Palette, Code2, ClipboardCheck, Headset } from "lucide-react";
import type { ProcessStep } from "./types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    description: "Tìm hiểu bài toán thực tế, quy trình hiện tại và mục tiêu kinh doanh trước khi đề xuất giải pháp.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal",
    description: "Đề xuất phạm vi, kiến trúc kỹ thuật và lộ trình rõ ràng — thống nhất trước khi bắt đầu phát triển.",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI / UX",
    description: "Thiết kế giao diện và luồng sử dụng tối ưu, đảm bảo trải nghiệm rõ ràng cho người dùng cuối.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description: "Phát triển theo từng chức năng, code sạch và dễ bảo trì, review liên tục trong suốt quá trình.",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "QA & Deployment",
    description: "Kiểm thử kỹ lưỡng các trường hợp thực tế và triển khai lên môi trường production an toàn.",
  },
  {
    number: "06",
    icon: Headset,
    title: "Support",
    description: "Đồng hành sau triển khai — theo dõi vận hành, xử lý sự cố và cải tiến khi hệ thống phát triển.",
  },
];
