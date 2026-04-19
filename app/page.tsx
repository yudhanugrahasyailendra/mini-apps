'use client';

import { useState, useRef } from 'react';

function Heart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-7.2-4.35-9.6-8.4C.67 9.36 1.84 6 5.25 6c1.95 0 3.15 1.05 3.75 2.1.6-1.05 1.8-2.1 3.75-2.1 3.42 0 4.58 3.36 2.85 6.6C14.2 16.65 12 21 12 21Z" />
    </svg>
  );
}

const FLOWER_ROTATIONS = [0, 72, 144, 216, 288] as const;

function SmallFlower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <g transform="translate(16 16)">
        {FLOWER_ROTATIONS.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-8.2"
            rx="4.3"
            ry="7.4"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="3.3" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10 sm:p-6">
      <div className="pink-dot-overlay" aria-hidden />

      {/* Lapisan pink — banyak blob */}
      <div className="pointer-events-none absolute -left-40 top-[-5%] z-0 h-[28rem] w-[28rem] rounded-full bg-[color-mix(in_srgb,var(--blush)_70%,transparent)] blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-[-8%] z-0 h-[26rem] w-[26rem] rounded-full bg-[color-mix(in_srgb,var(--mauve)_65%,transparent)] blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[55%] z-0 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--bubblegum)_55%,transparent)] blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[12%] z-0 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--pink-hot)_45%,transparent)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-[8%] z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--pink-mist)_58%,transparent)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[20%] left-[20%] z-0 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--pink-accent)_35%,transparent)] blur-2xl" />

      {/* Hati dekoratif */}
      <Heart className="decor-float pointer-events-none absolute left-[6%] top-[14%] z-[2] h-7 w-7 text-[color-mix(in_srgb,var(--pink-accent)_45%,transparent)] sm:left-[10%] sm:top-[18%] sm:h-9 sm:w-9" />
      <Heart className="decor-float-delayed pointer-events-none absolute right-[8%] top-[22%] z-[2] h-6 w-6 text-[color-mix(in_srgb,var(--pink-deep)_40%,transparent)] sm:right-[12%] sm:h-8 sm:w-8" />
      <Heart className="decor-float pointer-events-none absolute bottom-[18%] left-[12%] z-[2] h-5 w-5 text-[color-mix(in_srgb,var(--mauve)_50%,transparent)] sm:bottom-[22%] sm:h-7 sm:w-7" />
      <Heart className="decor-float-delayed pointer-events-none absolute bottom-[14%] right-[10%] z-[2] h-8 w-8 text-[color-mix(in_srgb,var(--bubblegum)_50%,transparent)] sm:h-10 sm:w-10" />

      <SmallFlower className="decor-float pointer-events-none absolute left-[18%] top-[38%] z-[2] h-6 w-6 text-[color-mix(in_srgb,var(--pink-accent)_38%,transparent)] sm:h-8 sm:w-8" />
      <SmallFlower className="decor-float-delayed pointer-events-none absolute right-[16%] top-[48%] z-[2] h-5 w-5 text-[color-mix(in_srgb,var(--mauve)_45%,transparent)] sm:h-7 sm:w-7" />
      <SmallFlower className="decor-float pointer-events-none absolute left-[22%] bottom-[12%] z-[2] h-4 w-4 text-[color-mix(in_srgb,var(--pink-deep)_35%,transparent)] sm:bottom-[15%] sm:h-6 sm:w-6" />
      <SmallFlower className="decor-float-delayed pointer-events-none absolute right-[20%] bottom-[28%] z-[2] h-5 w-5 text-[color-mix(in_srgb,var(--bubblegum)_42%,transparent)]" />

      {!showSurprise ? (
        <div className="relative z-10 w-full max-w-md sm:max-w-lg">
          <div className="card-pink-frame rounded-[2.35rem] p-[3px]">
            <section className="card-soft-dots rounded-[2.2rem] bg-gradient-to-b from-[var(--card-inner)] to-[color-mix(in_srgb,var(--card-inner)_88%,var(--pink-mist))] px-8 py-11 text-center shadow-inner dark:from-[var(--card-inner)] dark:to-[color-mix(in_srgb,var(--cream)_95%,var(--pink-mist))]">
              <div className="mb-5 flex justify-center gap-2 opacity-90">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--pink-accent)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--pink-deep)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[color-mix(in_srgb,var(--mauve)_90%,var(--pink-accent))]" />
              </div>
              <p className="font-display mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[var(--pink-deep)] sm:text-xs">
                Untuk kamu
              </p>
              <h1 className="font-display mb-9 text-[1.75rem] font-medium leading-[1.32] tracking-[-0.02em] text-[var(--foreground)] sm:text-[1.95rem]">
                Ada sesuatu untuk kita&apos; Tante
              </h1>
              <button
                type="button"
                onClick={handleClick}
                className="btn-pop inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--pink-hot)] via-[var(--pink-accent)] to-[var(--pink-deep)] px-11 py-4 text-base font-semibold tracking-wide text-white shadow-[0_8px_28px_-6px_rgba(236,64,122,0.65),0_4px_14px_-4px_rgba(194,24,91,0.45)] transition-[transform,box-shadow] hover:shadow-[0_12px_36px_-8px_rgba(236,64,122,0.7)] active:scale-[0.98]"
              >
                Wajib di klik NAH
              </button>
            </section>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-2xl p-[3px]">
          <div className="card-pink-frame rounded-[2.35rem] p-[3px]">
            <section className="card-soft-dots animate-slow-fade rounded-[2.2rem] bg-gradient-to-b from-[var(--card-inner)] via-[color-mix(in_srgb,var(--card-inner)_92%,var(--pink-mist))] to-[color-mix(in_srgb,var(--pink-mist)_35%,var(--card-inner))] px-7 py-9 text-center shadow-inner sm:px-11 sm:py-11 dark:via-[color-mix(in_srgb,var(--cream)_94%,var(--pink-mist))] dark:to-[color-mix(in_srgb,var(--cream)_90%,var(--pink-mist))]">
              <div className="mb-4 flex justify-center gap-2">
                <Heart className="h-5 w-5 text-[color-mix(in_srgb,var(--pink-accent)_75%,transparent)]" />
                <Heart className="h-5 w-5 text-[color-mix(in_srgb,var(--pink-deep)_80%,transparent)]" />
                <Heart className="h-5 w-5 text-[color-mix(in_srgb,var(--mauve)_85%,var(--pink-accent))]" />
              </div>
              <h1 className="font-display mb-5 text-[1.9rem] font-medium leading-[1.28] tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.55rem]">
                Selamat Ulang Tahun
                <br />
                <span className="bg-gradient-to-r from-[var(--pink-deep)] via-[var(--pink-hot)] to-[var(--pink-accent)] bg-clip-text text-transparent">
                  Nur Aminia
                </span>
              </h1>
              <p className="copy-readable mx-auto mb-8 max-w-xl font-medium">
                Semoga panjang umur, sehat selalu &amp; banyak rezekinya.
              </p>

              <div className="relative mx-auto mb-9 w-fit">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[color-mix(in_srgb,var(--blush)_85%,transparent)] via-[color-mix(in_srgb,var(--bubblegum)_70%,transparent)] to-[color-mix(in_srgb,var(--mauve)_80%,transparent)] opacity-95 blur-md" />
                <div className="absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-[var(--pink-accent)] to-[var(--mauve)] opacity-40 blur-[2px]" />
                <img
                  src="/images/Mini.png"
                  alt="Foto Mini"
                  className="relative h-64 w-64 rounded-[1.55rem] border-[3px] border-[color-mix(in_srgb,white_75%,var(--pink-mist))] object-cover shadow-xl dark:border-[color-mix(in_srgb,var(--pink-accent)_28%,transparent)]"
                />
              </div>

              <p className="copy-readable mx-auto max-w-xl text-[var(--text-muted)]">
                Terima kasih atas semua yang telah dilakukan.
                <br />
                Semoga hari-hari ta&apos; penuh dengan kebahagiaan dan kesenangan.
                <br />
                Jangki lupa perbanyak zikir dan perbanyak Minum Air Matcha &amp; Escream.
                <br />
                Sekian &amp; terima gaji.
                <br />
                <br />
                <span className="text-[color-mix(in_srgb,var(--text-muted)_82%,var(--pink-deep))]">
                  Karya ini dipersembahkan oleh programmer abal-abal.
                </span>
              </p>

              <audio ref={audioRef} src="/sounds/Raisa - Serba Salah.mp3" loop />
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
