import React from 'react'
import { motion } from 'framer-motion'
import { Reveal, TextReveal } from './Reveal'

const About = () => {
    const skills = [
        { title: "Architecture", desc: "Building scalable, distributed systems with precision and performance at the core." },
        { title: "Design", desc: "Crafting immersive visual experiences where every pixel serves a functional purpose." },
        { title: "Execution", desc: "Turning complex technical challenges into production-ready software solutions." }
    ]

    return (
        <section id="about" className="section-padding bg-transparent text-paynes min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Background Accent */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.08, 0.05]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-40 -right-40 w-96 h-96 bg-paynes/10 rounded-full blur-[120px] pointer-events-none" 
            />
            
            <div className="flex flex-col gap-32 relative z-10">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-end">
                    <div className="lg:col-span-12">
                        <div className="space-y-12">
                            <Reveal>
                                <span className="text-xs uppercase tracking-[0.5em] font-bold opacity-30 block italic">
                                    Core Philosophy
                                </span>
                            </Reveal>
                            <h2 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-medium leading-[0.9] tracking-tighter">
                                <TextReveal text="BRIDGING THE GAP BETWEEN TECHNICAL RIGOR AND VISUAL POETRY." />
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
                    <div className="lg:col-span-1 hidden lg:block">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-px bg-paynes/10" 
                        />
                    </div>
                    <div className="lg:col-span-6">
                        <Reveal delay={0.5}>
                            <p className="text-3xl md:text-5xl font-light leading-[1.1] text-paynes/70 tracking-tight mb-20">
                                My approach to software development is architectural. Like a building, 
                                a system must be structurally sound, highly performant, and visually 
                                harmonious. I don't just write code; I design ecosystems.
                            </p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-1 gap-1">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                                    className="p-10 border border-paynes/5 hover:bg-paynes/5 transition-all duration-500 group"
                                >
                                    <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-4 opacity-30 group-hover:opacity-100 group-hover:italic transition-all">
                                        {`0${i + 1} — ${skill.title}`}
                                    </h4>
                                    <p className="text-xl font-light leading-relaxed text-paynes/60 group-hover:text-paynes transition-colors">
                                        {skill.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
