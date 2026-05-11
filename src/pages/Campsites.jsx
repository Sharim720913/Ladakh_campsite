import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, SlidersHorizontal, Tent, Info, Waves, Mountain, Sun, ChevronDown } from 'lucide-react';
import { useTourism } from '../context/TourismContext';

const facilityTypes = ['Tent Sites', 'RV/Trailer', 'Backcountry', 'Cabins', 'Glamping'];

const Campsites = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const { camps, isLoading } = useTourism();

    const toggleFacility = (type) => {
        setSelectedFacilities(prev =>
            prev.includes(type) ? prev.filter(f => f !== type) : [...prev, type]
        );
    };

    const filteredCamps = (camps || []).filter(camp =>
        camp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camp.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#1a3421] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Retrieving Territory Data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f2f4f7] min-h-screen">

            {/* ── HERO SECTION ── */}
            <div className="relative h-[440px] overflow-hidden">
                {/* Background Image */}
                <img
                    src="/assets/campsite copy.png"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    alt="Lush green alpine meadow with cows grazing, river, and snow-capped mountains"
                />
                {/* Subtle dark overlay — only left portion where text sits */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-16 max-w-7xl mx-auto">
                    {/* Official tag */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-full border-2 border-white/80 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.25em]">Official Discovery Portal</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-4 tracking-tight">
                        Discover Ladakh's <br />
                        <span className="text-[#d4af37]">Best Campsites</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/85 text-sm font-medium max-w-sm leading-relaxed mb-7">
                        Find the perfect campsite surrounded by majestic mountains,<br />
                        flowing rivers, and untouched natural beauty.
                    </p>

                    {/* Search bar */}
                    <div className="max-w-[420px] relative mb-5">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search high-altitude zones (e.g. Nubra, Zanskar)"
                            className="w-full bg-white rounded-lg py-4 pl-12 pr-4 text-sm text-gray-800 placeholder:text-gray-400 shadow-lg outline-none focus:ring-2 focus:ring-white/40"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Peak season notice */}
                    <div className="max-w-[420px] flex items-center gap-3 bg-[#1a3421]/90 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/10">
                        <Info size={15} className="text-white shrink-0" />
                        <p className="text-[11px] font-bold text-white uppercase tracking-wide">
                            Peak Season: Most campsites require advance booking in July &amp; August.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── BODY: SIDEBAR + LISTINGS ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
                <div className="flex gap-10">

                    {/* ── SIDEBAR ── */}
                    <aside className="w-52 shrink-0 space-y-8">
                        {/* Facility Type */}
                        <div>
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-800 mb-5">Facility Type</h3>
                            <div className="space-y-3.5">
                                {facilityTypes.map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            onClick={() => toggleFacility(type)}
                                            className={`w-4 h-4 border rounded flex items-center justify-center shrink-0 transition-all ${selectedFacilities.includes(type)
                                                ? 'bg-[#1a3421] border-[#1a3421]'
                                                : 'border-gray-300 group-hover:border-gray-500'
                                                }`}
                                        >
                                            {selectedFacilities.includes(type) && (
                                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900 transition-colors select-none">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Peak Season Alert Card */}
                        <div className="bg-gray-100 rounded-xl p-5 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-gray-800">
                                <Sun size={17} className="shrink-0" />
                                <h4 className="text-[11px] font-black uppercase tracking-widest leading-tight">
                                    Peak Season<br />Alert
                                </h4>
                            </div>
                            <p className="text-[11.5px] text-gray-500 leading-relaxed">
                                Most facilities in the Changthang region require reservations 14 days in advance during July &amp; August.
                            </p>
                        </div>
                    </aside>

                    {/* ── MAIN LISTINGS ── */}
                    <div className="flex-1 min-w-0">

                        {/* Count + Sort bar */}
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-[13px] font-semibold text-gray-700">
                                {filteredCamps.length} Campsites Available
                            </p>
                            <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-700 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors shadow-sm">
                                <SlidersHorizontal size={13} />
                                <span>Sort: Recommended</span>
                                <ChevronDown size={13} />
                            </button>
                        </div>

                        {/* Camp Cards */}
                        <div className="space-y-4">
                            {filteredCamps.map((camp, idx) => (
                                <motion.div
                                    key={camp.id || idx}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl flex overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Image */}
                                    <div className="w-[260px] shrink-0 relative">
                                        <img
                                            src={camp.image}
                                            alt={camp.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {camp.isAvailable && (
                                            <span className="absolute top-3.5 left-3.5 bg-[#1a6b29] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
                                                Available
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 px-8 py-6 flex flex-col justify-between">
                                        <div className="flex justify-between items-start gap-4">
                                            {/* Left info */}
                                            <div>
                                                {/* Type label */}
                                                <div className="flex items-center gap-1.5 text-gray-400 mb-2">
                                                    <Tent size={11} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">
                                                        {camp.type === 'Premium' ? 'Premium Camp Site' : 'Standard Non-Electric'}
                                                    </span>
                                                </div>

                                                {/* Name */}
                                                <h3 className="text-[22px] font-black text-gray-900 leading-tight mb-1.5">
                                                    {camp.name}
                                                </h3>

                                                {/* Location */}
                                                <div className="flex items-center text-gray-500 text-[12px] font-medium">
                                                    <MapPin size={12} className="mr-1.5 text-gray-400" />
                                                    {camp.location}
                                                </div>

                                                {/* Tags */}
                                                <div className="flex items-center gap-6 mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                    <span className="flex items-center gap-1.5">
                                                        <Waves size={12} /> Near River
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Mountain size={12} /> High Altitude
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right: price + rating */}
                                            <div className="text-right shrink-0">
                                                <p className="text-[22px] font-black text-gray-900 leading-none mb-1.5">{camp.price}</p>
                                                <div className="flex items-center justify-end gap-1 text-amber-500">
                                                    <Star size={13} className="fill-current" />
                                                    <span className="text-[13px] font-black text-gray-800">{camp.rating || '4.8'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <div className="flex justify-end mt-5">
                                            <button className="bg-[#1a3421] hover:bg-[#142819] text-white text-[11px] font-black uppercase tracking-widest px-8 py-3.5 rounded-lg transition-colors">
                                                Check Availability
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Load more */}
                        {filteredCamps.length > 0 && (
                            <button className="w-full mt-8 py-5 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-800 bg-white border border-dashed border-gray-300 rounded-xl transition-all hover:border-gray-400">
                                Load More Facilities
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campsites;
