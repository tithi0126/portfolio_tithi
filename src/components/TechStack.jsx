import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Globe, Smartphone, Database, Command, Shield, Brain, Zap, ArrowUpRight } from 'lucide-react'

const SkillGroup = ({ title, skills, icon: Icon, delay = 0 }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="group p-10 border-b border-paynes/10 hover:bg-paynes/[0.02] transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
    >
        <div className="flex items-center gap-8">
            <div className="w-12 h-12 rounded-2xl bg-paynes/5 flex items-center justify-center text-paynes group-hover:bg-paynes group-hover:text-pearl transition-all duration-500">
                <Icon size={20} />
            </div>
            <div className="space-y-1">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-30">{title}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="text-xl md:text-2xl font-display font-medium uppercase tracking-tighter">
                            {skill}{i !== skills.length - 1 && <span className="ml-4 opacity-10 font-sans">/</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
    </motion.div>
)

const TechStack = () => {
    const technicalSkills = [
        {
            category: "Programming Languages",
            icon: Cpu,
            skills: ["Java", "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Kotlin", "PHP", "Swift", "VB.NET", "HTML5", "CSS3"]
        },
        {
            category: "Web & Full-Stack",
            icon: Globe,
            skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "ASP.NET", "REST APIs", "JSON"]
        },
        {
            category: "Mobile Development",
            icon: Smartphone,
            skills: ["Flutter", "Kotlin (Android)", "Swift (iOS)"]
        },
        {
            category: "Database Management",
            icon: Database,
            skills: ["MySQL", "MongoDB", "DBMS", "RDBMS", "Database Design", "Normalization"]
        },
        {
            category: "Frameworks & Tools",
            icon: Command,
            skills: [".NET Framework", "WordPress", "Figma", "Android Studio", "VS Code", "Arduino Uno", "GitHub"]
        },
        {
            category: "Cloud & Systems",
            icon: Shield,
            skills: ["AWS Fundamentals", "Azure Basics", "Unix/Linux", "Windows", "IoT Basics"]
        },
        {
            category: "CS Fundamentals",
            icon: Brain,
            skills: ["OOP", "DSA", "Computer Networks", "TCP/IP", "DNS", "HTTP", "System Analysis"]
        }
    ]

    const softSkills = ["Problem-Solving", "Adaptability", "Team Collaboration", "Effective Communication", "Time Management", "Prioritization", "Multitasking"]

    return (
        <section id="tech-stack" className="section-padding bg-transparent text-paynes min-h-screen py-40">
            <div className="flex flex-col gap-12 mb-32 px-4 md:px-0">
                <div className="flex items-center gap-6">
                    <div className="h-[1px] w-12 bg-paynes" />
                    <span className="text-paynes text-xs font-bold tracking-[0.5em] uppercase">Architecture & Logic</span>
                </div>
                <h3 className="text-7xl md:text-[8rem] font-display font-medium leading-[0.8] tracking-tighter uppercase">
                    TECHNICAL <br /> <span className="opacity-20 italic">Foundation.</span>
                </h3>
            </div>

            <div className="flex flex-col border-t border-paynes/10">
                {technicalSkills.map((group, i) => (
                    <SkillGroup 
                        key={group.category} 
                        title={group.category} 
                        skills={group.skills} 
                        icon={group.icon}
                        delay={0.1 * i}
                    />
                ))}
            </div>

            <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-20 px-4 md:px-0">
                <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-8 bg-paynes" />
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Human Protocol</span>
                    </div>
                    <p className="text-lg text-paynes/60 leading-relaxed italic uppercase tracking-tighter font-display">
                        Connecting technical precision with collaborative impact.
                    </p>
                </div>
                <div className="lg:col-span-8">
                    <div className="flex flex-wrap gap-x-12 gap-y-8">
                        {softSkills.map((skill, i) => (
                            <motion.div 
                                key={skill}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.05 * i }}
                                className="flex items-center gap-4 group cursor-default"
                            >
                                <span className="text-[10px] font-mono opacity-20">0{i+1}</span>
                                <span className="text-2xl md:text-4xl font-display font-medium uppercase tracking-tighter group-hover:text-paynes/40 transition-colors">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
