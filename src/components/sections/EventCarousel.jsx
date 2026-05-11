import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
    { id: 1, name: 'Hemis Festival', date: 'Jul 26 - 27', loc: 'Hemis Monastery', type: 'Cultural', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Ladakh Marathon', date: 'Sep 3', loc: 'Leh', type: 'Sports', img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'Khardung La Challenge', date: 'Sep 7', loc: 'Top Pass', type: 'Cycling', img: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: 'Nubra Dunes Retreat', date: 'Oct 12', loc: 'Hunder', type: 'Spiritual', img: 'https://images.unsplash.com/photo-1626245137537-b95ce3e1bb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const EventCarousel = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full py-8">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Upcoming Events</h3>
                <div className="flex space-x-3">
                    <button onClick={scrollLeft} className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronLeft /></button>
                    <button onClick={scrollRight} className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronRight /></button>
                </div>
            </div>

            <div ref={scrollRef} className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 pt-4 px-2 -mx-2">
                {events.map((evt) => (
                    <motion.div
                        key={evt.id}
                        whileHover={{ y: -10 }}
                        className="flex-shrink-0 w-80 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
                    >
                        <div className="h-48 relative overflow-hidden">
                            <img src={evt.img} alt={evt.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-teal text-xs font-bold px-3 py-1 rounded-full">
                                {evt.type}
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{evt.name}</h4>
                            <div className="flex space-x-4 text-sm text-gray-500 mb-6">
                                <span className="flex items-center"><Calendar size={16} className="mr-1 text-brand-teal" /> {evt.date}</span>
                                <span className="flex items-center"><MapPin size={16} className="mr-1 text-brand-teal" /> {evt.loc}</span>
                            </div>
                            <button className="w-full py-2.5 border border-brand-teal text-brand-teal rounded-xl font-semibold hover:bg-brand-teal hover:text-white transition-colors">
                                Register
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventCarousel;
