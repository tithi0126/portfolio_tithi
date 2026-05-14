import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Play, Pause, ExternalLink, Loader2, RotateCcw, RotateCw, Maximize2, Volume2, VolumeX, Monitor, Video, Volume1 } from 'lucide-react'
import Magnetic from './Magnetic'

const ProjectDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [volume, setVolume] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [showControls, setShowControls] = useState(true)
    const [activeVideoIndex, setActiveVideoIndex] = useState(0)
    const [showVolumeSlider, setShowVolumeSlider] = useState(false)

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
            description: "We broke our own mental health AI in 10 seconds. Then we made it unbreakable. A dual-superpower platform that detects its own weaknesses through automated red-teaming and sees behavioral signals through Knot's TransactionLink API to provide proactive support before the user even asks.",
            features: [
                "Automated Red-Teaming: Systematically attacks the AI with roleplay manipulation and fake overrides to find failure modes.",
                "Real-time Safety Probe: A lightweight rule-based classifier achieving 80%+ catch rate for AI jailbreaks with zero perceptible latency.",
                "Steering Vector Correction: Automatically regenerates harmful messages into safe, clinically-sound responses.",
                "Knot TransactionLink Integration: Connects SKU-level pharmacy data to notice health changes before the user reports them."
            ]
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
            videos: [
                { label: 'Pitch Video', url: '/pitch_rootout.mp4', icon: <Video size={16} /> },
                { label: 'Technical Demo', url: '/technical_demo_rootout.mp4', icon: <Monitor size={16} /> }
            ],
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

    const activeVideo = project.videos ? project.videos[activeVideoIndex] : { url: project.video }

    useEffect(() => {
        setIsLoading(true)
        setHasError(false)
        setProgress(0)
        setCurrentTime(0)
    }, [activeVideoIndex])

    const togglePlay = (e) => {
        if (e) e.stopPropagation()
        const video = videoRef.current
        if (video) {
            if (video.paused) {
                video.play().catch(console.error)
            } else {
                video.pause()
            }
        }
    }

    const toggleMute = (e) => {
        if (e) e.stopPropagation()
        if (videoRef.current) {
            const newMute = !videoRef.current.muted
            videoRef.current.muted = newMute
            setIsMuted(newMute)
            if (!newMute && videoRef.current.volume === 0) {
                videoRef.current.volume = 1
                setVolume(1)
            }
        }
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (videoRef.current) {
            videoRef.current.volume = newVolume
            if (newVolume > 0) {
                videoRef.current.muted = false
                setIsMuted(false)
            } else {
                videoRef.current.muted = true
                setIsMuted(true)
            }
        }
    }

    const skip = (seconds) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds
        }
    }

    const handleProgress = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime
            const total = videoRef.current.duration
            setCurrentTime(current)
            setProgress((current / total) * 100)
        }
    }

    const handleSeek = (e) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect()
            const pos = (e.clientX - rect.left) / rect.width
            videoRef.current.currentTime = pos * videoRef.current.duration
        }
    }

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const handlePlayState = () => {
        if (videoRef.current) {
            setIsPlaying(!videoRef.current.paused)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-pearl text-paynes section-padding"
        >
            <div className="max-w-7xl mx-auto">
                <Magnetic>
                    <Link
                        to="/#works"
                        className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold mb-20 group inline-flex"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        Back to Works
                    </Link>
                </Magnetic>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Project Title</p>
                            <h1 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.85]">
                                {project.title}
                            </h1>
                        </div>

                        {/* Video Switcher Tabs */}
                        {project.videos && (
                            <div className="flex gap-4 mb-8">
                                {project.videos.map((vid, idx) => (
                                    <button
                                        key={vid.label}
                                        onClick={() => setActiveVideoIndex(idx)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${activeVideoIndex === idx ? 'bg-paynes text-pearl' : 'bg-paynes/5 text-paynes/40 hover:bg-paynes/10'}`}
                                    >
                                        {vid.icon}
                                        {vid.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div
                            className="aspect-video rounded-3xl overflow-hidden bg-paynes/5 border border-paynes/5 mb-20 relative flex items-center justify-center group"
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => isPlaying && setShowControls(false)}
                        >
                            {activeVideo.url ? (
                                <>
                                    {isLoading && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-paynes/5 z-10">
                                            <Loader2 size={40} className="animate-spin text-paynes/20 mb-4" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-20">Loading Archive...</span>
                                        </div>
                                    )}
                                    {hasError && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-paynes/5 z-10">
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-red-500/40">Failed to load video</span>
                                        </div>
                                    )}
                                    <video
                                        key={activeVideo.url}
                                        ref={videoRef}
                                        src={activeVideo.url}
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        playsInline
                                        className={`w-full h-full object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                        onCanPlay={() => {
                                            setIsLoading(false)
                                            setDuration(videoRef.current.duration)
                                            if (videoRef.current) videoRef.current.volume = volume
                                        }}
                                        onTimeUpdate={handleProgress}
                                        onPlay={handlePlayState}
                                        onPause={handlePlayState}
                                        onError={() => {
                                            setIsLoading(false)
                                            setHasError(true)
                                        }}
                                        onClick={togglePlay}
                                    />

                                    {/* Mute Hint Overlay */}
                                    <AnimatePresence>
                                        {isPlaying && isMuted && !isLoading && !hasError && (
                                            <motion.button
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                onClick={toggleMute}
                                                className="absolute top-8 right-8 bg-pearl/10 backdrop-blur-md border border-pearl/20 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-pearl z-20 flex items-center gap-2 hover:bg-pearl/20 transition-all"
                                            >
                                                <VolumeX size={14} />
                                                Click for Sound
                                            </motion.button>
                                        )}
                                    </AnimatePresence>

                                    {/* Video Controls Overlay */}
                                    <AnimatePresence>
                                        {showControls && !isLoading && !hasError && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-gradient-to-t from-paynes/60 via-transparent to-transparent flex flex-col justify-end p-8"
                                            >
                                                {/* Play/Pause Large Center Icon */}
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <motion.div
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        className="w-20 h-20 rounded-full bg-pearl text-paynes flex items-center justify-center shadow-2xl"
                                                    >
                                                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                                                    </motion.div>
                                                </div>

                                                {/* Controls Bar */}
                                                <div className="space-y-6 relative z-20">
                                                    {/* Progress Bar */}
                                                    <div
                                                        className="h-1.5 w-full bg-pearl/20 rounded-full cursor-pointer group/progress relative"
                                                        onClick={handleSeek}
                                                    >
                                                        <div
                                                            className="h-full bg-pearl rounded-full relative"
                                                            style={{ width: `${progress}%` }}
                                                        >
                                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-pearl rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-lg" />
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between gap-8">
                                                        <div className="flex items-center gap-6">
                                                            <button onClick={() => skip(-10)} className="text-pearl hover:scale-110 transition-transform">
                                                                <RotateCcw size={24} />
                                                            </button>
                                                            <button onClick={togglePlay} className="text-pearl hover:scale-110 transition-transform">
                                                                {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                                                            </button>
                                                            <button onClick={() => skip(10)} className="text-pearl hover:scale-110 transition-transform">
                                                                <RotateCw size={24} />
                                                            </button>
                                                            <div className="text-[10px] uppercase tracking-widest font-bold text-pearl/80 font-mono">
                                                                {formatTime(currentTime)} / {formatTime(duration)}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-6">
                                                            <div className="relative flex items-center gap-2 group/volume">
                                                                <button
                                                                    onClick={toggleMute}
                                                                    onMouseEnter={() => setShowVolumeSlider(true)}
                                                                    className="text-pearl hover:scale-110 transition-transform"
                                                                >
                                                                    {isMuted || volume === 0 ? <VolumeX size={24} /> : volume < 0.5 ? <Volume1 size={24} /> : <Volume2 size={24} />}
                                                                </button>
                                                                <AnimatePresence>
                                                                    {showVolumeSlider && (
                                                                        <motion.div
                                                                            initial={{ width: 0, opacity: 0 }}
                                                                            animate={{ width: 100, opacity: 1 }}
                                                                            exit={{ width: 0, opacity: 0 }}
                                                                            className="overflow-hidden"
                                                                            onMouseLeave={() => setShowVolumeSlider(false)}
                                                                        >
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="1"
                                                                                step="0.1"
                                                                                value={isMuted ? 0 : volume}
                                                                                onChange={handleVolumeChange}
                                                                                className="w-24 accent-pearl cursor-pointer"
                                                                            />
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                            <div className="bg-pearl/20 backdrop-blur-md border border-pearl/20 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-pearl shadow-sm">
                                                                {isPlaying ? 'Live Preview' : 'Paused'}
                                                            </div>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    videoRef.current?.requestFullscreen()
                                                                }}
                                                                className="text-pearl hover:scale-110 transition-transform"
                                                            >
                                                                <Maximize2 size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            ) : project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full w-full">
                                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-paynes/5 border border-paynes/10 flex items-center justify-center p-12 transition-all hover:bg-paynes/10">
                                        {project.logo ? (
                                            <img src={project.logo} alt={project.title} className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                                        ) : (
                                            <div className="text-8xl font-display font-bold opacity-10 uppercase">{project.title.charAt(0)}</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end pb-8 md:pb-20">
                        <div className="space-y-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Category</p>
                                <p className="text-xl font-bold uppercase tracking-tight">{project.category}</p>
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

                            {project.features && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 mb-4">Technical Highlights</p>
                                    <ul className="space-y-4">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex gap-4 items-start text-sm leading-relaxed text-paynes/60">
                                                <span className="text-paynes opacity-30 font-mono mt-1">0{i+1}</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.url && (
                                <Magnetic>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-paynes text-pearl font-bold uppercase tracking-widest text-xs group hover:scale-105 transition-all"
                                    >
                                        Visit Live Project
                                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </Magnetic>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDetail
