import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "مصنع مواسم للعصيرات | نضارة الطبيعة في كل رشفة",
  description: "نقدم لك أفضل العصائر الطبيعية الطازجة من مصنع مواسم. جودة، طبيعية، ونقاء في كل عبوة.",
  verification: {
    other: {
      // تم تحديث الاسم هنا ليتطابق مع طلبك الجديد
      "https://juiceprojectplum.com": "f2be3fe377032171255e4da911856f717b6927a7bc54348ee331d39c77d36f82",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${tajawal.variable} font-cairo antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}