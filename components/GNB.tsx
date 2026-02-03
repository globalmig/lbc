"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function GNB() {
  const [isSelected, setIsSelected] = useState(false);
  const pathname = usePathname();
  const isShopDetail = Boolean(pathname && pathname.startsWith("/shop/"));
  const toggleMenu = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSelected) {
        setIsSelected(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSelected]);

  const containerBgClass = isSelected ? "bg-slate-800" : isShopDetail ? "bg-black/50 backdrop-blur-sm" : "bg-none";

  return (
    <div className={`absolute top-0 left-0 w-full z-50 ${containerBgClass}`}>
      <div className="relative left-1/2 flex h-16 w-full max-w-[1440px] -translate-x-1/2 items-center justify-between px-4 py-12 white-text">
        <Link href={"/"} className="text-3xl md:text-3xl font-bold mb-6 mt-2 md:mt-6">
          <Image src={"/logo_white.png"} alt="LK관세사무소" width={280} height={40} className="hidden md:block" />
          <Image src={"/logo_white.png"} alt="LK관세사무소" width={160} height={40} className="md:hidden block" />
        </Link>
        <ul className="md:flex hidden">
          <Link href={"/company"} className="px-6">
            회사소개
          </Link>
          <Link href={"/work"} className="px-6">
            업무분야
          </Link>
          <Link href={"/shop"} className="px-6">
            상품소개
          </Link>
          <Link href={"/board"} className="px-6">
            공지사항
          </Link>
          <Link href={"/library"} className="px-6">
            자료실
          </Link>
          <a href={"https://elim0691.cafe24.com/index.html"} target="_blank" className="px-6">
            쇼핑몰
          </a>
        </ul>
        <div className="flex md:hidden">
          <button className="flex flex-col gap-1 white-text" onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          {isSelected && (
            <>
              <div className="bg-black/50 w-full h-full"></div>
              <ul className="flex flex-col absolute top-16 right-0 bg-slate-800 white-text w-full text-center border-rounded-b-md">
                <Link href={"/company"} className="px-6">
                  회사소개
                </Link>
                <Link href={"/work"} className="px-6">
                  업무분야
                </Link>
                <Link href={"/shop"} className="px-6">
                  상품소개
                </Link>
                <Link href={"/board"} className="px-6">
                  공지사항
                </Link>
                <Link href={"/library"} className="px-6">
                  자료실
                </Link>
                <a href={"https://elim0691.cafe24.com/index.html"} target="_blank" className="px-6">
                  쇼핑몰
                </a>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
