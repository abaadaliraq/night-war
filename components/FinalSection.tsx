import Image from "next/image";

export default function FinalSection() {
  return (
    <section
      id="final"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-6 py-20 text-[#f4eadc] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(106,1,1,0.13),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-3xl font-medium text-[#6a0101] sm:text-4xl">
            10
          </span>

          <span className="h-px w-12 bg-[#6a0101]" />

          <span className="text-sm font-light text-white/45">
            الختام
          </span>
        </div>

        <div className="max-w-4xl">
          <p className="text-sm font-light text-white/40">
            مسلسل درامي عراقي
          </p>

          <h2 className="mt-4 text-[clamp(2rem,3.3vw,4rem)] font-medium leading-[1.35]">
            وهنا تبدأ «حرب الليل».
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] font-light leading-8 text-white/55 sm:text-base">
            عالم تتشابك فيه الشهرة والمال والمصالح والأسرار، ويكتشف فيه كل
            شخص أن ما يحدث في الليل لا ينتهي مع طلوع النهار.
          </p>
        </div>

        <div className="mt-12 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-medium">15</p>
            <p className="mt-1 text-sm font-light text-white/40">حلقة</p>
          </div>

          <div>
            <p className="text-2xl font-medium">15</p>
            <p className="mt-1 text-sm font-light text-white/40">
              أغنية أصلية
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium">650,000 USD</p>
            <p className="mt-1 text-sm font-light text-white/40">
              قيمة العرض
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <span className="mb-3 block text-[11px] tracking-[0.18em] text-[#6a0101]">
              NEXT STEP
            </span>

            <h3 className="text-xl font-medium">
              طلب اجتماع
            </h3>
          </div>

          <p className="max-w-3xl text-[15px] font-light leading-8 text-white/55">
            نتشرف بطلب تحديد اجتماع مع إدارة قناة دجلة والفريق المختص، لعرض
            الرؤية الكاملة لمشروع «حرب الليل» ومناقشة الجوانب الدرامية
            والإنتاجية والموسيقية والمالية، تمهيدًا للاتفاق على الخطوات
            التنفيذية للمشروع.
          </p>
        </div>

        <div className="mt-16 grid gap-5 border-t border-white/10 pt-8 text-sm font-light text-white/35 sm:grid-cols-3">
          <p>
            <span className="text-white/60">المشروع:</span>{" "}
            مسلسل «حرب الليل»
          </p>

          <p>
            <span className="text-white/60">مقدم من:</span>{" "}
            مؤسسة الدر للثقافة والإعلام
          </p>

          <p>
            <span className="text-white/60">إلى:</span>{" "}
            قناة دجلة الفضائية
          </p>
        </div>

        <div className="mt-8 flex justify-center border-t border-white/10 pt-5">
          <a
            href="https://www.abaad-aliraq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap opacity-45 transition duration-300 hover:opacity-100"
          >
            <Image
              src="/images/abaad-logo.png"
              alt="شعار أبعاد العراق"
              width={64}
              height={64}
              className="h-7 w-auto shrink-0 object-contain"
            />

            <span className="text-xs font-light text-white/42">
              العرض التقديمي بواسطة{" "}
              <span className="font-medium text-[#f4eadc]/82">أبعاد العراق</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
