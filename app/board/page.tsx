import Hero from "@/components/Hero";
import Link from "next/link";
import { notices } from "./notices";

export default function Board() {
  const sortedNotices = [...notices].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return (
    <>
      <section>
        {/* <Hero title={"공지사항"} subtitle={"공지사항을 확인하실 수 있습니다."} img={"/img/bg_work_solutions03.jpg"} priority /> */}
        <Hero title={"공지사항"} subtitle={"공지사항을 확인하실 수 있습니다."} img={"/img/company02.jpg"} priority />
      </section>

      <section className="mx-auto w-full max-w-[1000px] px-4 py-10">
        {sortedNotices.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600">등록된 공지사항이 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-4 mb-10">
            {sortedNotices.map((notice) => (
              <Link key={notice.id} href={`/board/${notice.id}`} className="block p-6 border border-slate-300 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-lg font-semibold text-slate-800 break-keep">{notice.title}</h3>
                  <span className="text-sm text-gray-500 shrink-0">
                    {new Date(notice.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                </div>
                <div className="text-sm text-blue-700">상세보기</div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
