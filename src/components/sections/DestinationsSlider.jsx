import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { MapPin, Navigation as NavIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const destinations = [
    { id: 1, name: 'Pangong Lake', desc: 'Highest saltwater lake in the world, famous for its ever-changing hues.', img: '/assets/pangong_lake.png', tag: 'Must Visit' },
    { id: 2, name: 'Nubra Valley', desc: 'The valley of flowers, home to the double-humped Bactrian camels.', img: '/assets/nubra_valley.png', tag: 'Adventure' },
    { id: 3, name: 'Khardung La', desc: 'Once the highest motorable road in the world. High altitude pass.', img: 'https://images.unsplash.com/photo-1626245137537-b95ce3e1bb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tag: 'Extreme' },
];

const DestinationsSlider = () => {
    return (
        <section className="py-24 bg-brand-snow relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Trending Destinations</h2>
                    <p className="text-lg text-gray-500 max-w-2xl">Swipe through the most incredible high-altitude gems the Himalayas have to offer.</p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-[500px]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="h-full !pb-14"
                >
                    {destinations.map(dest => (
                        <SwiperSlide key={dest.id}>
                            <div className="w-full h-full rounded-3xl overflow-hidden relative group cursor-grab active:cursor-grabbing border-4 border-white shadow-xl">
                                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors z-10" />
                                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur text-brand-teal text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    {dest.tag}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-3xl font-extrabold text-white mb-2">{dest.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{dest.desc}</p>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="flex items-center text-brand-glacier font-bold hover:text-white transition-colors">
                                            <NavIcon size={16} className="mr-2" /> Explore Location
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default DestinationsSlider;
