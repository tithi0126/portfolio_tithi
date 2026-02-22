import React from 'react'
import { motion } from 'framer-motion'

const DeviceMockup = ({ type = 'macbook', children }) => {
    if (type === 'macbook') {
        return (
            <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] rounded-[2rem] border-[8px] border-[#333] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#222] flex items-center px-4 gap-2 z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                    <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <div className="w-full h-full pt-8">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div className="relative w-full aspect-[9/19] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#333] shadow-2xl overflow-hidden">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#222] rounded-full z-10" />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default DeviceMockup
