const values = [
  "دراما مترابطة",
  "نجوم أغنية معروفون",
  "أغانٍ أصلية",
  "محتوى رقمي ومقاطع قصيرة",
  "كوميديا وحب وعلاقات",
  "حفلات واستعراض وهوية بصرية حيوية",
];

export default function DijlahValueSection() {
  return (
    <section
      dir="rtl"
      className="dijlah-section bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="section-reveal max-w-3xl text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              10
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              القيمة المقدمة لقناة دجلة
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,3.35vw,3.8rem)] font-bold leading-[1.12]">
            قيمة تتجاوز وقت البث
          </h2>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {values.map((value, index) => (
            <article
              key={value}
              className={`value-card min-h-[190px] bg-[#0b0b0b] p-6 text-right ${
                index === 0 || index === 5
                  ? "lg:col-span-5"
                  : index === 3
                    ? "lg:col-span-4"
                    : "lg:col-span-3"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xs font-bold text-[#6a0101]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="my-5 h-px w-12 bg-[#6a0101]" />
              <h3 className="text-2xl font-bold leading-9 text-[#f4eadc]">
                {value}
              </h3>
            </article>
          ))}
        </div>

        <p className="section-reveal mt-10 max-w-3xl text-right text-lg font-light leading-8 text-white/62">
          المشروع قابل للحياة على الشاشة والمنصات الرقمية في الوقت نفسه.
        </p>
      </div>
    </section>
  );
}
