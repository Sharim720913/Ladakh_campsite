import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, view = 'grid' }) => {
    if (view === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rec-card flex flex-col md:flex-row items-stretch group"
            >
                <div className="md:w-1/3 h-56 md:h-auto overflow-hidden relative">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-[var(--color-border)]">
                        {event.category}
                    </div>
                </div>
                <div className="p-8 md:w-2/3 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-2">{event.name}</h3>
                            <div className="flex items-center text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-widest">
                                <MapPin size={14} className="mr-2 text-[var(--color-primary)]" />
                                {event.location}
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Starting From</p>
                            <p className="text-2xl font-extrabold text-[var(--color-primary)] leading-none">{event.price}</p>
                        </div>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-8 flex-grow">A deep immersion into {event.location}'s unique heritage, curated for the modern explorer.</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span className="flex items-center"><Calendar size={14} className="mr-2" /> {event.date}</span>
                            <span className="flex items-center"><Users size={14} className="mr-2" /> Limited Capacity</span>
                        </div>
                        <Link to={`/events/${event.slug}`} className="btn-primary px-8">View Details</Link>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rec-card flex flex-col group h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-[var(--color-border)]">
                    {event.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-[var(--color-primary)] text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl">
                    <ArrowUpRight size={20} />
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-[var(--color-primary)] mb-3">
                    <Calendar size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{event.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-4 flex-grow leading-tight">
                    {event.name}
                </h3>

                <div className="flex items-center text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-widest mb-6">
                    <MapPin size={12} className="mr-2 text-gray-400" />
                    {event.location}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Pricing</p>
                        <p className="text-xl font-extrabold text-[var(--color-text-primary)] tracking-tight leading-none">{event.price}</p>
                    </div>
                    <Link to={`/events/${event.slug}`} className="btn-secondary px-6 text-xs">Explore</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
