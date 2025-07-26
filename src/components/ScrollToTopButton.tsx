import { useEffect, useState } from 'react'
 // ou n'importe quelle icône

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300) // bouton visible après 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-16 p-3 bg-transparent border border-white text-white hover:border-[#ff5940] hover:text-white shadow-lg transition duration-300 ease-in-out z-50"
      aria-label="Retour en haut"
    >
      <i className="fas fa-arrow-up hover:text-[#ff5940] transition duration-300 ease-in-out"/>
    </button>
  ) : null
}

export default ScrollToTopButton
