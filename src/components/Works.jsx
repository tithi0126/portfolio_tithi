import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'
import { ArrowUpRight } from 'lucide-react'

const ProjectRow = ({ project, index, onHover }) => {
    return (
        <Link 
            to={`/project/${project.slug}`} 
            className="group block border-b border-paynes/10 py-12 relative overflow-hidden"
            onMouseEnter={() => onHover(project)}
            onMouseLeave={() => onHover(null)}
        >
            <div 
                className="absolute inset-0 bg-paynes origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 md:px-8 group-hover:text-pearl transition-colors duration-500">
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-5/12">
                    <span className="text-sm font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                        {project.title}
                    </h3>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-7/12 gap-8 md:gap-4">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-60">
                        {project.category}
                    </span>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tags?.slice(0, 3).map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-current text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center shrink-0 group-hover:bg-pearl group-hover:text-paynes transition-all duration-500 transform group-hover:rotate-45 ml-auto md:ml-0">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

const Works = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            slug: 'innervoice',
            title: 'InnerVoice',
            category: 'Mental Health AI',
            tags: ['React', 'ASP.NET', 'SignalR'],
            logo: '/inner_voice_logo.png',
        },
        {
            slug: 'aangan-developers',
            title: 'Aangan Developers',
            category: 'Software Agency',
            tags: ['React', 'Node.js', 'Vite'],
            logo: '/projects/aangan.png',
        },
        {
            slug: 'finologyx',
            title: 'FinoLogyX',
            category: 'FinTech Platform',
            tags: ['Flutter', 'MVC', 'API'],
            logo: '/Finology_logo.png',
        },
        {
            slug: 'rootout',
            title: 'RootOut',
            category: 'Agri-Tech AI',
            tags: ['AI/ML', 'Agriculture', 'IoT'],
            logo: '/RootOut_Logo.png',
        },
        {
            slug: 'design-formula',
            title: 'Design Formula Studio',
            category: 'Architecture Studio',
            tags: ['Portfolio', 'UX', 'Typography'],
            logo: '/projects/designformula.png',
        },
        {
            slug: 'meraki-coffee',
            title: 'Meraki Coffee House',
            category: 'Lifestyle & Cafe',
            tags: ['Branding', 'Mobile-First', 'Maps'],
            logo: '/projects/meraki.png',
        },
        {
            slug: 'achyutam-fruitam',
            title: 'Achyutam Fruitam',
            category: 'Sensory Brand Site',
            tags: ['Storytelling', 'UI/UX'],
            logo: '/projects/achyutam.png',
        },
        {
            slug: 'pnc',
            title: 'PNC Nutrition',
            category: 'Healthcare & Wellness',
            tags: ['Health-Tech', 'SEO'],
            logo: '/projects/priyam.png',
        },
        {
            slug: 'kalanjay',
            title: 'Kalanjay',
            category: 'Real Estate',
            tags: ['Property', 'Lead Gen'],
            logo: '/projects/kalanjay.png',
        },
        {
            slug: 'borana-group',
            title: 'Borana Group',
            category: 'Corporate Identity',
            tags: ['B2B', 'Industrial'],
            logo: '/Borana_logo.svg',
        },
        {
            slug: 'abhishek-ispat',
            title: 'Abhishek Ispat',
            category: 'Industrial Archive',
            tags: ['B2B', 'Database'],
            logo: '/apil_logo.jpeg',
        }
    ]

    return (
        <section id="works" className="py-32 bg-transparent text-paynes min-h-screen relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col gap-8 mb-24">
                    <div className="flex items-center gap-6">
                        <div className="h-[1px] w-12 bg-paynes" />
                        <span className="text-paynes text-xs font-bold tracking-[0.5em] uppercase">
                            Selected Works
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter uppercase leading-[0.85]">
                            Recent <br /> <span className="opacity-30 italic">Projects.</span>
                        </h2>
                        <p className="max-w-sm text-sm uppercase tracking-widest opacity-60 font-bold mb-4">
                            A curated selection of digital experiences, applications, and web platforms.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border-t border-paynes/10">
                    {projects.map((project, i) => (
                        <ProjectRow key={project.title} project={project} index={i} onHover={setHoveredProject} />
                    ))}
                </div>
            </div>
            
            {/* Ambient Logo glow in background based on hover */}
            <div className="hidden lg:block pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            key="hover-img"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.05, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] filter blur-3xl mix-blend-multiply flex items-center justify-center"
                        >
                             <img src={hoveredProject.logo} alt="" className="w-full h-full object-contain" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            <div className="mt-40 flex justify-center">
                <Magnetic>
                    <button className="flex flex-col items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-paynes/10 flex items-center justify-center">
                            <div className="w-1 h-1 bg-paynes rounded-full" />
                        </div>
                    </button>
                </Magnetic>
            </div>
        </section>
    )
}

export default Works
