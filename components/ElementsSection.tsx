"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  {
    label: "تجارة السيارات",
    note: "صفقات ومال",
    pos: "lg:left-[4%] lg:top-[8%]",
  },
  {
    label: "ديون الفنانين",
    note: "ضغط وسيطرة",
    pos: "lg:left-[31%] lg:top-[2%]",
  },
  {
    label: "المطاعم والسهر",
    note: "لقاءات وصفقات",
    pos: "lg:right-[5%] lg:top-[8%]",
  },
  {
    label: "المنتجون",
    note: "عقود ونفوذ",
    pos: "lg:left-[1%] lg:top-[40%]",
  },
  {
    label: "الشعراء والملحنون",
    note: "منافسة فنية",
    pos: "lg:right-[3%] lg:top-[38%]",
  },
  {
    label: "المستثمرون",
    note: "رأس المال",
    pos: "lg:left-[8%] lg:bottom-[7%]",
  },
  {
    label: "أطباء التجميل",
    note: "المشاهير والزبائن",
    pos: "lg:left-[34%] lg:bottom-[1%]",
  },
  {
    label: "الإعلام",
    note: "الخبر والصورة",
    pos: "lg:right-[31%] lg:bottom-[2%]",
  },
  {
    label: "السوشيال ميديا",
    note: "الحضور والنفوذ",
    pos: "lg:right-[3%] lg:bottom-[8%]",
  },
  {
    label: "الدجيتال ماركتنگ",
    note: "ضجة ومنافسة",
    pos: "lg:left-[19%] lg:top-[43%]",
  },
  {
    label: "الابتزاز",
    note: "صورة أو تسجيل",
    pos: "lg:right-[18%] lg:top-[48%]",
  },
  {
    label: "العلاقات السرية",
    note: "نقاط ضعف",
    pos: "lg:left-[45%] lg:bottom-[6%]",
  },
];

const lines = [
  [600, 250, 145, 70],
  [600, 250, 455, 40],
  [600, 250, 1050, 70],

  [600, 250, 90, 245],
  [600, 250, 1090, 245],

  [600, 250, 180, 435],
  [600, 250, 465, 455],
  [600, 250, 795, 450],
  [600, 250, 1070, 425],

  [600, 250, 335, 260],
  [600, 250, 885, 280],
  [600, 250, 625, 455],
];

export default function ElementsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="world"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-16 text-[#f4eadc] sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header
          className={`max-w-2xl transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-end gap-4">
            <span className="text-3xl font-medium text-[#6a0101]">
              03
            </span>

            <span className="mb-2 h-px w-10 bg-[#6a0101]" />

            <span className="text-sm font-light text-white/40">
              عالم حرب الليل
            </span>
          </div>

          <h2 className="text-[clamp(1.7rem,2.3vw,2.6rem)] font-medium leading-[1.4]">
            عالم واحد…
            <br />
            ومصالح لا تنتهي.
          </h2>

          <p className="mt-4 max-w-xl text-[15px] font-light leading-7 text-white/45">
            الفن والمال والإعلام والصورة تتحرك داخل شبكة واحدة،
            وكل علاقة تفتح بابًا لعلاقة أخرى.
          </p>
        </header>

        {/* Network */}
        <div className="relative mt-12 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:block lg:h-[500px]">

          {/* Animated lines */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
          >
            {lines.map(([x1, y1, x2, y2], index) => (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                pathLength="1"
                className={`network-line ${
                  index >= 9 ? "network-line-red" : ""
                } ${visible ? "network-line-visible" : ""}`}
                style={{
                  transitionDelay: `${450 + index * 90}ms`,
                }}
              />
            ))}
          </svg>

          {/* Center */}
          <div
            className={`order-first col-span-full mb-4 flex justify-center transition-all duration-1000 lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:-translate-x-1/2 lg:-translate-y-1/2 ${
              visible
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }`}
          >
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-center">
              <div className="network-ring absolute inset-3 rounded-full border border-[#6a0101]/30" />

              <div className="relative">
                <span className="text-[10px] tracking-[0.2em] text-[#6a0101]">
                  WORLD / 03
                </span>

                <h3 className="mt-2 text-xl font-medium">
                  حرب الليل
                </h3>

                <p className="mt-2 text-xs font-light text-white/35">
                  شبكة مصالح
                </p>
              </div>
            </div>
          </div>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <article
              key={node.label}
              className={`group relative transition-all duration-700 lg:absolute lg:w-[220px] ${node.pos} ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: `${1150 + index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="pt-1 text-[10px] text-[#6a0101]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[17px] font-medium text-[#f4eadc] transition duration-300 group-hover:text-white">
                    {node.label}
                  </h3>

                  <p className="mt-1 text-xs font-light text-white/32">
                    {node.note}
                  </p>

                  <span className="mt-3 block h-px w-6 bg-[#6a0101]/55 transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .network-line {
          stroke: rgba(255, 255, 255, 0.09);
          stroke-width: 1;
          vector-effect: non-scaling-stroke;

          stroke-dasharray: 1;
          stroke-dashoffset: 1;

          opacity: 0;

          transition:
            stroke-dashoffset 1.15s cubic-bezier(.4,0,.2,1),
            opacity .5s ease;
        }

        .network-line-red {
          stroke: rgba(106, 1, 1, 0.55);
        }

        .network-line-visible {
          stroke-dashoffset: 0;
          opacity: 1;
        }

        .network-ring {
          animation: networkPulse 3.5s ease-in-out infinite;
        }

        @keyframes networkPulse {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }

          50% {
            opacity: .85;
            transform: scale(1.035);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .network-line {
            transition: none;
            stroke-dashoffset: 0;
            opacity: 1;
          }

          .network-ring {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}