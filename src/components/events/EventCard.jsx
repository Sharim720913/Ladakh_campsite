import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate(`/events/${event.slug}`)}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer group flex flex-col h-full"
        >
            <div className="h-56 relative overflow-hidden">
                <img src={event.image || '/assets/ladakh_festival.png'} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-teal text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Tag size={12} className="mr-1" /> {event.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{event.title}</h3>
                    <div className="flex space-x-3 text-xs text-gray-200">
                        <span className="flex items-center"><Calendar size={14} className="mr-1 text-brand-glacier" /> {event.date}</span>
                        <span className="flex items-center"><MapPin size={14} className="mr-1 text-brand-glacier" /> {event.location}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-grow">{event.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Pricing</p>
                        <p className="font-bold text-gray-900">{event.price}</p>
                    </div>
                    <button className="text-brand-teal font-bold hover:text-brand-teal-light text-sm bg-brand-teal/10 px-4 py-2 rounded-xl transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
