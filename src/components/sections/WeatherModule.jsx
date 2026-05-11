import React from 'react';
import { motion } from 'framer-motion';
import { CloudSnow, Wind, Thermometer, AlertTriangle, AlertCircle, Mountain } from 'lucide-react';

const WeatherModule = () => {
    return (
        <section className="py-20 relative bg-brand-teal text-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center space-x-2 text-brand-beige mb-4 uppercase tracking-widest text-sm font-bold">
                            <CloudSnow className="w-5 h-5" />
                            <span>High Altitude Weather</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Unpredictable Beauty</h2>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Stay safe and prepared with real-time weather analytics. Road conditions, snowfall alerts, and altitude sickness warnings are continuously updated.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                                <AlertTriangle className="text-amber-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-white">Road Alert: Khardung La</h4>
                                    <p className="text-teal-100 text-sm">Light snowfall reported. Chains required for 2WD vehicles. Pass closes at 4:00 PM.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                                <Mountain className="text-brand-glacier w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-white">Altitude Advisory</h4>
                                    <p className="text-teal-100 text-sm">Pangong Lake is at 14,270 ft. 48-hour acclimatization in Leh is mandatory before travel.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Weather Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-md bg-white text-gray-800 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-brand-glacier" />

                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold">Leh, Ladakh</h3>
                                    <p className="text-gray-500">Currently, Mostly Sunny</p>
                                </div>
                                <div className="text-5xl font-extrabold text-brand-teal tracking-tighter">
                                    12°<span className="text-2xl font-normal text-gray-400 align-top">C</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-3">
                                    <Wind className="text-blue-400 w-8 h-8" />
                                    <div>
                                        <span className="block text-sm text-gray-500">Wind</span>
                                        <span className="font-bold">14 km/h</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-3">
                                    <Thermometer className="text-rose-400 w-8 h-8" />
                                    <div>
                                        <span className="block text-sm text-gray-500">Feels Like</span>
                                        <span className="font-bold">9°C</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-400">Next 4 Days</h4>
                                <div className="flex justify-between">
                                    {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                                        <div key={i} className="flex flex-col items-center space-y-2">
                                            <span className="text-sm font-medium">{day}</span>
                                            {i % 2 === 0 ? <CloudSnow className="w-6 h-6 text-brand-glacier" /> : <Wind className="w-6 h-6 text-gray-400" />}
                                            <span className="font-bold">{10 - i}°</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WeatherModule;
