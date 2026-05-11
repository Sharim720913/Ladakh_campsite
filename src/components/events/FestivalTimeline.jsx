import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Camera } from 'lucide-react';

// Mock schedule for the detailed view
const timelineData = [
    { time: '06:00 AM', title: 'Morning Trumpets', desc: 'Monks initiate the festival from the monastery roof.', icon: Clock, type: 'ceremony' },
    { time: '09:00 AM', title: 'Arrival of the Rinpoche', desc: 'The head lama takes the throne in the central courtyard.', icon: MapPin, type: 'ceremony' },
    { time: '11:00 AM', title: 'Cham Mask Dances', desc: 'Performance of the Black Hat dance representing triumph over evil.', icon: Camera, type: 'highlight' },
    { time: '02:00 PM', title: 'Thangka Unveiling', desc: 'A rare three-story high silk painting is revealed to the public.', icon: Clock, type: 'highlight' },
    { time: '05:00 PM', title: 'Closing Prayers', desc: 'Evening chants and dispersing of the gathering.', icon: Clock, type: 'ceremony' },
];

const FestivalTimeline = () => {
    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Daily Itinerary</h3>

            <div className="relative border-l-2 border-brand-teal/20 ml-6 space-y-10 pl-8 pb-4">
                {timelineData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative"
                    >
                        {/* Marker */}
                        <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-white ${item.type === 'highlight' ? 'bg-orange-400 shadow-orange-400/50 shadow-lg' : 'bg-brand-teal'}`} />

                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2">
                            <span className="text-brand-teal font-bold">{item.time}</span>
                            <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FestivalTimeline;
