import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'

const Contact = () => {
    return (
        <footer id="contact" className="section-padding bg-background-dark min-h-screen flex flex-col justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pt-24">
                <div>
                    <h2 className="heading-xl mb-12">GET IN<br />TOUCH</h2>
                    <p className="text-2xl text-white/40 max-w-md">
                        Have a project in mind or just want to chat? I'm always open to new
                        opportunities and collaborations.
                    </p>
                </div>

                <div className="flex flex-col justify-end gap-12">
                    <Magnetic>
                        <a href="mailto:hello@tithishah.com" className="group text-4xl md:text-6xl font-bold tracking-tighter border-b border-white/10 pb-8 flex justify-between items-center hover:text-accent-primary transition-colors">
                            hello@tithishah.com
                            <ArrowUpRight size={48} className="group-hover:rotate-45 transition-transform" />
                        </a>
                    </Magnetic>

                    <div className="flex gap-12">
                        <Magnetic>
                            <a href="https://linkedin.com/in/tithishah" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-accent-primary transition-colors flex items-center gap-2">
                                <Linkedin size={18} /> LinkedIn
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://github.com/tithishah" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-accent-primary transition-colors flex items-center gap-2">
                                <Github size={18} /> GitHub
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>

            <div className="pt-24 flex justify-between items-end border-t border-white/5 opacity-40 text-[10px] uppercase font-bold tracking-[0.3em]">
                <p>&copy; 2024 Tithi Shah • All Rights Reserved</p>
                <p>Built with React & Passion</p>
            </div>
        </footer>
    )
}

export default Contact
