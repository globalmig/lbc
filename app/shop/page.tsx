"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { products } from "./products";

type ShopTab = "all" | "water" | "agri" | "other";

const WATER_TREATMENT_CATEGORIES = new Set(["수처리제"]);
const AGRI_SUPPLY_CATEGORIES = new Set(["농자재"]);

function getCategoryBucket(category: string) {
  if (AGRI_SUPPLY_CATEGORIES.has(category)) return "농자재";
  return WATER_TREATMENT_CATEGORIES.has(category) ? "수처리제" : "기타 제품";
}

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<ShopTab>("all");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type") as ShopTab | null;
    const allowed: ShopTab[] = ["all", "water", "agri", "other"];

    if (typeParam && allowed.includes(typeParam)) {
      setActiveTab(typeParam);
    }
  }, []);

  const selectTab = useCallback(
    (value: ShopTab) => {
      setActiveTab(value);

      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        params.set("type", value);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [router, pathname],
  );

  const groupedProducts = useMemo(
    () =>
      products.reduce(
        (acc, product) => {
          const bucket = getCategoryBucket(product.category);
          acc[bucket].push(product);
          return acc;
        },
        { 수처리제: [] as typeof products, 농자재: [] as typeof products, "기타 제품": [] as typeof products },
      ),
    [],
  );

  const visibleGroups = useMemo(() => {
    if (activeTab === "water") return ["수처리제"] as const;
    if (activeTab === "agri") return ["농자재"] as const;
    if (activeTab === "other") return ["기타 제품"] as const;
    return ["농자재", "수처리제", "기타 제품"] as const;
  }, [activeTab]);

  const btnBase = "border-[1.2px] border-gray-300 shadow-md rounded-xl py-4 md:py-5 transition break-keep";
  const btnClass = (active: boolean) => (active ? `${btnBase} bg-black text-white hover:bg-black hover:text-white` : `${btnBase} bg-white hover:bg-blue-50 hover:text-black`);

  return (
    <div className="bg-[#ffffff]">
      <section className="relative min-h-[360px] md:min-h-[700px] text-white flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/bg_main.png" alt="Shop Hero Background" fill sizes="100vw" className="object-cover object-bottom" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-16">
          {/* <p className="text-sm tracking-[0.3em] text-white/70">LK SHOP</p> */}
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            자연에서 온 미네랄 제품
            <br className="hidden md:block" />
            일상에 건강을 더합니다
          </h1>
          <p className="mt-4 max-w-xl text-white/80 leading-relaxed">DB 연동 없이도 충분히 매력적인 쇼핑 경험을 제공할 수 있도록 감성을 고려한 제품 리스트를 구성했습니다.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["영양", "유기농", "바이오", "프리미엄", "건강"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm text-white/90">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          {/* <div className="border-l-8 border-green-700 pl-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">베스트 컬렉션</h2>
            <p className="text-black/60 mt-2">제품을 선택하면 상세 페이지로 이동합니다.</p>
          </div> */}
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-[1440px] mb-10 text-lg">
          <button className={btnClass(activeTab === "all")} aria-pressed={activeTab === "all"} onClick={() => selectTab("all")}>
            전체
          </button>
          <button className={btnClass(activeTab === "agri")} aria-pressed={activeTab === "agri"} onClick={() => selectTab("agri")}>
            농자재
          </button>
          <button className={btnClass(activeTab === "water")} aria-pressed={activeTab === "water"} onClick={() => selectTab("water")}>
            수처리제
          </button>

          <button className={btnClass(activeTab === "other")} aria-pressed={activeTab === "other"} onClick={() => selectTab("other")}>
            기타 제품
          </button>
        </div>

        {visibleGroups
          .filter((group) => groupedProducts[group].length > 0)
          .map((group) => (
            <div key={group} className="mb-12">
              {activeTab === "all" && (
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-8 w-1.5 rounded-full bg-green-700" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-semibold text-black">{group}</h3>
                  <span className="text-sm text-black/50">{groupedProducts[group].length}개</span>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupedProducts[group].map((product) => (
                  <Link
                    key={product.slug}
                    href={`/shop/${product.slug}`}
                    className="group border-2 border-black/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={product.listImage} alt={product.name} width={1000} height={1000} className="object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute left-4 bottom-4 text-white">
                        {/* <p className="text-xs tracking-widest text-white/70">{product.category}</p>
                        <h4 className="text-lg md:text-xl font-semibold">{product.name}</h4> */}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-black/60 whitespace-pre-line">{product.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </section>

      {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "빠른 상담", desc: "제품 용도에 맞춘 맞춤형 안내를 제공합니다." },
            { title: "안전한 배합", desc: "성분의 밸런스를 고려한 레시피로 제작합니다." },
            { title: "국내 배송", desc: "주문 후 2~3일 내 빠르게 배송됩니다." },
          ].map((item) => (
            <div key={item.title} className="border-2 rounded-2xl p-6 md:p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-black/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
