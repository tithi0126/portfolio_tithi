import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Circle } from 'lucide-react'
import Magnetic from './Magnetic'
import SoundToggle from './SoundToggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }))
        }, 1000)
        return () => clearInterval(timer)
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

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 mix-blend-difference pointer-events-none">
                <div className="flex items-center gap-12 pointer-events-auto">
                    <Magnetic>
                        <a href="/" className="text-2xl font-bold tracking-tighter">TITHI.</a>
                    </Magnetic>

                    <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <Circle size={6} className="fill-accent-primary text-accent-primary" />
                            </motion.div>
                            Available for new projects
                        </div>
                        <div className="w-[1px] h-4 bg-white/20" />
                        <div>Surat, IND — {time}</div>
                    </div>
                </div>

                <div className="flex items-center gap-8 pointer-events-auto">
                    <div className="hidden md:block">
                        <SoundToggle />
                    </div>
                    <Magnetic>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
                        >
                            <span className="hidden md:block group-hover:pr-2 transition-all">Menu</span>
                            <div className="relative w-6 h-6">
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <X size={24} />
                                    ) : (
                                        <Menu size={24} />
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
                        className="fixed inset-0 bg-accent-primary z-[60] flex flex-col justify-center px-6 md:px-24"
                    >
                        <div className="flex flex-col gap-4">
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
                                            className="text-6xl md:text-8xl font-bold text-background-dark hover:italic transition-all duration-300 inline-block uppercase tracking-tighter"
                                        >
                                            {item.label}
                                        </a>
                                    </Magnetic>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
