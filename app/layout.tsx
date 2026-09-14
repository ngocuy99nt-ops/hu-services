import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Kernel — Đối tác Công nghệ Vận hành cho Doanh nghiệp",
  description:
    "Xây dựng Hệ thống Quản lý Kho (WMS), Nền tảng Bán hàng Đa kênh và Giải pháp ERP may đo cho doanh nghiệp SME, chủ kho bãi và thương hiệu TMĐT.",
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
