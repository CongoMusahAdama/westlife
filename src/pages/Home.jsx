import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchPanel from '../components/SearchPanel'
import Brands from '../components/Brands'
import Trending from '../components/Trending'
import VehicleTypes from '../components/VehicleTypes'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Cars from '../components/Cars'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchPanel />
        <Brands />
        <Trending />
        <VehicleTypes />
        <About />
        <Cars />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
