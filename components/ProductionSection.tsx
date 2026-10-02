export default function ProductionSection() {
  return (
    <section
      dir="rtl"
      className="production-section relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="section-reveal mb-10 flex items-end justify-start gap-4">
          <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
            11
          </span>
          <span className="mb-2 h-px w-14 bg-[#6a0101]" />
          <span className="mb-0.5 text-sm font-normal text-white/52">
            العرض الإنتاجي والمالي
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div className="production-number text-right">
            <h2 className="text-2xl font-bold text-[#f4eadc] sm:text-3xl">
              العرض الإنتاجي
            </h2>
            <p className="mt-7 text-[clamp(4rem,9vw,8.8rem)] font-black leading-none tracking-tight text-[#f4eadc]">
              600,000 USD
            </p>
            <div className="mt-6 h-px w-28 bg-[#6a0101]" />
            <p className="mt-6 text-xl font-normal text-white/62">
              القيمة الإجمالية المقترحة لتنفيذ الجزء الأول
            </p>
          </div>

          <div className="production-meta text-right">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-black text-[#6a0101]/90">15</p>
                <p className="mt-2 text-lg text-white/62">حلقة</p>
              </div>
              <div>
                <p className="text-5xl font-black text-[#6a0101]/90">15–20</p>
                <p className="mt-2 text-lg text-white/62">دقيقة للحلقة</p>
              </div>
            </div>
            <p className="mt-10 text-base font-light leading-8 text-white/56 sm:text-lg">
              تُعد الميزانية التنفيذية التفصيلية بعد الموافقة المبدئية وبناءً على
              الفنانين والتعاقدات وحقوق الأغاني ومواقع التصوير والمتطلبات الفنية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
