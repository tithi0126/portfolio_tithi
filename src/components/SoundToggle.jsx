import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'
import useSoundStore from '../store/useSoundStore'
import Magnetic from './Magnetic'

export default function SoundToggle({ isDark }) {
    const { isMuted, setIsMuted, isPlaying, currentSong } = useSoundStore()

    const colorClass = isDark ? 'text-pearl border-pearl/20 hover:bg-pearl/5' : 'text-paynes border-paynes/20 hover:bg-paynes/5'

    return (
        <Magnetic>
            <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 group ${colorClass}`}
            >
                <AnimatePresence mode="wait">
                    {isPlaying && currentSong ? (
                        <motion.div
                            key="song-name"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex items-center gap-2"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <Music size={12} className="text-pearl" />
                            </motion.div>
                            <span className="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap overflow-hidden max-w-[100px] truncate">
                                {currentSong.title}
                            </span>
                        </motion.div>
                    ) : (
                        <motion.span
                            key="sound-status"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] uppercase tracking-widest font-bold group-hover:opacity-100 transition-opacity"
                        >
                            Sound {isMuted ? 'Off' : 'On'}
                        </motion.span>
                    )}
                </AnimatePresence>

                <div className="relative w-4 h-4 flex items-center justify-center">
                    {isMuted ? (
                        <VolumeX size={16} className="opacity-40" />
                    ) : (
                        <motion.div
                            animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <Volume2 size={16} className="fill-current" />
                        </motion.div>
                    )}
                </div>
            </button>
        </Magnetic>
    )
}
