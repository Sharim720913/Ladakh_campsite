import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar as CalendarIcon, MapPin, Grid, List, SlidersHorizontal } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import EventHero from '../components/events/EventHero';
import CategoryFilter from '../components/events/CategoryFilter';
import EventCalendar from '../components/events/EventCalendar';
import { eventsData } from '../data/eventsData';

const Events = () => {
    const [view, setView] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredEvents = selectedCategory === 'All'
        ? eventsData
        : eventsData.filter(event => event.category === selectedCategory);

    return (
        <div className="bg-[var(--color-bg-base)] min-h-screen">
            {/* Discovery Hero - Clean & Search Focused */}
            <EventHero />

            <div className="rec-container py-12">
                {/* Filtration & Tooling Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                    <div className="flex flex-wrap items-center gap-4">
                        <CategoryFilter active={selectedCategory} onChange={setSelectedCategory} />
                    </div>

                    <div className="flex items-center space-x-6 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
                        <div className="flex items-center space-x-2 bg-[var(--color-bg-offset)] p-1 rounded-lg border border-[var(--color-border)]">
                            <button
                                onClick={() => setView('grid')}
                                className={`p-2 rounded-md transition-all ${view === 'grid' ? 'bg-white shadow-sm text-[var(--color-primary)]' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`p-2 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-[var(--color-primary)]' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                        <button className="flex items-center space-x-2 text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors">
                            <SlidersHorizontal size={18} />
                            <span>Advanced Filters</span>
                        </button>
                    </div>
                </div>

                {/* Event Listings Display */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight">{filteredEvents.length} Facilities & Events Found</h2>
                        <select className="bg-transparent text-sm font-bold text-[var(--color-text-secondary)] outline-none border-none cursor-pointer">
                            <option>Relevance</option>
                            <option>Date: Soonest</option>
                            <option>Distance</option>
                        </select>
                    </div>

                    <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' : 'flex flex-col gap-8'}>
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                            >
                                <EventCard event={event} view={view} />
                            </motion.div>
                        ))}
                    </div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-24 bg-[var(--color-bg-offset)] rounded-[2rem] border-2 border-dashed border-[var(--color-border)]">
                            <CalendarIcon size={48} className="mx-auto text-gray-300 mb-6" />
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">No expeditions found in this category</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm">Try adjusting your filters or searching for a different seasonal window.</p>
                        </div>
                    )}
                </div>

                {/* Integrated Facility Calendar */}
                <div className="pt-24 border-t border-[var(--color-border)]">
                    <div className="max-w-3xl mb-12">
                        <h2 className="rec-heading-2 text-4xl mb-4 text-[var(--color-primary)]">Territory Calendar</h2>
                        <p className="text-[var(--color-text-secondary)] font-medium">Track seasonal openings, high-altitude festivals, and weather-dependent trail availability across the Ladakh frontier.</p>
                    </div>
                    <EventCalendar />
                </div>
            </div>
        </div>
    );
};

export default Events;
