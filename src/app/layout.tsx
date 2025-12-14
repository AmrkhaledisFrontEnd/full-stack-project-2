import type { Metadata } from "next";
import { Poppins ,Cairo} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import favicon from "../../public/logo.svg"
// =====================================================================================
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"]
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Store Courses",
  description: "Store Courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </head>
      <body
        className={`${poppins.className} ${cairo.className} overflow-x-hidden pt-[120px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
