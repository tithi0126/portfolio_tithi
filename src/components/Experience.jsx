import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, ArrowUpRight, Zap, Target, Cpu } from 'lucide-react'
import { Reveal, TextReveal } from './Reveal'

const Experience = () => {
    const [selected, setSelected] = useState(null)

    const workExperience = [
        {
            id: 'pragma',
            type: 'Professional',
            company: "Pragma Infotech",
            role: "Full-Stack Developer",
            period: "June 2024 — Mar 2025",
            description: "Developed responsive web applications and engineered production-ready solutions across diverse client sectors including e-commerce and B2B.",
            details: [
                "Engineered Rowan Decor (Flutter e-commerce), AIPL & ZapBits (PHP corporate), and Borana Weaves (B2B).",
                "Translated client requirements into technical specifications for scalable production delivery.",
                "Implemented reusable UI components following React best practices (Hooks, ES6+).",
                "Collaborated in Agile environment to reduce application errors by approximately 25%.",
                "Managed application state and optimized performance for seamless user experience."
            ],
            tech: ["React.js", "PHP", "Flutter", "Agile", "Git"]
        }
    ]

    const competitiveTrack = [
        {
            id: 'princeton',
            type: 'Hackathon',
            event: "HackPrinceton 2026",
            role: "Princeton University",
            period: "Apr 2026",
            description: "Solo-built 'InnerVoice' AI safety platform. Discovered AI jailbreak vulnerabilities and implemented rule-based safety probes.",
            details: [
                "Built complete attack-detection-correction pipeline in 36 hours.",
                "Implemented rule-based classifier achieving 80%+ catch rate for AI jailbreaks.",
                "Integrated SignalR for real-time chat and Knot TransactionLink API for medications.",
                "Deployed ASP.NET Core 8 backend with Claude API and MongoDB Atlas."
            ],
            tech: ["ASP.NET Core 8", "React 18", "TypeScript", "SignalR", "Claude API"]
        },
        {
            id: 'eyantra-25',
            type: 'Innovation',
            event: "e-Yantra 2024-2025",
            role: "IIT Bombay",
            period: "2024 — 2025",
            description: "Developed 'Inner Voice' smartwatch-based health monitoring system integrating wearable hardware with mobile and web.",
            details: [
                "Built custom prototype using Arduino Uno, MAX30100 (Pulse), and ADXL345 (Steps).",
                "Developed Flutter app for real-time visualization via HC-05 Bluetooth sync.",
                "Created responsive web dashboard for remote clinical monitoring.",
                "Integrated REST APIs for seamless data exchange across the wearable ecosystem."
            ],
            tech: ["Arduino", "Flutter", "C++", "Bluetooth Low Energy", "REST API"]
        },
        {
            id: 'eyantra-24',
            type: 'Innovation',
            event: "e-Yantra 2023-2024",
            role: "Regional Finalist",
            period: "2023 — 2024",
            description: "Designed AI-powered robotic weed cutter using computer vision to reduce herbicide use by 40%.",
            details: [
                "Achieved 90% weed detection accuracy using OpenCV and TensorFlow models.",
                "Deployed vision models via edge computing on Raspberry Pi & Arduino.",
                "Developed React dashboard for weed-mapping analytics and spatial data visualization.",
                "Integrated cross-platform Flutter app for real-time robotic sensor monitoring."
            ],
            tech: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi", "React"]
        }
    ]

    const education = [
        { id: 'msc', school: "VNSGU (M.Sc. IT)", period: "July 2025 — Present", note: "Advanced Systems & AI" },
        { id: 'bsc', school: "VNSGU (B.Sc. IT)", period: "June 2022 — May 2025", note: "GPA: 6.05 | Foundation in DSA & Systems" },
        { id: 'hsc', school: "T&TV Sarvajanik (HSC)", period: "June 2021 — Mar 2022", note: "Science-Mathematics" },
        { id: 'ssc', school: "Sanskar Bharti (SSC)", period: "June 2019 — Mar 2020", note: "Secondary Education" }
    ]

    const Item = ({ exp, isCompetitive = false }) => (
        <motion.div 
            layoutId={exp.id}
            onClick={() => setSelected(exp)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group py-8 md:py-12 border-b border-paynes/5 hover:border-paynes/10 transition-all cursor-pointer relative overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                <div className="md:col-span-2 text-paynes/20 font-mono text-sm tracking-tighter">{exp.period}</div>
                <div className="md:col-span-1 lg:col-span-1">
                    <div className="w-10 h-10 rounded-full border border-paynes/10 flex items-center justify-center group-hover:bg-paynes group-hover:text-pearl transition-all">
                        <Plus size={16} />
                    </div>
                </div>
                <div className="md:col-span-4 lg:col-span-5">
                    <h4 className="text-3xl md:text-5xl font-display font-medium uppercase tracking-tighter">
                        {exp.company || exp.event}
                    </h4>
                </div>
                <div className="md:col-span-3 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 italic">{exp.role}</div>
                <div className="md:col-span-1 flex justify-end">
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </div>
            </div>
            {/* Hover Background */}
            <div className="absolute inset-0 bg-paynes/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
        </motion.div>
    )

    return (
        <section id="experience" className="section-padding bg-transparent text-paynes min-h-screen">
            <div className="flex flex-col gap-16 md:gap-32">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="space-y-6">
                        <Reveal>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-paynes" />
                                <span className="text-xs font-bold uppercase tracking-[0.5em]">Career Archives</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h2 className="text-5xl md:text-[8rem] font-display font-bold leading-[0.8] tracking-tighter uppercase">
                                JOURNEY <br /> <span className="opacity-20 italic underline decoration-paynes/10">Timeline.</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.5}>
                        <p className="max-w-xs text-paynes/40 text-[10px] uppercase tracking-[0.5em] font-bold leading-relaxed mb-6">
                            Interact with any archive <br /> to reveal technical <br /> specifications & impact.
                        </p>
                    </Reveal>
                </div>

                {/* Princeton + e-Yantra + Professional */}
                <div className="flex flex-col">
                    {[...competitiveTrack, ...workExperience].map((exp) => (
                        <Item key={exp.id} exp={exp} />
                    ))}
                </div>

                {/* Education Mini Grid */}
                <div className="mt-20">
                    <div className="flex items-center gap-4 mb-12 opacity-30">
                        <div className="h-px w-12 bg-paynes" />
                        <span className="text-xs font-bold uppercase tracking-[0.5em]">Academic Foundations</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paynes/5 border border-paynes/5">
                        {education.map(edu => (
                            <div key={edu.id} className="p-8 md:p-12 bg-pearl">
                                <span className="text-[10px] font-bold opacity-20 uppercase tracking-widest">{edu.period}</span>
                                <h5 className="text-2xl md:text-3xl font-display font-bold uppercase mt-4 mb-2 tracking-tighter">{edu.school}</h5>
                                <p className="text-xs opacity-40 uppercase tracking-[0.3em] font-bold italic">{edu.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Overlay */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 bg-paynes/20 backdrop-blur-md z-[100]"
                        />
                        <motion.div 
                            layoutId={selected.id}
                            className="fixed inset-4 md:inset-x-20 md:inset-y-12 bg-pearl border border-paynes/10 z-[101] overflow-hidden rounded-[3rem] shadow-2xl flex flex-col"
                        >
                            <div className="flex-1 overflow-y-auto p-12 md:p-24">
                                <div className="flex justify-between items-start mb-12 md:mb-20">
                                    <div className="space-y-4">
                                        <span className="px-4 py-2 bg-paynes/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-paynes/10">{selected.type}</span>
                                        <h3 className="text-3xl sm:text-4xl md:text-8xl font-display font-medium uppercase tracking-tighter leading-none">
                                            {selected.company || selected.event}
                                        </h3>
                                        <p className="text-xl md:text-2xl italic opacity-40 font-light">{selected.role}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelected(null)}
                                        className="w-16 h-16 rounded-full border border-paynes/10 flex items-center justify-center hover:bg-paynes hover:text-pearl transition-all"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                                    <div className="lg:col-span-7 space-y-12">
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-4 text-paynes/30">
                                                <Target size={16} />
                                                <span className="text-xs font-bold uppercase tracking-[0.3em]">Key Deliverables</span>
                                            </div>
                                            <ul className="space-y-6">
                                                {selected.details.map((detail, i) => (
                                                    <motion.li 
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        key={i} 
                                                        className="text-lg md:text-2xl font-light leading-relaxed flex gap-4 md:gap-6"
                                                    >
                                                        <span className="text-paynes/20 italic">0{i+1}</span>
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 space-y-12">
                                        <div className="p-10 bg-paynes/5 rounded-[2rem] border border-paynes/5">
                                            <div className="flex items-center gap-4 mb-8 text-paynes/30">
                                                <Cpu size={16} />
                                                <span className="text-xs font-bold uppercase tracking-[0.3em]">Tech Stack</span>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                {selected.tech.map(t => (
                                                    <span key={t} className="px-5 py-3 rounded-xl bg-pearl border border-paynes/5 text-xs font-mono font-bold uppercase tracking-tighter shadow-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-10 border border-paynes/5 rounded-[2rem] flex items-center justify-between group cursor-default">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">Archive Entry</p>
                                                <p className="text-xl font-display font-bold uppercase">{selected.period}</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-paynes/5 flex items-center justify-center">
                                                <Zap className="text-paynes/20" size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Experience
