"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "المشروع", href: "#project" },
  { label: "القصة", href: "#story" },
  { label: "الموسيقى", href: "#music" },
  { label: "الفنانون", href: "#artists" },
  { label: "قيمة المشروع", href: "#value" },
  { label: "العرض المالي", href: "#production" },
  { label: "الختام", href: "#final" },
];

export default function Sidebar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  useEffect(() => {
    const fullscreenSupported =
      typeof document !== "undefined" &&
      typeof document.documentElement.requestFullscreen === "function";

    setCanFullscreen(fullscreenSupported);
    setIsFullscreen(Boolean(document.fullscreenElement));

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

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
      className="topbar-fade fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between text-[#f4eadc] sm:h-[72px]">
        
        {/* Logo */}
        <a
          href="#project"
          className="flex items-center gap-3"
          aria-label="البدر"
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black/25 sm:h-12 sm:w-12">
            <Image
              src="/images/logo.png"
              alt="شعار البدر"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-8 text-[13px] font-light text-[#f6ead8]/58 lg:flex"
        >
          {navItems.map((item, index) => {
            const isActive = index === 0;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative pb-2 transition duration-300 hover:text-[#f4eadc] ${
                  isActive ? "text-[#f4eadc]" : ""
                }`}
              >
                <span>{item.label}</span>

                <span
                  className={`absolute bottom-0 right-0 h-px bg-[#6a0101] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Title + Fullscreen */}
        <div className="flex items-center gap-3 max-lg:pl-11">
          {canFullscreen && (
            <button
              type="button"
              aria-label={
                isFullscreen
                  ? "الخروج من ملء الشاشة"
                  : "عرض بملء الشاشة"
              }
              onClick={toggleFullscreen}
              className="flex h-9 w-9 items-center justify-center text-white/65 transition hover:rounded-md hover:bg-white/[0.05] hover:text-[#f4eadc]"
            >
              {isFullscreen ? (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
              )}
            </button>
          )}

          <a
            href="#project"
            aria-label="حرب الليل"
            className="text-[1.7rem] font-semibold leading-none tracking-normal text-[#f4eadc] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:text-[2.15rem]"
          >
            حرب الليل
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label="فتح القائمة"
          className="absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[#f7efe1]/80 transition hover:text-[#6a0101] lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-3/4 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}