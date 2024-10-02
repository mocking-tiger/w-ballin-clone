import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const rubik = Rubik({
  weight: ["400", "700"], // 보통과 굵은 글꼴 사용
  subsets: ["latin"], // 폰트 서브셋 설정 (latin, latin-ext 등)
  display: "swap", // 폰트 로딩 방식 설정
});

export const metadata: Metadata = {
  title: "[짭볼린]디지털 서비스 종합 쇼핑몰: 마케팅•디자인•웹 개발",
  description:
    "검색 엔진 최적화, 웹 디자인, 사이트 제작까지 맞춤형 디지털 마케팅 전략 서비스 지원. 톡톡 튀는 아이디어와 열정 맨들이 가득한 디지털 마케팅 대행사. 60개국 이상 글로벌 기업과 협업 경험. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body className={`${rubik.className} antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
        <div id="root" />
      </body>
    </html>
  );
}
