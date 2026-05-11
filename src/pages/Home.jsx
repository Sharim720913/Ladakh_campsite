import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServiceCards from '../components/sections/ServiceCards';
import DestinationsSlider from '../components/sections/DestinationsSlider';
import WeatherModule from '../components/sections/WeatherModule';
import TravelGuide from '../components/sections/TravelGuide';
import MapPreview from '../components/sections/MapPreview';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import { ShieldCheck, Info, ArrowRight, Sun } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-[var(--color-bg-base)]">
            {/* Phase 1: Search Centric Arrival */}
            <HeroSection />

            {/* Global Authority Banner (Subtle) */}
            <div className="bg-white border-b border-[var(--color-border)] py-4">
                <div className="rec-container flex items-center justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <ShieldCheck size={16} className="text-[var(--color-primary)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)]">Bureau Verified Stays</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 border-l border-gray-200 pl-6">
                        <Info size={16} className="text-[var(--color-secondary)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)]">Official Trail Maps 2026</span>
                    </div>
                </div>
            </div>

            {/* Phase 2: Core Utility Services */}
            <ServiceCards />

            {/* Phase 3: Visual Destination Discovery */}
            <DestinationsSlider />

            {/* Phase 4: Foundational Information (Stewardship & Weather) */}
            <section className="bg-[var(--color-bg-offset)] py-24 border-t border-[var(--color-border)]">
                <div className="rec-container flex flex-col items-center text-center mb-16">
                    <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px] mb-4">Territory Intelligence</span>
                    <h2 className="rec-heading-2 text-4xl mb-4">Prepared for the Plateau</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl font-medium">Access real-time environmental data and official stewardship guidelines before starting your ascent.</p>
                </div>
                <WeatherModule />
                <div className="mt-12">
                    <TravelGuide />
                </div>
            </section>

            {/* Phase 5: Spatial Context */}
            <div className="bg-white py-24">
                <div className="rec-container flex flex-col items-center text-center mb-16">
                    <h2 className="rec-heading-2 text-4xl mb-4">Official Boundary Map</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl font-medium">Toggle layers to view active facility zones across the Ladakh territory.</p>
                </div>
                <MapPreview />
            </div>

            {/* Phase 6: Community Trust */}
            <TestimonialSlider />

            {/* Final Conversion Callout - Recreation.gov style */}
            <section className="py-32 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                    <Sun size={400} className="translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="rec-container relative z-10 flex flex-col items-center text-center">
                    <h2 className="rec-heading-1 text-white mb-8">Adventure is Waiting.</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mb-12 font-medium">
                        Secure your permits, reserve your facility, and plan your journey into the heart of the high Himalayas today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <button className="bg-white text-[var(--color-primary)] px-12 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-blue-50 transition-all flex items-center shadow-2xl">
                            Request Permits Now <ArrowRight size={18} className="ml-3" />
                        </button>
                        <button className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                            Learning Center
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
