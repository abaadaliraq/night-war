const characters = [
  {
    name: "آدم",
    text: "شاب من عائلة ثرية يدخل تدريجيًا في شبكة المصالح والأسرار.",
    layout: "lg:col-span-2",
  },
  {
    name: "كمال",
    text: "والد آدم، رجل صاحب منصب ونفوذ وعلاقات.",
    layout: "",
  },
  {
    name: "نورس",
    text: "مطرب ناجح أمام الجمهور، يخفي ديونًا ومشاكل عائلية وعلاقة سرية.",
    layout: "",
  },
  {
    name: "تالا",
    text: "راقصة معروفة تخوض حربًا للحفاظ على مكانتها.",
    layout: "",
  },
  {
    name: "ريماس",
    text: "فتاة تهرب من مشاكلها وتدخل عالم الليل ثم تصبح شاهدة على أسرار خطيرة.",
    layout: "lg:col-span-2",
  },
  {
    name: "جوان",
    text: "تعرف قيمة الصورة والمعلومة وتدخل عالم التصوير السري والابتزاز الإلكتروني.",
    layout: "",
  },
  {
    name: "فارس",
    text: "منتج يعرف كيف يحول حاجة الفنان إلى عقد ودين.",
    layout: "",
  },
  {
    name: "شاهين",
    text: "سمسار يتحرك بين السيارات والمطاعم والفنانين والصفقات.",
    layout: "",
  },
  {
    name: "الدكتور ريان",
    text: "طبيب تجميل يستخدم عالم المشاهير لجذب الزبائن.",
    layout: "",
  },
  {
    name: "أبو زيد",
    text: "سائق تاكسي يرى ويسمع تفاصيل عالم الليل ويبدأ بربط القصص.",
    layout: "lg:col-span-2",
  },
  {
    name: "غيث",
    text: "المشعوذ الغامض ومخزن أسرار هذا العالم.",
    layout: "lg:col-span-2",
  },
];

export default function ArtistsSection() {
  return (
    <section
      id="characters"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background editorial label */}
      <div className="pointer-events-none absolute -left-8 top-4 text-[7rem] font-medium leading-none text-white/[0.015] sm:text-[11rem] lg:text-[15rem]">
        CHARACTERS / 05
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="max-w-3xl text-right">
          <div className="mb-7 flex items-end gap-4">
            <span className="text-3xl font-medium leading-none text-[#6a0101] sm:text-4xl">
              05
            </span>

            <span className="mb-2 h-px w-12 bg-[#6a0101]" />

            <span className="mb-0.5 text-sm font-light text-white/45">
              الشخصيات الرئيسية
            </span>
          </div>

          <h2 className="text-[clamp(1.7rem,2.4vw,2.8rem)] font-medium leading-[1.4]">
            وجوه مختلفة…
            <br />
            داخل شبكة واحدة.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] font-light leading-8 text-white/55 sm:text-base">
            كل شخصية تدخل عالم الليل من باب مختلف، لكن المال والصورة
            والمعلومة والسر تجعل خطوطهم تتقاطع تدريجيًا.
          </p>
        </header>

        {/* Characters grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Intro card */}
          <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#6a0101] p-6 sm:min-h-[240px] lg:col-span-2">
            <span className="pointer-events-none absolute -bottom-5 left-4 text-[8rem] font-medium leading-none text-black/10">
              11
            </span>

            <div className="relative">
              <p className="text-[11px] tracking-[0.18em] text-white/45">
                MAIN CHARACTERS
              </p>

              <h3 className="mt-5 text-2xl font-medium">
                11 شخصية رئيسية
              </h3>
            </div>

            <p className="relative max-w-lg text-sm font-light leading-7 text-white/65">
              تتقاطع خطوطهم بين العائلة والفن والمال والابتزاز،
              وصولًا إلى عالم يعرف فيه كل شخص جزءًا من الحقيقة.
            </p>
          </div>

          {characters.map((character, index) => (
            <article
              key={character.name}
              className={`group relative min-h-[220px] overflow-hidden border border-white/[0.06] bg-[#0a0a0a] p-5 transition duration-300 hover:border-[#6a0101]/60 hover:bg-[#0d0d0d] sm:min-h-[240px] ${character.layout}`}
            >
              {/* Large background number */}
              <span className="pointer-events-none absolute -bottom-6 -left-1 text-[7rem] font-medium leading-none text-white/[0.025] transition duration-300 group-hover:text-[#6a0101]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#6a0101]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-[#6a0101]/70 transition-all duration-300 group-hover:w-14" />
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-medium text-[#f4eadc] transition duration-300 group-hover:-translate-y-1 sm:text-2xl">
                    {character.name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm font-light leading-7 text-white/50">
                    {character.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-9 max-w-3xl text-sm font-light leading-7 text-white/35">
          الشخصيات المقترحة هنا درامية فقط، ولا تعني اعتماد ممثلين أو فنانين
          محددين لأداء الأدوار في هذه المرحلة.
        </p>
      </div>
    </section>
  );
}