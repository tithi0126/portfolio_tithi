import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Mic2, Search, ArrowLeft, Disc } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import useSoundStore from '../store/useSoundStore'

const Playlist = () => {
    const navigate = useNavigate()
    const { playlist, currentSong, isPlaying, playSong, togglePlay } = useSoundStore()
    const [searchQuery, setSearchQuery] = useState('')

    const filteredSongs = playlist.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <section className="min-h-screen bg-background-dark text-pearl pt-32 pb-40 px-6 md:px-24">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                    <div>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-accent-primary mb-8 hover:-translate-x-2 transition-transform inline-flex"
                        >
                            <ArrowLeft size={20} />
                            <span className="text-xs uppercase tracking-widest font-bold">Back to Portfolio</span>
                        </Link>
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-none mb-4 italic uppercase">
                            VOCAL<br />ARCHIVE.
                        </h1>
                        <AnimatePresence mode="wait">
                            {isPlaying && currentSong ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <div className="w-2 h-2 rounded-full bg-pearl animate-pulse" />
                                    <span className="text-pearl text-xs uppercase tracking-[0.4em] font-bold">
                                        Now Playing: {currentSong.title}
                                    </span>
                                </motion.div>
                            ) : (
                                <div className="h-4 mb-6" /> // Placeholder to prevent jump
                            )}
                        </AnimatePresence>
                        <p className="text-pearl/40 uppercase tracking-[0.3em] text-xs font-bold">
                            {playlist.length} Recorded Performances • Classical & Contemporary
                        </p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pearl/20" size={18} />
                        <input
                            type="text"
                            placeholder="Search songs or styles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-pearl/5 border border-pearl/10 rounded-full py-4 pl-12 pr-6 text-sm focus:border-accent-primary outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col gap-2">
                    <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-pearl/20 border-b border-pearl/5">
                        <span>#</span>
                        <span>Title</span>
                        {/* <span>Category</span> */}
                        <span className="text-right">Action</span>
                    </div>

                    {filteredSongs.map((song, i) => {
                        const isCurrent = currentSong?.file === song.file;
                        return (
                            <motion.div
                                key={song.file}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => isCurrent ? togglePlay() : playSong(song)}
                                className={`group grid grid-cols-[50px_1fr_80px] md:grid-cols-[1fr_2fr_1fr] items-center px-8 py-6 rounded-2xl cursor-pointer transition-all ${isCurrent ? 'bg-pearl text-background-dark' : 'hover:bg-pearl/5'}`}
                            >
                                <div className="font-mono text-sm opacity-40">
                                    {isCurrent && isPlaying ? (
                                        <motion.div
                                            animate={{ scaleY: [1, 1.5, 0.8, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                            className="w-4 h-4 flex items-end gap-[2px]"
                                        >
                                            <div className="w-1 h-3 bg-current" />
                                            <div className="w-1 h-4 bg-current" />
                                            <div className="w-1 h-2 bg-current" />
                                        </motion.div>
                                    ) : (
                                        String(i + 1).padStart(2, '0')
                                    )}
                                </div>

                                <div>
                                    <div className="font-bold text-lg md:text-xl tracking-tight uppercase group-hover:italic transition-all">
                                        {song.title}
                                    </div>
                                    <div className={`text-[10px] uppercase tracking-widest ${isCurrent ? 'opacity-60' : 'opacity-30'}`}>
                                        {song.artist}
                                    </div>
                                </div>

                                {/* <div className={`hidden md:block text-xs uppercase tracking-widest font-bold ${isCurrent ? 'opacity-60' : 'opacity-40'}`}>
                                    {song.category}
                                </div> */}

                                <div className="text-right">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-auto transition-all ${isCurrent ? 'bg-background-dark text-pearl' : 'bg-pearl/10 group-hover:bg-accent-primary group-hover:text-background-dark'}`}>
                                        {isCurrent && isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {filteredSongs.length === 0 && (
                    <div className="py-40 text-center opacity-20">
                        <Disc size={64} className="mx-auto mb-4 animate-spin-slow" />
                        <p className="text-xl uppercase tracking-widest font-bold">No songs found match your search</p>
                    </div>
                )}
            </motion.div>
        </section>
    )
}

export default Playlist
