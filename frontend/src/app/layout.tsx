import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "withtutu",
  description: "写给未来 AI Agent 产品经理的交互式探索地图。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
