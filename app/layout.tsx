import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import GNB from "@/components/GNB";

// 폰트 세팅
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ✅ SEO 메타데이터
export const metadata: Metadata = {
  metadataBase: new URL("https://lbc-eight.vercel.app"), // 배포 호스팅 주소
  title: {
    default: "엘비씨 | 친환경 수질개선·복합 규산염 솔루션",
    template: "%s | 엘비씨",
  },
  description: "엘비씨는 수용성 복합 규산염 기술을 기반으로 녹조·적조 저감, 수질 정화, 토양·농축수산 환경 개선 솔루션을 연구·제공합니다.",
  keywords: ["엘비씨", "LBC", "비청 씨크린", "수용성 복합 규산염", "수처리제", "수질 정화", "녹조 제거", "적조 방제", "친환경 미네랄", "환경 복원"],
  authors: [{ name: "(주)엘비씨", url: "https://lbc-eight.vercel.app" }],
  openGraph: {
    type: "website",
    url: "https://lbc-eight.vercel.app",
    title: "엘비씨 | 친환경 수질개선·복합 규산염 솔루션",
    description: "수용성 복합 규산염 기반의 수질 정화, 녹조·적조 저감, 토양·농축수산 환경 개선 솔루션을 제공합니다.",
    siteName: "(주)엘비씨",
    images: [
      {
        url: "https://lbc-eight.vercel.app/img/SEO.png", // og 이미지 (public 폴더에)
        width: 1200,
        height: 630,
        alt: "엘비씨 대표 이미지",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "엘비씨 | 친환경 수질개선·복합 규산염 솔루션",
    description: "수질 정화와 녹조·적조 저감을 위한 수용성 복합 규산염 기반 솔루션을 연구·제공합니다.",
    images: ["https://lbc-eight.vercel.app/img/SEO.png"],
  },
  alternates: {
    canonical: "https://lbc-eight.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    // "naver-site-verification": "ac9ff0ce060a869f0f1826783d8ee5567fe32814",
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        <GNB />
        <main className="flex-1 min-h-screen">{children}</main>
        <footer className="mt-auto">
          <Footer />
          {/* <!-- 공통 적용 스크립트 , 모든 페이지에 노출되도록 설치. 단 전환페이지 설정값보다 항상 하단에 위치해야함 --> */}
        </footer>

        {/* ✅ 구조화 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "(주)엘비씨",
              url: "https://lbc-eight.vercel.app",
              description: "수용성 복합 규산염 기술 기반의 수질 정화 및 친환경 솔루션 기업",
              logo: "https://lbc-eight.vercel.app/logo_white.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "다가4길 4-11, 202",
                addressLocality: "천안시 동남구",
                addressRegion: "충청남도",
                addressCountry: "KR",
              },
              telephone: "1558-3705",
              email: "bc3705@naver.com",
              sameAs: ["https://blog.naver.com/lek9740"],
            }),
          }}
        />
      </body>
    </html>
  );
}
