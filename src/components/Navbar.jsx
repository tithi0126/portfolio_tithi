import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Circle } from 'lucide-react'
import Magnetic from './Magnetic'
import SoundToggle from './SoundToggle'

const Navbar = ({ isOpen, setIsOpen }) => {
    const [isDark, setIsDark] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }))
        }, 1000)
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            // If scrolled more than 50vh, we've likely left the dark hero section
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsDark(false)
            } else {
                setIsDark(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            clearInterval(timer)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const menuItems = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Stack', id: 'tech-stack' },
        { label: 'Certifications', id: 'certifications' },
        { label: 'Works', id: 'works' },
        { label: 'Singing', id: 'singing' },
        { label: 'Contact', id: 'contact' }
    ]

    const textColorClass = isDark ? 'text-pearl' : 'text-paynes'
    const opacityColorClass = isDark ? 'bg-pearl/20' : 'bg-paynes/20'

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${isOpen ? 'text-paynes bg-transparent' : `${textColorClass} ${isScrolled ? 'bg-pearl/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}`}>
                <div className="flex items-center gap-12 pointer-events-auto">
                    <Magnetic>
                        <a href="/" className="text-3xl font-display font-bold tracking-tighter">TITHI</a>
                    </Magnetic>

                    <div className={`hidden lg:flex items-center gap-8 text-xs font-display uppercase tracking-[0.2em] font-bold ${isOpen ? 'opacity-0' : 'opacity-40'} transition-opacity`}>
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-2 h-2 rounded-full bg-current"
                            />
                            <span>Available for new projects</span>
                        </div>
                        <div className={`w-[1px] h-4 ${opacityColorClass}`} />
                        <div>Surat, IND — {time}</div>
                    </div>
                </div>

                <div className="flex items-center gap-8 pointer-events-auto z-[70]">
                    {!isOpen && (
                        <div className="hidden md:block">
                            <SoundToggle isDark={isDark} />
                        </div>
                    )}
                    <Magnetic>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="group flex items-center gap-4 text-lg font-display font-bold uppercase tracking-widest"
                        >
                            <span className="hidden md:block group-hover:pr-2 transition-all">{isOpen ? 'Close' : 'Menu'}</span>
                            <div className="relative w-10 h-10 flex items-center justify-center border border-current rounded-full group-hover:bg-current group-hover:text-pearl transition-all">
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                            <X size={24} />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                            <Menu size={24} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </button>
                    </Magnetic>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-pearl z-[60] flex flex-col justify-center px-6 md:px-24"
                    >
                        <div className="flex flex-col gap-2 md:gap-4 text-paynes pt-20">
                            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-8">Navigation</p>
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ x: 80, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                >
                                    <Magnetic>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="text-5xl md:text-8xl lg:text-9xl font-display font-bold hover:italic transition-all duration-300 inline-block uppercase tracking-[-0.05em] leading-[0.9]"
                                        >
                                            {item.label}
                                        </a>
                                    </Magnetic>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-12 left-6 md:left-24 right-6 md:right-12 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-paynes/10 pt-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">Socials</p>
                                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                                    <a href="https://www.linkedin.com/in/tithishah01/" target="_blank" rel="noopener noreferrer" className="hover:italic transition-all">LinkedIn</a>
                                    <a href="https://github.com/tithi0126" target="_blank" rel="noopener noreferrer" className="hover:italic transition-all">GitHub</a>
                                </div>
                            </div>
                            <div className="text-right flex flex-col gap-2">
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">Get in touch</p>
                                <p className="text-xl font-display font-bold uppercase">tithishah26@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
