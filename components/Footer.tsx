import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-10 bg-slate-800 text-white/60 text-center mx-auto">
      <Link href={"/"} className="flex justify-center font-bold pb-6 opacity-100">
        <Image src={"/logo_long.png"} alt="lbc로고" width={320} height={40} className="hidden md:block" />
        <Image src={"/logo_long.png"} alt="lbc로고" width={80} height={40} className="md:hidden block" />
      </Link>
      <div className="flex gap-4 justify-center">
        <p className="text-sm">대표이사: 김영순</p>
        <p className="text-sm">사업자등록번호: 312-86-64385</p>
        <p className="text-sm">충청남도 아산시 음봉면 월산로 162</p>
      </div>
      <div className="flex gap-4 justify-center">
        <p className="text-sm">전화: 1558-3705</p>
        <p className="text-sm">FAX: 041-592-9945</p>

        <p className="text-sm">이메일: lbclbc3705@naver.com</p>
      </div>
      <p className="mt-4 text-sm">© 2026 (주)엘비씨 INDUSTRY. All rights reserved.</p>
      <p className="text-sm">DESIGN & Development BY GLOBAL MIG</p>
    </div>
  );
}
