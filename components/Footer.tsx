import Link from "next/link";
import React from "react";
import Image from "next/image";
import Script from "next/script";

export default function Footer() {
  return (
    <div className="py-10 bg-slate-800 text-white/60 text-center mx-auto">
      <Link href={"/"} className="flex justify-center font-bold pb-6 opacity-40">
        <Image src={"/logo_white.png"} alt="LK관세사무소" width={140} height={40} className="hidden md:block" />
        <Image src={"/logo_white.png"} alt="LK관세사무소" width={80} height={40} className="md:hidden block" />
      </Link>

      <p className="text-sm">주소: 서울시 강남구 테헤란로 20길 18 부봉빌딩 6층, 608호</p>
      <p className="text-sm">카톡 ID: lkcus</p>
      <p className="text-sm">전화: 02-552-2893</p>
      <p className="text-sm">이메일: admin@lkcustoms.co.kr</p>
      <p className="mt-4 text-sm">© 2025 LK 관세사무소 INDUSTRY. All rights reserved.</p>
      <p className="text-sm">DESIGN & Development BY GLOBAL MIG</p>
      {/* <!-- 공통 적용 스크립트 , 모든 페이지에 노출되도록 설치. 단 전환페이지 설정값보다 항상 하단에 위치해야함 --> */}
      <Script src="//wsa.mig-log.com/wsalog.js" strategy="beforeInteractive" />

      <Script
        id="wsa-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            wsa.inflow("www.lkcustoms.co.kr");
            wsa_do(wsa);
          `,
        }}
      />
    </div>
  );
}
