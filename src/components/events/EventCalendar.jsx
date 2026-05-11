import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowUpRight, Info } from 'lucide-react';

const EventCalendar = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const eventDays = [4, 12, 18, 26];

    return (
        <section className="py-12 bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden">
            <div className="px-10 py-8 border-b border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6 bg-[var(--color-bg-offset)]">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-primary)] shadow-sm">
                        <CalendarIcon size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">July 2026</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)]">Seasonal Window: High Summer</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="p-2 hover:bg-white rounded-md transition-all border border-transparent hover:border-[var(--color-border)]">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-md transition-all border border-transparent hover:border-[var(--color-border)]">
                        <ChevronRight size={20} />
                    </button>
                    <button className="btn-secondary px-4 py-2 text-xs">Today</button>
                </div>
            </div>

            <div className="p-10">
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden">
                    {days.map(day => (
                        <div key={day} className="bg-[var(--color-bg-offset)] py-3 px-2 text-center text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)]">
                            {day}
                        </div>
                    ))}

                    {[...Array(31)].map((_, i) => {
                        const isEventDay = eventDays.includes(i + 1);
                        return (
                            <div
                                key={i}
                                className={`bg-white min-h-[100px] p-3 transition-colors hover:bg-blue-50/30 cursor-pointer relative group ${isEventDay ? 'bg-blue-50/20' : ''}`}
                            >
                                <span className={`text-sm font-bold ${isEventDay ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                                    {i + 1}
                                </span>

                                {isEventDay && (
                                    <div className="mt-2">
                                        <div className="bg-[var(--color-primary)] text-white text-[9px] font-bold p-1 rounded mb-1 truncate">
                                            Hemis Festival
                                        </div>
                                        <div className="bg-[var(--color-secondary)] text-white text-[9px] font-bold p-1 rounded truncate">
                                            Permit Window
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-primary)]/20 pointer-events-none transition-all" />
                            </div>
                        )
                    })}
                </div>

                {/* Legend & CTA */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 p-6 bg-[var(--color-bg-offset)] rounded-xl border border-[var(--color-border)]">
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[var(--color-primary)] rounded-sm" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">Major Festival</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[var(--color-secondary)] rounded-sm" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">Permit Slot</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-amber-500 rounded-sm" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">Site Closure</span>
                        </div>
                    </div>

                    <button className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest flex items-center group">
                        Subscribe to Calendar <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventCalendar;
