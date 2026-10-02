const seasonStats = [
  {
    value: "15",
    label: "حلقة مترابطة",
  },
  {
    value: "15–20",
    label: "دقيقة صافية للحلقة",
  },
  {
    value: "225–300",
    label: "دقيقة محتوى درامي",
  },
];

export default function SeasonSection() {
  return (
    <section
      dir="rtl"
      className="season-section relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute left-4 top-6 text-[9rem] font-black leading-none text-white/[0.018] sm:text-[15rem]">
        09
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="section-reveal max-w-3xl text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              09
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              شكل الجزء الأول
            </span>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {seasonStats.map((item, index) => (
            <div
              key={item.label}
              className="season-stat relative pb-8 text-right"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="absolute bottom-0 right-0 h-px w-full bg-white/10" />
              <span className="absolute bottom-0 right-0 h-px w-16 bg-[#6a0101]" />
              <p className="text-[clamp(4.5rem,10vw,9rem)] font-black leading-none tracking-tight text-[#f4eadc]">
                {item.value}
              </p>
              <p className="mt-4 text-xl font-normal text-white/62 sm:text-2xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="section-reveal mt-12 max-w-4xl text-right text-base font-light leading-8 text-white/60 sm:text-lg">
          كل حلقة تقود إلى ما بعدها وتنتهي بدافع تشويقي، مع نهاية خاصة للجزء
          الأول تترك عالم «حرب الليل» مفتوحًا لأجزاء لاحقة.
        </p>
      </div>
    </section>
  );
}
