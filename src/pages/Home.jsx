import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCards from '../components/sections/ServiceCards';
import DestinationsSlider from '../components/sections/DestinationsSlider';
import MapPreview from '../components/sections/MapPreview';
import TravelGuide from '../components/sections/TravelGuide';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import WeatherModule from '../components/sections/WeatherModule';

const Home = () => {
    return (
        <div className="min-h-screen pt-0 bg-brand-snow">
            {/* 1. Fully interactive smart hero search integrated here */}
            <HeroSection />

            {/* 2. Interactive Navigation via Service Cards */}
            <ServiceCards />

            {/* 3. Auto-sliding drag/swipe active Dest slider */}
            <DestinationsSlider />

            {/* 4. Live API-ready Weather forecasting module */}
            <WeatherModule />

            {/* 5. Embedded Interactive Maps Preview showing altitude elements */}
            <MapPreview />

            {/* 6. Expandable Accordion ecosystem for Travel info */}
            <TravelGuide />

            {/* 7. Automated swiping testimonial sliders */}
            <TestimonialSlider />
        </div>
    );
};

export default Home;
