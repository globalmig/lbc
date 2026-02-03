import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <div>
      <section>
        <Hero title={"제휴사 소개"} subtitle={"World Best Company! 엘비씨가 친환경 미래를 만들어 갑니다."} img={"/img/bg_load.png"} priority />
      </section>
      <div className="w-full mx-auto max-w-[1440px] flex flex-col justify-center items-center gap-4 pt-20 pb-32">
        <div>
          <Image src={"/img/partners/1.jpg"} alt="제휴사01" width={690} height={510} />
        </div>
        <div>
          <Image src={"/img/partners/2.jpg"} alt="제휴사01" width={690} height={510} />
        </div>
        <div>
          <Image src={"/img/partners/3.jpg"} alt="제휴사01" width={690} height={510} />
        </div>
        <div>
          <Image src={"/img/partners/4.jpg"} alt="제휴사01" width={690} height={510} />
        </div>
        <div>
          <Image src={"/img/partners/5.jpg"} alt="제휴사01" width={690} height={510} />
        </div>
      </div>
    </div>
  );
}
