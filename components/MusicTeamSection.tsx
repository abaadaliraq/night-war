const lyricists = [
  "ضياء الميالي",
  "يوسف السوداني",
  "خالد إبراهيم",
  "أبو حسن العقابي",
];

export default function MusicTeamSection() {
  return (
    <section
      dir="rtl"
      className="music-team-section relative overflow-hidden bg-[#050505] px-5 py-20 text-[#f4eadc] sm:px-8 md:min-h-[520px] md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute bottom-8 left-[8%] text-[7rem] font-black leading-none text-white/[0.018] sm:text-[11rem]">
        STUDIO / 08
      </div>
      <div className="music-team-wave-bg pointer-events-none absolute left-[12%] top-[24%] hidden w-[38%] lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr_0.72fr] lg:items-center">
        <div className="music-team-copy text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              08
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              الفريق الموسيقي
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(2.05rem,3.05vw,3.45rem)] font-bold leading-[1.15] text-[#f4eadc]">
            من الكلمة…
            <br />
            إلى الصوت الذي يصل للجمهور.
          </h2>

          <p className="mt-6 max-w-xl text-base font-normal leading-8 text-white/60 sm:text-lg">
            يشكل الإنتاج الموسيقي أحد أهم أعمدة «حرب الليل»، حيث تُكتب وتُلحن
            الأغاني لخدمة الشخصيات والأحداث الدرامية.
          </p>
        </div>

        <div className="music-team-list">
          <div className="mb-9">
            <div className="mb-5 flex items-center justify-start gap-3 text-right">
              <span className="text-sm font-bold text-[#6a0101]">01</span>
              <span className="h-px w-10 bg-[#6a0101]" />
              <h3 className="text-xl font-bold text-[#f4eadc]">كلمات الأغاني</h3>
            </div>

            <div className="space-y-4">
              {lyricists.map((name, index) => (
                <div
                  key={name}
                  className="music-team-row group flex items-center justify-start gap-4 text-right"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="w-7 text-xs font-bold text-[#6a0101]/78">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/14 transition duration-300 group-hover:w-14 group-hover:bg-[#6a0101]" />
                  <span className="text-lg font-normal text-[#f4eadc]/90 transition duration-300 group-hover:-translate-y-0.5">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="music-team-lead text-right">
            <div className="mb-4 flex items-center justify-start gap-3">
              <span className="text-sm font-bold text-[#6a0101]">02</span>
              <span className="h-px w-12 bg-[#6a0101]" />
            </div>
            <h3 className="text-[clamp(2rem,3vw,3.1rem)] font-bold leading-none text-[#f4eadc]">
              نصرت البدر
            </h3>
            <div className="mt-5 space-y-2 text-base font-light leading-7 text-white/62 sm:text-lg">
              <p>الألحان والإشراف الموسيقي</p>
              <p>التسجيل الصوتي والماسترينغ</p>
            </div>
          </div>
        </div>

        <div className="music-team-media h-[300px] overflow-hidden sm:h-[380px] lg:h-[430px]">
          <div className="music-team-image h-full w-full bg-cover bg-center" />
        </div>

        <p className="music-team-closing text-right text-sm font-light leading-7 text-white/52 lg:col-span-3 lg:max-w-2xl">
          الهدف أن تولد الأغنية داخل القصة، ثم تمتلك القدرة على الحياة خارج
          المسلسل أيضًا.
        </p>
      </div>
    </section>
  );
}
