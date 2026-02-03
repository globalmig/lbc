import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notices } from "../notices";

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return notices.map((notice) => ({ id: notice.id }));
}

export default function Page({ params }: PageProps) {
  const notice = notices.find((item) => item.id === params.id);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <section>
        <Hero title={"공지사항"} subtitle={"공지사항 상세 내용입니다."} img={"/img/bg_work_solutions03.jpg"} priority />
      </section>

      <section className="mx-auto w-full max-w-[1000px] px-4 py-10 mb-24">
        <div className="border border-slate-300 rounded-xl bg-white p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold break-keep">{notice.title}</h2>
          <p className="mt-3 text-sm text-slate-500">
            작성일: {new Date(notice.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}
          </p>

          {notice.content && (
            <div className="mt-8 border border-slate-200 rounded-lg bg-slate-50 p-5">
              <p className="whitespace-pre-line break-keep leading-7 text-slate-700">{notice.content}</p>
            </div>
          )}

          {notice.images.length > 0 && (
            <div className="mt-8 grid gap-5">
              {notice.images.map((image, index) => (
                <div key={`${notice.id}-${index}`} className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <Image src={image} alt={`${notice.title} 이미지 ${index + 1}`} width={1200} height={900} className="h-auto w-full object-contain" priority={index === 0} />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 flex justify-end">
            <Link href="/board" className="py-2.5 px-5 border border-slate-400 rounded hover:bg-slate-100 transition-colors">
              목록으로
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
