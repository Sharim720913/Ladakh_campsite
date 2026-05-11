import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Map, ShieldAlert, Wifi, Info } from 'lucide-react';

const guideData = [
    {
        id: 1, title: 'Inner Line Permits (ILP)', icon: ShieldAlert,
        content: 'Domestic tourists require an Inner Line Permit to visit protected areas like Pangong Lake, Nubra Valley, Tso Moriri, and Dah Hanu. Foreign nationals require a Protected Area Permit (PAP). Our platform auto-generates these permits upon booking certified homestays.'
    },
    {
        id: 2, title: 'High Altitude Acclimatization', icon: Info,
        content: 'Leh sits at 11,560 ft. It is strictly advised to take 48 hours of complete rest upon arrival. Keep yourself hydrated, avoid alcohol or smoking, and carry Diamox or consult a physician before travelling. Ignoring acclimatization leads to AMS (Acute Mountain Sickness).'
    },
    {
        id: 3, title: 'Internet & Connectivity', icon: Wifi,
        content: 'Prepaid SIM cards issued outside of J&K/Ladakh do not work here. You must carry a POSTPAID BSNL, Airtel, or Jio connection. Alternatively, you can purchase a local tourist prepaid SIM easily in Leh market by showing your ID.'
    },
    {
        id: 4, title: 'Eco-Tourism Guidelines', icon: Map,
        content: 'Ladakh has a fragile ecosystem. Say no to single-use plastics. Carry a reusable water bottle (refill points are available everywhere). Do not disturb wildlife, stay on marked trails, and strictly observe "pack it in, pack it out" ethics.'
    }
];

const TravelGuide = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="py-24 bg-brand-snow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Essential Travel Guide</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">Prepare for your high-altitude journey. A conscious traveler is a safe traveler.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
                    {guideData.map(item => (
                        <div key={item.id} className="border-b border-gray-50 last:border-b-0">
                            <button
                                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                                className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 transition-colors rounded-2xl group"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-xl transition-colors ${activeId === item.id ? 'bg-brand-teal text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-brand-teal/10 group-hover:text-brand-teal'}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className={`font-bold text-lg md:text-xl transition-colors text-left ${activeId === item.id ? 'text-brand-teal' : 'text-gray-900'}`}>
                                        {item.title}
                                    </h3>
                                </div>
                                <motion.div animate={{ rotate: activeId === item.id ? 180 : 0 }}>
                                    <ChevronDown size={24} className={activeId === item.id ? 'text-brand-teal' : 'text-gray-400'} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="p-4 md:px-20 md:pb-8 text-gray-600 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TravelGuide;
