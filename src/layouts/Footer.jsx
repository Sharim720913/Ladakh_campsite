import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Mountain, Heart, Phone, HelpCircle, Share2, Globe, Video, Camera } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary-dark)] text-white pt-20 pb-10 relative overflow-hidden">
            {/* Subtle Topographic Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale brightness-200">
                <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" className="w-full h-full object-repeat" alt="" />
            </div>

            <div className="rec-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-8 group">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:border-[var(--color-secondary)] transition-all">
                                <Mountain className="text-[var(--color-secondary)]" size={24} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">Ladakh <span className="text-[var(--color-secondary)]">Explorer.</span></span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-medium">
                            The official agency for high-altitude exploration and cultural preservation in the Ladakh Territory.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">+91 (194) 101-FRONTIER</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs text-gray-500 font-medium">
                        © 2026 Ladakh Explorer. An official outdoor recreation platform. Protected by Himalayan Stewardship Act.
                    </p>
                    <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Data Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
                        <a href="#" className="hover:text-white transition-colors">Feedback</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
