import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Tent, Mountain, Compass, Home, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const [activeCategory, setActiveCategory] = useState('Campsites');

    const categories = [
        { id: 'Campsites', icon: Tent, label: 'Campsites' },
        { id: 'Homestays', icon: Home, label: 'Homestays' },
        { id: 'Festivals', icon: Calendar, label: 'Festivals' },
        { id: 'Explore', icon: Mountain, label: 'Explore' },
    ];

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[var(--color-bg)]">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544070282-591d487c6ce7?q=80&w=2070&auto=format&fit=crop"
                    alt="Ladakh Cinematic Mountain"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Precision Overlays for Depth & Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[var(--color-bg)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                {/* Atmospheric Glow */}
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 blur-[120px] rounded-full" />
            </div>

            <div className="rec-container relative z-10 w-full flex flex-col items-center text-center">
                {/* Elevated Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[var(--color-secondary)]/90 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 shadow-glow">
                        Authentic Territory Explorer
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
                        Find your next <br />
                        <span className="text-[var(--color-secondary)] text-glow">Mountain Escape.</span>
                    </h1>
                </motion.div>

                {/* Enhanced Search Card - Preserving Layout Exactly */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2 md:p-4 border border-white/50"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100 mb-4 md:mb-6 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center space-x-3 px-6 md:px-10 py-4 transition-all border-b-4 ${activeCategory === cat.id
                                    ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-blue-50/50'
                                    : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <cat.icon size={18} />
                                <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">{cat.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col md:flex-row gap-3 px-2 pb-2">
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="relative group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search location (e.g. Pangong, Nubra)"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-5 pl-14 pr-6 text-sm focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all font-bold"
                                />
                            </div>
                            <div className="relative group">
                                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Select dates"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-5 pl-14 pr-6 text-sm focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all font-bold"
                                />
                            </div>
                        </div>
                        <button className="bg-[var(--color-primary)] text-white px-10 md:px-16 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[var(--color-primary-dark)] transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]">
                            Search
                        </button>
                    </div>
                </motion.div>

                {/* Subtle Branding/Trust */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Authorized Agency Explorer</p>
                    <div className="flex items-center space-x-4">
                        {['Pangong', 'Hunder', 'Zanskar'].map(trend => (
                            <span key={trend} className="text-white/80 text-xs font-bold hover:text-[var(--color-secondary)] transition-colors cursor-pointer border-b border-white/20 pb-0.5">{trend}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

