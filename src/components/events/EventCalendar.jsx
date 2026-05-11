import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Filter } from 'lucide-react';
import { eventsData } from '../../data/eventsData';

const EventCalendar = () => {
    const [activeSeason, setActiveSeason] = useState('All');
    const seasons = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];

    // Very basic mock filter for UI demonstration based on date strings
    const filterEvents = () => {
        if (activeSeason === 'All') return eventsData;
        if (activeSeason === 'Winter') return eventsData.filter(e => e.date.includes('Feb') || e.date.includes('Jan'));
        if (activeSeason === 'Spring') return eventsData.filter(e => e.date.includes('April') || e.date.includes('May'));
        if (activeSeason === 'Summer') return eventsData.filter(e => e.date.includes('Jul') || e.date.includes('Aug') || e.date.includes('Jun'));
        return eventsData; // fallback
    };

    const displayedEvents = filterEvents();

    return (
        <section className="py-16 bg-brand-snow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Annual Festival Calendar</h2>
                        <p className="text-gray-500 mt-2">Plan your travels around these cultural milestones.</p>
                    </div>

                    <div className="flex items-center space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 no-scrollbar">
                        <Filter size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                        {seasons.map(s => (
                            <button
                                key={s}
                                onClick={() => setActiveSeason(s)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${activeSeason === s ? 'bg-brand-gray text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    {displayedEvents.map((evt, idx) => (
                        <div key={evt.id} className={`flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 hover:bg-gray-50 transition-colors group cursor-pointer ${idx !== displayedEvents.length - 1 ? 'border-b border-gray-100' : ''}`}>

                            <div className="w-48 flex-shrink-0 mb-4 md:mb-0">
                                <span className="text-brand-teal font-extrabold text-xl tracking-wide">{evt.date}</span>
                            </div>

                            <div className="flex-grow pr-8">
                                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-bold text-xs rounded-full mb-2 uppercase tracking-wide">
                                    {evt.category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{evt.title}</h3>
                                <p className="text-gray-500 text-sm">{evt.location} • {evt.organizer}</p>
                            </div>

                            <div className="flex-shrink-0 mt-6 md:mt-0 hidden md:block">
                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-brand-teal group-hover:text-white group-hover:border-transparent transition-all">
                                    <ChevronRight size={24} />
                                </div>
                            </div>

                        </div>
                    ))}
                    {displayedEvents.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            No major events scheduled for this season.
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default EventCalendar;
