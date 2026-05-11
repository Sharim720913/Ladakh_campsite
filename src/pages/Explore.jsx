import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Ship, Mountain, Map, History, ArrowRight, Sun, Navigation, Info, ShieldCheck, Camera } from 'lucide-react';
import EventCalendar from '../components/events/EventCalendar';

const activities = [
    { name: 'Nubra Valley Cycle', category: 'Cycling', icon: Bike, difficulty: 'Moderate', duration: '1 Day', price: '₹4,500' },
    { name: 'Zanskar River Float', category: 'Rafting', icon: Ship, difficulty: 'Family', duration: 'Half Day', price: '₹2,500' },
    { name: 'Spiti Pass Trek', category: 'Trekking', icon: Mountain, difficulty: 'Extreme', duration: '9 Days', price: '₹22,000' },
];

const Explore = () => {
    return (
        <div className="bg-[var(--color-bg-base)] min-h-screen pt-20">
            <div className="rec-container py-12">

                {/* Authority Header */}
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center space-x-3 text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px] mb-6">
                        <Navigation size={14} />
                        <span>Interactive Territory Guide</span>
                    </div>
                    <h1 className="rec-heading-1 mb-8">Plan Your Ladakh <span className="text-[var(--color-primary)]">Discovery</span></h1>
                    <p className="text-[var(--color-text-secondary)] text-xl font-medium leading-relaxed">
                        Access official trail data, seasonal alerts, and authorized activities across the high Himalayan frontier.
                    </p>
                </div>

                {/* Interactive Map Section */}
                <section className="mb-32">
                    <div className="rec-card h-[500px] w-full relative overflow-hidden group">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=Ladakh&t=p&z=8&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 saturate-[1.1] opacity-90 contrast-[0.8]"
                            title="Territory Map"
                        ></iframe>

                        <div className="absolute top-10 left-10 bg-white p-10 rounded-xl shadow-2xl max-w-sm border border-[var(--color-border)] pointer-events-none md:pointer-events-auto">
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center">
                                <Map size={24} className="text-[var(--color-primary)] mr-4" />
                                Territorial Nav
                            </h2>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                Navigate the high passes with confidence. Toggle active facility layers and view real-time boundary data.
                            </p>
                            <button className="btn-primary w-full pointer-events-auto">View Full Map</button>
                        </div>
                    </div>
                </section>

                {/* Adventure Activities Grid */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="rec-heading-2 text-4xl">Official Activities</h2>
                            <p className="text-[var(--color-text-secondary)] mt-2 font-medium">Permit-verified experiences led by authorized territory guides.</p>
                        </div>
                        <div className="flex items-center space-x-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <Info size={18} className="text-[var(--color-primary)]" />
                            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest">Insurance required for extreme treks</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {activities.map((act, index) => {
                            const Icon = act.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="rec-card p-10 flex flex-col group"
                                >
                                    <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-sm">
                                        <Icon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{act.name}</h3>
                                    <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
                                        <span>{act.difficulty}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <span>{act.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-auto">
                                        <div className="text-[var(--color-text-primary)]">
                                            <p className="text-[9px] font-black uppercase tracking-widest leading-none text-gray-400 mb-1">Base Price</p>
                                            <p className="text-2xl font-extrabold leading-none">{act.price}</p>
                                        </div>
                                        <button className="btn-secondary px-6 text-xs group/btn">
                                            Apply <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>

                {/* Integrated Stewardship Section */}
                <section className="mb-32">
                    <div className="bg-[var(--color-secondary)]/5 rounded-3xl p-16 border border-[var(--color-secondary)]/10 flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold text-[var(--color-text-primary)] mb-8 flex items-center">
                                <History className="text-[var(--color-secondary)] mr-6" size={32} />
                                Territory Ethics
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10">
                                Ladakh is a designated "Culture Preserve". We expect all visitors to follow the High-Altitude Stewardship Act. Respect local customs, minimize waste, and support community-run facilities.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: ShieldCheck, title: 'Permit Compliance' },
                                    { icon: Camera, title: 'Respectful Capture' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-[var(--color-border)] shadow-sm">
                                        <item.icon size={20} className="text-[var(--color-secondary)]" />
                                        <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl border border-[var(--color-border)] text-center">
                            <Sun size={48} className="text-amber-500 mx-auto mb-6" />
                            <p className="text-sm font-bold mb-4">Official Ranger Briefing</p>
                            <p className="text-xs text-[var(--color-text-secondary)] mb-8">Join our daily 10 AM digital orientation for safe Himalayan exploration.</p>
                            <button className="btn-green w-full">Join Briefing</button>
                        </div>
                    </div>
                </section>

                {/* Final Booking/Calendar Callout */}
                <section>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="rec-heading-2 text-4xl">Facility Calendar</h2>
                        <button className="btn-secondary">Export to Outlook</button>
                    </div>
                    <EventCalendar />
                </section>

            </div>
        </div>
    );
};

export default Explore;
