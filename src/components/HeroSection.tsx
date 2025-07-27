import { useFadeIn } from '../../useFadeIn'
import monProfil from "../assets/monProfil.png"

function HeroSection() {
    const visible = useFadeIn()
    return (
    <section className={`fade-in ${visible ? 'visible' : ''}`}>
       <div className="lg:flex lg:items-center lg:justify-between lg:px-32  lg:items-center">
         <div>
            <h2 className="card lg:text-8xl pb-2 text-5xl md:text-6xl text-outline-white font-black">Je suis</h2>
            <h2 className="card lg:text-8xl pb-2 text-5xl md:text-6xl font-black">Devellopeur</h2>
            <h2 className="card lg:text-8xl pb-2 text-5xl md:text-6xl font-black text-[#ff5940]">Fullstack</h2>
            <p className="lg:w-[60%] md:w-[70%] w-64 lg:mx-0 lg:text-left mx-auto text-center lg:text-xl pt-4">Entre logique et créativité, je bâtis des interfaces qui parlent autant aux humains qu’aux machines</p>
            <div className="pt-12 flex flex-col items-center lg:flex-row lg:items-center lg:justify-start lg:gap-4">
            <a href="#form">
               <button className="bg-[#ff5940] p-4 hover:bg-orange-800 transition duration-300 ease-in-out">
                <span className="font-bold">ECRIVEZ-MOI</span>
              </button>
           </a>
           <a href="/CV_Rayonnant_Nyonsa.pdf" target="_blank" rel="noopener" className="text-[#ff5940] lg:pt-0 pt-8 font-bold flex items-center gap-1 hover:text-white transition duration-300 ease-in-out">
               MON CV
             <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
              role="img" className="iconify iconify--iconoir" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" 
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 7h10M7 12h10M7 17h6" className="mb-px text-[#ff5940] hover:text-white"></path>
             </svg>
           </a>
         </div> 
         </div>
        <div>
            <img src={monProfil} alt="monProfil" width="500" height="500" className="mx-auto block pb-16" />
        </div>
       </div>

    </section>
    )
}


export default HeroSection