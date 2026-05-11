import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Camera, MapPin, ArrowRight, HelpCircle } from 'lucide-react';

const TravelGuide = () => {
    const tips = [
        { title: 'Leave No Trace', desc: 'Preserve the fragile high-altitude ecosystem by removing all waste and respecting wildlife.', icon: Leaf },
        { title: 'Water Wisdom', desc: 'Use local filtered sources instead of single-use plastics to protect mountain streams.', icon: Droplets },
        { title: 'Respect Heritage', desc: 'Secure permits before entering monastic spaces and always ask before photography.', icon: Camera },
        { title: 'Stay on Trails', desc: 'Erosion happens fast in the desert; stay on identified paths to protect the soil.', icon: MapPin },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none z-0">
                <img
                    src="https://images.unsplash.com/photo-1544070282-591d487c6ce7?q=80&w=2070&auto=format&fit=crop"
                    alt="Mountain River"
                    className="w-full h-full object-cover opacity-10 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
            </div>

            <div className="rec-container relative z-10">
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center space-x-3 text-[var(--color-secondary)] font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                        <span className="w-12 h-[1px] bg-[var(--color-secondary)]"></span>
                        <span>Stewardship Guide</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[var(--color-text-primary)] mb-8">
                        Explore with <span className="text-[var(--color-primary)]">Purpose.</span>
                    </h2>
                    <p className="text-xl text-[var(--color-text-secondary)] font-medium leading-relaxed">
                        Ladakh is a high-altitude desert with a fragile ecosystem. Your journey should leave nothing but footprints and take nothing but memories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[var(--color-bg-offset)] p-10 rounded-2xl border border-gray-100/50 hover:border-[var(--color-secondary)]/30 transition-all duration-500 shadow-sm hover:shadow-xl group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                                <tip.icon size={24} />
                            </div>
                            <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-3">{tip.title}</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{tip.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-[var(--color-primary)] rounded-[2rem] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <h4 className="text-3xl font-black tracking-tight mb-4">Official Territory Briefing</h4>
                            <p className="text-white/80 text-sm leading-relaxed font-medium">
                                Download the complete wilderness stewardship manual for the 2026 season. Includes safety protocols, monastic etiquette, and high-altitude health guides.
                            </p>
                        </div>
                        <button className="bg-[var(--color-secondary)] text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all flex items-center shadow-lg">
                            Get Official Guide <ArrowRight className="ml-3" size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelGuide;
