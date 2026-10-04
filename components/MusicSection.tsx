const waveformBars = [
  18, 34, 24, 48, 30, 58, 22, 42,
  66, 28, 54, 36, 20, 46, 26, 60,
];

const musicDetails = [
  {
    number: "01",
    title: "15 أغنية",
    text: "أغانٍ أصلية أُعدت لتعيش داخل عالم المسلسل.",
  },
  {
    number: "02",
    title: "الشخصيات",
    text: "ترتبط الأغاني بمشاعر الشخصيات وتحولاتها وصراعاتها.",
  },
  {
    number: "03",
    title: "الأحداث",
    text: "تظهر الموسيقى كجزء من الموقف الدرامي وليس كفاصل منفصل.",
  },
  {
    number: "04",
    title: "العالم",
    text: "تمنح الموسيقى «حرب الليل» هويته الخاصة خارج الشاشة أيضًا.",
  },
];

export default function MusicSection() {
  return (
    <section
      id="music"
      dir="rtl"
      className="music-section relative isolate overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:min-h-[570px] md:px-12 lg:px-20"
    >
      {/* Musical watermark */}
      <div className="music-note music-note-1 pointer-events-none">♪</div>
      <div className="music-note music-note-2 pointer-events-none">♫</div>
      <div className="music-note music-note-3 pointer-events-none">♬</div>
      <div className="music-note music-note-4 pointer-events-none">♩</div>

      <div className="pointer-events-none absolute bottom-3 right-[7%] -z-10 text-[7rem] font-medium leading-none text-white/[0.015] sm:text-[11rem]">
        MUSIC / 07
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr_0.85fr] lg:items-center">
        {/* Copy */}
        <div className="music-copy order-1 text-right">
          <div className="mb-7 flex items-end gap-4">
            <span className="text-3xl font-medium leading-none text-[#6a0101] sm:text-4xl">
              07
            </span>

            <span className="mb-2 h-px w-12 bg-[#6a0101]" />

            <span className="mb-0.5 text-sm font-light text-white/45">
              الموسيقى
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(1.7rem,2.4vw,2.8rem)] font-medium leading-[1.4] text-[#f4eadc]">
            15 أغنية أصلية…
            <br />
            جزء من عالم «حرب الليل».
          </h2>

          <p className="mt-6 max-w-xl text-[15px] font-light leading-8 text-white/60 sm:text-base">
            يتضمن المشروع 15 أغنية أصلية ترتبط بأحداث وشخصيات
            المسلسل، وتتحرك مع القصة بدل أن تظهر كفقرات منفصلة عنها.
          </p>

          <p className="mt-5 max-w-xl text-[15px] font-light leading-8 text-white/45 sm:text-base">
            الموسيقى هنا لا توقف الحدث…
            بل تصبح جزءًا من المكان، والعلاقات، والشهرة،
            والصراع الذي يصنع عالم الليل.
          </p>
        </div>

        {/* Waveform */}
        <div className="music-wave order-3 lg:order-2">
          <div className="flex h-32 items-center justify-center gap-2">
            {waveformBars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`music-wave-bar w-px ${
                  index === 4 || index === 9 || index === 13
                    ? "bg-[#6a0101]"
                    : "bg-white/25"
                }`}
                style={{
                  height,
                  animationDelay: `${index * 45}ms`,
                }}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {musicDetails.map((item, index) => (
              <div
                key={item.number}
                className="music-detail border-t border-white/10 pt-4 text-right"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-[11px] font-medium text-[#6a0101]">
                  {item.number}
                </p>

                <h3 className="mt-2 text-lg font-medium text-[#f4eadc]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-light leading-6 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="music-media order-2 h-[330px] overflow-hidden lg:order-3 lg:h-[460px]">
          <div
            className="music-image h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/music/music-main.jpg")',
            }}
          />
        </div>
      </div>
    </section>
  );
}