import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Works from './components/Works'
import Hobby from './components/Hobby'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import MusicBar from './components/MusicBar'
import Playlist from './components/Playlist'

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

        // Sections background color transition
        const sections = document.querySelectorAll('section[data-color]')
        sections.forEach((section) => {
            const color = section.getAttribute('data-color')
            ScrollTrigger.create({
                trigger: section,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => gsap.to('body', { backgroundColor: color, duration: 1 }),
                onEnterBack: () => gsap.to('body', { backgroundColor: color, duration: 1 }),
            })
        })

        return () => {
            lenis.destroy()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <main className="relative">
            <Hero />
            <section data-color="#0F0F0F" id="about"><About /></section>
            <section data-color="#F5F5F7" id="experience"><Experience /></section>
            <section data-color="#0F0F0F" id="certifications"><Certifications /></section>
            <section data-color="#F5F5F7" id="works"><Works /></section>
            <section data-color="#0F0F0F" id="tech-stack"><TechStack /></section>
            <section data-color="#F5F5F7" id="singing"><Hobby /></section>
            <section data-color="#0F0F0F" id="contact"><Contact /></section>
        </main>
    )
}

const AppContent = () => {
    const [loading, setLoading] = useState(true)
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
        <div className="bg-background-dark text-white min-h-screen selection:bg-accent-primary selection:text-background-dark">
            {loading && <Loader onComplete={() => setLoading(false)} />}
            <CustomCursor />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist" element={<Playlist />} />
            </Routes>

            <MusicBar />
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
