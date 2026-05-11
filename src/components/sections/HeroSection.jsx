import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Tent, Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroYakLakeImg from '../../hero_yak_lake.jpg';

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Mock search suggestions
    const suggestions = [
        { title: 'Tsomgo Heritage Home', type: 'Homestay', icon: MapPin, path: '/homestays' },
        { title: 'Pangong Lake View Camp', type: 'Campsite', icon: Tent, path: '/campsites' },
        { title: 'Hemis Festival Ticket', type: 'Event', icon: Calendar, path: '/events/hemis-festival' },
        { title: 'Khardung La Cycling', type: 'Activity', icon: Clock, path: '/explore' },
    ];

    const trending = ['Nubra Valley', 'Tso Moriri', 'Hanle Observatory'];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (path) => {
        setIsDropdownOpen(false);
        navigate(path);
    };

    const filteredSuggestions = suggestions.filter(s =>
        (activeCategory === 'All' || s.type === activeCategory) &&
        s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

            {/* Static Image Background (Yaks in Lush Ladakh Valley) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] hover:scale-105"
                style={{ backgroundImage: `url(${heroYakLakeImg})` }}
            />

            {/* Dark Cinematic Overlays */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/10 z-0" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12">

                {/* Centered Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-wide drop-shadow-2xl mb-6 leading-tight"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Ladakh – A Confluence of<br />
                    <span className="font-extrabold">Culture, Nature & Adventure</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl drop-shadow-md font-light"
                >
                    Discover hidden villages, mountain campsites, cultural festivals, and immersive Himalayan experiences.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                    onClick={() => {
                        const searchEl = document.getElementById('search-widget');
                        if (searchEl) searchEl.scrollIntoView({ behavior: 'smooth' });
                        else navigate('/explore');
                    }}
                    className="bg-gradient-to-r from-[#deba69] to-[#c2984f] hover:from-[#c2984f] hover:to-[#a88241] text-white px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest shadow-xl shadow-yellow-900/30 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-700/40 mb-14"
                >
                    Plan Your Journey
                </motion.button>

                {/* Interactive Search Bar - Positioned centered below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-full max-w-3xl relative"
                    id="search-widget"
                    ref={dropdownRef}
                >
                    <div className="bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20 shadow-2xl flex items-center">

                        {/* Category Selector */}
                        <select
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}
                            className="hidden md:block bg-transparent text-white font-bold outline-none border-r border-white/20 pl-6 pr-4 py-3 cursor-pointer"
                        >
                            <option className="text-gray-900" value="All">All Categories</option>
                            <option className="text-gray-900" value="Homestay">Homestays</option>
                            <option className="text-gray-900" value="Campsite">Campsites</option>
                            <option className="text-gray-900" value="Event">Events</option>
                        </select>

                        <div className="flex-1 relative flex items-center px-4">
                            <Search size={22} className="text-gray-300 mr-3 hidden sm:block" />
                            <input
                                type="text"
                                placeholder="Search Pangong, Hemis Festival..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsDropdownOpen(true)}
                                className="w-full bg-transparent text-white placeholder-gray-300 outline-none text-lg py-3"
                            />
                        </div>

                        <button onClick={() => isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true)} className="bg-brand-teal hover:bg-brand-teal-light text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg flex items-center">
                            Search <ArrowRight size={18} className="ml-2 hidden md:block" />
                        </button>
                    </div>

                    {/* Autocomplete Dropdown */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-left"
                            >
                                <div className="p-4 bg-gray-50 border-b border-gray-100 flex space-x-2 overflow-x-auto no-scrollbar">
                                    <span className="text-xs font-bold uppercase text-gray-400 py-1.5 flex-shrink-0">Trending:</span>
                                    {trending.map(t => (
                                        <button key={t} onClick={() => { setSearchQuery(t); setIsDropdownOpen(true); }} className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-brand-teal/5 transition-colors flex-shrink-0">
                                            {t}
                                        </button>
                                    ))}
                                </div>

                                <div className="max-h-64 overflow-y-auto p-2">
                                    {filteredSuggestions.length > 0 ? (
                                        filteredSuggestions.map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <div
                                                    key={idx} onClick={() => handleSearch(item.path)}
                                                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl cursor-pointer group transition-colors"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <div className="p-2 bg-gray-100 group-hover:bg-brand-teal/10 rounded-xl transition-colors">
                                                            <Icon size={20} className="text-gray-500 group-hover:text-brand-teal" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                            <p className="text-xs text-brand-teal font-medium uppercase tracking-wider">{item.type}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-teal transition-colors" />
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="p-8 text-center text-gray-500">
                                            No results found for "{searchQuery}". Try "Hemis" or "Pangong".
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>

                {/* Global Statistics */}
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4 border-t border-white/20 bg-gray-900/60 backdrop-blur-md">
                    {[
                        { label: 'Verified Homestays', val: '450+' },
                        { label: 'Active Campsites', val: '120+' },
                        { label: 'Upcoming Events', val: '24' },
                        { label: 'Avg Altitude', val: '11,000 ft' },
                    ].map((stat, i) => (
                        <div key={i} className="py-6 px-4 text-center border-r border-white/20 last:border-r-0">
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                            <div className="text-xs text-brand-glacier uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
