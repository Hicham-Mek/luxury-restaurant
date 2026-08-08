
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Reservation from "./components/Reservation";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <div className="bg-charcoal text-white">
      <Navbar />
      <Hero />
      <Menu />
      <Specials />
      <Reservation />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App
