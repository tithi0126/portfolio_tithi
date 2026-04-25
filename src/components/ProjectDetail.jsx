import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'

const ProjectDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const projects = {
        'innervoice': {
            title: 'InnerVoice',
            category: 'Mental Health AI',
            tags: ['React', 'ASP.NET Core 8', 'Flutter', 'SignalR', 'Claude API', 'Knot API'],
            logo: '/inner_voice_logo.png',
            url: 'https://devpost.com/software/innervoice-breaking-ai-to-make-it-safer',
            description: 'Solo-built mental health AI platform at HackPrinceton. Discovered 4 AI jailbreak vulnerabilities and implemented real-time safety probes achieving 80%+ catch rate. Integrated Knot TransactionLink API for medications.'
        },
        'aangan-developers': {
            title: 'Aangan Developers',
            category: 'Software Agency',
            tags: ['React', 'Node.js', 'Vite', 'SEO', 'UX'],
            logo: '/projects/aangan.png',
            url: 'https://aangandevelopers.com/',
            description: 'Corporate portal showcasing real estate offerings. Optimized performance through code splitting and lazy loading while focusing on UX best practices, accessibility, and SEO.'
        },
        'finologyx': {
            title: 'FinoLogyX',
            category: 'FinTech Platform',
            tags: ['Flutter', 'MVC', 'API', 'Firebase'],
            logo: '/Finology_logo.png',
            url: 'https://apps.apple.com/in/app/finologyx/id6747080164',
            description: 'Suite of 25+ financial calculators (SIP, Tax, Loan) built with Flutter and MVC architecture. Features real-time result computation and user-centric input validation.'
        },
        'rootout': {
            title: 'RootOut',
            category: 'Agri-Tech AI',
            tags: ['Python', 'OpenCV', 'TensorFlow', 'IoT', 'Raspberry Pi'],
            logo: '/RootOut_Logo.png',
            video: '/pitch_rootout.mp4',
            description: 'AI-powered robotic weed cutter developed for e-Yantra IIT Bombay. Achieved 90% weed detection accuracy using OpenCV and TensorFlow edge computing to reduce herbicide use by 40%.'
        },
        'design-formula': {
            title: 'Design Formula Studio',
            category: 'Architecture Studio',
            tags: ['Portfolio', 'UX', 'Typography', 'Gallery'],
            logo: '/projects/designformula.png',
            video: '/videos/design.mov',
            url: 'https://designformulastudio.com/',
            description: 'Visually rich portfolio for interior design services. Implemented UX-driven navigation, smooth transitions, and clean typography for premium brand presentation.'
        },
        'meraki-coffee': {
            title: 'Meraki Coffee House',
            category: 'Lifestyle & Cafe',
            tags: ['Branding', 'Mobile-First', 'Video-Hero', 'Maps'],
            logo: '/projects/meraki.png',
            video: '/videos/meraki.mov',
            url: 'https://meraki.aangandevelopers.com/',
            description: 'Immersive brand storytelling with video-enhanced hero section. Features a "Brew Explorer" menu and integrated store locator pins for real-world foot traffic.'
        },
        'pnc': {
            title: 'PNC Nutrition',
            category: 'Healthcare & Wellness',
            tags: ['Health-Tech', 'SEO', 'Modular Design'],
            logo: '/projects/priyam.png',
            video: '/videos/pnc.mov',
            url: 'https://pncpriyamnutritioncare.com/',
            description: 'Healthcare platform highlighting expert profiles and wellness programs. Integrated appointment workflows and SEO-compliant content management for online visibility.'
        },
        'kalanjay': {
            title: 'Kalanjay',
            category: 'Real Estate',
            tags: ['Property', 'Gallery', 'Lead Gen'],
            logo: '/projects/kalanjay.png',
            video: '/videos/kalanjay.mov',
            url: 'https://kalanjay.aangandevelopers.com/',
            description: 'Responsive property highlight platform featuring interactive image galleries and inquiry workflows to support customer acquisition in the real estate sector.'
        },
        'achyutam-fruitam': {
            title: 'Achyutam Fruitam',
            category: 'Sensory Brand Site',
            tags: ['Visual Storytelling', 'Store Locator', 'UI/UX'],
            logo: '/projects/achyutam.png',
            video: '/videos/achyutam_fruitam_demo.mov',
            url: 'https://icecreamshop.aangandevelopers.com/',
            description: 'E-commerce interface for a natural ice cream brand. Features sensory storytelling, an interactive menu window, and brick-and-mortar store integration.'
        },
        'borana-group': {
            title: 'Borana Group',
            category: 'Corporate Identity',
            tags: ['B2B', 'Industrial', 'Pragma'],
            logo: '/Borana_logo.svg',
            video: '/videos/borana_demo.mov',
            url: 'https://www.boranagroup.in/',
            description: 'Professional corporate identity for the Borana Group, showcasing industrial manufacturing capabilities and industrial service sectors.'
        },
        'abhishek-ispat': {
            title: 'Abhishek Ispat',
            category: 'Industrial Archive',
            tags: ['B2B', 'Database', 'Pragma'],
            logo: '/apil_logo.jpeg',
            video: '/videos/aipl_demo.mov',
            url: 'https://www.abhishekispat.com/',
            description: 'Corporate B2B platform for Abhishek Ispat, highlighting specialized manufacturing workflows and diverse client requirements.'
        }
    }

    const project = projects[id]

    if (!project) return <div>Project not found</div>

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-pearl text-paynes section-padding"
        >
            <div className="max-w-7xl mx-auto">
                <Magnetic>
                    <button 
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold mb-20 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        Back to Works
                    </button>
                </Magnetic>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8">
                        <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">
                            {project.title}
                        </h1>
                        <div className="aspect-video rounded-3xl overflow-hidden bg-paynes/5 border border-paynes/5 mb-20 relative flex items-center justify-center">
                            {project.video ? (
                                <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                            ) : project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center gap-6">
                                    <div className="w-40 h-40 rounded-full bg-paynes/5 border border-paynes/10 flex items-center justify-center p-8">
                                        <img src={project.logo} alt={project.title} className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display='none'} />
                                        {!project.logo && <div className="text-4xl font-display font-bold opacity-10 uppercase">{project.title.charAt(0)}</div>}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">Visual Archive Pending</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end pb-20">
                        <div className="space-y-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Category</p>
                                <p className="text-xl font-bold uppercase">{project.category}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Technologies</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-full border border-paynes/10 text-[10px] font-bold uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Description</p>
                                <p className="text-lg leading-relaxed text-paynes/60">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDetail
