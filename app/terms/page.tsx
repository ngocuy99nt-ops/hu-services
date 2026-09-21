import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Điều khoản dịch vụ — ${SITE.name}`,
  description: "Điều khoản làm việc chung khi hợp tác dự án với HU Web Services.",
};

export default function TermsPage() {
  return (
    <section className="bg-base py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Điều khoản dịch vụ</h1>
        <p className="mt-4 text-sm text-muted">Cập nhật lần cuối: {new Date().getFullYear()}</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-3">
          <div>
            <h2>Phạm vi dự án</h2>
            <p>
              Phạm vi, thời gian và chi phí cụ thể cho từng dự án được thống nhất riêng bằng báo giá hoặc hợp đồng
              trước khi bắt đầu phát triển. Nội dung trên website chỉ mang tính giới thiệu dịch vụ, không phải cam kết
              giá hoặc thời gian cố định.
            </p>
          </div>
          <div>
            <h2>Bàn giao source code</h2>
            <p>
              Khách hàng nhận toàn bộ source code sau khi hoàn tất và thanh toán đầy đủ theo thỏa thuận của từng
              dự án cụ thể.
            </p>
          </div>
          <div>
            <h2>Bảo trì & hỗ trợ</h2>
            <p>
              Hỗ trợ sau triển khai được thực hiện theo thỏa thuận riêng cho từng dự án — có thể là hỗ trợ theo yêu
              cầu hoặc hợp đồng bảo trì dài hạn, tùy nhu cầu của khách hàng.
            </p>
          </div>
          <div>
            <h2>Thay đổi điều khoản</h2>
            <p>
              Điều khoản này có thể được cập nhật theo thời gian. Điều khoản áp dụng cho một dự án cụ thể là điều
              khoản đã thống nhất bằng văn bản giữa hai bên tại thời điểm ký kết.
            </p>
          </div>
          <div>
            <h2>Liên hệ</h2>
            <p>
              Mọi câu hỏi về điều khoản dịch vụ, vui lòng liên hệ qua{" "}
              <a href={SITE.emailHref} className="text-accent hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
