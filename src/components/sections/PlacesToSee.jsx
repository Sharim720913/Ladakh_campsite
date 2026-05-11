import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Clock, ArrowRight } from 'lucide-react';

const places = [
    {
        id: 1,
        name: 'Pangong Lake',
        type: 'High Altitude Lake',
        image: '/assets/pangong.png',
        bestSeason: 'May to September',
        duration: '1-2 Days',
        accessibility: 'Car / Bike via Chang La',
    },
    {
        id: 2,
        name: 'Nubra Valley',
        type: 'High Altitude Desert',
        image: '/assets/nubra.png',
        bestSeason: 'May to October',
        duration: '2-3 Days',
        accessibility: 'Car / Bike via Khardung La',
    }
];

const PlacesToSee = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-brand-teal font-semibold tracking-wider uppercase text-sm">Must Visit</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Iconic Destinations</h2>
                    </div>
                    <button className="hidden md:flex items-center space-x-2 text-brand-teal hover:text-brand-teal-light font-medium transition-colors">
                        <span>View All Places</span>
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {places.map((place, index) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative rounded-[2rem] overflow-hidden"
                        >
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-3">
                                    {place.type}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-4">{place.name}</h3>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                                    <div className="flex items-center space-x-2">
                                        <Sun size={16} className="text-brand-beige" />
                                        <span>{place.bestSeason}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock size={16} className="text-brand-beige" />
                                        <span>{place.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 border-l border-gray-400 pl-4">
                                        <MapPin size={16} className="text-brand-beige" />
                                        <span>{place.accessibility}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <button className="inline-flex items-center space-x-2 text-brand-teal font-medium">
                        <span>View All Places</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PlacesToSee;
