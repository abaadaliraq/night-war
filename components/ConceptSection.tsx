const journeySteps = ["كلمة", "لحن", "صوت", "إنتاج", "جمهور"];

export default function ConceptSection() {
  return (
    <section
      dir="ltr"
      className="concept-section grid h-auto min-h-[500px] w-full overflow-hidden bg-[#050505] px-5 py-14 text-[#f4eadc] sm:px-8 md:h-[clamp(500px,42vw,620px)] md:grid-cols-[minmax(280px,30%)_1fr] md:gap-[70px] md:px-12 md:py-[60px] lg:px-20"
    >
      <div className="concept-image-wrap mb-10 flex items-center md:mb-0">
        <div
          className="concept-image h-[260px] w-full overflow-hidden rounded-md bg-cover bg-center md:h-full md:max-h-[440px]"
          style={{ backgroundImage: 'url("/images/concept/concept-main.jpg")' }}
          aria-label="صورة الفكرة الرئيسية"
        />
      </div>

      <div
        dir="rtl"
        className="concept-copy flex items-center text-right"
      >
        <div className="w-full max-w-4xl">
          <div className="mb-8 flex flex-col items-end gap-3">
            <p className="text-xs font-bold leading-none text-[#6a0101] sm:text-sm">
              01
            </p>
            <div className="h-0.5 w-12 bg-[#6a0101]" />
            <p className="text-sm font-normal text-white/50">
              الفكرة الرئيسية
            </p>
          </div>

          <h2 className="max-w-4xl text-[clamp(2rem,3vw,3.4rem)] font-bold leading-[1.22] text-[#f4eadc]">
            الجمهور يرى النجم تحت الضوء…
            <br />
            لكنه لا يرى العالم الذي صنع هذا الضوء.
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base font-normal leading-8 text-white/72 sm:text-lg sm:leading-9">
            <p>
              تبدأ «حرب الليل» من رحلة صناعة الأغنية؛ من كلمة يكتبها شاعر، إلى
              لحن وصوت وتسجيل وإنتاج، حتى تصل الأغنية إلى الجمهور.
            </p>
            <p>
              لكن خلف هذه الرحلة تبدأ العلاقات والمصالح والأسرار والصراع.
            </p>
          </div>

          <div className="concept-journey mt-12">
            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="absolute right-0 top-[17px] hidden h-px w-full bg-white/14 md:block" />
              {journeySteps.map((step, index) => (
                <div
                  key={step}
                  className="relative z-10 flex items-center gap-3 md:flex-col md:items-center md:gap-3"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index === 0 || index === journeySteps.length - 1
                        ? "bg-[#6a0101]"
                        : "bg-white/40"
                    }`}
                  />
                  <span className="text-sm font-normal text-white/64 sm:text-base">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
