const elements = [
  {
    number: "01",
    title: "دراما",
    description: "العلاقات والنجاح والفشل والقرارات التي تغيّر حياة الشخصيات.",
    image: "/images/elements/drama.jpg",
    span: "lg:col-span-5",
  },
  {
    number: "02",
    title: "تشويق",
    description: "تسريب أغنية، حقوق متنازع عليها، تسجيل أو فيديو قد يقلب الأحداث.",
    image: "/images/elements/suspense.jpg",
    span: "lg:col-span-3",
    note: "من سرّب الأغنية؟",
  },
  {
    number: "03",
    title: "كوميديا",
    description: "مواقف طبيعية من حياة الفنان وسط الجمهور والعائلة والمجتمع.",
    image: "/images/elements/comedy.jpg",
    span: "lg:col-span-4",
  },
  {
    number: "04",
    title: "حب",
    description: "علاقات تختبرها الشهرة والغيرة والوقت والنجاح.",
    image: "/images/elements/love.jpg",
    span: "lg:col-span-4",
  },
  {
    number: "05",
    title: "موسيقى",
    description: "الأغنية جزء من الحدث وليست فقرة منفصلة عن السيناريو.",
    image: "/images/elements/music.jpg",
    span: "lg:col-span-5",
    waveform: true,
  },
  {
    number: "06",
    title: "استعراض",
    description: "الحفلات والأعراس والبروفات وتصوير الكليبات جزء من عالم القصة.",
    image: "/images/elements/show.jpg",
    span: "lg:col-span-3",
  },
];

export default function ElementsSection() {
  return (
    <section
      dir="rtl"
      className="elements-section bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="elements-header max-w-3xl text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/72 sm:text-6xl">
              04
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              عناصر العمل
            </span>
          </div>

          <h2 className="text-[clamp(2.1rem,3.3vw,3.8rem)] font-bold leading-[1.13] text-[#f4eadc]">
            عالم واحد…
            <br />
            لكن كل ليلة تحمل شيئًا مختلفًا.
          </h2>

          <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-white/65 sm:text-lg">
            تتحرك «حرب الليل» بين الدراما والتشويق والكوميديا والحب والموسيقى
            والاستعراض دون أن تنفصل هذه العناصر عن القصة.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {elements.map((element) => (
            <article
              key={element.number}
              className={`elements-card group relative min-h-[310px] overflow-hidden bg-[#0b0b0b] ${element.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${element.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.56)_70%,rgba(0,0,0,0.82))]" />

              <div className="relative z-10 flex h-full min-h-[310px] flex-col justify-end p-6 text-right sm:p-7">
                <p className="text-xs font-bold text-[#b03a3a]">
                  {element.number}
                </p>
                <div className="mt-3 h-px w-0 bg-[#6a0101] transition-all duration-300 group-hover:w-12" />
                <h3 className="mt-4 text-2xl font-bold text-[#f4eadc]">
                  {element.title}
                </h3>
                {element.note ? (
                  <p className="mt-2 text-sm font-normal text-[#b95b5b]">
                    {element.note}
                  </p>
                ) : null}
                {element.waveform ? (
                  <div className="mt-4 flex h-7 items-end gap-1.5 opacity-70">
                    {[12, 20, 9, 24, 15, 27, 11, 18, 8].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="w-px bg-[#6a0101]"
                        style={{ height }}
                      />
                    ))}
                  </div>
                ) : null}
                <p className="mt-4 max-w-sm text-base font-light leading-7 text-white/68 transition duration-300 group-hover:translate-y-[-3px]">
                  {element.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
