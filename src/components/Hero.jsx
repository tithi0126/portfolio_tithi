import React from 'react'
import { motion } from 'framer-motion'
import Blob from './Blob'

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-start section-padding relative overflow-hidden">
            <Blob />
            {/* Background Text Animation */}
            <div className="absolute top-1/2 left-0 w-full pointer-events-none opacity-5 leading-none select-none">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-[20rem] font-bold whitespace-nowrap"
                >
                    FULL-STACK DEVELOPER • FULL-STACK DEVELOPER •
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="z-10"
            >
                <h2 className="text-accent-primary text-xl font-medium tracking-[0.2em] mb-4 uppercase">
                    Based in India
                </h2>
                <h1 className="flex flex-col gap-0 md:gap-4">
                    <div className="overflow-hidden h-[6rem] md:h-[10rem] lg:h-[15rem] flex items-center">
                        {"TITHI".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 + i * 0.05, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                                className="heading-xl inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="overflow-hidden h-[6rem] md:h-[10rem] lg:h-[15rem] flex items-center">
                        {"SHAH".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.5 + i * 0.05, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                                className="heading-xl inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
                    Creating high-end digital experiences through code, design, and a touch of melody.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-xs uppercase tracking-[0.5em] text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
        </section>
    )
}

export default Hero
