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
      <div
        className="
          mx-auto
          flex
          max-w-[1600px]
          snap-x
          snap-mandatory
          overflow-x-auto
          scrollbar-hide
          lg:grid
          lg:grid-cols-5
          lg:overflow-visible
        "
      >
        <Feature
          icon={<Droplets size={30} strokeWidth={1.5} />}
          title="Water"
          description="Optimize every drop. Maximize efficiency."
        />

        <Feature
          icon={<Leaf size={30} strokeWidth={1.5} />}
          title="Growth"
          description="Healthier crops. Higher yields."
        />

        <Feature
          icon={<BrainCircuit size={30} strokeWidth={1.5} />}
          title="Intelligence"
          description="Data to insight. Better decisions."
        />

        <Feature
          icon={<Wifi size={30} strokeWidth={1.5} />}
          title="Connected"
          description="Integrated telemetry and seamless connectivity."
        />

        <Feature
          icon={<ShieldCheck size={30} strokeWidth={1.5} />}
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
        flex
        h-[128px]
        min-w-[220px]
        snap-center
        flex-col
        items-center
        justify-center
        border-r
        border-white/5
        px-5
        text-center
        transition-colors
        duration-300
        last:border-r-0
        lg:min-w-0
        lg:h-[130px]
        lg:px-6
      "
    >
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

      <div
        className="
          text-[11px]
          uppercase
          tracking-[0.2em]
          text-lime-400
          lg:text-[13px]
          lg:tracking-[0.24em]
        "
      >
        {title}
      </div>

      <p
        className="
          hidden
          mt-3
          max-w-[180px]
          text-[13px]
          leading-5
          text-slate-500
          lg:block
        "
      >
        {description}
      </p>
    </div>
  )
}
