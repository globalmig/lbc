"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (type: string) => {
    setOpen(open === type ? null : type);
  };

  return (
    <div className="relative min-h-[500px] py-8 w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start" style={{ backgroundImage: 'url("/img/bg_contact.jpg")' }}>
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-sky-950/80"></div>

      <div className="relative px-4 max-w-[1440px] w-full mx-auto text-white">
        <h2 className="text-sky-300 font-semibold ">Contact Us</h2>
        {/* <h2 className="mt-4 text-3xl md:text-4xl font-bold">1:1 상담 문의</h2> */}

        <div className="mt-6 space-y-3 text-gray-100 leading-relaxed">
          <p>
            한 방울의 물도 소중히 여기는 친환경 바이오 기업 ㈜ 엘비씨 입니다.
            <br />
            깨끗하고 안전한 세상을 만들어 우리 아이들이 안심하고 자랄 수 있도록 노력하겠습니다.
            <br /> 감사합니다.
            <br /> <br />
            주식회사 엘비씨 직원 일동
          </p>
        </div>

        {/* 연락 수단 */}
        <div className="mt-4 flex flex-col gap-4">
          {/* 아이콘 리스트 */}
          <div className="flex gap-6">
            {/* <button onClick={() => toggle("kakao")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "kakao" ? "bg-white/30" : ""}`} aria-label="카카오톡">
              <MessageCircle className="w-6 h-6" />
            </button> */}

            <button onClick={() => toggle("email")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "email" ? "bg-white/30" : ""}`} aria-label="이메일">
              <Mail className="w-6 h-6" />
            </button>

            <button onClick={() => toggle("phone")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "phone" ? "bg-white/30" : ""}`} aria-label="전화번호">
              <Phone className="w-6 h-6" />
            </button>

            {/* <button onClick={() => toggle("phone2")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "phone" ? "bg-white/30" : ""}`} aria-label="전화번호">
              <Phone className="w-6 h-6" />
            </button> */}
          </div>

          {/* 정보 노출 영역 */}
          <div className="mb-4 min-h-[40px]">
            {/* {open === "kakao" && <p className="text-lg font-semibold animate-fade-slide text-sky-500">카톡 ID: lkcus</p>} */}
            {open === "email" && (
              <a href="bc3705@naver.com" className="text-lg font-semibold underline text-sky-500 hover:text-sky-300 animate-fade-slide">
                lbclbc3705@naver.com
              </a>
            )}
            {open === "phone" && (
              <a href="tel:1558-3705" className="text-lg font-semibold text-sky-500 hover:text-sky-300 animate-fade-slide">
                1558-3705
              </a>
            )}
            {/* {open === "phone2" && (
              <a href="tel:041-592-9944" className="text-lg font-semibold text-sky-500 hover:text-sky-300 animate-fade-slide">
                041-592-9944
              </a>
            )} */}
          </div>
        </div>

        {/* 문의 버튼 */}
        <Link href={"/board"} className="inline-block  rounded-md py-3 px-16 bg-white text-zinc-700  hover:bg-sky-300 hover:text-zinc-600 f text-center  font-bold shadow-sm">
          문의하기
        </Link>
      </div>
    </div>
  );
}
