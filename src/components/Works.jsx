import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'
import { ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])

    return (
        <Link 
            to={`/project/${project.slug}`}
            className="group block"
        >
            <motion.div 
                ref={cardRef}
                style={{ scale }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="flex flex-col gap-8 w-full"
            >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative bg-paynes/5 border border-paynes/5 flex items-center justify-center">
                    <motion.div 
                        style={{ y }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        {project.video ? (
                            <video 
                                src={project.video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 bg-paynes/[0.02]"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full gap-6">
                                 <div className="w-24 h-24 rounded-full border border-paynes/10 flex items-center justify-center p-4 bg-pearl/50 backdrop-blur-sm">
                                    <img src={project.logo} alt={project.title} className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                                 </div>
                            </div>
                        )}
                    </motion.div>
                    
                    <div className="absolute top-6 left-6 flex gap-2">
                        {project.tags?.slice(0, 2).map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-pearl/90 backdrop-blur-sm text-paynes text-[8px] font-bold uppercase tracking-widest border border-paynes/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="absolute inset-0 bg-paynes/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-pearl text-paynes flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                </div>

                {/* Info Container */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-display font-medium group-hover:italic transition-all">
                            {project.title}
                        </h3>
                        <span className="text-[10px] font-bold opacity-20 uppercase tracking-widest">0{index + 1}</span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-paynes/40 font-mono text-[10px] uppercase tracking-widest">
                        <span>{project.category}</span>
                        <div className="h-px flex-1 bg-paynes/5" />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

const Works = () => {
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
            video: '/videos/aangan.mov',
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
            video: '/pitch_rootout.mp4',
        },
        {
            slug: 'design-formula',
            title: 'Design Formula Studio',
            category: 'Architecture Studio',
            tags: ['Portfolio', 'UX', 'Typography'],
            logo: '/projects/designformula.png',
            video: '/videos/design.mov',
        },
        {
            slug: 'meraki-coffee',
            title: 'Meraki Coffee House',
            category: 'Lifestyle & Cafe',
            tags: ['Branding', 'Mobile-First', 'Maps'],
            logo: '/projects/meraki.png',
            video: '/videos/meraki.mov',
        },
        {
            slug: 'achyutam-fruitam',
            title: 'Achyutam Fruitam',
            category: 'Sensory Brand Site',
            tags: ['Storytelling', 'UI/UX'],
            logo: '/projects/achyutam.png',
            video: '/videos/achyutam_fruitam_demo.mov',
        },
        {
            slug: 'pnc',
            title: 'PNC Nutrition',
            category: 'Healthcare & Wellness',
            tags: ['Health-Tech', 'SEO'],
            logo: '/projects/priyam.png',
            video: '/videos/pnc.mov',
        },
        {
            slug: 'kalanjay',
            title: 'Kalanjay',
            category: 'Real Estate',
            tags: ['Property', 'Lead Gen'],
            logo: '/projects/kalanjay.png',
            video: '/videos/kalanjay.mov',
        },
        {
            slug: 'borana-group',
            title: 'Borana Group',
            category: 'Corporate Identity',
            tags: ['B2B', 'Industrial'],
            logo: '/Borana_logo.svg',
            video: '/videos/borana_demo.mov',
        },
        {
            slug: 'abhishek-ispat',
            title: 'Abhishek Ispat',
            category: 'Industrial Archive',
            tags: ['B2B', 'Database'],
            logo: '/apil_logo.jpeg',
            video: '/videos/aipl_demo.mov',
        }
    ]

    return (
        <section id="works" className="section-padding bg-transparent text-paynes min-h-screen">
            <div className="flex flex-col gap-12 mb-32">
                <div className="flex items-center gap-6">
                    <div className="h-[1px] w-12 bg-paynes" />
                    <span className="text-paynes text-xs font-bold tracking-[0.5em] uppercase">
                        Work Portfolio
                    </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-20">
                    <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.75]">
                        Latest <br /> <span className="opacity-20 italic">Creations.</span>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>

            <div className="mt-40 pt-20 border-t border-paynes/5 flex justify-center">
                <Magnetic>
                    <button className="flex flex-col items-center gap-4 group">
                        {/* <span className="text-xs font-bold uppercase tracking-[0.5em] group-hover:italic transition-all">End of Selection</span> */}
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
