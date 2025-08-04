import {useFadeIn} from '../../useFadeIn'

function Artwork() {
    const visible = useFadeIn()
    return (
        <section id='Artwork' className={`fade-in ${visible ? 'visible' : ''}`}>
             <div className='flex justify-center'>
               <h2 className="lg:text-8xl lg:text-left text-5xl px-2 text-center lg:w-[45%] font-black text-outline-white">
                Découvrez mes œuvres
               </h2>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-32 px-3 lg:py-32 pt-24'>
             <div className="flex flex-col bg-[#38464B] shadow-2xs ">
               <div className="p-4 md:p-10">
                 <h3 className="text-lg lg:text-left text-center font-bold text-[#ff5940] pb-4 dark:text-white">
                    Application  Twitter X
                 </h3>
                 <p className="mt-2 lg:text-left text-center text-gray-100 dark:text-neutral-400">
                 Dans le cadre de mon projet chef-d'œuvre de fin d’étude, 
                 j’ai conçu et développé un clone de Twitter (actuellement appelé X) en utilisant le framework JavaScript. 
                 Le site intègre les principales fonctionnalités de la plateforme originale, notamment : La création de compte et l’authentification sécurisée, La publication de tweets, avec ou sans image,
                 La possibilité de liker et commenter les publications, La modification du profil utilisateur et de la biographie.
                 </p>
                 <a className="mt-8 lg:inline-flex flex justify-center items-center gap-x-1 text-sm font-bold bg-[#ff5940] p-4 hover:bg-orange-800 transition duration-300 ease-in-out " href="http://tweeter-clone-with-adonis-js-ray-production.up.railway.app">
                   VISITER LE SITE
                 </a>
               </div>
             </div>
             <div className="flex flex-col bg-[#38464B] shadow-2xs  ">
               <div className="p-4 md:p-10">
                 <h3 className="text-lg lg:text-left font-bold text-center text-[#ff5940] pb-4 dark:text-white">
                    Fashion Boutique WordPress
                 </h3>
                 <p className="mt-2 lg:text-left text-gray-100 text-center dark:text-neutral-400">
                 Le site intègre les principales fonctionnalités d'une boutique en ligne, notamment : Un thème installé,
                 Les configurations de base faite, Les pages (Accueil, À propos, Nos actualités, Contact). Un menu de navigation fonctionnel. Le logo de Fashion sur l'entête, Les extensions standard installé et enfin
                 L'icône de de la boutique Fashion sur les onglets de navigation sur les pages qui affichent le site.
                 </p>
                 <a className="mt-8 lg:inline-flex flex justify-center items-center gap-x-1 text-sm font-bold bg-[#ff5940] p-4 hover:bg-orange-800 transition duration-300 ease-in-out " href="https://dev-fashion-akasha.pantheonsite.io/" target="_blank">
                   VISITER LE SITE
                 </a>
               </div>
             </div>
             <div className="flex flex-col bg-[#38464B] shadow-2xs  ">
               <div className="p-4 md:p-10">
                 <h3 className="text-lg lg:text-left font-bold text-center text-[#ff5940] pb-4 dark:text-white">
                     Projet Sunnyside
                 </h3>
                 <p className="mt-2 lg:text-left text-gray-100 text-center dark:text-neutral-400">
                 Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end
                 </p>
                 <a className="mt-8 lg:inline-flex flex justify-center items-center gap-x-1 text-sm font-bold bg-[#ff5940] p-4 hover:bg-orange-800 transition duration-300 ease-in-out " href="#">
                   VISITER LE SITE
                 </a>
               </div>
             </div>
             </div>
        </section>
    )
}

export default Artwork

