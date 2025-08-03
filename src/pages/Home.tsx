//import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import About from "../components/About"
import Skills from "../components/Skills"
import Technology from "../components/Technology"
import Artwork from "../components/Artwork"
import Form from "../components/Form"
import Contact from "../components/Contact"

import ScrollToTopButton from "../components/ScrollToTopButton"

function Home() {
    return (
        <>
        <main>
            <HeroSection />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <About />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <Skills />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <Technology />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <Artwork />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <Form />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <Contact />
            <div className="lg:pt-8 lg:pb-40 pt-24 pb-32">
            </div>
            <ScrollToTopButton />
        </main>
        </>
    )
}

export default Home
