import React from "react";
import Image from "next/image";

const workItems = [
  {
    title: "수출입 통관 대행",
    imgSrc: "/img/bg_work_search.jpg",
    description: "저희 LK 관세사무소는 수출입 통관 절차를 신속하고 정확하게 처리하여 고객님의 물류 흐름을 원활하게 지원합니다.",
  },
  {
    title: "수출입 통관 대행",
    imgSrc: "/img/bg_work_solutions.jpg",
    description: "저희 LK 관세사무소는 수출입 통관 절차를 신속하고 정확하게 처리하여 고객님의 물류 흐름을 원활하게 지원합니다.",
  },
  {
    title: "수출입 통관 대행",
    imgSrc: "/img/bg_work_solutions02.jpg",
    description: "저희 LK 관세사무소는 수출입 통관 절차를 신속하고 정확하게 처리하여 고객님의 물류 흐름을 원활하게 지원합니다.",
  },
  {
    title: "수출입 통관 대행",
    imgSrc: "/img/bg_work_solutions03.jpg",
    description: "저희 LK 관세사무소는 수출입 통관 절차를 신속하고 정확하게 처리하여 고객님의 물류 흐름을 원활하게 지원합니다.",
  },
];

export default function Work() {
  return (
    <div className="px-4  max-w-[1440px] mx-auto  flex flex-col justify-center">
      <h2 className="mb-10">
        저희 LK 관세사무소의 <br /> 사업영역을 소개합니다.
      </h2>
      <div className="flex md:flex-row flex-col gap-2 w-full">
        {workItems.map((item, index) => (
          <div key={index} className="grow border border-gray-300 rounded-lg flex-1 hover:flex-[3] duration-700 ease-in-out back relative overflow-hidden h-96">
            <Image src={item.imgSrc} alt={item.title} fill className="h-full rounded-md absolute object-cover" />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-opacity/0 to-opacity/0"></div>
            <div className="p-4 relative flex flex-col justify-end h-full text-white">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
