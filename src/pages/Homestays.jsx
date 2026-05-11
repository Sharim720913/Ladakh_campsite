import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Filter, Navigation, X, CreditCard } from 'lucide-react';
import GalleryModal from '../components/ui/GalleryModal';
import BookingCard from '../components/ui/BookingCard';
import { useTourism } from '../context/TourismContext';

const filters = ['All Villages', 'Spangmik', 'Hunder', 'Turtuk', 'Leh', 'Merak'];

const Homestays = () => {
    const { homestays } = useTourism();
    const [activeFilter, setActiveFilter] = useState('All Villages');

    // Basic mock images array for Gallery Modal
    const galleryImgs = ['/assets/homestay.png', '/assets/campsite.png', '/assets/homestay.png'];

    return (
        <div className="min-h-screen bg-brand-snow pt-24 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header section... */}
                <div className="flex flex-col mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Authentic Homestays</h1>
                    <p className="text-lg text-gray-500 max-w-2xl">
                        Experience Himalayan hospitality. Stay with local families, eat authentic home-cooked meals, and immerse yourself in the mountain way of life.
                    </p>
                </div>

                {/* Listing Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-start">

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {homestays.map((home, index) => (
                            <motion.div
                                key={home.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                            >
                                <div className="relative aspect-[4/3] w-full group overflow-hidden">
                                    <img src="/assets/homestay.png" alt={home.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <GalleryModal images={galleryImgs} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{home.name}</h3>
                                    <span className="text-brand-teal font-bold block mb-4">₹{home.price} / night</span>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">A beautiful cultural homestay in the heart of Ladakh. Experience tradition with premium amenities.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sticky Booking Widget on the side */}
                    <div className="hidden lg:block sticky top-32">
                        <BookingCard homestayId="h1" price={2500} />
                        <div className="mt-6 p-6 bg-amber-50 rounded-3xl border border-amber-100">
                            <h4 className="font-bold text-amber-900 mb-2">Notice</h4>
                            <p className="text-sm text-amber-800">Booking via Ladakh Explorer includes automatic Inner Line Permit generation where applicable.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Homestays;
