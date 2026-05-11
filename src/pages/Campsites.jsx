import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tent, Flame, Map, Leaf, AlertCircle, Compass } from 'lucide-react';

const camps = [
    {
        id: 1,
        name: 'Pangong Safari Camp',
        zone: 'Lake View Zone',
        price: '₹4,500',
        permissions: 'Inner Line Permit Required',
        ecoFriendly: true,
        firePit: false,
        image: '/assets/campsite.png'
    },
    {
        id: 2,
        name: 'Nubra Riverside Retreat',
        zone: 'Riverside Zone',
        price: '₹3,500',
        permissions: 'Inner Line Permit Required',
        ecoFriendly: true,
        firePit: true,
        image: '/assets/campsite.png'
    },
    {
        id: 3,
        name: 'Tso Moriri Nomadic Camp',
        zone: 'Mountain Zone',
        price: '₹5,000',
        permissions: 'Restricted Area Permit',
        ecoFriendly: true,
        firePit: false,
        image: '/assets/campsite.png'
    }
];

const Campsites = () => {
    return (
        <div className="min-h-screen bg-brand-snow pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full font-medium mb-6">
                        <Compass size={18} />
                        <span>Wild & Free</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Discover Legal Camping Zones
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-500">
                        Unplug and connect with nature. Book premium campsites across Nubra and Pangong with guaranteed eco-compliance.
                    </motion.p>
                </div>

                {/* Eco & Fire Guidelines Banner */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-white border rounded-[2rem] p-8 shadow-xl shadow-brand-teal/5 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-teal to-emerald-400" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Leaf className="text-emerald-500 mr-2" /> Eco-Tourism Guidelines</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> No single-use plastics allowed within 10km of lakes.</li>
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> Use only designated dry toilets provided by camps.</li>
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> Do not wash vehicles in Himalayan rivers or lakes.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Flame className="text-orange-500 mr-2" /> Fire Permissions</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> Open campfires are strictly prohibited near wild flora.</li>
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> Fire pits are allowed only at pre-approved luxury camps.</li>
                                <li className="flex items-start"><AlertCircle size={16} className="mr-2 mt-0.5 text-gray-400" /> Wood gathering from local surroundings is an offense.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Campsite Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {camps.map(camp => (
                        <div key={camp.id} className="bg-white rounded-3xl overflow-hidden shadow-md group border border-gray-100 flex flex-col">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img src={camp.image} alt={camp.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                                    {camp.zone}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{camp.name}</h3>
                                <p className="text-brand-teal font-semibold text-lg mb-6">{camp.price} <span className="text-sm font-normal text-gray-400">/ tent</span></p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                        <Map size={16} className="text-brand-teal mr-3" />
                                        <span>{camp.permissions}</span>
                                    </div>
                                    {camp.ecoFriendly && (
                                        <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <Leaf size={16} className="text-emerald-500 mr-3" />
                                            <span>Eco-Certified Zone</span>
                                        </div>
                                    )}
                                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                        <Flame size={16} className={camp.firePit ? "text-orange-500 mr-3" : "text-gray-400 mr-3"} />
                                        <span>{camp.firePit ? 'Designated Fire Pit Available' : 'Strict No-Fire Zone'}</span>
                                    </div>
                                </div>

                                <button className="mt-auto w-full bg-brand-gray text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors">
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Campsites;
