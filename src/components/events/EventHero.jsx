import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventHero = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45 });

    // Mock countdown effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes } = prev;
                if (minutes > 0) minutes -= 1;
                else if (hours > 0) { hours -= 1; minutes = 59; }
                else if (days > 0) { days -= 1; hours = 23; minutes = 59; }
                return { days, hours, minutes };
            });
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Cinematic Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
                style={{ backgroundImage: `url('/assets/ladakh_festival.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

            {/* Particles effect approximation using a subtle grain overlay or opacity */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-end h-full pb-20 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center space-x-2 bg-brand-teal/80 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span>Next Mega Event</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl">
                            Hemis <span className="text-brand-glacier">Tsechu</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
                            Witness the grandest spiritual gathering in the Himalayas. Experience the legendary Cham mask dances of the Drukpa lineage.
                        </p>

                        <button className="bg-brand-teal hover:bg-brand-teal-light text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center shadow-2xl transition hover:-translate-y-1">
                            Register Now <ArrowRight className="ml-2" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-dark border border-white/10 p-8 rounded-3xl"
                    >
                        <h3 className="text-white text-xl font-bold mb-6">Event Countdown</h3>
                        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                            <div className="bg-white/10 rounded-2xl p-4">
                                <div className="text-4xl font-bold text-brand-glacier">{timeLeft.days}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Days</div>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-4">
                                <div className="text-4xl font-bold text-brand-glacier">{timeLeft.hours}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Hours</div>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-4">
                                <div className="text-4xl font-bold text-brand-glacier">{timeLeft.minutes}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Mins</div>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search festivals, camps, retreats..."
                                className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-teal transition-colors focus:ring-1 focus:ring-brand-teal"
                            />
                            <Search className="absolute left-4 top-4 text-gray-400" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default EventHero;
