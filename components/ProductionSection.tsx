export default function ProductionSection() {
  return (
    <section
      id="production"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end gap-4">
          <span className="text-3xl font-medium text-[#6a0101] sm:text-4xl">
            09
          </span>

          <span className="mb-2 h-px w-12 bg-[#6a0101]" />

          <span className="mb-0.5 text-sm font-light text-white/45">
            العرض المالي
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-light text-white/40">
              القيمة الإجمالية المقترحة للمشروع
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-none tracking-tight">
              650,000
              <span className="mr-3 text-[0.28em] font-light text-white/40">
                USD
              </span>
            </h2>

            <div className="mt-7 h-px w-20 bg-[#6a0101]" />

            <p className="mt-6 text-lg font-light text-white/65">
              ستمائة وخمسون ألف دولار أمريكي
            </p>
          </div>

          <div className="border-r border-white/10 pr-6">
            <p className="text-[15px] font-light leading-8 text-white/55">
              القيمة الإجمالية المقترحة لمشروع «حرب الليل»، وفق التفاصيل
              الإنتاجية والفنية والحقوق والتزامات الأطراف التي يتم الاتفاق
              عليها بصورة نهائية ضمن العقد الرسمي.
            </p>

            <p className="mt-6 text-sm font-light leading-7 text-white/35">
              لا يمثل هذا العرض بحد ذاته عقد بيع نهائيًا أو تنازلًا عن حقوق
              الملكية الفكرية أو حقوق الاستغلال إلا وفق اتفاق وعقد مستقل.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5">
              <div>
                <p className="text-2xl font-medium text-[#6a0101]">15</p>
                <p className="mt-1 text-sm text-white/45">حلقة</p>
              </div>

              <div>
                <p className="text-2xl font-medium text-[#6a0101]">15</p>
                <p className="mt-1 text-sm text-white/45">أغنية أصلية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}