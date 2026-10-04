const networks = [
  {
    number: "01",
    title: "الفن",
    path: ["الشاعر", "الملحن", "الموسيقي", "المطرب", "المنتج"],
  },
  {
    number: "02",
    title: "النفوذ",
    path: ["المستثمر", "الإعلام", "الخبر", "الشهرة"],
  },
  {
    number: "03",
    title: "السوق",
    path: ["صاحب المحل", "الفنان", "الزبون"],
  },
];

const sideRelations = [
  "عيادات التجميل ← المشاهير",
  "معارض السيارات ← أصحاب المال",
  "الدجيتال ماركتنگ ← الشهرة والإشاعة والمنافسة",
];

export default function StorySection() {
  return (
    <section
      id="network"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[32%] bg-cover bg-center opacity-20 lg:block"
        style={{
          backgroundImage: 'url("/images/story/story-main.jpg")',
        }}
      />

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-transparent via-[#050505]/70 to-[#050505] lg:block" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-3xl font-medium text-[#6a0101]">
              06
            </span>

            <span className="h-px w-12 bg-[#6a0101]" />

            <span className="text-sm font-light text-white/45">
              شبكة المصالح
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(1.7rem,2.4vw,2.8rem)] font-medium leading-[1.45]">
            لا أحد يتحرك وحده…
            <br />
            كل شخص يحتاج شخصًا آخر.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] font-light leading-8 text-white/55 sm:text-base">
            في «حرب الليل» تتشابك المصالح بين الفن والمال والإعلام
            والسوق، وتتحول العلاقات تدريجيًا إلى شبكة يصعب معرفة
            أين تبدأ وأين تنتهي.
          </p>
        </div>

        {/* Main network */}
        <div className="grid gap-5 lg:grid-cols-3">
          {networks.map((network) => (
            <div
              key={network.number}
              className="relative border-t border-white/10 bg-white/[0.015] px-5 py-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  {network.title}
                </h3>

                <span className="text-xs text-[#6a0101]">
                  {network.number}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {network.path.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <span className="text-sm font-light text-white/70">
                      {item}
                    </span>

                    {index !== network.path.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-sm text-[#6a0101]"
                      >
                        ←
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary relations */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {sideRelations.map((relation) => (
            <div
              key={relation}
              className="border-r border-[#6a0101]/60 pr-4 text-sm font-light leading-7 text-white/55"
            >
              {relation}
            </div>
          ))}
        </div>

        {/* Ghaith focal point */}
        <div className="relative mt-16 overflow-hidden border-y border-white/10 py-10">
          <div className="pointer-events-none absolute right-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-l from-[#6a0101]/60 via-[#6a0101]/15 to-transparent" />

          <div className="relative flex flex-col items-start justify-between gap-8 bg-[#050505]/85 py-2 md:flex-row md:items-center">
            <div>
              <span className="mb-2 block text-[11px] tracking-[0.2em] text-[#6a0101]">
                THE SECRET LINK
              </span>

              <h3 className="text-2xl font-medium sm:text-3xl">
                غيث
              </h3>

              <p className="mt-2 text-sm font-light text-white/50">
                الجميع يصل إليه سرًا.
              </p>
            </div>

            <p className="max-w-xl text-[15px] font-light leading-8 text-white/60">
              المطرب، المنتج، المستثمر، صاحب المحل، الطبيب وغيرهم…
              كل واحد يعتقد أن علاقته بغيث منفصلة عن الآخرين،
              بينما هو يعرف ما يريدون، وممّن يخافون، وما الذي
              يمكن أن يخسروه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}