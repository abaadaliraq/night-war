const storyBeats = [
  {
    number: "01",
    title: "الشهرة",
    text: "تغير العلاقات",
  },
  {
    number: "02",
    title: "المال",
    text: "يدخل الصراع",
  },
  {
    number: "03",
    title: "العلاقات",
    text: "تختبر الولاء",
  },
];

export default function StorySection() {
  return (
    <section
      dir="ltr"
      className="story-section relative grid min-h-[520px] w-full overflow-hidden bg-[#050505] px-5 py-16 text-[#f4eadc] sm:px-8 md:h-[clamp(520px,45vw,650px)] md:grid-cols-[58%_42%] md:items-center md:px-12 lg:px-20"
    >
      <div className="story-media relative order-1 min-h-[280px] overflow-hidden md:order-none md:-mr-20 md:h-[calc(100%-70px)] md:min-h-0">
        <div
          className="story-image h-full min-h-[280px] bg-cover bg-center md:min-h-0"
          style={{ backgroundImage: 'url("/images/story/story-main.jpg")' }}
        />
        <p className="absolute bottom-7 right-7 max-w-xs text-sm font-light leading-7 text-white/66 sm:text-base">
          «قبل الشهرة كان الفنان يحتاج فرصة… بعد الشهرة يصبح الجميع بحاجة
          إليه.»
        </p>
      </div>

      <div
        dir="rtl"
        className="story-copy relative z-10 order-2 mt-10 text-right md:mt-0 md:pr-12 lg:pr-16"
      >
        <div className="mb-8 flex items-end justify-start gap-4">
          <span className="text-5xl font-black leading-none text-[#6a0101]/72 sm:text-6xl">
            03
          </span>
          <span className="mb-2 h-px w-14 bg-[#6a0101]" />
          <span className="mb-0.5 text-sm font-normal text-white/52">
            القصة
          </span>
        </div>

        <h2 className="max-w-xl text-[clamp(2.1rem,3.2vw,3.7rem)] font-bold leading-[1.12] text-[#f4eadc]">
          من أغنية صغيرة…
          <br />
          إلى عالم كامل من الشهرة والصراع.
        </h2>

        <div className="mt-7 max-w-xl space-y-4 text-base font-normal leading-8 text-white/66 sm:text-lg sm:leading-9">
          <p>
            يتابع «حرب الليل» رحلة صناعة أغنية تتحول تدريجيًا إلى مشروع نجاح،
            ثم تصنع نجمًا تتغير حياته بالكامل.
          </p>
          <p>
            قبل الشهرة كان الفنان يبحث عن فرصة. وبعد الشهرة يصبح الجميع بحاجة
            إليه.
          </p>
          <p>
            تدخل الحفلات والعقود والمال والعلاقات والغيرة ومدراء الأعمال وشركات
            الإنتاج والإعلام، ويتحول النجاح نفسه إلى بداية الصراع.
          </p>
        </div>

        <div className="story-beats mt-9 grid gap-4 sm:grid-cols-3">
          {storyBeats.map((beat) => (
            <div
              key={beat.number}
              className="bg-[#0b0b0b] px-4 py-4 text-right transition duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-bold text-[#6a0101]">{beat.number}</p>
              <div className="my-3 h-px w-8 bg-[#6a0101]" />
              <h3 className="text-lg font-bold text-[#f4eadc]">{beat.title}</h3>
              <p className="mt-1 text-sm font-light text-white/56">
                {beat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
