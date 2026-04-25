import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsVisible(false)
                        if (onComplete) onComplete()
                    }, 500)
                    return 100
                }
                return prev + Math.floor(Math.random() * 10) + 1
            })
        }, 100)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] bg-paynes text-pearl flex flex-col items-center justify-center"
                >
                    <div className="flex flex-col items-start gap-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-8xl font-display font-bold tracking-tighter"
                        >
                            TITHI
                        </motion.h2>
                        <div className="flex items-center gap-4 w-full">
                            <div className="h-[1px] bg-pearl/20 flex-1" />
                            <span className="text-4xl font-mono font-bold leading-none">{progress}%</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
