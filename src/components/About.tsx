import { useFadeIn } from '../../useFadeIn'

function About() {
    const visible = useFadeIn()
    return (
        <section id="apropos" className={`fade-in ${visible ? 'visible' : ''}`}>
             <div className="lg:flex lg:justify-between lg:px-32  px-3 text-center lg:items-center">
              <div>
                <h2 className="lg:text-6xl lg:mx-0 lg:text-left lg:w-[75%] text-2xl font-black">À PROPOS DE MOI</h2>
                <p className="font-bold lg:mx-0 lg:text-left pt-4 pb-2">SUIVEZ-MOI SUR</p>
                <div className="flex gap-2 items-center justify-center lg:justify-start pt-2 pb-6">
                <a href="https://www.linkedin.com/in/rayonnant-nyonsa-386b41274/" target="_blank" className="hover:scale-105 transition">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55" viewBox="0,0,256,256">
                   <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                </svg>
                </a>
                <a href="https://www.instagram.com/rayonnant_akasha/ " target="_blank" className="hover:scale-105 transition">
                <svg className="themed-stroke-icon" width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Rayonnant Nyonsa profil Linkdin</desc><path d="M18.7311 45.3333V26.6667M56.0645 21.3333V42.6667C56.0645 46.2029 54.6597 49.5943 52.1592 52.0948C49.6587 54.5952 46.2673 56 42.7311 56H21.3978C17.8616 56 14.4702 54.5952 11.9697 52.0948C9.46921 49.5943 8.06445 46.2029 8.06445 42.6667V21.3333C8.06445 17.7971 9.46921 14.4057 11.9697 11.9052C14.4702 9.40476 17.8616 8 21.3978 8H42.7311C46.2673 8 49.6587 9.40476 52.1592 11.9052C54.6597 14.4057 56.0645 17.7971 56.0645 21.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.3978 45.3333V36.6667M29.3978 36.6667V26.6667M29.3978 36.6667C29.3978 26.6667 45.3978 26.6667 45.3978 36.6667V45.3333M18.7311 18.6933L18.7578 18.664" stroke="white" stroke-width="1.5" stroke-linecap="round" 
                  stroke-linejoin="round"></path></svg>
                 </a>
                </div>
            </div>
              <div className="bg-[#38464B] lg:text-start lg:w-[40%] w-full lg:p-6 p-2 shadow-xl backdrop-opacity-60">
                 <p className="lg:text-xl text-lg pb-2">Salut ! Je suis  Rayonnant  Nyonsa</p>
                 <p className="lg:text-xl text-lg w-full lg:w-md pb-2">Je suis <span className="text-[#ff5940]">Developpeur Web FullStack</span> Passionné par le web, je conçois des maquettes percutantes, des bases de données solides et des sites internet sur mesure, alliant esthétique et performance.</p>
                 <p className="lg:text-xl text-lg w-full lg:w-md pb-2">Je suis toujours en train de développer mes compétences et d'apprendre quelque chose de nouveau. Je suis un homme de contact, un bricoleur, un amoureux de la technologie et des sciences.</p>     
                 <p className="lg:text-xl text-lg w-full lg:w-md">
                  Je suis toujours en train de développer mes compétences et d'apprendre quelque chose de nouveau. 
                  J'ai une soif de connaissances et un désir de comprendre comment les choses fonctionnent ; 
                  je suis un homme de contact, un bricoleur, un amoureux de la technologie et des sciences.
                </p>            
              </div>
            </div>
        </section>
    )
}


export default About