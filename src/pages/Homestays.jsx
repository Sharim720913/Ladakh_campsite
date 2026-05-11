import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    MapPin,
    Star,
    Home,
    ShieldCheck,
    ArrowRight,
    ChevronRight
} from 'lucide-react';

import { useTourism } from '../context/TourismContext';

const Homestays = () => {
    const { homestays } = useTourism();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="bg-[var(--color-bg-base)] min-h-screen pt-20">

            {/* Immersive Header */}
            <div className="bg-[#1a1e23] text-white py-20 relative overflow-hidden min-h-[700px]">

                {/* Background Image */}
                <img
                    src="/assets/Homestays.png"
                    alt="Homestays Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Hero Content */}
                <div className="rec-container relative z-10">
                    <div className="max-w-2xl">

                        <span className="text-[var(--color-accent-sky)] font-bold uppercase tracking-widest text-xs mb-4 block">
                            Official Partnership Network
                        </span>

                        <h1 className="text-5xl font-extrabold tracking-tight mb-8">
                            Authentic Heritage <br />
                            Homestays
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10">
                            Reserve a stay with local families across the territory.
                            All homestays are verified for sustainability and cultural authenticity.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">

                            <div className="relative flex-grow group">
                                <Search
                                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
                                    size={20}
                                />

                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by village or region..."
                                    className="w-full bg-white text-black rounded-md py-4 pl-14 pr-6 text-sm font-bold outline-none"
                                />
                            </div>

                            <button className="btn-primary md:px-12 py-4">
                                Find Lodging
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="rec-container py-24">

                {/* Information Callout */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex items-center space-x-6">

                        <div className="p-4 bg-white rounded-full text-[var(--color-primary)] shadow-sm">
                            <ShieldCheck size={28} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                                The Ladakh Assurance
                            </h3>

                            <p className="text-sm text-[var(--color-text-secondary)] font-medium">
                                Every homestay in our portal is vetted by the Territory Tourism Bureau
                                for quality and ethics.
                            </p>
                        </div>

                    </div>

                    <button className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest flex items-center">
                        Terms of Stewardship
                        <ChevronRight size={18} className="ml-1" />
                    </button>

                </div>

                {/* Homestay Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {homestays.map((home, idx) => (

                        <motion.div
                            key={home.id || idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rec-card h-full flex flex-col group"
                        >

                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">

                                <img
                                    src={home.image}
                                    alt={home.name}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />

                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[var(--color-text-primary)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-sm border border-[var(--color-border)]">
                                        Verified Host
                                    </span>
                                </div>

                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">

                                <div className="flex items-center space-x-2 text-[var(--color-secondary)] font-bold text-[10px] uppercase tracking-widest mb-3">
                                    <Home size={12} />
                                    <span>Village Immersion</span>
                                </div>

                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-4">
                                    {home.name}
                                </h3>

                                <div className="flex items-center text-[var(--color-text-secondary)] text-sm mb-8 font-medium">
                                    <MapPin size={16} className="mr-2 text-[var(--color-primary)]" />
                                    {home.location}
                                </div>

                                <div className="mt-auto flex flex-col space-y-6">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                                                Nightly Rate
                                            </p>

                                            <p className="text-2xl font-extrabold text-[var(--color-text-primary)] leading-none">
                                                {home.price}
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-1 text-amber-500">
                                            <Star size={16} className="fill-current" />

                                            <span className="text-sm font-black text-[var(--color-text-primary)]">
                                                4.9
                                            </span>
                                        </div>

                                    </div>

                                    <button className="btn-secondary w-full group/btn">
                                        View Lodging

                                        <ArrowRight
                                            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                            size={16}
                                        />
                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default Homestays;