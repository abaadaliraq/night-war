export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative isolate h-[clamp(520px,45vw,650px)] w-full overflow-hidden bg-[#050505] text-[#f4eadc] max-md:h-[560px]"
    >
      <div
        className="hero-image absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero/hero-main.jpg")' }}
      />
      <div className="hero-grade absolute inset-0 -z-20" />
      <div className="hero-vignette absolute inset-0 -z-20" />
      <div className="cinema-grain absolute inset-0 -z-10 opacity-[0.09]" />

      <div
        dir="rtl"
        className="absolute right-6 top-[48%] w-[calc(100%-48px)] max-w-[520px] -translate-y-[48%] text-right sm:right-10 lg:right-24 xl:right-32"
      >
        <div className="flex w-full max-w-[520px] flex-col items-end text-right [direction:rtl]">
          <p className="hero-reveal hero-delay-1 mb-3.5 w-full text-right text-sm font-normal leading-none text-[#e0d1bb]/82 [direction:rtl] sm:text-[15px] lg:text-[17px]">
            مؤسسة الدر للثقافة والإعلام
          </p>

          <h1 className="hero-reveal hero-delay-2 w-full whitespace-nowrap text-right text-[clamp(3rem,4.8vw,5.2rem)] font-extrabold leading-[0.9] tracking-normal text-[#f4eadc] drop-shadow-[0_18px_50px_rgba(0,0,0,0.48)] [direction:rtl] max-md:text-[clamp(2.65rem,13vw,3.25rem)]">
            <span className="mb-2 block text-[0.28em] font-light text-white/64">
              مسلسل
            </span>
            حرب الليل
          </h1>

          <span className="hero-reveal hero-delay-3 mt-4 h-px w-20 self-end bg-[#b89a62]" />

          <p className="hero-reveal hero-delay-3 mt-4 w-full text-right text-[clamp(1.4rem,2vw,2rem)] font-semibold leading-[1.35] text-[#fff3e1] [direction:rtl] [text-wrap:balance] lg:whitespace-nowrap">
            دراما اجتماعية | تشويق | غموض | موسيقى
          </p>

          <p className="hero-reveal hero-delay-4 mt-3 w-full text-right text-base font-light leading-7 text-[#eadfce]/86 [direction:rtl] sm:text-lg">
            15 حلقة — 15 أغنية أصلية
          </p>

          <p className="hero-reveal hero-delay-5 mt-9 w-full text-right text-[13px] font-normal leading-6 text-[#e6d5bd]/76 [direction:rtl] sm:text-sm">
            مقدم إلى: قناة دجلة الفضائية
          </p>

          <div className="hero-reveal hero-delay-5 mt-7 flex w-full flex-wrap justify-end gap-3">
            <a
              href="#story"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#6a0101] px-[18px] text-sm font-normal text-[#f4eadc] transition hover:bg-[#7b0909]"
            >
              استكشف المشروع
            </a>
            <a
              href="#production"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#f4eadc]/35 px-[18px] text-sm font-normal text-[#f4eadc] transition hover:border-[#f4eadc]/55 hover:bg-white/[0.04]"
            >
              العرض المالي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
