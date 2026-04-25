import React from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import useSoundStore from '../store/useSoundStore'
import Magnetic from './Magnetic'

export default function SoundToggle({ isDark }) {
    const { isMuted, setIsMuted } = useSoundStore()

    const colorClass = isDark ? 'text-pearl border-pearl/20 hover:bg-pearl/5' : 'text-paynes border-paynes/20 hover:bg-paynes/5'

    return (
        <Magnetic>
            <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-colors group ${colorClass}`}
            >
                {/* <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                    Sound {isMuted ? 'Off' : 'On'}
                </span> */}
                {/* <div className="relative w-4 h-4 flex items-center justify-center">
                    {isMuted ? <VolumeX size={16} className="opacity-40" /> : <Volume2 size={16} className="fill-current" />}
                </div> */}
            </button>
        </Magnetic>
    )
}
