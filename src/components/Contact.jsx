import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Send, User, MessageCircle, Mail as MailIcon } from 'lucide-react'
import Magnetic from './Magnetic'
import { toast } from 'react-hot-toast'

const validateForm = (formData) => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Identification required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Valid contact point required'
    if (!formData.message.trim() || formData.message.trim().length < 10) errors.message = 'Conceptual detail must be > 10 chars'
    return errors
}

const Contact = () => {
    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = React.useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const validationErrors = validateForm(formState)
        if (Object.keys(validationErrors).length > 0) {
            Object.values(validationErrors).forEach(err => toast.error(err))
            return
        }

        setStatus('loading')
        const loadingToast = toast.loading('Initiating transmission...')

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'https://tithishah-backend.onrender.com';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            const data = await response.json()
            
            if (response.ok) {
                toast.success('Transmission successful. I will reach out shortly.', { id: loadingToast })
                setStatus('success')
                setFormState({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                throw new Error(data.msg || 'Transmission failed')
            }
        } catch (error) {
            console.error('Contact Error:', error)
            toast.error('System bypass failure. Please try direct email.', { id: loadingToast })
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const inputClasses = "w-full bg-transparent border-b border-paynes/10 py-6 text-2xl font-light focus:outline-none focus:border-paynes transition-colors placeholder:opacity-0 peer"
    const labelClasses = "absolute left-0 top-6 text-paynes/30 text-xl font-light transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-[0.3em] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-[0.3em] pointer-events-none"

    return (
        <footer id="contact" className="bg-transparent text-paynes pt-32 pb-12 section-padding min-h-screen flex flex-col">
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 block mb-6">
                        Contact Portal
                    </span>
                    <h2 className="font-bold tracking-tighter leading-[0.8] uppercase" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)' }}>
                        Let's build <br />
                        <span className="text-paynes/20 italic">The Future</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Name"
                                        required
                                        className={inputClasses}
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    />
                                    <label className={labelClasses}>Name</label>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        required
                                        className={inputClasses}
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    />
                                    <label className={labelClasses}>Email</label>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Subject"
                                    className={inputClasses}
                                    value={formState.subject}
                                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                                />
                                <label className={labelClasses}>Subject</label>
                            </div>

                            <div className="relative">
                                <textarea 
                                    placeholder="Message"
                                    required
                                    rows="1"
                                    className={`${inputClasses} resize-none overflow-hidden`}
                                    value={formState.message}
                                    onChange={(e) => {
                                        setFormState({...formState, message: e.target.value})
                                        e.target.style.height = 'auto'
                                        e.target.style.height = e.target.scrollHeight + 'px'
                                    }}
                                />
                                <label className={labelClasses}>Message</label>
                            </div>

                            <Magnetic>
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="group flex items-center gap-10 text-xs font-bold uppercase tracking-[0.5em] mt-12 bg-paynes text-pearl px-12 py-6 rounded-full hover:bg-paynes/90 transition-all disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Verifying...' : 
                                     status === 'success' ? 'Transmission Success' :
                                     status === 'error' ? 'Transmission Failed' : 
                                     'Transmit Message'}
                                    <Send size={16} className={`group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform ${status === 'loading' ? 'animate-pulse' : ''}`} />
                                </button>
                            </Magnetic>
                        </form>
                    </div>

                    {/* Right: Connect info */}
                    <div className="lg:col-span-5 flex flex-col justify-between py-6">
                        <div className="space-y-20">
                            <div className="space-y-4">
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 italic underline">Global Coordinates</p>
                                <p className="text-3xl md:text-5xl font-display font-medium uppercase tracking-tighter">Surat, India</p>
                            </div>

                            <div className="space-y-10">
                                <Magnetic>
                                    <a href="mailto:tithishah26@gmail.com" className="group flex items-center justify-between py-8 border-b border-paynes/10 hover:border-paynes transition-all">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Direct Email</p>
                                            <p className="text-xl md:text-2xl font-light">tithishah26@gmail.com</p>
                                        </div>
                                        <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </Magnetic>

                                <div className="flex gap-12 pt-8">
                                    <Magnetic>
                                        <a href="https://www.linkedin.com/in/tithishah01/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full border border-paynes/10 hover:bg-paynes hover:text-pearl transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://github.com/tithi0126" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full border border-paynes/10 hover:bg-paynes hover:text-pearl transition-all">
                                            <Github size={20} />
                                        </a>
                                    </Magnetic>
                                </div>
                            </div>
                        </div>

                        <div className="pt-24 lg:pt-0">
                            <p className="text-xl font-light leading-relaxed text-paynes/60 max-w-sm">
                                Designing high-performance <br />
                                architecture for the next <br />
                                generation of digital products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 md:mt-32 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 border-t border-paynes/5 opacity-20 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.4em]">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <p>&copy; {new Date().getFullYear()} TITHI SHAH</p>
                    <p className="hidden md:block">Human-Centric Engineering</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-paynes transition-colors cursor-pointer">
                        Back to top
                    </button>
                    <p>SURAT // IND // 21.1702 N, 72.8311 E</p>
                </div>
            </div>
        </footer>
    )
}

export default Contact
