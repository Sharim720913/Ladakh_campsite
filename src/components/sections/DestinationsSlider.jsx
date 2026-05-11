import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const destinations = [
    { id: 1, name: 'Pangong Lake', loc: 'Changtang Region', tag: 'Must See', img: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=2070&auto=format&fit=crop', rating: 4.9 },
    { id: 2, name: 'Nubra Valley', loc: 'Northern Frontier', tag: 'Adventure', img: 'https://images.unsplash.com/photo-1544070282-591d487c6ce7?q=80&w=2070&auto=format&fit=crop', rating: 4.8 },
    { id: 3, name: 'Leh City', loc: 'Capitol District', tag: 'Culture', img: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d3?q=80&w=2070&auto=format&fit=crop', rating: 5.0 },
    { id: 4, name: 'Zanskar Range', loc: 'Western Ladakh', tag: 'Extreme', img: 'https://images.unsplash.com/photo-1626245137537-b95ce3e1bb45?q=80&w=2070&auto=format&fit=crop', rating: 4.7 }
];

const DestinationsSlider = () => {
    return (
        <section className="py-24 bg-[var(--color-bg-offset)]">
            <div className="rec-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="rec-heading-2 text-4xl">Featured Destinations</h2>
                        <p className="text-[var(--color-text-secondary)] mt-2 font-medium">Explore the most visited federal and heritage sites in the territory.</p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="swiper-nav-prev cursor-pointer bg-white border border-[var(--color-border)] p-3 rounded-full hover:bg-gray-50 active:scale-95 shadow-sm transition-all text-[var(--color-primary)]">
                            <ArrowRight className="rotate-180" size={20} />
                        </div>
                        <div className="swiper-nav-next cursor-pointer bg-white border border-[var(--color-border)] p-3 rounded-full hover:bg-gray-50 active:scale-95 shadow-sm transition-all text-[var(--color-primary)]">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-nav-prev',
                            nextEl: '.swiper-nav-next',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        className="destinations-swiper !pb-12"
                    >
                        {destinations.map((dest) => (
                            <SwiperSlide key={dest.id}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="rec-card h-full flex flex-col group cursor-pointer"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-[var(--color-text-primary)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-[var(--color-border)] shadow-sm">
                                                {dest.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">{dest.name}</h3>
                                                <div className="flex items-center text-[var(--color-text-secondary)] text-sm mt-1">
                                                    <MapPin size={14} className="mr-1 text-[var(--color-primary)]" />
                                                    {dest.loc}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-1 bg-blue-50 text-[var(--color-primary)] px-2 py-1 rounded-md border border-blue-100">
                                                <Star size={12} className="fill-[var(--color-primary)]" />
                                                <span className="text-xs font-black">{dest.rating}</span>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                                                Discover Facility <ArrowRight className="ml-2" size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default DestinationsSlider;
