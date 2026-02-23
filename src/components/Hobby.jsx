import React from 'react'
import { motion } from 'framer-motion'
import { Music, Play, Mic2 } from 'lucide-react'

const Hobby = () => {
    const songs = [
        { title: 'Aaj Din Chadheya', type: 'Vocal Performance', duration: '3:45' },
        { title: 'Kaun Tujhe', type: 'Melodic Rendition', duration: '4:20' },
        { title: 'Raabta', type: 'Acoustic Cover', duration: '3:15' },
    ]

    return (
        <section id="singing" className="section-padding bg-accent-primary text-background-dark overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Mic2 size={400} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-background-dark" />
                        <span className="text-xs uppercase tracking-[0.4em] font-bold">Beyond the Code</span>
                    </div>
                    <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-12 italic">
                        SINGING IS MY<br />SOUL'S LANGUAGE
                    </h3>
                    <p className="text-2xl font-medium leading-relaxed mb-12 opacity-80">
                        Music is the harmony that balances my technical pursuits. Specialized in classical
                        and semi-classical vocals, I find expression through melodies.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 rounded-full border border-background-dark/20 text-sm font-bold uppercase tracking-widest">Vocalist</div>
                        <div className="px-6 py-3 rounded-full border border-background-dark/20 text-sm font-bold uppercase tracking-widest">Classical</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-background-dark/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-background-dark/10"
                >
                    <h4 className="text-2xl font-bold tracking-tight mb-8">Recents Recordings</h4>
                    <div className="flex flex-col gap-4">
                        {songs.map((song, i) => (
                            <div key={song.title} className="group flex items-center justify-between p-6 rounded-2xl hover:bg-background-dark hover:text-white transition-all cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-background-dark/10 group-hover:bg-accent-primary flex items-center justify-center transition-colors">
                                        <Play size={20} className="fill-current text-white group-hover:text-background-dark" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{song.title}</div>
                                        <div className="text-xs uppercase tracking-widest opacity-60 group-hover:opacity-80">{song.type}</div>
                                    </div>
                                </div>
                                <div className="text-sm font-mono opacity-40 group-hover:opacity-60">{song.duration}</div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-12 py-5 rounded-full bg-background-dark text-white font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-transform">
                        Open Full Playlist
                    </button>
                </motion.div>
            </div>

            {/* Decorative Text */}
            <div className="absolute -bottom-12 left-0 w-full opacity-10 pointer-events-none select-none">
                <div className="text-[15rem] font-bold whitespace-nowrap leading-none tracking-tighter italic">
                    MELODY HARMONY RHYTHM VOX
                </div>
            </div>
        </section>
    )
}

export default Hobby
