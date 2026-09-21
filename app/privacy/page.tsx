import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Chính sách bảo mật — ${SITE.name}`,
  description: "Chính sách bảo mật thông tin liên hệ và dữ liệu bạn cung cấp cho HU Web Services.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-base py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Chính sách bảo mật</h1>
        <p className="mt-4 text-sm text-muted">Cập nhật lần cuối: {new Date().getFullYear()}</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-3">
          <div>
            <h2>Thông tin được thu thập</h2>
            <p>
              Khi bạn điền form liên hệ trên website này, {SITE.name} thu thập các thông tin bạn cung cấp trực tiếp:
              họ tên, số điện thoại hoặc email, dịch vụ quan tâm, ngân sách dự kiến và nội dung mô tả dự án.
              Website không sử dụng cookie theo dõi hành vi hay thu thập dữ liệu ẩn danh khác.
            </p>
          </div>
          <div>
            <h2>Mục đích sử dụng</h2>
            <p>
              Thông tin bạn gửi được dùng duy nhất để phản hồi yêu cầu tư vấn của bạn qua email hoặc số điện thoại
              đã cung cấp. Thông tin không được bán, chia sẻ hoặc dùng cho mục đích quảng cáo bên thứ ba.
            </p>
          </div>
          <div>
            <h2>Lưu trữ dữ liệu</h2>
            <p>
              Nội dung form liên hệ được gửi trực tiếp qua email thông báo, không được lưu vào cơ sở dữ liệu công khai
              trên website.
            </p>
          </div>
          <div>
            <h2>Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về chính sách này hoặc muốn yêu cầu xóa thông tin đã gửi, vui lòng liên hệ qua{" "}
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
