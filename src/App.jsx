import React, { useEffect } from 'react'
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
import Marquee from './components/Marquee'

gsap.registerPlugin(ScrollTrigger)

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Background color shifting logic using GSAP
        const sections = document.querySelectorAll('section')
        sections.forEach((section) => {
            const id = section.getAttribute('id')
            // Sections that should be light (yellow)
            const lightSections = ['certifications', 'singing', 'tech-stack']
            const isLight = lightSections.includes(id)

            ScrollTrigger.create({
                trigger: section,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {
                    gsap.to('main', {
                        backgroundColor: isLight ? '#e4ff00' : '#0a0a0a',
                        duration: 0.8,
                        ease: 'power2.inOut'
                    })
                },
                onEnterBack: () => {
                    gsap.to('main', {
                        backgroundColor: isLight ? '#e4ff00' : '#0a0a0a',
                        duration: 0.8,
                        ease: 'power2.inOut'
                    })
                }
            })
        })

        return () => {
            lenis.destroy()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <main className="bg-background-dark selection:bg-accent-primary selection:text-background-dark transition-colors duration-500">
            <Loader />
            <CustomCursor />
            <div className="noise-overlay" />
            <Navbar />
            <Hero />
            <Marquee text="Design • Development • Strategy" speed={30} />
            <About />
            <Experience />
            <Marquee text="Innovate • Create • Deploy" direction="right" speed={40} />
            <TechStack />
            <Certifications />
            <Works />
            <Hobby />
            <Contact />
        </main>
    )
}

export default App
