const artists = [
  { name: "رعد الناصري", image: "/images/artists/raad-alnaseri.jpg", tall: true },
  { name: "محمد سالم", image: "/images/artists/mohammed-salem.jpg" },
  { name: "زيد الحبيب", image: "/images/artists/zaid-alhabib.jpg" },
  { name: "نصرت البدر", image: "/images/artists/nusrat-albadr.jpg", wide: true },
  { name: "جعفر الغزال", image: "/images/artists/jaafar-alghazal.jpg" },
  { name: "قائد حلمي", image: "/images/artists/qaid-helmi.jpg" },
  { name: "سليم سالم", image: "/images/artists/salim-salem.jpg" },
  { name: "أحمد حسن", image: "/images/artists/ahmed-hassan.jpg", tall: true },
  { name: "صلاح حسن", image: "/images/artists/salah-hassan.jpg" },
  { name: "حسين الغزال", image: "/images/artists/hussein-alghazal.jpg" },
  { name: "سعدون جابر", image: "/images/artists/saadoun-jaber.jpg", wide: true },
  { name: "أمل خضير", image: "/images/artists/amal-khudair.jpg" },
  { name: "رضا الخياط", image: "/images/artists/reda-alkhayat.jpg" },
  { name: "أصيل هميم", image: "/images/artists/aseel-hameem.jpg" },
  { name: "علي كريم", image: "/images/artists/ali-karim.jpg" },
];

export default function ArtistsSection() {
  return (
    <section
      dir="rtl"
      className="artists-section relative overflow-hidden bg-[#050505] px-5 py-[90px] text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -left-10 top-0 text-[8rem] font-black leading-none text-white/[0.018] sm:text-[13rem] lg:text-[17rem]">
        ARTISTS / 07
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="artists-header max-w-3xl text-right">
          <div className="mb-7 flex items-end justify-start gap-4">
            <span className="text-5xl font-black leading-none text-[#6a0101]/80 sm:text-6xl">
              07
            </span>
            <span className="mb-2 h-px w-14 bg-[#6a0101]" />
            <span className="mb-0.5 text-sm font-normal text-white/52">
              الفنانون المقترحون
            </span>
          </div>

          <h2 className="text-[clamp(2.05rem,3.2vw,3.65rem)] font-bold leading-[1.13] text-[#f4eadc]">
            وجوه يعرفها الجمهور…
            <br />
            داخل حكاية لم يرها من قبل.
          </h2>

          <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-white/60 sm:text-lg">
            يتيح «حرب الليل» مشاركة مجموعة من نجوم الأغنية العراقية وفق التوفر
            والموافقات والتعاقدات الرسمية.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          <div className="artists-intro col-span-2 flex min-h-[260px] flex-col justify-end bg-[#220101] p-6 text-right sm:p-7 lg:row-span-2">
            <p className="text-6xl font-black leading-none text-[#f4eadc]">
              15+
            </p>
            <h3 className="mt-4 text-2xl font-bold text-[#f4eadc]">
              أسماء مقترحة
            </h3>
            <div className="my-5 h-px w-16 bg-[#6a0101]" />
            <p className="max-w-md text-base font-light leading-8 text-white/64">
              القائمة مرنة وقابلة للتغيير والإضافة وفق متطلبات السيناريو
              والميزانية والتعاقدات.
            </p>
          </div>

          {artists.map((artist, index) => (
            <article
              key={artist.name}
              className={`artist-card group relative overflow-hidden bg-[#0b0b0b] ${
                artist.tall ? "lg:row-span-2" : ""
              } ${artist.wide ? "lg:col-span-2" : ""}`}
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div
                className="artist-image absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="artist-treatment absolute inset-0 transition duration-500 group-hover:opacity-75" />

              <div className="relative z-10 flex min-h-[270px] flex-col justify-end p-4 text-right sm:min-h-[320px] sm:p-5 lg:min-h-full">
                <p className="text-xs font-bold text-[#6a0101]/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#f4eadc] transition duration-300 group-hover:-translate-y-1">
                  {artist.name}
                </h3>
                <span className="mt-3 h-px w-0 bg-[#6a0101] transition-all duration-300 group-hover:w-12" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-right text-sm font-light leading-7 text-white/52 sm:text-base">
          لا تعتمد المشاركة على الظهور كضيف شرف فقط، بل ترتبط كل مشاركة بدور أو
          أغنية أو حدث داخل مسار القصة.
        </p>
      </div>
    </section>
  );
}
