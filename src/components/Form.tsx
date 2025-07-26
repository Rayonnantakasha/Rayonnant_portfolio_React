import { useFadeIn } from '../../useFadeIn'

function Form() {
    const visible = useFadeIn()
    return (
        <section>
           <div className={`container mx-auto px-6 ${visible ? 'visible' : ''}`}>
             <h2 className="lg:text-6xl text-xl font-bold mb-4 text-center">Envoyez un message !</h2>
             <p className="text-center text-gray-200 mb-12">Vous avez une question ou une proposition, ou vous souhaitez simplement <br/> dire bonjour ? Allez-y</p>
    
         <form id="contact-form" className="max-w-3xl mx-auto pt-8" action="https://formspree.io/f/xyzjrzdr" method="POST" accept-charset="UTF-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
                <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE NOM</label>
                <input name="name" type="text" placeholder="Entrez votre nom" className="input-field w-full font-semibold py-2 text-white text-base" />
            </div>
            <div>
                <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE EMAIL</label>
                <input name="email" type="email" placeholder="Entrez votre email" className="input-field w-full py-2 font-semibold text-white text-base" />
            </div>
        </div>
        <div className="mb-8">
            <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE MESSAGE</label>
            <textarea name="message" placeholder="Écrivez votre message" rows={4} className="input-field w-full font-semibold py-2 text-white text-base"></textarea>
        </div>
          <button type="submit" className="w-full bg-[#ff5940] hover:bg-orange-800 transition duration-300 ease-in-out font-bold text-white py-3">ENVOYEZ VOTRE MESSAGE</button>
         </form>
        </div>
        </section>
    )
}

export default Form
