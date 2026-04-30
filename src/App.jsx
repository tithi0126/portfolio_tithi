import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import ProjectDetail from './components/ProjectDetail'
import Certifications from './components/Certifications'
import Works from './components/Works'
import Hobby from './components/Hobby'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import MusicBar from './components/MusicBar'
import { Toaster } from 'react-hot-toast'
import Playlist from './components/Playlist'
import Poetry from './components/Poetry'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="relative">
            <Hero />
            <About />
            <Experience />
            <Works />
            <TechStack />
            <Certifications />
            <Hobby />
            <Contact />
        </main>
    )
}

const AppContent = () => {
    const [loading, setLoading] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        // Scroll to hash if present on home page
        if (location.hash && location.pathname === '/') {
            setTimeout(() => {
                const element = document.querySelector(location.hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else if (location.pathname !== '/') {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <div 
            className="text-paynes bg-pearl min-h-screen selection:bg-paynes selection:text-pearl"
        >
            <Toaster position="bottom-right" toastOptions={{ style: { background: '#536878', color: '#EAE0C8', fontSize: '12px', fontWeight: 'bold', borderRadius: '15px' } }} />
            <AnimatePresence mode="wait">
                {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <>
                    <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isMenuOpen ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                        className={isMenuOpen ? 'pointer-events-none' : ''}
                    >
                        <CustomCursor />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project/:id" element={<ProjectDetail />} />
                            <Route path="/playlist" element={<Playlist />} />
                            <Route path="/poetry" element={<Poetry />} />
                        </Routes>

                        <MusicBar />
                    </motion.div>
                </>
            )}
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
