import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const Certifications = () => {
    const [showAll, setShowAll] = useState(false)

    const certifications = [
        { title: 'Career Essentials in Software Development', file: 'CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf' },
        { title: 'Programming Foundations Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Fundamentals.pdf' },
        { title: 'Programming Foundations Beyond the Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.pdf' },
        { title: 'Introduction to Career Skills in Software Development', file: 'CertificateOfCompletion_Introduction to Career Skills in Software Development.pdf' },
        { title: 'WordPress for Beginners', file: 'Coursera WordPress.pdf' },
        { title: 'Data Visualisation: Empowering Business', file: 'Data Visualisation Empowering Business.pdf' },
        { title: 'Java Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_Java.pdf' },
        { title: 'Advance C++ Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_advanceCpp.pdf' },
        { title: 'HTML Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_html.pdf' },
        { title: 'Javascript Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_js.pdf' },
        { title: 'RDBMS Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_rdbms.pdf' },
        { title: 'E-yantra IIT Bombay', file: 'E-yantra.png' },
        { title: 'EY Techathon Participation', file: 'EY Techathon.pdf' },
        { title: 'e-Yantra Online Course on Innovation', file: 'e-Yantra Online Course on Innovation.pdf' },
        { title: 'Introduction to Computers', file: 'TITHI-SHAH-Participant-Certificate_intro_to computer.pdf' },
        { title: 'TCS iON Career Edge', file: 'tcsIon.jpg' },
        { title: 'SIH Internal Hackathon', file: 'sih_internal_hackathon.jpg' },
        { title: 'e-Yantra Attendance', file: 'eyantra attandance certificate.pdf' },
        { title: 'Participate Certificate', file: 'TITHI-SHAH-Participant-Certificate.pdf' },
        { title: 'Achievement Certificate', file: 'Tithi Jimmy Shah_16034.pdf' },
    ]

    const initialCount = 12
    const displayedCerts = showAll ? certifications : certifications.slice(0, initialCount)

    return (
        <section id="certifications" className="section-padding bg-background-light text-background-dark">
            <div className="mb-24">
                <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 opacity-40">Professional Growth</h2>
                <h3 className="heading-xl">CERTIFIED<br />EXPERTISE.</h3>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {displayedCerts.map((cert, i) => (
                        <motion.a
                            layout
                            href={`/certification/${cert.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={cert.title}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="group p-8 rounded-3xl border border-black/5 hover:border-black/10 hover:bg-white transition-all duration-500 cursor-pointer block"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                                    <Award size={24} />
                                </div>
                                <ExternalLink size={18} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <h4 className="text-xl font-bold leading-tight mb-2 tracking-tight group-hover:underline">
                                {cert.title}
                            </h4>
                            <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">Verify Certificate</div>
                        </motion.a>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-20 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="flex flex-col items-center gap-4 group"
                >
                    <div className="text-sm font-bold uppercase tracking-widest p-4 border-b border-black/10 transition-colors group-hover:border-accent-primary">
                        {showAll ? 'Show Fewer Certifications' : `+ ${certifications.length - initialCount} more industry certifications`}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                        {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </motion.button>
            </div>
        </section>
    )
}

export default Certifications
