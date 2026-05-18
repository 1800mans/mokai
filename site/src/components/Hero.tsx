import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#1b2026] to-[#161a1f]">
      <div
        className="
          absolute left-1/2 top-1/2
          h-[760px] w-[760px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[160px]
        "
      />

      <div className="relative flex flex-col items-center px-8 text-center">
        {/* MAIN LOGO */}
        <div className="relative h-[420px] w-[720px]">
          <Image
            src="/assets/logo.png"
            alt="Mokai"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TAGLINE — CODE TEXT */}
        <p className="mt-2 text-[22px] uppercase tracking-[0.38em] text-[#d8dde3]">
          Operating System For Precision Agriculture
        </p>

        <div className="mt-9 h-[3px] w-[150px] bg-gradient-to-r from-cyan-400 to-lime-400" />

        <p className="mt-9 max-w-[760px] text-[18px] leading-8 text-slate-300">
          Closed-loop, data-driven infrastructure for irrigation,
          fertigation and agricultural telemetry.
        </p>

        <button
          className="
            mt-10
            h-[52px]
            w-[300px]
            border
            border-lime-400/40
            bg-[#20262d]/50
            text-[12px]
            uppercase
            tracking-[0.28em]
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
