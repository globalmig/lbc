import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-10 bg-slate-800 text-white/60 text-center mx-auto">
      <Link href={"/"} className="flex justify-center font-bold pb-6 opacity-40">
        <Image src={"/logo_white.png"} alt="LK관세사무소" width={140} height={40} className="hidden md:block" />
        <Image src={"/logo_white.png"} alt="LK관세사무소" width={80} height={40} className="md:hidden block" />
      </Link>
      <div className="flex gap-4 justify-center">
        <p className="text-sm">대표이사: 김환웅</p>
        <p className="text-sm">사업자등록번호: 312-86-64385</p>
        <p className="text-sm">천안본점: 충남 천안시 동남구 다가4길 4-11, 202</p>
        <p className="text-sm">공장: 충남 천안시 서북구 2공단 2로 112, 1층</p>
      </div>
      <div className="flex gap-4 justify-center">
        <p className="text-sm">전화: 1558-3705 / 041-592-9944</p>
        <p className="text-sm">FAX: 041-592-9945</p>

        <p className="text-sm">이메일: bc3705@naver.com</p>
      </div>
      <p className="mt-4 text-sm">© 2026 (주)엘비씨 INDUSTRY. All rights reserved.</p>
      <p className="text-sm">DESIGN & Development BY GLOBAL MIG</p>
    </div>
  );
}
