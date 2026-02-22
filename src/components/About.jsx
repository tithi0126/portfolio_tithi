import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const stats = [
        { label: 'Certifications', val: '20+' },
        { label: 'Projects', val: '10+' },
        { label: 'Passion', val: '100%' },
    ]

    return (
        <section id="about" className="section-padding bg-background-light text-background-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-widest font-bold mb-6">About Me</h2>
                    <p className="text-4xl md:text-5xl font-medium leading-tight">
                        I'm a Full-Stack Developer with a background in Electronics & Telecommunication.
                        I love building things that live on the internet, whether that be websites,
                        applications, or anything in between.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    <p className="text-xl text-black/60 leading-relaxed">
                        My journey into the world of software development started with a fascination
                        for robotics and IoT, leading me to participate in competitions like e-Yantra
                        at IIT Bombay. Today, I focus on creating high-performance, accessible, and
                        visually stunning digital products.
                    </p>

                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{stat.val}</div>
                                <div className="text-xs uppercase tracking-widest font-bold opacity-40">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
