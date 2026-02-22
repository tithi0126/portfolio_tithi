import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
    const certifications = [
        'Career Essentials in Software Development',
        'Programming Foundations Fundamentals',
        'Programming Foundations Beyond the Fundamentals',
        'Introduction to Career Skills in Software Development',
        'WordPress for Beginners',
        'Data Visualisation: Empowering Business',
        'Java Participant Certificate',
        'Advance C++ Participant Certificate',
        'HTML Participant Certificate',
        'Javascript Participant Certificate',
        'RDBMS Participant Certificate',
        'E-yantra IIT Bombay',
    ]

    return (
        <section id="certifications" className="section-padding bg-background-light text-background-dark">
            <div className="mb-24">
                <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 opacity-40">Professional Growth</h2>
                <h3 className="heading-xl">CERTIFIED<br />EXPERTISE.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={cert}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="group p-8 rounded-3xl border border-black/5 hover:border-black/10 hover:bg-white transition-all duration-500 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                                <Award size={24} />
                            </div>
                            <ExternalLink size={18} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <h4 className="text-xl font-bold leading-tight mb-2 tracking-tight group-hover:underline">
                            {cert}
                        </h4>
                        <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">Verify Certificate</div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <div className="text-sm font-bold uppercase tracking-widest p-4 border-b border-black/10">
                    + 8 more industry certifications
                </div>
            </div>
        </section>
    )
}

export default Certifications
