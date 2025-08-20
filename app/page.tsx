// app/page.js
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection' 
import ServicesSection from './components/ServicesSection'
import ReviewsCarousel from './components/ReviewCarousel'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'
import "./globals.css"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ReviewsCarousel />
      <PhotoGallery />
    </main>
  )
}