import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Thermometer, Wind, Droplets, MapPin, ExternalLink, Calendar } from 'lucide-react';

const WeatherModule = () => {
    return (
        <section className="py-24 bg-[var(--color-bg-base)]">
            <div className="rec-container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Primary Weather Card */}
                    <div className="lg:col-span-2 rec-card p-10 bg-gradient-to-br from-blue-50/50 to-white flex flex-col md:flex-row items-center gap-10">
                        <div className="text-center md:text-left">
                            <div className="flex items-center space-x-2 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest mb-4">
                                <MapPin size={14} />
                                <span>Current Conditions: Leh, Ladakh</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-6 mb-4">
                                <div className="text-7xl font-extrabold text-[var(--color-text-primary)] tracking-tighter">22°C</div>
                                <Sun size={64} className="text-amber-500 animate-pulse" />
                            </div>
                            <p className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Clear Skies & High UV</p>
                            <p className="text-[var(--color-text-secondary)] text-sm font-medium">Updated: 10 mins ago • Official Bureau Data</p>
                        </div>

                        <div className="h-px md:h-32 w-full md:w-px bg-[var(--color-border)]" />

                        <div className="grid grid-cols-2 gap-8 flex-grow">
                            {[
                                { icon: Thermometer, label: 'High/Low', val: '24° / 8°' },
                                { icon: Wind, label: 'Wind Speed', val: '12 km/h' },
                                { icon: Droplets, label: 'Humidity', val: '15%' },
                                { icon: Calendar, label: 'Visibility', val: '10 km+' },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className="p-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-primary)]">
                                        <stat.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="rec-label text-[10px]">{stat.label}</p>
                                        <p className="font-bold text-[var(--color-text-primary)]">{stat.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety Advisory Link Card */}
                    <div className="rec-card p-10 bg-[var(--color-primary)] text-white flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 tracking-tight leading-none">Travel Advisory</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-8">
                            Extreme altitude warnings are in effect for Khardung La. Ensure 48 hours of acclimatization in Leh before ascending.
                        </p>
                        <button className="bg-white text-[var(--color-primary)] px-6 py-4 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-blue-50 transition-all flex items-center justify-center">
                            View Safety Protocol <ExternalLink size={16} className="ml-2" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeatherModule;
