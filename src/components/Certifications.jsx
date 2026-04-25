import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import Magnetic from './Magnetic'

const CertificationRow = React.forwardRef(({ cert, index }, ref) => (
    <motion.a
        ref={ref}
        layout
        href={`/certification/${cert.file}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-paynes/5 hover:bg-paynes/5 transition-all duration-500 px-4 rounded-xl"
    >
        <div className="flex items-center gap-8 md:col-span-8">
            <div className="w-12 h-12 rounded-xl bg-paynes/5 flex items-center justify-center group-hover:bg-paynes group-hover:text-pearl transition-colors flex-shrink-0">
                <Award size={20} className="group-hover:text-pearl transition-colors text-paynes" />
            </div>
            <div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1 group-hover:italic transition-all text-paynes">
                    {cert.title}
                </h4>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-paynes/60">Academic Credential</div>
            </div>
        </div>

        <div className="mt-6 md:mt-0 flex items-center gap-6">
            <Magnetic>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 group-hover:text-paynes transition-all">
                    <span>Verify</span>
                    <ArrowUpRight size={14} />
                </div>
            </Magnetic>
        </div>
    </motion.a>
))

const Certifications = () => {
    const [showAll, setShowAll] = useState(false)

    const certifications = [
        { title: 'Career Essentials in Software Development', file: 'CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf' },
        { title: 'Programming Foundations Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Fundamentals.pdf' },
        { title: 'Programming Foundations Beyond the Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.pdf' },
        { title: 'Introduction to Career Skills in Software Development', file: 'CertificateOfCompletion_Introduction to Career Skills in Software Development.pdf' },
        { title: 'WordPress for Beginners', file: 'Coursera WordPress.pdf' },
        { title: 'Data Visualisation: Empowering Business', file: 'Data Visualisation Empowering Business.pdf' },
        { title: 'Learn Figma: UI/UX Design Masterclass', file: 'Udemy Figma.pdf' },
        { title: 'AWS Academy Graduate - ML Foundations', file: 'AWS Machine Learning.pdf' },
        { title: 'Google Cloud Security & Operations', file: 'Google Cloud Security.pdf' },
        { title: 'Introduction to Responsible AI (Google)', file: 'Google AI 1.pdf' },
        { title: 'Introduction to Generative AI (Google)', file: 'Google AI 2.pdf' },
        { title: 'Introduction to Large Language Models (Google)', file: 'Google AI 3.pdf' },
        { title: 'Innovating with Data (Google Cloud)', file: 'Google Cloud Data.pdf' },
        { title: 'Infrastructure & App Modernization (Google)', file: 'Google Cloud Infrastructure.pdf' },
        { title: 'Digital Transformation with Google Cloud', file: 'Google Cloud Transformation.pdf' },
        { title: 'Cybersecurity Fundamentals (IBM)', file: 'IBM Cybersecurity.pdf' },
        { title: 'Fundamentals of Cybersecurity (Accenture)', file: 'Accenture Cybersecurity.pdf' },
        { title: 'Java Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_Java.pdf' },
        { title: 'Advance C++ Certificate', file: 'TITHI-SHAH-Participant-Certificate_advanceCpp.pdf' },
        { title: 'HTML Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_html.pdf' },
        { title: 'Javascript Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_js.pdf' },
        { title: 'IIT Bombay e-Yantra Certificate', file: 'E-yantra.png' },
        { title: 'Innovation Online Course (e-Yantra)', file: 'e-Yantra Online Course on Innovation.pdf' },
        { title: 'RDBMS Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_rdbms.pdf' },
        { title: 'Introduction to Computers', file: 'TITHI-SHAH-Participant-Certificate_intro_to computer.pdf' },
        { title: 'Academic Achievement Certificate', file: 'Tithi Jimmy Shah_16034.pdf' },
    ]

    const initialCount = 8
    const displayedCerts = showAll ? certifications : certifications.slice(0, initialCount)
    const remainingCount = certifications.length - initialCount

    return (
        <section id="certifications" className="section-padding bg-transparent text-paynes min-h-screen">
            <div className="mb-24 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-paynes/20" />
                    <span className="text-paynes/40 text-xs font-bold tracking-[0.4em] uppercase">
                        Expertise
                    </span>
                </div>
                <h3 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.8] text-paynes">
                    Certified <br /> <span className="opacity-20 italic">Curriculum.</span>
                </h3>
            </div>

            <motion.div layout className="flex flex-col">
                <AnimatePresence mode="popLayout">
                    {displayedCerts.map((cert, i) => (
                        <CertificationRow key={cert.title} cert={cert} index={i} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-20 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="flex flex-col items-center gap-6 group"
                >
                    <div className="text-xs font-bold uppercase tracking-widest px-8 py-3 border border-paynes/10 rounded-full transition-all group-hover:bg-paynes group-hover:text-pearl">
                        {showAll ? 'Show Condensed' : `View all ${certifications.length} Credentials`}
                    </div>
                    {!showAll && (
                        <div className="animate-bounce">
                            <ChevronDown size={20} className="opacity-30" />
                        </div>
                    )}
                </motion.button>
            </div>
        </section>
    )
}

export default Certifications
