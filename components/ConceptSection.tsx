export default function ConceptSection() {
  return (
    <section
      dir="ltr"
      className="concept-section grid h-auto min-h-[500px] w-full overflow-hidden bg-[#050505] px-5 py-14 text-[#f4eadc] sm:px-8 md:h-[clamp(500px,42vw,620px)] md:grid-cols-[minmax(280px,30%)_1fr] md:gap-[70px] md:px-12 md:py-[60px] lg:px-20"
    >
      <div className="concept-image-wrap mb-10 flex items-center md:mb-0">
        <div
          className="concept-image h-[260px] w-full overflow-hidden rounded-md bg-cover bg-center md:h-full md:max-h-[440px]"
          style={{ backgroundImage: 'url("/images/story/story-main.jpg")' }}
          aria-label="صورة فكرة العمل"
        />
      </div>

      <div
        dir="rtl"
        className="concept-copy flex items-center text-right"
      >
        <div className="w-full max-w-4xl">
          <div className="mb-8 flex flex-col items-end gap-3">
            <p className="text-xs font-bold leading-none text-[#6a0101] sm:text-sm">
              02
            </p>
            <div className="h-0.5 w-12 bg-[#6a0101]" />
            <p className="text-sm font-normal text-white/50">
              فكرة العمل / القصة
            </p>
          </div>

          <h2 className="max-w-4xl text-[clamp(2rem,3vw,3.4rem)] font-bold leading-[1.22] text-[#f4eadc]">
            ليلة واحدة قد تغيّر كل شيء.
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-base font-normal leading-8 text-white/72 sm:text-lg sm:leading-9">
            <p>
              تبدأ أحداث «حرب الليل» مع آدم، شاب من عائلة عراقية ثرية ومعروفة،
              يعيش حياة مرفهة بين المطاعم والسهرات والفنانين والأصدقاء.
            </p>
            <p>
              صفقة تبدو بسيطة تبدأ بمبلغ صغير ووعد بربح أضعافه، لكنها تفتح أمامه
              بابًا لعالم متشابك من المال والفن والنفوذ والأسرار.
            </p>
            <p>
              ومع تقدم الأحداث يكتشف آدم أن القضية لم تعد تتعلق بأمواله فقط، وأن
              بعض الأشخاص ربما اقتربوا منه للوصول إلى والده كمال ونفوذه وعلاقاته.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
