import Contact from "@/components/Contact";
import Figure01 from "@/components/Figure01";
import Figure02 from "@/components/Figure02";
import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-l-4 md:border-l-8 border-emerald-500/70 my-8 sm:my-10 md:my-14 lg:my-16 pl-4 sm:pl-6 md:pl-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-black/50 mt-1.5">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/60 px-3 py-1 text-sm text-emerald-700/80">{children}</span>;
}

export default function company() {
  const history = [
    {
      year: "2014",
      items: [
        "주식회사 엘비씨 설립",
        "한국수자원공사 주최 녹조제거 기술 현장 시연",
        "식품 첨가물 허가 획득 (천안 제504호)",
        "단미사료 제조업 등록 (충남 제2014-0023호)",
        "수처리제 제조업 등록 (천안 제2014-1호)",
        "비료 생산업 등록 (충남 천안 86-가-10404호)",
        "적조 방제 조성물 특허 출원 (출원번호 10-2014-0165637)",
        "표고버섯 추출방법 및 그 추출물 특허 등록 (제10-1462310호)",
      ],
    },
    {
      year: "2015",
      items: ["수자원공사 황토 대체 물질 승인 (수처리제 ‘씨크린’)"],
    },
    {
      year: "2016",
      items: [
        "ISO 9001:2008 인증 획득",
        "제조라인 확장 이전 (천안 2공단)",
        "원광대학교 기술 이전 (균사추출물을 이용한 동물사료 첨가제)",
        "특허 등록 (제10-1072053호)",
        "농촌진흥청 생활자재목록 공시 등록",
        "비료 일괄상 유기농자재 공시 등록 공시번호: 제 공시-1-3-262호",
        "비료 일괄상 유기농자재 공시 등록 공시번호: 제 공시-1-2-132호",
      ],
    },
  ];

  const whatIs = [
    "천연광물(운모/규산) 기반의 주요 성분을 용출·정제하여 수용화한 복합 규산염 소재입니다.",
    "정제 및 공정 표준화를 통해 불순물 저감과 품질 일관성을 확보합니다.",
    "토양·수질·농축수산·생활/바이오 등 다양한 분야로의 응용 확장 가능성을 갖습니다.",
  ];

  const processSteps = [
    { step: "01", title: "원료 준비", desc: "원광 선별 및 원료 관리" },
    { step: "02", title: "정제·추출", desc: "유효 성분 추출 및 정제" },
    { step: "03", title: "혼합·반응", desc: "성분 균질화 및 반응 공정" },
    { step: "04", title: "고온 처리", desc: "불순물 저감 및 안정화" },
    { step: "05", title: "냉각·결정", desc: "구조 안정화 및 결정화" },
    { step: "06", title: "미세화·분급", desc: "입도/분산 특성 최적화" },
    { step: "07", title: "품질 검증", desc: "규격/성능 시험 후 출하" },
  ];

  const features = [
    { title: "높은 적용 유연성", desc: "현장 조건에 맞춰 투입·여과·혼합 등 다양한 적용 방식 설계가 가능합니다." },
    { title: "분산/접촉 효율", desc: "미세 분산 특성 기반으로 접촉 효율을 높여 응용 성능을 강화합니다." },
    { title: "품질 안정화", desc: "공정 관리와 정제 기반으로 성분·물성의 일관성을 확보합니다." },
    { title: "친환경 방향성", desc: "천연 미네랄 기반의 지속 가능한 솔루션을 지향합니다." },
  ];

  const applications = [
    { title: "토양개량", tag: "Soil", desc: "토양 구조 개선 및 재배 기반 안정화, 생육 환경 개선을 지원합니다." },
    { title: "수질개선", tag: "Water", desc: "탁도/오염원 저감 관점의 수질 개선 적용 모델을 연구·제안합니다." },
    { title: "친환경농업", tag: "Agri", desc: "흡수 효율과 재배 안정성을 고려한 현장 적용 솔루션을 제공합니다." },
    { title: "수산/축산", tag: "Aqua/Livestock", desc: "양식·사양 환경의 안정화와 성장 밸런스 지원 응용을 수행합니다." },
    { title: "생활위생", tag: "Living", desc: "생활 환경 관리 목적의 기능성 소재 응용 가능성을 확장합니다." },
    { title: "건강/바이오", tag: "Bio", desc: "원료/소재 관점에서 기능성 제품 응용을 위한 물성 최적화를 연구합니다." },
    { title: "건축자재", tag: "Material", desc: "기능성 소재 응용(충진/보강 등) 가능성을 검토합니다." },
    { title: "기능성 화장품", tag: "Cosmetic", desc: "원료 안정성·분산 특성 기반의 적용 가능성을 연구합니다." },
  ];

  return (
    <div className=" bg-white">
      <section>
        <Hero title={"회사소개"} subtitle={"World Best Company! 엘비씨가 친환경 미래를 만들어 갑니다."} img={"/img/company.jpg"} priority />
      </section>

      <section className="">
        <Figure02
          direction={"left"}
          title={"대표 관세사 이은경"}
          description={`저희 회사는 지난 2014년 설립 이래로 대한민국의 깨끗한 환경과 등·식물의 올바른 성장을 위하여 꾸준한 연구와 발전을 거듭해 왔습니다. 최고의 회사를 지향하고 있는 저희 회사는 지난 2014년 설립된 이후, 고객과 사회의 이익을 위해 끊임없이 연구하고 노력, 발전해 왔습니다.

고객에게 지속적인 양질의 서비스를 제공하는 것을 최고의 목표로 하는 저희 회사는, 지속적인 환경오염에 대한 대처 방안, 가축의 건강한 성장, 작물 및 식물의 올바른 성장을 목표로 하여 더욱 풍요롭고 쾌적한 환경으로 창출하는 발전시키고자 합니다.`}
          imgSrc={"/img/ceo.png"}
        />
      </section>

      <section className="py-24">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start max-w-[1440px] mx-auto px-4">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug break-keep">
              수용성 복합 규산염 기술
              <br className="hidden md:block" />
              원천 기술과 적용 분야
            </h2>
            <p className="text-black/60 mt-4 sm:mt-5 leading-relaxed md:leading-8 break-keep">
              천연 미네랄 기반 원료 정제와 공정 표준화를 통해 품질 일관성을 확보하고, 토양·수질·농축수산·생활/바이오 등 다양한 산업 영역으로 확장 가능한 응용 기술을 소개합니다.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
              <Pill>원천기술</Pill>
              <Pill>정제 공정</Pill>
              <Pill>품질 표준화</Pill>
              <Pill>응용 확장</Pill>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-emerald-100/60 rounded-2xl p-6 md:p-8 bg-emerald-50/40 shadow-sm">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/img/vision.png" alt="Technology visual" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" />
              </div>
              <p className="text-sm text-black/50 mt-4 break-keep">* 소재 이미지/공정 도식 이미지로 교체하면 전문성이 더 올라갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[640px] sm:min-h-[720px] md:min-h-[800px] text-white py-12 sm:py-14 md:py-20 lg:py-24 flex items-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/bg_ceo.jpg" alt="CEO Vision Background" fill sizes="100vw" className="object-cover object-top blur-sm" />
          <div className="absolute inset-0 bg-[#1b2030]/80 md:bg-[#1b2030]/70 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          {/* 타이틀 */}
          <h2 className="leading-snug text-3xl md:text-4xl border-l-4 border-white/70 px-4 mb-10 sm:mb-12 md:mb-20">
            <span className="block text-sm tracking-widest text-white/70 mb-2">VISION</span>
            고객의 건강과 미래를 생각하는
            <br className="hidden md:block" />
            가치있는 기업으로 성장하겠습니다.
          </h2>

          {/* 비전 메시지 */}
          <div className="break-keep space-y-8 md:space-y-10 text-white/90">
            <p>
              秘(신비로울 비) 淸(푸를 청) 푸른 건강과 젊음을 간직하는 신비로운 비법입니다. <br />
              ㈜엘비씨는 자연을 지키는 건강브랜드의 열정을 담고 있습니다. 지구에 생존하는 모든 생물들의 건강과 점점 더 오염돼 가는 환경의 심각성을 위원으로 생각하며 항상 최고의 품질과 최고의
              기술력으로 우리가 숨쉬며 살고있는 이 땅의 건강한 미래를 위해 앞으로 10년, 100년을 끊임없이 노력하고 진화해 나갈 것을 약속드립니다.
              <br /> 저희 ㈜엘비씨는 수용성 운모(MICA)구산을 10여년의 연구 끝에 개발한 획기적인 광물질로서 관련업계에서는 하나같이 상식을 깰 놀라운 발명이라고 극찬할 정도로 기존의 마인드를
              뒤바꾸어놓은 일종의 무해한 친환경 복합성 미네랄입니다. <br />
              저희 ㈜엘비씨는 이처럼 각고의 노력 끝에 국내에서는 세계최초로 발명해 낸 수용성구산 응용제품을 판매 하고 있으며, 기존의 구산제품과는 월등한 차이점을 가지고있습니다. 또한 물에 녹는 수용성
              운모(MICA)구산을 활용한 방법이 새로운 친환경 농법으로 F.T.A 위기를 극복 할 수 있는 대안으로 부각되고 있습니다. <br />
              <br />
              주식회사 엘비씨는 미래를 이용한 환경과 동식물을 복원개선 하는 제품을 출시하였습니다. <br />
              기존의 구산제품들은 물에 녹지 않는 불용성, 가용성의 단점을 가지고 있었습니다. 반면 수용성 운모(MICA)구산은 1,650℃ 이상의 용광로에서 8시간 이상 특수한 방법으로 가열하여 불순물을 제거하고
              농작물에 유익한 미량원소는 그대로 살려 물에 잘 녹게끔 제조된 천연 광물질로서 기존의 구산제품과는 차별화 하였습니다. <br />
              <br />
              엘비씨의 제품은 천연 광물질 조성물로 토양 개량 효과가 뛰어나고 25억원의 1미터 (0.4L/h)으로 초속분자이므로 작물의 흡수율도 높아 토양에 뿌리거나 엽면시비하면 바로 그 효과를 볼 수 있습니다.
              운모(MICA) 원광석에서 추출한 천연 미네랄을 이용하여 토양의 잔류 농약, 잔류 중금속, PCB 등 각종 공해물질(난분해성잔류유기오염 물질)을 회복 할 수 있는 방법을 연구하고 또한 식물과 어류,
              가축 등에 영양공급과 성장 촉진, 병충 및 세균의 침입을 사전 예방하여 각종 작물의 균형잡힌 순수한 맛을 회복시켜 주며 증수 및 보관의 안정성을 향상 시켜주는 제품을 개발하여 시판 중입니다.
              <br />
              <br />
              고객 여러분의 많은 이용을 바라며, 앞으로도 고객 여러분의 목소리에 귀기울여 소중히 여기고 고객님들과 함께 성장해 나가는 ㈜엘비씨가 될 것을 약속드립니다. 우리가 살고 있는 이 땅의 모든
              환경이 쾌적해 지는 날까지 열심히 노력하겠습니다.
            </p>
          </div>

          {/* 서명 */}
          <div className="mt-12 md:mt-20 text-right">
            <p className="text-lg text-white/70 mb-1">주식회사 엘비씨 연구소장</p>
            <p className="text-xl md:text-xl font-semibold tracking-wide">서 정 인</p>
          </div>
        </div>
      </section>

      {/* ✅ 여기부터 추가된 “기술/공정/적용분야” 섹션 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-20 bg-gradient-to-b from-emerald-50/40 via-white to-white rounded-3xl">
        <SectionHeader title="주요 연혁" subtitle="Milestones" />
        <div className="relative mt-2 md:mt-4 border-l border-black/10 pl-6 md:pl-10 space-y-10">
          {history.map((h) => (
            <div key={h.year} className="relative">
              <div className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-emerald-500/70 bg-white shadow-sm" />
              <div className="flex flex-wrap items-center gap-3 ml-4">
                <p className="text-2xl md:text-3xl font-semibold tracking-tight">{h.year}</p>
                <span className="h-px w-8 md:w-12 bg-black/15" />
                <Pill>History</Pill>
              </div>
              <div className="mt-4 rounded-2xl border border-emerald-100/60 bg-emerald-50/40 p-5 sm:p-6 md:p-8 shadow-sm">
                <ul className="space-y-2 text-black/80 leading-relaxed md:leading-8 break-keep">
                  {h.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/70 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <SectionHeader title="수용성 복합 규산염이란?" subtitle="What is it" />
        <div className="border-2 border-emerald-100/60 rounded-2xl p-6 sm:p-8 md:p-10 bg-emerald-50/40 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-6">
            <Pill>천연 미네랄</Pill>
            <Pill>수용화</Pill>
            <Pill>복합 규산염</Pill>
            <Pill>다분야 응용</Pill>
          </div>
          <ul className="list-disc pl-5 leading-relaxed md:leading-8 text-black/80 flex flex-col gap-3 break-keep">
            {whatIs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <SectionHeader title="수용성 규산염 제조 공정" subtitle="Process" />
        <div className="border-2 border-emerald-100/60 rounded-2xl p-6 sm:p-8 md:p-10 bg-emerald-50/40 shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="border border-emerald-100/60 rounded-2xl p-5 sm:p-6 bg-emerald-50/40">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-black/50">STEP {p.step}</p>
                  <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                </div>
                <p className="mt-3 text-xl font-semibold break-keep">{p.title}</p>
                <p className="mt-2 text-black/60 leading-relaxed break-keep">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-black/50 break-keep">* 실제 공정 단계 명칭은 사내 표준에 맞춰 조정 가능합니다.</div>
        </div>

        <SectionHeader title="수용성 복합 규산염의 특징" subtitle="Key Features" />
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="border-2 border-emerald-100/60 rounded-2xl p-6 sm:p-8 md:p-10 bg-emerald-50/40 shadow-sm">
              <p className="text-xl md:text-2xl font-semibold break-keep">{f.title}</p>
              <p className="mt-3 text-black/60 leading-relaxed md:leading-8 break-keep">{f.desc}</p>
            </div>
          ))}
        </div>

        <SectionHeader title="적용 분야" subtitle="Applications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {applications.map((a) => (
            <div key={a.title} className="border-2 border-emerald-100/60 rounded-2xl p-6 sm:p-7 md:p-8 bg-emerald-50/40 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg md:text-xl font-semibold break-keep">{a.title}</p>
                <Pill>{a.tag}</Pill>
              </div>
              <p className="mt-3 text-black/60 leading-relaxed break-keep">{a.desc}</p>
            </div>
          ))}
        </div> */}
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}
