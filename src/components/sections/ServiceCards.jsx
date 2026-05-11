import React from 'react';
import { motion } from 'framer-motion';
import {
    Tent, Map, Ticket, CalendarDays, Compass, Camera,
    MapPin, Info, AlertOctagon, CloudSun, BookOpen
} from 'lucide-react';

const services = [
    { id: 1, title: 'Camping & Lodging', desc: 'Book verified homestays and eco-campsites.', icon: Tent, stats: '500+ Sites', color: 'from-blue-500 to-cyan-400' },
    { id: 2, title: 'Places To See', desc: 'Incredible lakes, valleys and high passes.', icon: Camera, stats: '150+ Spots', color: 'from-teal-500 to-emerald-400' },
    { id: 3, title: 'Guided Hikes', desc: 'Expeditions led by local experts.', icon: Compass, stats: '40+ Trails', color: 'from-orange-500 to-amber-400' },
    { id: 4, title: 'Passes & Permits', desc: 'Inner Line Permits for restricted areas.', icon: Ticket, stats: 'Instant E-Pass', color: 'from-indigo-500 to-blue-500' },
    { id: 5, title: 'Event Organization', desc: 'Festivals, biking tours, and retreats.', icon: CalendarDays, stats: 'Monthly Events', color: 'from-purple-500 to-pink-500' },
    { id: 6, title: 'Things To Do', desc: 'Rafting, ATV rides, and monastery tours.', icon: Map, stats: '30+ Activities', color: 'from-rose-500 to-red-400' },
    { id: 7, title: 'Weather Forecast', desc: 'Real-time high altitude weather alerts.', icon: CloudSun, stats: 'Live Updates', color: 'from-cyan-500 to-blue-400' },
    { id: 8, title: 'Emergency / SOS', desc: 'Rescue stations and medical help.', icon: AlertOctagon, stats: '24/7 Support', color: 'from-red-600 to-rose-500' },
    { id: 9, title: 'Travel History', desc: 'Ladakhi culture and Buddhist traditions.', icon: BookOpen, stats: 'Rich Heritage', color: 'from-amber-600 to-orange-500' },
    { id: 10, title: 'Trip Information', desc: 'Acclimatization, packing, and eco-guidelines.', icon: Info, stats: 'Expert Guide', color: 'from-emerald-500 to-teal-400' },
    { id: 11, title: 'Day Use Venue', desc: 'Book spaces for picnicking and photography.', icon: MapPin, stats: '60+ Venues', color: 'from-violet-500 to-purple-400' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
};

const ServiceCards = () => {
    return (
        <section className="py-24 bg-brand-snow relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-brand-glacier rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        Explore Ladakh
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Your comprehensive guide to planning the ultimate high-altitude adventure. Find places, permits, and peace.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col h-full"
                            >
                                {/* Gradient Glow Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500 blur-sm`} />

                                <div className="relative z-10 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 shadow-inner`}>
                                            <Icon className="w-7 h-7 text-white drop-shadow-md" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{service.stats}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-50 relative z-10 w-full">
                                    <button className="flex items-center space-x-2 text-brand-teal text-sm font-semibold group/btn">
                                        <span>Explore Details</span>
                                        <motion.span
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            className="inline-block"
                                        >
                                            →
                                        </motion.span>
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCards;
