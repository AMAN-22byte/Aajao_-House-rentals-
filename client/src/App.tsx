import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import PopularDestinations from './Components/PopularDestinations'
import FeatureSelection from './Components/FeatureSelection'
import Testimonial from './Components/Testimonial'
import CtaSection from './Components/CtaSection'

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularDestinations />
        <FeatureSelection />
        <Testimonial/>
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}