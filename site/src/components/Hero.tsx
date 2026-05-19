import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#1b2026] to-[#161a1f] px-4">
      {/* glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[420px] w-[420px]
          md:h-[760px] md:w-[760px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[120px]
          md:blur-[160px]
        "
      />

      <div className="relative flex flex-col items-center text-center">
        {/* LOGO */}
        <div className="relative h-[220px] w-full max-w-[720px] md:h-[420px]">
          <Image
            src="/assets/logo.png"
            alt="Mokai"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TAGLINE */}
        <p
          className="
            mt-2
            px-2
            text-[11px]
            sm:text-[14px]
            md:text-[22px]
            uppercase
            tracking-[0.18em]
            md:tracking-[0.38em]
            text-[#d8dde3]
          "
        >
          Operating System For Precision Agriculture
        </p>

        <div className="mt-7 h-[2px] w-[120px] bg-gradient-to-r from-cyan-400 to-lime-400 md:w-[150px]" />

        <p
          className="
            mt-7
            max-w-[760px]
            px-4
            text-[15px]
            leading-7
            md:text-[18px]
            md:leading-8
            text-slate-300
          "
        >
          Closed-loop, data-driven infrastructure for irrigation,
          fertigation and agricultural telemetry.
        </p>

        <button
          className="
            mt-8
            h-[50px]
            w-[260px]
            md:w-[300px]
            border
            border-lime-400/40
            bg-[#20262d]/50
            text-[11px]
            md:text-[12px]
            uppercase
            tracking-[0.22em]
            md:tracking-[0.28em]
            text-lime-300
            transition-all
            duration-200
            hover:border-lime-400/80
            hover:bg-lime-400/10
            hover:text-white
          "
        >
          Explore Architecture
        </button>
      </div>
    </section>
  )
}
