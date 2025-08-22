// app/page.js
import HeroSection from './components/HeroSection' 
import ServicesSection from './components/ServicesSection'
import ReviewsCarousel from './components/ReviewCarousel'
import PhotoGallery from './components/PhotoGallery'
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