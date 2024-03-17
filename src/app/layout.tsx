import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Ignite Movies",
    default: "Início | Ignite Movies"
  },
  description: "Movie's Reviews Plataform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
