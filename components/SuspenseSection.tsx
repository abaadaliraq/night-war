import Image from "next/image";

const requests = [
  "مطرب يريد أن يبقى مطلوبًا.",
  "راقصة تريد إبعاد منافستها.",
  "منتج يريد السيطرة على فنان.",
  "صاحب محل يريد ضرب منافسه.",
  "مستثمر يريد صفقة.",
  "طبيب تجميل يريد جذب المشاهير.",
];

export default function SuspenseSection() {
  return (
    <section
      id="gaith"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:min-h-[560px] md:px-12 lg:px-20"
    >
      {/* Background typography */}
      <div className="pointer-events-none absolute left-[5%] top-10 text-[7rem] font-medium leading-none text-white/[0.018] md:text-[12rem]">
        غيث / 04
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main area */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          
          {/* Image */}
          <div className="relative order-2 min-h-[320px] overflow-hidden lg:order-1 lg:min-h-[470px]">
            <Image
              src="/images/ghaith/ghaith-main.jpg"
              alt="غيث - المشعوذ الغامض"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              priority={false}
            />

            {/* Image treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]/45" />

            <p className="absolute bottom-7 left-7 max-w-[240px] text-left text-sm font-light leading-7 text-[#f4eadc]/65">
              كل سر يصل إليه…
              <br />
              يصبح خيطًا جديدًا.
            </p>
          </div>

          {/* Copy */}
          <div className="order-1 text-right lg:order-2">
            <div className="mb-7 flex items-end gap-4">
              <span className="text-3xl font-medium leading-none text-[#6a0101] sm:text-4xl">
                04
              </span>

              <span className="mb-2 h-px w-12 bg-[#6a0101]" />

              <span className="mb-0.5 text-sm font-light text-white/45">
                غيث
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(1.8rem,2.6vw,3rem)] font-medium leading-[1.35] text-[#f4eadc]">
              غيث
              <br />
              <span className="text-white/75">
                المشعوذ الغامض
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] font-light leading-8 text-white/55 sm:text-base">
              يلجأ إلى غيث بعض الفنانين وأصحاب المحلات والمستثمرين
              وأصحاب المصالح، اعتقادًا منهم بقدرته على التأثير في
              المنافسين وجلب النجاح.
            </p>

            <p className="mt-4 max-w-xl text-[15px] font-light leading-8 text-white/65 sm:text-base">
              لكن قوته الحقيقية ليست فيما يعتقد الآخرون أنه سحر فقط…
              بل في أسرارهم.
            </p>
          </div>
        </div>

        {/* Requests */}
        <div className="mt-12 grid gap-x-12 gap-y-7 border-t border-white/10 pt-9 md:grid-cols-2 lg:mr-auto lg:w-[78%]">
          {requests.map((request, index) => (
            <div
              key={request}
              className="group relative pr-8 text-right"
            >
              <span className="absolute right-0 top-2 h-px w-5 bg-[#6a0101]/65 transition-all duration-300 group-hover:w-8" />

              <p className="text-[11px] font-medium text-[#6a0101]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mt-2 text-base font-light leading-7 text-[#f4eadc]/75 transition duration-300 group-hover:text-[#f4eadc] sm:text-lg">
                {request}
              </p>
            </div>
          ))}
        </div>

        {/* Ending */}
        <div className="mt-12 border-r border-[#6a0101] pr-5">
          <p className="max-w-2xl text-lg font-light leading-8 text-[#f4eadc] sm:text-xl">
            كل شخص يعتقد أنه وحده يعرف غيث…
            <br />
            لكن غيث يعرفهم جميعًا.
          </p>
        </div>
      </div>
    </section>
  );
}