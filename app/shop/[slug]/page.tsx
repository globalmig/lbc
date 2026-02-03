import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { products } from "../products";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function page({ params }: PageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#f6f4ef]">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-10 md:pt-16">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black">
          상품 리스트로 돌아가기
        </Link>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-sm tracking-[0.3em] text-black/50">{product.category}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">{product.name}</h1>
          </div>

          <div className="w-full border-2 rounded-2xl border-black/10 bg-white shadow-sm">
            <Image src={product.detailImage} alt={product.name} width={1000} height={1000} className="w-full rounded-2xl" priority />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border-2 border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">제품 특징</h2>
              <ul className="mt-4 space-y-2 text-sm text-black/60">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/40" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">제품 사양</h2>
              <dl className="mt-4 grid gap-3 text-sm text-black/60">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-start justify-between gap-4 border-b border-black/5 pb-2">
                    <dt className="font-medium text-black/70">{spec.label}</dt>
                    <dd className="text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-black/10 bg-white p-6 shadow-sm">
            {/* <h2 className="text-lg font-semibold">상세 이미지</h2> */}
            <div className="mt-4  gap-4">
              {product.detailImages.map((image, index) => (
                <div key={`${product.slug}-detail-${index}`} className="">
                  <Image src={image} alt={`${product.name} 상세 이미지 ${index + 1}`} width={1000} height={1000} className="w-full rounded-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
