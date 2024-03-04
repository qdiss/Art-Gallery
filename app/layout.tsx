import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edo Opanovic",
  description: "Fine art and commercial photography by Edo Opanovic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
