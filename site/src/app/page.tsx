import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeatureStrip from "@/components/FeatureStrip"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#161a1f] text-white">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Footer />
    </main>
  )
}
