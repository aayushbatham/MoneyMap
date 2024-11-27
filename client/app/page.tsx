import { GradientBlob1, GradientBlob2, GradientBlob3 } from '@/components/GradientBlobs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <GradientBlob1 />
        <GradientBlob2 />
        <GradientBlob3 />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
