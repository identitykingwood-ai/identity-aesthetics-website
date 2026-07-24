"use client";

type BrandLogo = {
  name: string;
  src: string;
};

const logos: BrandLogo[] = [
  {
    name: "Sciton",
    src: "/images/brand-logos/sciton.png",
  },
  {
    name: "Rohrer Aesthetics",
    src: "/images/brand-logos/rohrer.png",
  },
  {
    name: "Botox",
    src: "/images/brand-logos/botox.png",
  },
  {
    name: "Jeuveau",
    src: "/images/brand-logos/jeuveau.png",
  },
  {
    name: "Dysport",
    src: "/images/brand-logos/dysport.png",
  },
  {
    name: "Xeomin",
    src: "/images/brand-logos/xeomin.png",
  },
  {
    name: "Restylane",
    src: "/images/brand-logos/restylane.png",
  },
  {
    name: "Radiesse",
    src: "/images/brand-logos/radiesse.png",
  },
  {
    name: "Epionce",
    src: "/images/brand-logos/epionce.png",
  },
  {
    name: "Revision Skincare",
    src: "/images/brand-logos/revision.png",
  },
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-24 shrink-0 items-center justify-center px-3 md:h-28 md:px-4"
        >
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="h-14 w-auto max-w-none object-contain opacity-85 md:h-16"
          />
        </div>
      ))}
    </div>
  );
}

export default function Results() {
  return (
    <section
      className="overflow-hidden border-y border-stone-200 bg-white py-10 md:py-12"
      aria-label="Technology, injectable, and skincare brands"
    >
      <div className="logo-marquee relative w-full overflow-hidden">
        <div className="logo-track flex w-max items-center">
          <LogoRow />
          <LogoRow />
        </div>
      </div>

      <style jsx>{`
        .logo-track {
          animation: logo-scroll 48s linear infinite;
          will-change: transform;
        }

        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }

        .logo-marquee::before,
        .logo-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 10;
          width: 64px;
          pointer-events: none;
        }

        .logo-marquee::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .logo-marquee::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-track {
            animation-duration: 34s;
          }

          .logo-marquee::before,
          .logo-marquee::after {
            width: 32px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}