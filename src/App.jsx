import './App.css'
import Contactform from './components/Contactform'
import Faqsection from './components/Faqsection'
import Featuresection from './components/Featuresection'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Offersection from './components/Offersection'
import Pricingsection from './components/Pricingsection'
import Testimonialsection from './components/Testimonialsection'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <div className="bg-[url(/hero-bg.png)] bg-black bg-fixed flex items-center flex-col bg-cover bg-center h-full w-full pt-10">
        <Navbar />
        <Herosection />
        <img src="/text-content.png" alt="Text Content" className="w-4/5 object-contain px-4 -mt-[70px]" />
        <Featuresection />
        <Offersection />
        <Testimonialsection />
        <Faqsection />
        <Pricingsection />
        <div className="w-full flex justify-center items-center py-20">
          <Contactform />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
