import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Skills from "./components/Skills"
import Technology from "./components/Technology"
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
      <div className="lg:pb-32 pt-24 pb-32">
      </div>
      <About />
      <div className="lg:pb-32 pt-24 pb-32">
      </div>
      <Skills />
      <div className="lg:pb-32 pt-24 pb-32">
      </div>
      <Technology />
      <div className="lg:pb-32 pt-24 pb-32">
      </div>
     </main>
      
    </>
  )
}

export default App
