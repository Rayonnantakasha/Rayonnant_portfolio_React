import logo from "../assets/logo.svg"

function Header() {
    return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#2D383C] flex items-center justify-between lg:px-32 px-2 py-2" id="header">
      <div>
        <a href="/"><img src={logo} alt="akashadev" className="lg:w-52 w-36" /></a>
      </div>
      <nav className="sm:flex justify-between gap-4 items-center">
          <a href="/" className="hover:text-[#ff5940] font-medium transition duration-300 ease-in-out text-base">Accueil</a>
          <a href="#apropos" className="hover:text-[#ff5940] font-medium transition duration-300 ease-in-out text-base">À propos</a>
          <a href="#Artwork" className="hover:text-[#ff5940] font-medium transition duration-300 ease-in-out text-base">Projets</a>
      </nav>
    </header>
    )
}

export default Header
