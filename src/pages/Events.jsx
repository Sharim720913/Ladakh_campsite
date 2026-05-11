import React from 'react';
import EventHero from '../components/events/EventHero';
import CategoryFilter from '../components/events/CategoryFilter';
import EventCard from '../components/events/EventCard';
import EventCalendar from '../components/events/EventCalendar';
import { eventsData } from '../data/eventsData';

const Events = () => {
    return (
        <div className="bg-brand-snow min-h-screen">
            {/* 1. Cinematic Hero */}
            <EventHero />

            {/* 2. Scrollable Category Links */}
            <CategoryFilter />

            {/* 3. Featured Events Grid */}
            <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Featured Tours</h2>
                        <p className="text-lg text-gray-500 mt-3 max-w-2xl">Breathtaking festivals and high altitude adventures curated exclusively by Ladakh Tourism.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>

            {/* 4. Complete Calendar */}
            <EventCalendar />

        </div>
    );
};

export default Events;
