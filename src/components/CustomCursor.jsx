import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const dotRef = useRef(null)

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothMouse = {
        x: useSpring(mouse.x, { stiffness: 300, damping: 20, mass: 0.5 }),
        y: useSpring(mouse.y, { stiffness: 300, damping: 20, mass: 0.5 })
    }

    useEffect(() => {
        const manageMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouse.x.set(clientX)
            mouse.y.set(clientY)
        }

        window.addEventListener("mousemove", manageMouseMove)
        return () => window.removeEventListener("mousemove", manageMouseMove)
    }, [])

    return (
        <>
            <motion.div
                ref={cursorRef}
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
                className="fixed w-8 h-8 rounded-full border border-accent-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
            >
                <div className="w-1 h-1 bg-accent-primary rounded-full" />
            </motion.div>
        </>
    )
}
