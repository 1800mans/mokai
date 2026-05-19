import Image from "next/image"

export default function Navbar() {
  return (
    <header className="border-b border-white/5 bg-[#161a1f]/95 backdrop-blur-sm">
      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1600px]
          items-center
          justify-between
          px-4
          md:px-10
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src="/assets/logo.png"
            alt="Mokai"
            width={34}
            height={34}
            className="object-contain"
          />

          <div
            className="
              text-[18px]
              md:text-[28px]
              tracking-[0.24em]
              md:tracking-[0.42em]
              text-white
            "
          >
            MOKAI
          </div>
        </div>

        {/* RIGHT */}
        <nav className="hidden md:flex items-center gap-12">
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-white"
          >
            Technology
          </a>

          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
