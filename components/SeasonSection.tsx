const specs = [
  {
    value: "15",
    label: "حلقة",
    note: "جزء أول مترابط",
  },
  {
    value: "20–25",
    label: "دقيقة",
    note: "للمادة الدرامية الأساسية",
  },
  {
    value: "≈ 30",
    label: "دقيقة",
    note: "للصيغة التلفزيونية",
  },
  {
    value: "15",
    label: "أغنية أصلية",
    note: "مرتبطة بالشخصيات والأحداث",
  },
];

export default function SeasonSection() {
  return (
    <section
      id="specs"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute left-6 top-3 text-[8rem] font-medium leading-none text-white/[0.015] sm:text-[13rem]">
        08
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex items-end gap-4">
          <span className="text-3xl font-medium text-[#6a0101] sm:text-4xl">
            08
          </span>

          <span className="mb-2 h-px w-12 bg-[#6a0101]" />

          <span className="mb-0.5 text-sm font-light text-white/45">
            مواصفات المشروع
          </span>
        </div>

        <h2 className="max-w-2xl text-[clamp(1.7rem,2.4vw,2.8rem)] font-medium leading-[1.4]">
          صيغة قصيرة…
          <br />
          بعالم درامي واسع.
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="relative border-b border-white/10 pb-7"
            >
              <span className="absolute bottom-0 right-0 h-px w-12 bg-[#6a0101]" />

              <p className="text-[clamp(2.4rem,4.5vw,4.8rem)] font-medium leading-none text-[#f4eadc]">
                {item.value}
              </p>

              <p className="mt-4 text-lg font-medium text-white/75">
                {item.label}
              </p>

              <p className="mt-2 text-sm font-light leading-6 text-white/40">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-[15px] font-light leading-8 text-white/45">
          تتراوح المادة الدرامية الأساسية للحلقة بين 20 و25 دقيقة تقريبًا،
          وتصل الصيغة التلفزيونية إلى قرابة 30 دقيقة مع تايتل البداية والنهاية
          والمادة الموسيقية.
        </p>
      </div>
    </section>
  );
}