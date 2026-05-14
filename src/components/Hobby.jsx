import React from 'react'
import { motion } from 'framer-motion'
import { Mic2, Palette, PenTool, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Magnetic from './Magnetic'

const Hobby = () => {
    const navigate = useNavigate()

    const hobbies = [
        {
            title: "Singing",
            icon: <Mic2 size={32} />,
            description: "Classical training has taught me the patience and precision that I now bring to every project I build.",
            action: () => navigate('/playlist'),
            actionText: "Listen to Archive"
        },
        {
            title: "Poetry",
            icon: <PenTool size={32} />,
            description: "Writing poetry allows me to distill complex emotions into simple, rhythmic verses. It's how I process the world.",
            action: () => navigate('/poetry'),
            actionText: "Read Archive"
        },
        {
            title: "Art",
            icon: <Palette size={32} />,
            description: "Visual arts and sketching give me an eye for aesthetics, balancing colors, and designing intuitive interfaces.",
            action: null,
            actionText: "Gallery Coming Soon"
        }
    ]

    return (
        <section id="hobbies" className="section-padding bg-transparent text-paynes relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 opacity-30 italic">Creative Soul</h2>
                    <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.85]">
                        Beyond<br />Code.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hobbies.map((hobby, i) => (
                        <motion.div
                            key={hobby.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-pearl border border-paynes/10 rounded-[2rem] p-10 flex flex-col h-full group hover:bg-paynes hover:text-pearl transition-colors duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-paynes/5 text-paynes flex items-center justify-center mb-8 group-hover:bg-pearl/10 group-hover:text-pearl transition-colors duration-500">
                                {hobby.icon}
                            </div>
                            
                            <h4 className="text-3xl font-display font-bold mb-4">{hobby.title}</h4>
                            <p className="text-current/60 leading-relaxed mb-12 flex-grow">
                                {hobby.description}
                            </p>

                            {hobby.action ? (
                                <button 
                                    onClick={hobby.action}
                                    className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold mt-auto group-hover:text-pearl transition-colors"
                                >
                                    {hobby.actionText}
                                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            ) : (
                                <div className="text-xs uppercase tracking-widest font-bold opacity-30 mt-auto">
                                    {hobby.actionText}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hobby
