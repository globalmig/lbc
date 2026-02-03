"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "/company", label: "회사소개" },
  { href: "/work", label: "업무분야" },
  { href: "/shop", label: "상품소개" },
  { href: "/board", label: "공지사항" },
  { href: "/library", label: "자료실" },
  { href: "https://elim0691.cafe24.com/index.html", label: "쇼핑몰", external: true },
];

export default function GNB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isShopDetail = Boolean(pathname && pathname.startsWith("/shop/"));

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const containerBgClass = isMenuOpen ? "bg-slate-900/95 backdrop-blur" : isShopDetail ? "bg-black/50 backdrop-blur-sm" : "bg-transparent";

  return (
    <header className={`fixed md:absolute top-0 left-0 z-50 w-full ${containerBgClass}`}>
      <div className="relative left-1/2 flex h-16 w-full max-w-[1440px] -translate-x-1/2 items-center justify-between px-4 md:h-20 md:px-8 white-text">
        <Link href="/" className="block">
          <Image src="/logo_white.png" alt="LK관세사무소" width={280} height={40} className="hidden md:block" priority />
          <Image src="/logo_white.png" alt="LK관세사무소" width={150} height={36} className="block md:hidden" priority />
        </Link>

        <nav aria-label="Global navigation">
          <ul className="hidden items-center md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="px-5 py-2">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="px-5 py-2">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-transform duration-200 ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}
            />
            <span className={`absolute block h-0.5 w-6 bg-white transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-transform duration-200 ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>

          <div
            className={`fixed inset-0 top-16 z-40 md:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            aria-hidden={!isMenuOpen}
          >
            <button
              type="button"
              className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              onClick={closeMenu}
              aria-label="Close mobile menu backdrop"
            />
            <ul
              id="mobile-menu"
              className={`absolute right-0 top-0 flex max-h-[calc(100vh-4rem)] w-full flex-col overflow-y-auto bg-slate-900 px-6 pb-8 pt-6 text-center text-lg transition-all duration-200 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            >
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`} className="border-b border-white/10 last:border-b-0">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="block py-4" onClick={closeMenu}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="block py-4" onClick={closeMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

