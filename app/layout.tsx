import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "HU Web Services — Đối tác Công nghệ Vận hành cho Doanh nghiệp",
  description:
    "Phát triển hệ thống quản lý nội bộ, tự động hóa quy trình và tích hợp API theo nhu cầu thực tế của doanh nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-slate-50 text-slate-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
