const waveformBars = [18, 34, 24, 48, 30, 58, 22, 42, 66, 28, 54, 36, 20, 46, 26, 60];

const musicDetails = [
  {
    number: "01",
    title: "الكلمات",
    question: "من كتبها؟",
  },
  {
    number: "02",
    title: "اللحن",
    question: "من لحنها؟",
  },
  {
    number: "03",
    title: "الحقوق",
    question: "من يملك حقوقها؟",
  },
  {
    number: "04",
    title: "الصوت",
    question: "من سيغنيها؟",
  },
];

export default function MusicSection() {
  return (
    <section
      dir="rtl"
      className="music-section relative isolate overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:min-h-[570px] md:px-12 lg:px-20"
    >
      <div className="music-note music-note-1">♪</div>
      <div className="music-note music-note-2">♫</div>
      <div className="music-note music-note-3">♬</div>
      <div className="music-note music-note-4">♩</div>
      <div className="pointer-events-none absolute bottom-4 right-[9%] -z-10 text-[8rem] font-black leading-none text-white/[0.018] sm:text-[12rem]">
        SOUND / 06
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr_0.85fr] lg:items-center">
        <div className="music-copy order-1 text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              06
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              الموسيقى داخل السيناريو
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(2.05rem,3.15vw,3.55rem)] font-bold leading-[1.15] text-[#f4eadc]">
            الأغنية ليست فاصلاً…
            <br />
            إنها جزء من الحكاية.
          </h2>

          <p className="mt-6 max-w-xl text-base font-normal leading-8 text-white/60 sm:text-lg">
            في «حرب الليل» تبدأ الأغنية داخل الحدث، وتتغير معه، وقد تتحول هي
            نفسها إلى سبب للصراع.
          </p>

          <div className="mt-8 max-w-xl space-y-4 text-base font-light leading-8 text-white/66 sm:text-lg">
            <p>
              قد تبدأ الكلمات من قصة حب، ويبدأ تسجيل الأغنية في حلقة، لكن
              الجمهور لا يسمع نسختها النهائية إلا بعد عدة حلقات.
            </p>
            <p>
              الموسيقى هنا لا توقف الدراما…
              <br />
              بل تدفعها إلى الأمام.
            </p>
          </div>
        </div>

        <div className="music-wave order-3 lg:order-2">
          <div className="flex h-32 items-center justify-center gap-2">
            {waveformBars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`music-wave-bar w-px ${
                  index === 4 || index === 9 || index === 13
                    ? "bg-[#6a0101]"
                    : "bg-white/28"
                }`}
                style={{
                  height,
                  animationDelay: `${index * 45}ms`,
                }}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {musicDetails.map((item, index) => (
              <div
                key={item.number}
                className="music-detail text-right"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xs font-bold leading-none text-[#6a0101]/80">
                  {item.number}
                </p>
                <div className="my-3 h-px w-9 bg-[#6a0101]/70" />
                <h3 className="text-xl font-bold text-[#f4eadc]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-light text-white/50">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="music-media order-2 h-[360px] overflow-hidden lg:order-3 lg:h-[470px]">
          <div className="music-image h-full w-full bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}
