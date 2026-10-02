const journey = [
  { number: "01", label: "كلمة" },
  { number: "02", label: "لحن" },
  { number: "03", label: "صوت" },
  { number: "04", label: "أغنية" },
  { number: "05", label: "نجم" },
];

export default function FinalSection() {
  return (
    <section
      id="final"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-6 py-20 text-[#f4eadc] sm:px-8 lg:px-12 lg:py-24"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(106,1,1,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section number */}
        <div className="mb-12 flex items-center justify-end gap-4">
          <span className="text-sm font-light text-white/45">
            الختام
          </span>

          <span className="h-px w-12 bg-[#6a0101]" />

          <span className="text-4xl font-medium text-[#6a0101]">
            12
          </span>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-white/10 md:block" />

          <div className="relative grid gap-8 md:grid-cols-5 md:gap-0">
            {journey.map((item, index) => (
              <div
                key={item.label}
                className="group relative flex items-center gap-5 md:flex-col md:items-center md:gap-4"
              >
                {/* Mobile vertical connector */}
                {index !== journey.length - 1 && (
                  <span className="absolute right-[15px] top-8 h-[calc(100%+2rem)] w-px bg-white/10 md:hidden" />
                )}

                {/* Dot */}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#050505] transition duration-300 group-hover:border-[#6a0101]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6a0101]" />
                </span>

                <div className="md:text-center">
                  <span className="mb-1 block text-[11px] font-light tracking-[0.18em] text-[#6a0101]">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-medium text-[#f4eadc] sm:text-2xl">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main ending */}
        <div className="mt-16 max-w-3xl border-r border-[#6a0101] pr-6 md:mt-20">
          <p className="text-2xl font-medium leading-relaxed sm:text-3xl lg:text-[2.6rem]">
            وهنا تبدأ «حرب الليل».
          </p>

          <p className="mt-3 text-base font-light text-white/45 sm:text-lg">
            خلف كل نجم حكايات لا يراها الجمهور.
          </p>
        </div>

        {/* Meeting request */}
        <div className="mt-16 grid gap-7 border-t border-white/10 pt-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <span className="mb-3 block text-[11px] tracking-[0.18em] text-[#6a0101]">
              NEXT STEP
            </span>

            <h3 className="text-xl font-medium sm:text-2xl">
              طلب اجتماع
            </h3>
          </div>

          <p className="max-w-3xl text-[15px] font-light leading-8 text-white/60 sm:text-base">
            نتشرف بطلب تحديد اجتماع مع إدارة قناة دجلة والفريق المختص،
            لعرض الرؤية الكاملة لمشروع «حرب الليل» ومناقشة الجوانب الدرامية
            والإنتاجية والموسيقية والمالية، تمهيدًا للاتفاق على الخطوات
            التنفيذية للجزء الأول.
          </p>
        </div>

        {/* Footer information */}
        <div className="mt-16 grid gap-5 border-t border-white/10 pt-8 text-sm font-light text-white/40 sm:grid-cols-3">
          <p>
            <span className="text-white/65">تأليف:</span>{" "}
            رياض النعماني
          </p>

          <p>
            <span className="text-white/65">مقدم من:</span>{" "}
            مؤسسة البدر للثقافة والإعلام
          </p>

          <p>
            <span className="text-white/65">إلى:</span>{" "}
            قناة دجلة الفضائية
          </p>
        </div>
      </div>
    </section>
  );
}