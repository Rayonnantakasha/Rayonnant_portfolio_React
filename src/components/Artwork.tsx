import {useFadeIn} from '../../useFadeIn'

function Artwork() {
    const visible = useFadeIn()
    return (
        <section className={`fade-in ${visible ? 'visible' : ''}`}>
           <div className="text-center">
               <h2 className="lg:text-8xl text-6xl font-black text-outline-white">
                Envie de <br />découvrir mes <br /> œuvres ? </h2>
               <div className="pt-12">
                  <a href="/projets" className="bg-[#ff5940] p-4 hover:bg-orange-800 transition duration-300 ease-in-out">
                     <span className="font-bold">CLIQUEZ ICI</span>
                  </a>
               </div>
           </div>
        </section>
    )
}

export default Artwork