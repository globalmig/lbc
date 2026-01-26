import React from "react";
import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    title: "천연 미네랄 신소재 개발",
    imgSrc: "/img/bg_work_search.jpg",
    description: "수용성 운모(MICA) 규산 기반의 친환경 복합 미네랄 신소재를 연구·개발합니다.",
    link: "/work?type=export",
  },
  {
    title: "환경 개선·토양 개량 솔루션",
    imgSrc: "/img/Farm.png",
    description: "토양 개선, 잔류 농약 및 중금속 저감을 위한 친환경 농업 솔루션을 제공합니다.",
    link: "/work?type=import",
  },
  {
    title: "수질 정화·환경 복원",
    imgSrc: "/img/water.png",
    description: "오염된 수질과 환경을 회복하는 천연 미네랄 기반 정화 기술을 개발합니다.",
    link: "/work?type=fta",
  },
  {
    title: "농·축·수산 생육 개선",
    imgSrc: "/img/grow.png",
    description: "작물·가축·어류의 성장 촉진과 품질 향상을 위한 기능성 미네랄 응용 제품입니다.",
    link: "/work?type=drawback",
  },
  {
    title: "친환경 바이오 응용 기술",
    imgSrc: "/img/food.png",
    description: "식물·생물 생육 개선 및 지속 가능한 바이오 환경을 위한 응용 기술을 연구합니다.",
    link: "/work?type=inspection",
  },
];

export default function Work() {
  return (
    <div className="px-4  max-w-[1440px] mx-auto  flex flex-col justify-center">
      <div className="border-l-8 border-green-700 mb-10 md:mb-20 pl-8 opacity-70">
        <h2 className="mb-4">저희 엘비씨의 </h2>
        <h2 className="">사업영역을 소개합니다.</h2>
      </div>

      <div className="flex md:flex-row flex-col gap-2 w-full">
        {workItems.map((item, index) => (
          <Link key={index} href={item.link} className="grow group border border-gray-300 rounded-lg flex-1 hover:flex-[3] duration-700 ease-in-out back relative overflow-hidden h-96 min-h-40">
            <Image src={item.imgSrc} alt={item.title} fill className="h-full rounded-md absolute object-cover " />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="p-4 relative flex flex-col justify-end h-full text-white mt-32 md:m-0">
              <h4>{item.title}</h4>
              <p className="opacity-0 hidden group-hover:opacity-100 group-hover:block transition ">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
