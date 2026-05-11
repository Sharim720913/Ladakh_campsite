import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Ticket } from 'lucide-react';

const RegistrationModal = ({ event, isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Form, 2: Success

    const handleRegister = (e) => {
        e.preventDefault();
        setStep(2);
        // In production, sync with Context API or Backend mutation here
    };

    const closeReset = () => {
        onClose();
        setTimeout(() => setStep(1), 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
                        onClick={closeReset}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative z-10 overflow-hidden"
                    >
                        <button onClick={closeReset} className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2 transition-colors z-20">
                            <X size={20} />
                        </button>

                        {step === 1 ? (
                            <div className="p-8">
                                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                                    <Ticket size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Register for Event</h2>
                                <p className="text-sm text-gray-500 mb-8">You are registering a slot for <span className="font-bold text-brand-teal">{event.title}</span>.</p>

                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" placeholder="Tenzin Norbu" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" placeholder="tenzin@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Pass Type</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-all">
                                            <option>General Admission - {event.price}</option>
                                            <option>VIP Pass - ₹4,000</option>
                                        </select>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="w-full bg-brand-teal text-white font-bold rounded-xl py-4 hover:bg-brand-teal-light transition-colors shadow-lg shadow-teal-500/30">
                                            Confirm Registration
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="p-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <Check size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">You're In!</h2>
                                <p className="text-gray-500 mb-8">We've sent the e-ticket for {event.title} to your email address. Prepare for adventure.</p>
                                <button onClick={closeReset} className="w-full bg-gray-900 text-white font-bold rounded-xl py-4 hover:bg-gray-800 transition-colors">
                                    Close Window
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
