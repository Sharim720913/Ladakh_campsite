import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Info, AlertCircle, MapPin } from 'lucide-react';

const EventHero = () => {
    return (
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
            {/* Bright Natural Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 saturate-[1.2] brightness-[1.1]"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 rec-container w-full">
                <div className="max-w-3xl">
                    <div className="flex items-center space-x-3 text-blue-200 mb-6 uppercase tracking-widest text-[10px] font-black">
                        <Info size={14} />
                        <span>Official Discovery Portal</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[0.9]">
                        Explore Ladakh's <br />Territory Events
                    </h1>

                    {/* Integrated Mobile-First Search */}
                    <div className="relative max-w-xl group">
                        <input
                            type="text"
                            placeholder="Find festivals, trekking permits, or site events..."
                            className="w-full bg-white/95 backdrop-blur-md rounded-lg py-5 pl-14 pr-6 text-sm font-bold text-[var(--color-text-primary)] shadow-2xl focus:bg-white outline-none transition-all border-b-4 border-transparent focus:border-[var(--color-secondary)]"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-primary)]" size={20} />
                    </div>

                    <div className="mt-8 flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 max-w-max">
                        <AlertCircle className="text-amber-400" size={20} />
                        <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest">July/August high-season alerts are now active</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHero;
