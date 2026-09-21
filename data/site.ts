import type { NavItem } from "./types";

export const SITE = {
  name: "HU Web Services",
  shortName: "HU",
  domain: "https://huwebservices.site",
  tagline: "Studio kỹ thuật cho sản phẩm số nghiêm túc",
  description:
    "Thiết kế, phát triển và triển khai website, hệ thống nghiệp vụ, tự động hóa và giải pháp AI — từ đầu đến cuối.",
  phone: "+84 978 083 806",
  phoneHref: "tel:+84978083806",
  email: "support@huwebservices.site",
  emailHref: "mailto:support@huwebservices.site",
  facebook: "https://www.facebook.com/huwebservices",
  zalo: "https://zalo.me/84978083806",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];
