import BottleStage from './components/BottleStage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Features from './components/Features'
import Product from './components/Product'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      {/* Single 3D bottle — fixed overlay, persists across all sections */}
      <BottleStage />

      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Features />
        <Product />
        <About />
      </main>
      <Footer />
    </div>
  )
}
