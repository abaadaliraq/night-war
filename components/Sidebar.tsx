"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "المشروع", href: "#project" },
  { label: "القصة", href: "#story" },
  { label: "غيث", href: "#gaith" },
  { label: "الشخصيات", href: "#characters" },
  { label: "الموسيقى", href: "#music" },
  { label: "المواصفات", href: "#specs" },
  { label: "العرض المالي", href: "#production" },
  { label: "الختام", href: "#final" },
];

export default function Sidebar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topbarVisible, setTopbarVisible] = useState(true);

  useEffect(() => {
    setCanFullscreen(
      typeof document.documentElement.requestFullscreen === "function"
    );

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 70) {
        setTopbarVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setTopbarVisible(true);
      } else if (!menuOpen) {
        setTopbarVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const toggleFullscreen = async () => {
    if (!canFullscreen) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    <header
      dir="rtl"
      className={`fixed inset-x-0 top-0 z-50 px-5 pt-4 transition-all duration-500 sm:px-7 lg:px-10 ${
        topbarVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between">
        {/* Logo */}
<a
  href="#project"
  aria-label="مؤسسة الدر للثقافة والإعلام"
  className="relative block h-[48px] w-[48px] shrink-0"
>
  <Image
    src="/images/logo1.png"
    alt="شعار مؤسسة الدر"
    fill
    sizes="48px"
    className="object-contain"
    priority
  />
</a>

        {/* Desktop navigation */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-7 text-[13px] font-light text-[#f4eadc]/55 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-3 transition duration-300 hover:text-[#f4eadc]"
            >
              {item.label}

              <span className="absolute bottom-1 right-0 h-px w-0 bg-[#6a0101] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Project name + fullscreen */}
        <div className="flex items-center gap-3">
          <a
            href="#project"
            className="whitespace-nowrap text-[1.7rem] font-medium leading-none text-[#f4eadc] sm:text-[2rem]"
          >
            حرب الليل
          </a>

          {canFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={
                isFullscreen
                  ? "الخروج من ملء الشاشة"
                  : "عرض بملء الشاشة"
              }
              className="flex h-9 w-9 items-center justify-center rounded-md text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-[#f4eadc]"
            >
              {isFullscreen ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          className="absolute left-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-white/60 transition hover:text-[#f4eadc] lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px bg-current transition-all ${
                menuOpen
                  ? "translate-y-[3.5px] rotate-45"
                  : "w-full"
              }`}
            />

            <span
              className={`h-px bg-current transition-all ${
                menuOpen
                  ? "-translate-y-[3.5px] -rotate-45"
                  : "w-3/4"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl border-t border-white/10 bg-[#050505]/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <nav className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-light text-white/60">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[#f4eadc]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}