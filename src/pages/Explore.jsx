import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Ship, Mountain, Map, Calendar, History, ArrowRight } from 'lucide-react';
import EventCarousel from '../components/sections/EventCarousel';

const activities = [
    { name: 'Chadarak Trek', category: 'Trekking', icon: Mountain, difficulty: 'Hard', duration: '9 Days', price: '₹22,000' },
    { name: 'Khardung La Cycling', category: 'Cycling', icon: Bike, difficulty: 'Extreme', duration: '1 Day', price: '₹4,000' },
    { name: 'Zanskar River Rafting', category: 'Rafting', icon: Ship, difficulty: 'Moderate', duration: 'Half Day', price: '₹2,500' },
];

const Explore = () => {
    return (
        <div className="min-h-screen bg-brand-snow pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Header Map Visualization */}
                <section className="relative">
                    <div className="bg-white rounded-3xl h-96 w-full flex items-center justify-center border border-gray-200 overflow-hidden relative shadow-sm">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=Ladakh&t=p&z=8&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            title="Ladakh Google Map Explorer"
                        ></iframe>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute z-10 top-6 left-6 glass-dark p-6 rounded-3xl shadow-2xl max-w-sm pointer-events-none hidden md:block">
                            <h2 className="text-xl font-bold text-white mb-2 flex items-center"><Map size={24} className="text-brand-teal mr-2" /> Google Maps Explorer</h2>
                            <p className="text-xs text-gray-300">Interact with the map to discover precise locations of high-altitude homestays, trekking roots, and passes in Ladakh.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Adventure Activities */}
                <section>
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Adrenaline</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Adventure Activities</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {activities.map((act, index) => {
                            const Icon = act.icon;
                            return (
                                <motion.div key={index} whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl"><Icon size={24} /></div>
                                        <span className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-full">{act.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{act.name}</h3>
                                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                                        <span>{act.difficulty}</span>
                                        <span>{act.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                                        <span className="font-bold text-lg text-brand-teal">{act.price}</span>
                                        <button className="text-brand-teal font-medium hover:text-brand-teal-light flex items-center">Book <ArrowRight size={16} className="ml-1" /></button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>

                <EventCarousel />

                <section>
                    {/* History/Culture */}
                    <div className="bg-brand-gray text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-teal rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
                        <h3 className="text-2xl font-bold flex items-center mb-6"><History className="text-amber-400 mr-3" /> Heritage & Culture</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Ladakh's culture is deeply intertwined with Tibetan Buddhism. Monasteries (Gompas) dating back to the 11th century house ancient thangkas and manuscripts. As an eco-tourism hub, honoring this spiritual land requires mindful travel.
                        </p>
                        <ul className="space-y-3 text-sm text-gray-200">
                            <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-200" /> <span>Respect Monastery Silence Rules</span></li>
                            <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-200" /> <span>Support Local Artisans directly</span></li>
                            <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-200" /> <span>Learn basic Ladakhi phrases (Julley!)</span></li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Explore;
