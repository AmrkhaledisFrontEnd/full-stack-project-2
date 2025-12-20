import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// =====================================================================================
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Store Courses",
  description:
    "Our online course store offers a wide range of high-quality educational courses designed for learners of all levels. From programming and design to personal development and business skills, we provide engaging content that helps users achieve their goals efficiently. With easy navigation, secure payment options, and instant access to purchased courses, our platform makes learning convenient and enjoyable for everyone.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  overflow-x-hidden`}>
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
