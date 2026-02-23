import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            company: "Pragma Infotech",
            role: "Software Developer",
            period: "June 2024 - Feb 2025",
            description: "Developed and maintained 5+ web applications using PHP, Flutter, and JavaScript. Improved application performance by 30% through optimization.",
            color: "#e4ff00"
        },
        {
            company: "e-Yantra",
            role: "Regional Finalist (IIT Bombay)",
            period: "2023 - 2024",
            description: "Led the development of an AI-powered agricultural solution, focusing on robotics and machine learning integrations.",
            color: "#ffffff"
        },
        {
            company: "Aangan Developers",
            role: "Full-Stack Developer",
            period: "2023 - Present",
            description: "Leading the development of high-performance web applications and internal tools using React and Node.js.",
            color: "#4B91F7"
        }
    ]

    return (
        <section id="experience" className="section-padding bg-background-dark overflow-hidden">
            <div className="mb-24">
                <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 text-accent-primary">Career Path</h2>
                <h3 className="heading-xl">EXPERIENCE.</h3>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[30px] md:left-1/2 top-0 w-[1px] h-full bg-white/5 md:-translate-x-1/2" />

                <div className="flex flex-col gap-24 relative">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-12 w-full`}
                        >
                            {/* Company Content */}
                            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0 pr-0 md:pr-12 md:pr-0`}>
                                <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                    <span className="text-sm font-mono text-accent-primary mb-2">{exp.period}</span>
                                    <h4 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">{exp.company}</h4>
                                    <div className={`h-[1px] w-24 bg-white/10 mb-6 ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} />
                                </div>
                            </div>

                            {/* Node */}
                            <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-accent-primary shadow-[0_0_15px_rgba(228,255,0,0.5)] z-10 hidden md:block" />

                            {/* Details Content */}
                            <div className="w-full md:w-1/2 pl-20 md:pl-12">
                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-2 block">{exp.role}</span>
                                <p className="text-lg text-white/60 leading-relaxed max-w-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
