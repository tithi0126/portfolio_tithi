import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, PenTool, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import poemsData from '../data/poems.json'

const Poetry = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedPoem, setSelectedPoem] = useState(null)
    const [poemContent, setPoemContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const filteredPoems = poemsData.filter(poem =>
        poem.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const openPoem = async (poem) => {
        setSelectedPoem(poem)
        setIsLoading(true)
        try {
            const response = await fetch(`/Poetry/${poem.filename}`)
            const text = await response.text()
            setPoemContent(text)
        } catch (error) {
            console.error('Error fetching poem:', error)
            setPoemContent('Could not load the poem content at this time.')
        } finally {
            setIsLoading(false)
        }
    }

    const closePoem = () => {
        setSelectedPoem(null)
        setPoemContent('')
    }

    // Close modal on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closePoem()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

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
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-accent-primary mb-8 hover:-translate-x-2 transition-transform"
                        >
                            <ArrowLeft size={20} />
                            <span className="text-xs uppercase tracking-widest font-bold">Back to Portfolio</span>
                        </button>
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 italic uppercase">
                            POETRY<br />ARCHIVE.
                        </h1>
                        <p className="text-pearl/40 uppercase tracking-[0.3em] text-xs font-bold mt-8">
                            {poemsData.length} Written Pieces • Thoughts & Verses
                        </p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pearl/20" size={18} />
                        <input
                            type="text"
                            placeholder="Search poems..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-pearl/5 border border-pearl/10 rounded-full py-4 pl-12 pr-6 text-sm focus:border-accent-primary outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col gap-2">
                    <div className="hidden md:grid grid-cols-[1fr_3fr] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-pearl/20 border-b border-pearl/5">
                        <span>#</span>
                        <span>Title</span>
                    </div>

                    {filteredPoems.map((poem, i) => (
                        <motion.div
                            key={poem.filename}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.02 }}
                            onClick={() => openPoem(poem)}
                            className="group grid grid-cols-[50px_1fr] md:grid-cols-[1fr_3fr] items-center px-8 py-6 rounded-2xl cursor-pointer transition-all hover:bg-pearl/5"
                        >
                            <div className="font-mono text-sm opacity-40">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            <div>
                                <div className="font-bold text-lg md:text-xl tracking-tight uppercase group-hover:italic transition-all">
                                    {poem.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredPoems.length === 0 && (
                    <div className="py-40 text-center opacity-20">
                        <PenTool size={64} className="mx-auto mb-4" />
                        <p className="text-xl uppercase tracking-widest font-bold">No poems found matching your search</p>
                    </div>
                )}
            </motion.div>

            {/* Poem Reader Modal */}
            <AnimatePresence>
                {selectedPoem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-background-dark/90 backdrop-blur-sm"
                        onClick={closePoem}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="bg-pearl text-paynes w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-8 border-b border-paynes/10">
                                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">
                                    {selectedPoem.title}
                                </h2>
                                <button 
                                    onClick={closePoem}
                                    className="w-10 h-10 rounded-full bg-paynes/5 flex items-center justify-center hover:bg-paynes hover:text-pearl transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            
                            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
                                {isLoading ? (
                                    <div className="flex flex-col items-center justify-center py-20 opacity-30">
                                        <div className="w-8 h-8 border-4 border-current border-t-transparent rounded-full animate-spin mb-4" />
                                        <span className="text-xs uppercase tracking-widest font-bold">Loading Verses...</span>
                                    </div>
                                ) : (
                                    <div className="whitespace-pre-wrap font-mono text-base md:text-lg leading-relaxed max-w-2xl mx-auto py-8">
                                        {poemContent}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Poetry
