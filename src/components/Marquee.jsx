import React from 'react'
import { motion } from 'framer-motion'

const Marquee = ({ text, direction = "left", speed = 20 }) => {
    return (
        <div className="relative py-12 bg-white/5 overflow-hidden flex whitespace-nowrap border-y border-white/5 select-none">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 text-[10rem] font-bold leading-none tracking-tighter italic uppercase pr-12"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className={`${i % 2 === 0 ? 'text-white' : 'text-transparent stroke-white stroke-1'} opacity-10`}>
                        {text} <span className="text-accent-primary inline-block bg-accent-primary w-4 h-4 rounded-full mx-8 align-middle" />
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

export default Marquee
