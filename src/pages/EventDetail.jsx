import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Share2, Heart, ArrowLeft, Sun, AlertTriangle, ShieldCheck, Info, ChevronRight, Users } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const foundEvent = eventsData.find(e => e.slug === id);
        if (foundEvent) setEvent(foundEvent);
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) return (
        <div className="h-screen flex items-center justify-center bg-[var(--color-bg-offset)]">
            <div className="text-center">
                <Info size={48} className="text-[var(--color-primary)] mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Facility Not Found</h2>
                <button onClick={() => navigate('/events')} className="btn-primary mt-8">Return to Events</button>
            </div>
        </div>
    );

    return (
        <div className="bg-[var(--color-bg-base)] min-h-screen pb-32">

            {/* Navigational Breadcrumb Area */}
            <div className="bg-white border-b border-[var(--color-border)] pt-24 pb-6">
                <div className="rec-container">
                    <button
                        onClick={() => navigate('/events')}
                        className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                        <ArrowLeft size={14} />
                        <span>Back to Find Events</span>
                    </button>
                </div>
            </div>

            {/* Split Hero / Sidebar Layout */}
            <div className="rec-container mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content (Left) */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Event/Facility Header */}
                    <div className="rec-card border-none shadow-none bg-transparent">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-blue-50 text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border border-blue-100">
                                Official Event
                            </span>
                            <div className="flex items-center space-x-2 text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-widest">
                                <Calendar size={14} className="text-[var(--color-primary)]" />
                                <span>{event.date}</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-8">{event.name || event.title}</h1>
                        <div className="flex items-center text-lg text-[var(--color-text-secondary)] font-medium mb-12">
                            <MapPin size={20} className="text-[var(--color-primary)] mr-2" />
                            {event.location}
                        </div>

                        {/* Primary Image Container */}
                        <div className="rounded-xl overflow-hidden shadow-2xl h-[450px] mb-12 border border-[var(--color-border)]">
                            <img src={event.image} alt={event.name} className="w-full h-full object-cover saturate-[1.1] brightness-[1.05]" />
                        </div>

                        {/* Description Section */}
                        <div className="prose prose-slate max-w-none">
                            <h3 className="text-2xl font-bold mb-6">About this Activity</h3>
                            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10">
                                {event.description} This facility and its associated activities are managed under the Ladakh Territory Discovery Act. Visitors are expected to adhere to all seasonal safety protocols.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                <div className="bg-[var(--color-bg-offset)] p-8 rounded-xl border border-[var(--color-border)]">
                                    <h4 className="font-bold flex items-center mb-4"><ShieldCheck size={20} className="text-[var(--color-secondary)] mr-3" /> Permit Info</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)]">Inner Line Permits are required for this zone. Available for instant issue through our portal.</p>
                                </div>
                                <div className="bg-[var(--color-bg-offset)] p-8 rounded-xl border border-[var(--color-border)]">
                                    <h4 className="font-bold flex items-center mb-4"><Users size={20} className="text-[var(--color-primary)] mr-3" /> Group Capacity</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)]">Maximum 12 explorers per window to minimize environmental disturbance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Sidebar (Right) */}
                <div className="lg:col-span-1 space-y-8">

                    {/* Booking Card */}
                    <div className="rec-card p-10 bg-white shadow-2xl border-[var(--color-border)]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Facility Pricing</p>
                        <div className="flex items-baseline space-x-2 mb-8">
                            <span className="text-4xl font-extrabold text-[var(--color-text-primary)]">{event.price}</span>
                            <span className="text-sm text-[var(--color-text-secondary)] font-bold">/ PERMIT</span>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                <span className="text-sm font-bold text-[var(--color-text-secondary)]">Status</span>
                                <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">Reservations Open</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                <span className="text-sm font-bold text-[var(--color-text-secondary)]">Type</span>
                                <span className="text-sm font-black text-[var(--color-primary)] uppercase tracking-widest">{event.category}</span>
                            </div>
                        </div>

                        <button className="btn-primary w-full py-5 text-sm">Review & Request Permit</button>

                        <div className="mt-8 flex justify-center space-x-8">
                            <button className="flex flex-col items-center space-y-2 group">
                                <div className="w-10 h-10 border border-[var(--color-border)] rounded-full flex items-center justify-center text-gray-400 group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all"><Share2 size={16} /></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Share</span>
                            </button>
                            <button className="flex flex-col items-center space-y-2 group">
                                <div className="w-10 h-10 border border-[var(--color-border)] rounded-full flex items-center justify-center text-gray-400 group-hover:text-rose-500 group-hover:border-rose-500 transition-all"><Heart size={16} /></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Save</span>
                            </button>
                        </div>
                    </div>

                    {/* Regional Advisory Widget */}
                    <div className="rec-card p-10 bg-[var(--color-bg-offset)] border-none">
                        <div className="flex items-center space-x-3 text-amber-600 mb-6 font-bold uppercase tracking-widest text-[10px]">
                            <AlertTriangle size={14} />
                            <span>Facility Alert</span>
                        </div>
                        <h4 className="font-bold text-[var(--color-text-primary)] mb-4">High Summer UV Alert</h4>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-8">
                            Extreme solar intensity recorded in the {event.location} sector. Protective equipment and hydration reserves are mandatory for all attendees.
                        </p>
                        <button className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest flex items-center hover:underline">
                            View Safety Portal <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>

                    {/* Organizer / Agency Info */}
                    <div className="rec-card p-8 border border-[var(--color-border)] flex items-center space-x-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">LT</div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Managed By</p>
                            <p className="text-sm font-bold text-[var(--color-text-primary)]">Ladakh Territory Agency</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default EventDetail;
