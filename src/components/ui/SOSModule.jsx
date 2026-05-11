import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, AlertCircle, HeartPulse, ShieldAlert, X, Mountain } from 'lucide-react';

const SOSModule = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* SOS Floating Trigger */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-red-600 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.4)] flex items-center justify-center text-white border border-red-500/50 group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                <AlertCircle size={28} className="relative z-10 group-hover:text-red-600 transition-colors" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 border-4 border-red-400/30 rounded-2xl"
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-brand-obsidian/95 backdrop-blur-2xl"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass-dark rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl"
                        >
                            {/* Header */}
                            <div className="p-10 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-red-950/20 to-transparent">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                                        <AlertCircle size={24} />
                                    </div>
                                    <div>
                                        <h2 className="font-serif text-3xl text-white tracking-tight leading-none mb-1">Emergency SOS</h2>
                                        <p className="text-[10px] text-red-500 font-black uppercase tracking-[0.3em]">Himalayan Response System</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-10 space-y-10">

                                {/* Critical Lifeline Contacts */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <a href="tel:112" className="group relative glass-dark p-6 rounded-3xl border-white/5 hover:border-red-500/30 transition-all flex items-center space-x-6 overflow-hidden">
                                        <div className="absolute inset-0 bg-red-600/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                                        <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white relative z-10"><Phone size={20} /></div>
                                        <div className="relative z-10">
                                            <h4 className="font-serif text-2xl text-white">112</h4>
                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">National Response</p>
                                        </div>
                                    </a>
                                    <a href="tel:108" className="group relative glass-dark p-6 rounded-3xl border-white/5 hover:border-red-500/30 transition-all flex items-center space-x-6 overflow-hidden">
                                        <div className="absolute inset-0 bg-red-600/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 relative z-10"><HeartPulse size={20} /></div>
                                        <div className="relative z-10">
                                            <h4 className="font-serif text-2xl text-white">108</h4>
                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Ambulance Hub</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Local Rescue Matrix */}
                                <div>
                                    <h3 className="text-white font-serif text-lg mb-6 flex items-center gap-3">
                                        <ShieldAlert size={20} className="text-brand-gold" />
                                        Regional Command
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Leh SNM Hospital', num: '01982-252014' },
                                            { name: 'Police Control Center', num: '01982-252200' },
                                            { name: 'Disaster Support', num: '01982-255530' }
                                        ].map((center, i) => (
                                            <div key={i} className="flex justify-between items-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
                                                <span className="text-slate-400 group-hover:text-white transition-colors">{center.name}</span>
                                                <a href={`tel:${center.num.replace('-', '')}`} className="font-sans text-brand-gold font-bold tracking-wider hover:underline">{center.num}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* AMS Protocol Card */}
                                <div className="p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10"><Mountain size={60} /></div>
                                    <h3 className="font-serif text-xl text-amber-500 mb-4 flex items-center gap-3">
                                        Altitude Sickness (AMS) Protocol
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Cease ascent immediately upon onset of symptoms.',
                                            'Descend to <9,000 ft if severity increases.',
                                            'Hydrate with warm fluids, avoid physical exertion.',
                                            'Seek immediate assistance at the nearest Army base.'
                                        ].map((step, i) => (
                                            <li key={i} className="flex items-start space-x-3 text-slate-400 text-sm font-light">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 mt-1.5 flex-shrink-0" />
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SOSModule;
