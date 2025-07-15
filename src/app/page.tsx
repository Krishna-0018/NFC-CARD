import BannerSection from "./components/sections/BannerSection"
import TrustBadges from "./components/sections/TrustBadges"
import ProductGrid from "./components/sections/ProductGrid"
import AboutSection from "./components/sections/AboutSection"
import BlogSection from "./components/sections/BlogSection"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function MainSection() {
  return (
    <div className="flex flex-col">
       <Header />
      <BannerSection />
      <TrustBadges />
      <ProductGrid />
      <AboutSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
