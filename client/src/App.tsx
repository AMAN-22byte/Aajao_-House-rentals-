import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import PopularDestinations from './Components/PopularDestinations';
import FeatureSelection from './Components/FeatureSelection';
import Testimonial from './Components/Testimonial';
import CtaSection from './Components/CtaSection';
import { Routes, Route } from 'react-router-dom';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Cancel from './Components/Cancel';
import Agreements from './Components/Agreements';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Blog1 from './Components/Blog1';


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
          <Route path="/T&C" element={<Terms/>} />
          <Route path="/Cancel" element={<Cancel/>} />
          <Route path="/Host&Agreements" element={<Agreements/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/About" element={<About/>} />
          <Route path="Blogs/blog1" element={<Blog1/>} />
          <Route path="Blogs/blog2" element={<Blog1/>} />
          <Route path="Blogs/blog3" element={<Blog1/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
