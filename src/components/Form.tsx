import { useFadeIn } from '../../useFadeIn'
import { useState } from 'react'
import { useEffect } from 'react'

function Form() {
    const visible = useFadeIn()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (status !== 'idle') {
          const timer = setTimeout(() => {
            setStatus('idle')
          }, 4000)
      
          return () => clearTimeout(timer)
        }
      }, [status])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('https://formspree.io/f/xyzjrzdr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setStatus('error')
        }
    }
    return (
        <section id='form'>
           <div className={`container mx-auto px-6 ${visible ? 'visible' : ''}`}>
             <h2 className="lg:text-6xl text-2xl font-bold mb-6 text-center">Commandez un site Web</h2>
             <p className="text-center text-gray-200 mb-12">Transformez votre vision en réalité numérique. Décrivez votre projet ci-dessous, <br />et je vous aiderai à créer un site Web époustouflant et fonctionnel. </p>
    
          <form id="contact-form" className="max-w-3xl mx-auto pt-8" onSubmit={handleSubmit}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
                <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE NOM</label>
                 <input name="name" type="text" placeholder="Entrez votre nom" className="input-field w-full font-semibold py-2 text-white text-base" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE EMAIL</label>
                 <input name="email" type="email" placeholder="Entrez votre email" className="input-field w-full py-2 font-semibold text-white text-base" value={formData.email} onChange={handleChange} required />
            </div>
        </div>
        <div className="mb-8">
            <label className="block text-gray-200 text-base font-semibold mb-2">VOTRE MESSAGE</label>
             <textarea name="message" placeholder="Détails du Projet (Décrivez votre idée, vos fonctionnalités souhaitées, et tout ce que nous devrions savoir)" rows={4} className="input-field w-full font-semibold py-2 text-white text-base" value={formData.message} onChange={handleChange} required></textarea>
        </div>
          <button type="submit" className="w-full bg-[#ff5940] hover:bg-orange-800 transition duration-300 ease-in-out font-bold text-white py-3">ENVOYEZ VOTRE MESSAGE</button>
          
          {/* Status feedback */}
          {status === 'success' && (
            <div className="text-green-400 text-center mb-6 z-30 flex flex-col items-center gap-2 success-animation">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ff5940]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Message envoyé avec succès !</span>
            </div>
          )}

            {status === 'error' && (
           <div className="fade-slide-in mb-6 z-30 flex items-center justify-center gap-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Erreur lors de l’envoi du message.</span>
           </div>
        )}

         </form>
        </div>
        </section>
    )
}

export default Form
