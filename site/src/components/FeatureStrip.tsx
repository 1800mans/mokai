import {
  Droplets,
  Leaf,
  BrainCircuit,
  Wifi,
  ShieldCheck,
} from "lucide-react"

export default function FeatureStrip() {
  return (
    <section className="border-y border-white/5 bg-[#1b2026]/70 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

        <Feature
          icon={<Droplets size={28} strokeWidth={1.5} />}
          title="Water"
          description="Optimize every drop. Maximize efficiency."
        />

        <Feature
          icon={<Leaf size={34} strokeWidth={1.5} />}
          title="Growth"
          description="Healthier crops. Higher yields."
        />

        <Feature
          icon={<BrainCircuit size={34} strokeWidth={1.5} />}
          title="Intelligence"
          description="Data to insight. Better decisions."
        />

        <Feature
          icon={<Wifi size={34} strokeWidth={1.5} />}
          title="Connected"
          description="Integrated telemetry and seamless connectivity."
        />

        <Feature
          icon={<ShieldCheck size={34} strokeWidth={1.5} />}
          title="Reliable"
          description="Built for unstable environments."
        />
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div
      className="
      group
      flex min-h-[150px] md:h-[130px] flex-col items-center justify-center
      border-r border-b md:border-b-0 border-white/5
      px-4 md:px-6
      text-center
      transition-colors
      duration-300
      last:border-r-0
      "
    >

      {/* ICON */}
      <div
        className="
          mb-4
          text-cyan-400
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:text-lime-400
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <div className="text-[11px] md:text-[13px] uppercase tracking-[0.18em] md:tracking-[0.24em] text-lime-400">
        {title}
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-[180px] text-[12px] md:text-[13px] leading-5 text-slate-500">
        {description}
      </p>
    </div>
  )
}
