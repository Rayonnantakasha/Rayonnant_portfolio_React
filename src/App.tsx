import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MesProjets from './pages/MesProjets'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import "./styles/App.css"
import "./styles/index.css"


function App() {
 

  return (
    <>
      <Header />
      <div className="lg:pt-2 lg:pb-40 pt-24 pb-32"/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<MesProjets />} />
      </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
