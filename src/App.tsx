import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import "./styles/App.css"
import "./styles/index.css"


function App() {
 

  return (
    <>
      <Header />
      <main className='min-h-screen pt-24'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
