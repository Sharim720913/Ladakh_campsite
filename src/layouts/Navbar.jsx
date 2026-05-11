import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, Mountain } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Campsites', path: '/campsites' },
        { name: 'Homestays', path: '/homestays' },
        { name: 'Events', path: '/events' },
        { name: 'Explore', path: '/explore' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-xl py-3'
            : 'bg-transparent py-6'
            }`}>
            {/* Top Vignette for Readability when Transparent */}
            {!isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none -z-10" />
            )}
            <div className="rec-container flex items-center justify-between">

                {/* Cinematic Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-secondary)] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className={`p-2 rounded-xl transition-all duration-500 ${isScrolled ? 'bg-[var(--color-primary)] shadow-lg' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
                            <Mountain className={`${isScrolled ? 'text-white' : 'text-[var(--color-secondary)]'} group-hover:rotate-12 transition-transform`} size={24} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-black tracking-tighter leading-none ${isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'} transition-colors`}>
                            Ladakh <span className="text-[var(--color-secondary)]">Explorer.</span>
                        </span>
                        <span className={`text-[8px] font-black uppercase tracking-[0.4em] mt-1 ${isScrolled ? 'text-gray-400' : 'text-white/60'}`}>
                            Authorized Territory Portal
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative py-2 group ${isScrolled ? 'text-[var(--color-text-secondary)]' : 'text-white/90'
                                } hover:text-[var(--color-secondary)]`}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    <Link to="/admin" className="flex items-center space-x-2 text-[var(--color-secondary)] hover:opacity-80 transition-opacity">
                        <User size={18} />
                        <span className="text-xs font-black uppercase tracking-widest">Sign In</span>
                    </Link>
                </div>

                {/* Search Utility */}
                <div className="flex items-center space-x-6">
                    <button className={`p-2.5 rounded-full transition-all ${isScrolled ? 'bg-gray-100 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}>
                        <Search size={20} />
                    </button>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 space-y-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="block text-sm font-black uppercase tracking-widest text-gray-400 hover:text-[var(--color-primary)]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
