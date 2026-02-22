import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Layout, Figma, Terminal, Cpu } from 'lucide-react'

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <Layout className="text-accent-primary" size={24} />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: <Database className="text-accent-primary" size={24} />,
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"]
        },
        {
            title: "Tools & Design",
            icon: <Figma className="text-accent-primary" size={24} />,
            skills: ["Git", "Docker", "AWS", "Figma", "Adobe CC", "Postman"]
        }
    ]

    return (
        <section id="tech-stack" className="section-padding bg-background-dark">
            <div className="mb-24">
                <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 text-accent-primary">Expertise</h2>
                <h3 className="heading-xl">TECH<br />STACK.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="glass-card p-12 hover:border-accent-primary/50 transition-colors group"
                    >
                        <div className="mb-8 p-4 bg-accent-primary/10 rounded-2xl w-fit group-hover:bg-accent-primary/20 transition-colors">
                            {cat.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-8 uppercase tracking-tighter italic">{cat.title}</h4>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest border border-white/5 group-hover:border-accent-primary/20 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default TechStack
