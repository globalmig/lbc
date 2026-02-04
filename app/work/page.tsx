"use client";

import Contact from "@/components/Contact";
import Figure01 from "@/components/Figure01";
import Hero from "@/components/Hero";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

type WorkType = "rnd" | "environment" | "agri" | "water" | "esg";

export default function WorkPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [isType, setType] = useState<WorkType>("rnd");

  // ✅ URL ?type= 값으로 초기 타입 세팅 (클라이언트에서만)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type") as WorkType | null;
    const allowed: WorkType[] = ["rnd", "environment", "water", "agri", "esg"];

    if (typeParam && allowed.includes(typeParam)) {
      setType(typeParam);
    }
  }, []);

  // ✅ 상태 + URL 둘 다 변경
  const SelectType = useCallback(
    (value: WorkType) => {
      setType(value);

      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        params.set("type", value);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [router, pathname],
  );

  const btnBase = "border-[1.2px] border-gray-300 shadow-md rounded-xl py-6 transition break-keep";
  const btnClass = (active: boolean) => (active ? `${btnBase} bg-black text-white hover:bg-black hover:text-white` : `${btnBase} bg-white hover:bg-blue-50 hover:text-black`);

  return (
    <>
      <section>
        <Hero title={"업무분야"} subtitle={"LBC의 주요 업무분야를 소개합니다."} img={"/img/bg_children.png"} priority />
      </section>

      {/* ✅ 탭 버튼 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-[1440px] mx-auto mt-10 md:mt-20 px-4">
        <button className={btnClass(isType === "rnd")} aria-pressed={isType === "rnd"} onClick={() => SelectType("rnd")}>
          친환경 광물소재 R&D
        </button>
        <button className={btnClass(isType === "environment")} aria-pressed={isType === "environment"} onClick={() => SelectType("environment")}>
          환경 개선 솔루션
        </button>
        <button className={btnClass(isType === "water")} aria-pressed={isType === "water"} onClick={() => SelectType("water")}>
          수질 정화·환경 복원
        </button>
        <button className={btnClass(isType === "agri")} aria-pressed={isType === "agri"} onClick={() => SelectType("agri")}>
          농·축·수산 기능성 소재
        </button>
        {/* <button className={btnClass(isType === "food")} aria-pressed={isType === "food"} onClick={() => SelectType("food")}>
          식품 안전·품질 개선
        </button> */}
        <button className={btnClass(isType === "esg")} aria-pressed={isType === "esg"} onClick={() => SelectType("esg")}>
          ESG·친환경 미래사업
        </button>
      </div>

      {/* 1) 친환경 광물소재 R&D */}
      {isType === "rnd" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="친환경 광물소재 R&D"
            description={`수용성 운모(MICA) 기반의 친환경 광물소재를 연구·개발합니다.
불순물 제거 및 기능 극대화를 위한 특수 공정과 원천기술로, 기존 광물소재의 한계를 넘어서는 솔루션을 제공합니다.`}
            imgSrc="/img/bg_work_search.jpg" // 원하시는 이미지로 교체하세요
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>핵심 역량</h2>
              <p className="text-black/50">Core Capabilities</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>수용성 운모(MICA) 기반 천연 미네랄 원천기술 연구</li>
              <li>고온·장시간 공정 등 특수 제조 방식으로 불순물 저감</li>
              <li>차별화된 기능성 소재 개발 및 산업 적용 확장</li>
            </ul>
          </div>
        </section>
      )}

      {/* 2) 환경 개선 솔루션 */}
      {isType === "environment" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="환경 개선 솔루션"
            description={`천연 미네랄 기반으로 토양 개량 및 환경 개선을 지원합니다.
잔류농약·중금속·유해오염물질 등 다양한 환경 이슈에 대응 가능한 복원 솔루션을 제공합니다.`}
            imgSrc="/img/Farm.png" // 원하시는 이미지로 교체
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제공 서비스</h2>
              <p className="text-black/50">Services</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>토양 개량 및 토양 건강성 개선 솔루션 제공</li>
              <li>잔류농약·중금속·유해오염물질 저감/복원 적용 연구</li>
              <li>현장 적용을 고려한 맞춤형 소재·공정 컨설팅</li>
            </ul>
          </div>
        </section>
      )}

      {/* 수질*/}
      {isType === "water" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="수질 정화·환경 복원"
            description={`오염된 수질과 환경을 회복하는 천연 미네랄 기반 정화 기술을 개발합니다.`}
            imgSrc="/img/water.png" // 원하시는 이미지로 교체
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>적용 분야</h2>
              <p className="text-black/50">Applications</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>하천·호소(저수지/호수) 수질 개선</li>
              <li>농업용수/관개수 정화 및 관리</li>
              <li>양식장(수산) 수질 안정화(탁도·유기물 관리 관점)</li>
              <li>사업장 배출수 전처리(현장 조건 맞춤 적용)</li>
              <li>탁도 및 부유물 저감, 침전/여과 효율 개선 보조</li>
              <li>유기물/악취 원인 저감 및 수질 안정화 지원</li>
            </ul>
          </div>
        </section>
      )}

      {/* 3) 농·축·수산 기능성 소재 */}
      {isType === "agri" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="농·축·수산 기능성 소재"
            description={`작물·가축·어류의 영양 공급과 성장 촉진을 위한 기능성 미네랄 소재를 제공합니다.
병충해·세균 침입 예방 등 현장 문제를 줄이도록 돕습니다.`}
            imgSrc="/img/grow.png" // 원하시는 이미지로 교체
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>적용 분야</h2>
              <p className="text-black/50">Applications</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>작물 흡수율 향상 및 생육 촉진</li>
              <li>축산·수산 영양 공급 및 성장 지원</li>
              <li>병충해/세균성 리스크 예방 관점의 솔루션 설계</li>
            </ul>
          </div>
        </section>
      )}

      {/* 4) 식품 안전·품질 개선 */}
      {/* {isType === "food" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="식품 안전·품질 개선"
            description={`자연 친화적 방식으로 품질을 개선하고 저장·보관 연장에 기여하는 솔루션을 연구합니다.
원료·공정·현장 조건을 고려해 적용 가능성을 높입니다.`}
            imgSrc="/img/bg_food.jpg" // 원하시는 이미지로 교체
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제공 서비스</h2>
              <p className="text-black/50">Services</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>신선도 유지 및 저장성 향상 관련 솔루션 연구/적용</li>
              <li>현장 문제(맛·품질 저하 등) 개선을 위한 소재 적용 컨설팅</li>
              <li>지속 가능한 방식의 품질 관리 접근 지원</li>
            </ul>
          </div>
        </section>
      )} */}

      {/* 5) ESG·친환경 미래사업 */}
      {isType === "esg" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="ESG·친환경 미래사업"
            description={`친환경 소재·기술을 기반으로 지속가능한 미래를 만듭니다.
환경 규제 및 글로벌 친환경 트렌드에 대응할 수 있는 사업 확장과 협업을 추진합니다.`}
            imgSrc="/img/food.png" // 원하시는 이미지로 교체
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>추진 방향</h2>
              <p className="text-black/50">Direction</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>친환경 원천기술 기반의 지속가능 솔루션 고도화</li>
              <li>산업별 적용처 확대 및 파트너십/협업 모델 구축</li>
              <li>ESG 관점의 기술·사업 전략 컨설팅 지원</li>
            </ul>
          </div>
        </section>
      )}

      <section>
        <Contact />
      </section>
    </>
  );
}
