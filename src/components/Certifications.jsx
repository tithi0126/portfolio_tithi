import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import Magnetic from './Magnetic'

const CertificationRow = React.forwardRef(({ cert, index }, ref) => (
    <motion.a
        ref={ref}
        layout
        href={cert.url || `/certification/${cert.file}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-10 border-b border-paynes/5 hover:bg-paynes/5 transition-all duration-500 px-2 md:px-4 rounded-xl"
    >
        <div className="flex items-start md:items-center gap-4 md:gap-8 md:col-span-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-paynes/5 flex items-center justify-center group-hover:bg-paynes group-hover:text-pearl transition-colors flex-shrink-0 mt-1 md:mt-0">
                <Award size={20} className="w-4 h-4 md:w-5 md:h-5 group-hover:text-pearl transition-colors text-paynes" />
            </div>
            <div>
                <h4 className="text-lg md:text-2xl font-bold tracking-tight mb-1 group-hover:italic transition-all text-paynes leading-tight">
                    {cert.title}
                </h4>
                <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-30 text-paynes/60 mt-1">Academic Credential</div>
            </div>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-6 ml-14 md:ml-0 self-start md:self-auto">
            <Magnetic>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 group-hover:text-paynes transition-all bg-paynes/5 md:bg-transparent px-3 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none">
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
        { title: 'IIT Bombay e-Yantra Certificate', file: 'E-yantra.png' },
        { title: 'Innovation Online Course (e-Yantra)', file: 'e-Yantra Online Course on Innovation.pdf' },
        { title: 'AWS Academy Graduate - ML Foundations', file: 'AWS Machine Learning.pdf' },
        { title: 'Cybersecurity Fundamentals (IBM)', file: 'IBMDesign20260516-31-z0l1no.pdf' },
        { title: 'Fundamentals of Cybersecurity (Accenture)', file: 'Accenture Cybersecurity.png' },
        { title: 'Understanding Google Cloud Security and Operations', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6381513' },
        { title: 'Introduction to Responsible AI', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6371611' },
        { title: 'Introduction to Generative AI', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6187089' },
        { title: 'Introduction to Large Language Models', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6185201' },
        { title: 'Innovating with Data and Google Cloud', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6372299' },
        { title: 'Infrastructure and Application Modernization with Google Cloud', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6373051' },
        { title: 'Digital Transformation with Google Cloud', url: 'https://www.skills.google/public_profiles/cc6552e3-a70a-4d74-968d-aa46c07d8ef2/badges/6371978' },
        { title: 'Hands-on approach to AI for real-world applications (TCS iON)', file: 'tcsIon.jpg' },
        { title: 'SIH 2025 Internal Hackathon Winner', file: 'sih_internal_hackathon.jpg' },
        { title: 'EY Techathon 4.0 Participation', file: 'EY Techathon.pdf' },
        { title: 'Career Essentials in Software Development', file: 'CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf' },
        { title: 'Programming Foundations Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Fundamentals.pdf' },
        { title: 'Programming Foundations Beyond the Fundamentals', file: 'CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.pdf' },
        { title: 'Introduction to Career Skills in Software Development', file: 'CertificateOfCompletion_Introduction to Career Skills in Software Development.pdf' },
        { title: 'Learn Figma: UI/UX Design Masterclass', file: 'Udemy Figma.pdf' },
        { title: 'Data Visualisation: Empowering Business', file: 'Data Visualisation Empowering Business.pdf' },
        { title: 'WordPress for Beginners', file: 'Coursera WordPress.pdf' },
        { title: 'Java Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_Java.pdf' },
        { title: 'Advance C++ Certificate', file: 'TITHI-SHAH-Participant-Certificate_advanceCpp.pdf' },
        { title: 'HTML Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_html.pdf' },
        { title: 'Javascript Participant Certificate', file: 'TITHI-SHAH-Participant-Certificate_js.pdf' },
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
                <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.85] md:leading-[0.8] text-paynes">
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
