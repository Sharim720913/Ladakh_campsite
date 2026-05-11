import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Map, Tent, Home, TreePine, ChevronDown, Activity, CloudSnow, ShieldAlert, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false); // Dropdown state
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Main links grouped into dropdown to save space on Desktop
    const mainLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Homestays', path: '/homestays' },
        { name: 'Campsites', path: '/campsites' },
    ];

    const exploreDropdownLinks = [
        { name: 'Explore Hub', path: '/explore', icon: Map },
        { name: 'Activities', path: '/explore', icon: Activity },
        { name: 'Map Explorer', path: '/explore', icon: Map },
        { name: 'Travel Guide', path: '/', icon: ShieldAlert },
        { name: 'Weather', path: '/', icon: CloudSnow },
        { name: 'SOS', path: '/', icon: HeartHandshake }, // Could trigger SOS modal, but linking is fine
    ];

    // Determine text colors based on scroll/page
    const isHomePage = location.pathname === '/';
    const textColorClasses = isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-100';
    const logoColorClasses = isScrolled || !isHomePage ? 'text-gray-900' : 'text-white';

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'glass shadow-sm border-gray-200/50 py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                                <Map className="text-white w-6 h-6" />
                            </div>
                            <span className={`font-bold text-2xl tracking-tight transition-colors ${logoColorClasses}`}>
                                Ladakh <span className={`transition-colors ${isScrolled ? 'text-brand-teal' : 'text-white'}`}>Explorer</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {mainLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-medium transition-all hover:text-brand-teal relative group ${textColorClasses}`}
                                >
                                    {link.name}
                                    {/* Animated Hover Underline effect */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover:w-full"></span>
                                </Link>
                            ))}

                            {/* Dropdown for extra items */}
                            <div className="relative" onMouseEnter={() => setExploreOpen(true)} onMouseLeave={() => setExploreOpen(false)}>
                                <button className={`font-medium flex items-center transition-colors hover:text-brand-teal ${textColorClasses}`}>
                                    Discover <ChevronDown size={16} className={`ml-1 transform transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {exploreOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50"
                                        >
                                            <div className="grid grid-cols-1 divide-y divide-gray-50">
                                                {exploreDropdownLinks.map(dp => {
                                                    const Icon = dp.icon;
                                                    return (
                                                        <Link key={dp.name} to={dp.path} className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-brand-teal transition-colors group">
                                                            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-brand-teal/10 transition-colors"><Icon size={16} /></div>
                                                            <span className="font-bold text-sm">{dp.name}</span>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button className="bg-brand-teal hover:bg-brand-teal-light text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md shadow-brand-teal/20">
                                Plan Trip
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-md ${logoColorClasses}`}>
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 20 }} className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-40 flex flex-col overflow-y-auto no-scrollbar">
                        <div className="pt-24 pb-6 px-6 flex flex-col space-y-2">
                            {mainLinks.map((link) => (
                                <Link key={link.name} to={link.path} onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-xl py-3 border-b border-gray-50 hover:text-brand-teal transition-colors">
                                    {link.name}
                                </Link>
                            ))}

                            <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider pt-6 pb-2">Discover More</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {exploreDropdownLinks.map(dp => {
                                    const Icon = dp.icon;
                                    return (
                                        <Link key={dp.name} to={dp.path} onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-teal/30 hover:bg-brand-teal/5 transition-all text-center group">
                                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-brand-teal mb-2" />
                                            <span className="text-xs font-bold text-gray-700 group-hover:text-brand-teal">{dp.name}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="pt-8">
                                <button className="w-full bg-brand-teal text-white px-4 py-4 rounded-xl font-bold shadow-md shadow-brand-teal/20 active:scale-95 transition-all">
                                    Plan Your Trip
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
