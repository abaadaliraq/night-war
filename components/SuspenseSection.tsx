import Image from "next/image";

const questions = [
  "من سرّب الأغنية قبل موعدها؟",
  "لمن تعود حقوق الأغنية؟",
  "ماذا حدث لأموال إحدى الحفلات؟",
  "من يحاول السيطرة على الفنان؟",
  "من يريد نقله إلى شركة منافسة؟",
  "ماذا اكتشف المونتير داخل إحدى اللقطات؟",
];

export default function SuspenseSection() {
  return (
    <section
      dir="rtl"
      className="suspense-section relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:min-h-[560px] md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute left-[8%] top-12 text-[8rem] font-black leading-none text-white/[0.025] md:text-[13rem]">
        CLUE / 05
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="suspense-copy relative z-20 order-1 lg:order-2 lg:-mr-16">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              05
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              خط التشويق
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(2rem,3.1vw,3.55rem)] font-bold leading-[1.14] text-[#f4eadc]">
            كل ما يحدث أمام الجمهور…
            <br />
            ليس هو القصة كاملة.
          </h2>

          <p className="mt-6 max-w-xl text-base font-normal leading-8 text-white/60 sm:text-lg">
            تفصيل صغير يظهر في ليلة عادية قد يتحول بعد عدة حلقات إلى مفتاح أزمة
            كبيرة.
          </p>
        </div>

        <div className="suspense-media relative order-2 min-h-[300px] overflow-hidden lg:order-1 lg:min-h-[430px]">
          <Image
            src="/images/suspense/suspense-main.jpg"
            alt="خط التشويق"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div className="suspense-image absolute inset-0" />
          <p className="absolute bottom-7 left-7 max-w-[220px] text-left text-sm font-normal leading-7 text-[#f4eadc]/72">
            تفصيل واحد قد يغيّر كل شيء.
          </p>
        </div>

        <div className="suspense-board relative z-10 order-3 lg:col-span-2 lg:-mt-16 lg:mr-auto lg:w-[74%]">
          <div className="suspense-thread pointer-events-none absolute right-[7%] top-10 hidden h-[calc(100%-76px)] w-[72%] lg:block">
            <span className="suspense-thread-line suspense-thread-line-1" />
            <span className="suspense-thread-line suspense-thread-line-2" />
            <span className="suspense-thread-line suspense-thread-line-3" />
            <span className="suspense-thread-dot suspense-thread-dot-1" />
            <span className="suspense-thread-dot suspense-thread-dot-2" />
            <span className="suspense-thread-dot suspense-thread-dot-3" />
          </div>

          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {questions.map((question, index) => (
              <div
                key={question}
                className="suspense-question group relative pr-8 text-right"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="absolute right-0 top-2 h-px w-5 bg-[#6a0101]/70 transition-all duration-300 group-hover:w-8" />
                <p className="text-xs font-bold leading-none text-[#6a0101]/72 transition duration-300 group-hover:text-[#a52222]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-lg font-normal leading-8 text-[#f4eadc]/88 transition duration-300 group-hover:-translate-y-0.5 sm:text-xl">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
