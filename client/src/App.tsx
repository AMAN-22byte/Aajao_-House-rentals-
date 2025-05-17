import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import PopularDestinations from './Components/PopularDestinations'
import FeatureSelection from './Components/FeatureSelection'
import Testimonial from './Components/Testimonial'
import CtaSection from './Components/CtaSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './Components/Privacy'

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <PopularDestinations />
                <FeatureSelection />
                <Testimonial />
                <CtaSection />
              </>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
