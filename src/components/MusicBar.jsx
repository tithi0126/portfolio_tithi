import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ListMusic } from 'lucide-react'
import useSoundStore from '../store/useSoundStore'
import { useNavigate, useLocation } from 'react-router-dom'

const MusicBar = () => {
    const {
        currentSong,
        isPlaying,
        togglePlay,
        nextSong,
        prevSong,
        isMuted,
        setIsMuted,
        audio,
        progress,
        setProgress,
        resetProgress
    } = useSoundStore()
    const navigate = useNavigate()
    const location = useLocation()
    const progressBarRef = useRef(null)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        if (!audio) return

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime)
            setProgress((audio.currentTime / audio.duration) * 100)
        }

        const handleDurationChange = () => {
            setDuration(audio.duration)
        }

        const handleSongEnd = () => {
            resetProgress()
            setCurrentTime(0)
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('durationchange', handleDurationChange)
        audio.addEventListener('ended', handleSongEnd)

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('durationchange', handleDurationChange)
            audio.removeEventListener('ended', handleSongEnd)
        }
    }, [audio, setProgress, resetProgress])

    useEffect(() => {
        if (isPlaying && currentSong) {
            document.title = `Now Playing: ${currentSong.title} — Tithi Shah`;
        } else {
            document.title = "Tithi Shah | Portfolio";
        }
    }, [isPlaying, currentSong])

    if (!currentSong) return null

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl"
        >
            <div className="glass-card bg-background-dark/80 backdrop-blur-2xl border border-pearl/10 p-4 md:p-6 flex items-center justify-between gap-6 shadow-2xl overflow-hidden relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-pearl/5">
                    <motion.div
                        className="h-full bg-accent-primary"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>

                {/* Song Info */}
                <div className="flex items-center gap-4 min-w-[150px] md:min-w-[200px]">
                    <div className="w-12 h-12 rounded-lg bg-pearl/10 flex items-center justify-center text-pearl">
                        <ListMusic size={24} />
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="font-bold text-sm truncate uppercase tracking-tight text-pearl">{currentSong.title}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-pearl/40">{currentSong.artist}</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 md:gap-8">
                    <button onClick={prevSong} className="text-pearl/40 hover:text-pearl transition-colors">
                        <SkipBack size={20} />
                    </button>

                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-pearl text-background-dark flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    >
                        {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
                    </button>

                    <button onClick={nextSong} className="text-pearl/40 hover:text-pearl transition-colors">
                        <SkipForward size={20} />
                    </button>
                </div>

                {/* Tools */}
                <div className="flex items-center gap-4 md:gap-6 min-w-[80px] justify-end">
                    <button
                        onClick={() => location.pathname === '/playlist' ? navigate('/') : navigate('/playlist')}
                        className={`p-2 rounded-lg transition-all ${location.pathname === '/playlist' ? 'bg-accent-primary text-background-dark' : 'text-pearl/40 hover:text-pearl'}`}
                    >
                        <ListMusic size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default MusicBar
