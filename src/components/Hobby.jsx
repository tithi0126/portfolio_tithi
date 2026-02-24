import React from 'react'
import { motion } from 'framer-motion'
import { Mic2, Play, Music, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Magnetic from './Magnetic'
import useSoundStore from '../store/useSoundStore'

const Hobby = () => {
    const navigate = useNavigate()
    const { playlist, currentSong, isPlaying, playSong, togglePlay } = useSoundStore()

    // Show top 3 featured songs in the section
    const featuredSongs = playlist.slice(0, 3)

    return (
        <section id="singing" className="section-padding bg-background-light text-background-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-6 opacity-40">Creative Soul</h2>
                        <h3 className="heading-xl">VOCAL<br />SOLACE.</h3>
                    </div>

                    <p className="text-xl text-background-dark/60 leading-relaxed max-w-lg">
                        Beyond the lines of code, I find my rhythm in music. Classical training has taught me the patience and precision that I now bring to every project I build.
                    </p>

                    <Magnetic>
                        <button
                            onClick={() => navigate('/playlist')}
                            className="btn-primary group flex items-center gap-3"
                        >
                            <Mic2 size={20} className="group-hover:rotate-12 transition-transform" />
                            Launch Full Playlist
                        </button>
                    </Magnetic>
                </motion.div>

                <div className="space-y-6">
                    {featuredSongs.map((song, i) => {
                        const isCurrent = currentSong?.file === song.file;
                        return (
                            <motion.div
                                key={song.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => isCurrent ? togglePlay() : playSong(song)}
                                className={`group p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer flex items-center justify-between ${isCurrent ? 'bg-accent-primary border-accent-primary' : 'bg-white border-black/5 hover:border-accent-primary/30'}`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${isCurrent ? 'bg-background-dark text-accent-primary' : 'bg-background-light group-hover:bg-accent-primary group-hover:text-background-dark'}`}>
                                        <Music size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold tracking-tight">{song.title}</h4>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-30">{song.artist}</p>
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isCurrent ? 'bg-background-dark text-white' : 'bg-black/5 group-hover:bg-accent-primary group-hover:text-background-dark'}`}>
                                    {isCurrent && isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hobby
