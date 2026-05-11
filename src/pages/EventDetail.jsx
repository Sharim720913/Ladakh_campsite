import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Share2, Heart, ArrowLeft, Wind, CloudSnow, AlertTriangle } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import FestivalTimeline from '../components/events/FestivalTimeline';
import RegistrationModal from '../components/events/RegistrationModal';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const foundEvent = eventsData.find(e => e.slug === id);
        if (foundEvent) setEvent(foundEvent);
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) return <div className="h-screen flex items-center justify-center font-bold text-2xl text-gray-500">Event Not Found</div>;

    return (
        <div className="bg-brand-snow min-h-screen pb-20">

            {/* Dynamic Hero */}
            <div className="relative h-[60vh] min-h-[400px] w-full pt-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${event.image || '/assets/ladakh_festival.png'})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
                    <button onClick={() => navigate('/events')} className="absolute top-28 left-4 md:left-8 bg-white/20 hover:bg-white text-white hover:text-gray-900 backdrop-blur-md rounded-full px-4 py-2 flex items-center text-sm font-bold transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> All Events
                    </button>

                    <div className="flex flex-wrap items-center space-x-4 mb-4">
                        <span className="bg-brand-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{event.category}</span>
                        <span className="flex items-center text-gray-300 text-sm"><Calendar size={14} className="mr-1" /> {event.date}</span>
                        <span className="flex items-center text-gray-300 text-sm"><MapPin size={14} className="mr-1" /> {event.location}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{event.title}</h1>

                    <div className="flex space-x-3">
                        <button onClick={() => setIsModalOpen(true)} className="bg-brand-teal hover:bg-brand-teal-light text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors">Register for {event.price}</button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-xl transition-colors"><Heart size={20} /></button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-xl transition-colors"><Share2 size={20} /></button>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div className="lg:col-span-2 space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">{event.description} The region comes alive as hundreds of monks and locals gather to celebrate this ancient tradition dating back to the 11th century. Inner Line Permits are required.</p>
                    </section>

                    <section>
                        <FestivalTimeline />
                    </section>

                </div>

                <div className="space-y-6">

                    {/* Organizer Widget */}
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-gray-400">LT</div>
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Organized By</p>
                        <h4 className="text-xl font-bold text-gray-900">{event.organizer}</h4>
                    </div>

                    {/* Weather & Advisory */}
                    <div className="bg-brand-gray text-white rounded-3xl p-6 shadow-sm">
                        <h4 className="font-bold flex items-center mb-4"><CloudSnow size={18} className="mr-2 text-brand-glacier" /> Expected Weather</h4>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-3xl font-bold text-brand-glacier">-4°C</span>
                            <p className="text-sm text-gray-300 text-right">Light snow<br />High winds</p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 flex items-start space-x-3">
                            <AlertTriangle size={20} className="text-amber-400 flex-shrink-0" />
                            <p className="text-xs text-gray-200">Advisory: Altitude sickness protocols extremely active. Thermals mandatory.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Registration Modal Overlay */}
            <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} event={event} />

        </div>
    );
};

export default EventDetail;
