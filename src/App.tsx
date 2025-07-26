import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Skills from "./components/Skills"
import Technology from "./components/Technology"
import Artwork from "./components/Artwork"
import Form from "./components/Form"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/App.css"
import "./styles/index.css"


function App() {
 

  return (
    <>
      <Header />
      <div className="lg:pb-8 pt-24 pb-32">
      </div>
     <main className="lg:px-32 px-2">
      <HeroSection />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <About />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <Skills />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <Technology />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <Artwork />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <Form />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
      <Contact />
      <div className="lg:pb-32 pt-32 pb-32">
      </div>
     </main>
     <Footer />
      
    </>
  )
}

export default App
