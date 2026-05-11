import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, AlertCircle, HeartPulse, ShieldAlert, X } from 'lucide-react';

const SOSModule = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-red-200/50"
            >
                <AlertCircle size={32} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="bg-red-600 p-6 flex justify-between items-center text-white">
                                <div className="flex items-center space-x-3">
                                    <AlertCircle size={28} />
                                    <h2 className="text-2xl font-bold">Emergency SOS</h2>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="hover:bg-red-700 p-2 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8 space-y-6">

                                {/* Critical Contacts */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a href="tel:112" className="flex items-center space-x-4 bg-red-50 p-4 rounded-2xl hover:bg-red-100 transition-colors border border-red-100">
                                        <div className="bg-red-500 text-white p-3 rounded-full"><Phone size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">112</h4>
                                            <p className="text-sm text-gray-500">National Emergency</p>
                                        </div>
                                    </a>
                                    <a href="tel:108" className="flex items-center space-x-4 bg-red-50 p-4 rounded-2xl hover:bg-red-100 transition-colors border border-red-100">
                                        <div className="bg-red-500 text-white p-3 rounded-full"><HeartPulse size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">108</h4>
                                            <p className="text-sm text-gray-500">Ambulance / Medical</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Local Contacts */}
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3 flex items-center"><ShieldAlert size={18} className="mr-2 text-brand-teal" /> Local Rescue Centers</h3>
                                    <div className="bg-gray-50 rounded-2xl p-4 divide-y divide-gray-100">
                                        <div className="flex justify-between py-2">
                                            <span className="font-medium text-gray-700">Leh SNM Hospital</span>
                                            <a href="tel:01982252014" className="text-brand-teal font-semibold">01982-252014</a>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="font-medium text-gray-700">Police Control Room Leh</span>
                                            <a href="tel:01982252200" className="text-brand-teal font-semibold">01982-252200</a>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="font-medium text-gray-700">Disaster Management</span>
                                            <a href="tel:01982255530" className="text-brand-teal font-semibold">01982-255530</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Altitude Sickness Guidance */}
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                                    <h3 className="font-bold text-amber-900 mb-2 flex items-center">Altitude Sickness (AMS) Protocol</h3>
                                    <p className="text-sm text-amber-800 mb-3">If you experience headache, nausea, shortness of breath, or extreme fatigue:</p>
                                    <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                                        <li>Stop ascending immediately. Descend if symptoms worsen.</li>
                                        <li>Hydrate constantly with warm water.</li>
                                        <li>Rest and avoid sudden physical exertion.</li>
                                        <li>Administer supplemental oxygen if available.</li>
                                        <li>Seek medical help from local army camps or hospitals immediately.</li>
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SOSModule;
