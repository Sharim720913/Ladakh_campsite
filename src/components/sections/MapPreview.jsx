import React from 'react';
import { motion } from 'framer-motion';
import { Map, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MapPreview = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-brand-teal font-bold uppercase tracking-widest text-sm">Interactive Navigation</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-6">Explore the <br />Live Map Ecosystem</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Seamlessly discover verified homestays, mapped trekking trails, hospital routes, and eco-campsites geographically. Planning your route across the rugged terrain has never been easier.
                        </p>

                        <div className="space-y-4 mb-10">
                            {['View high altitude sickness zones', 'Pinpoint EV charging and Fuel stations', 'Discover hidden Tibetan Monasteries'].map((feature, i) => (
                                <div key={i} className="flex items-center space-x-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-brand-teal" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => navigate('/explore')}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center shadow-xl transition-all hover:-translate-y-1"
                        >
                            Open Map Explorer <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-glacier rounded-full blur-3xl opacity-30 -z-10 translate-x-10 translate-y-10" />
                        <div className="bg-white rounded-3xl h-[500px] w-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden relative">
                            <iframe
                                title="Preview Google Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=Ladakh&t=p&z=7&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                            ></iframe>

                            {/* Floating Action Badge overlaying map preview */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center justify-between z-10 hidden md:flex"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white"><Map size={20} /></div>
                                    <div>
                                        <p className="font-bold text-gray-900">Ladakh Topography View</p>
                                        <p className="text-xs text-gray-500">Live elevation tracking active</p>
                                    </div>
                                </div>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${i === 1 ? 'bg-red-400' : i === 2 ? 'bg-blue-400' : 'bg-orange-400'}`} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MapPreview;
