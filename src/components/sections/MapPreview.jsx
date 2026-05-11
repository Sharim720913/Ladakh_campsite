import React from 'react';
import { motion } from 'framer-motion';
import { Map, Navigation, Compass, Layers, Minimize2, Maximize2, Layers as LayersIcon, ArrowRight } from 'lucide-react';

const MapPreview = () => {
    return (
        <section className="py-24 bg-[var(--color-bg-base)]">
            <div className="rec-container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar Controls */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-3 text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px] mb-8">
                            <Navigation size={14} />
                            <span>Interactive Chart</span>
                        </div>
                        <h2 className="rec-heading-2 text-3xl">Trail Intelligence</h2>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-8 leading-relaxed">Toggle official map layers to view trailheads, campsites, and monastic zones across the Ladakh territory.</p>

                        <div className="space-y-3">
                            {['Official Trailheads', 'Facility Locations', 'Permit Zones', 'Satellite Terrain'].map((layer, i) => (
                                <button key={i} className="w-full flex items-center justify-between p-4 bg-[var(--color-bg-offset)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-all group">
                                    <span className="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]">{layer}</span>
                                    <div className={`w-10 h-5 rounded-full relative transition-colors ${i === 0 ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}>
                                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${i === 0 ? 'right-1' : 'left-1'}`} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Integrated Map View */}
                    <div className="lg:col-span-3 relative h-[600px] rec-card border-none shadow-xl group overflow-hidden">
                        {/* Map Overlay Tools */}
                        <div className="absolute top-6 right-6 z-10 flex flex-col space-y-2">
                            {[Maximize2, Minimize2, LayersIcon].map((Icon, i) => (
                                <button key={i} className="bg-white p-3 rounded-lg border border-[var(--color-border)] shadow-md text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-all">
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>

                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=Ladakh&t=p&z=9&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 grayscale-[0.2] contrast-[0.9] saturate-[1.1]"
                            title="Ladakh Boundary Map"
                        ></iframe>

                        {/* Floating Interaction Prompt */}
                        <div className="absolute bottom-10 left-10 z-10 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-[var(--color-border)] shadow-2xl max-w-sm pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all">
                            <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-2 flex items-center">
                                <Compass size={18} className="text-[var(--color-primary)] mr-2 animate-spin-slow" /> Boundary View Enabled
                            </h4>
                            <p className="text-[10px] text-[var(--color-text-secondary)] font-medium uppercase tracking-[0.05em]">Explore official facilities and topography. Interactive GPS routing available on mobile.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MapPreview;
