import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useSoundStore from '../store/useSoundStore'

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { playSound } = useSoundStore()

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
    }

    const handleMouseEnter = () => {
        playSound('hover')
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => playSound('click')}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
}
