import React from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { y: "100%", opacity: 0 },
        show: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <section className="min-h-screen w-full flex flex-col justify-end section-padding relative overflow-hidden bg-paynes text-pearl">
            {/* Animated Background Depth */}
            <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-grid-pearl pointer-events-none" 
            />
            
            <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-pearl/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-pearl/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full mb-20 md:mb-32 lg:mb-12"
            >
                <motion.div
                    variants={item}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-pearl" />
                    <span className="text-pearl/40 text-[10px] font-bold tracking-[0.5em] uppercase italic">
                        Available for select projects in 2026
                    </span>
                </motion.div>

                <h1 className="flex flex-col mb-16">
                    <div className="text-reveal-container">
                        <motion.span
                            variants={item}
                            className="hero-heading block font-display leading-[0.75] text-pearl"
                        >
                            Digital
                        </motion.span>
                    </div>
                    <div className="text-reveal-container">
                        <motion.span
                            variants={item}
                            className="hero-heading block text-pearl/20 font-display leading-[0.75] uppercase italic"
                        >
                            Architect
                        </motion.span>
                    </div>
                    <div className="text-reveal-container">
                        <motion.span
                            variants={item}
                            className="hero-heading block font-display leading-[0.75] text-pearl"
                        >
                            & Creative Core
                        </motion.span>
                    </div>
                </h1>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-16">
                    <motion.p
                        variants={item}
                        className="text-lg md:text-2xl text-pearl/60 max-w-xl leading-relaxed font-light"
                    >
                        Tithi Shah — Full-Stack Developer & UI Architect. Pursuing M.Sc. IT with a focus on immersive systems, high-performance engineering, and minimalist visual poetry.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col items-start md:items-end gap-8"
                    >
                        <Magnetic>
                            <button 
                                onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
                                className="group px-10 py-5 rounded-full bg-pearl text-paynes font-bold uppercase tracking-widest text-[10px] transition-all hover:pl-14 relative"
                            >
                                <span className="relative z-10">Explore Archives</span>
                                <ArrowUpRight size={20} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        </Magnetic>
                        <div className="flex gap-8 text-[8px] uppercase tracking-[0.3em] font-bold text-pearl/20">
                            <span>Scroll to discover</span>
                            <span>/</span>
                            <span>Surat, IND</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
