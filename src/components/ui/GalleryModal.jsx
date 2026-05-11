import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const GalleryModal = ({ images, initialIndex = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-white transition-colors border border-white/50"
            >
                <ImageIcon size={16} />
                <span>View Gallery</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-lg"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 bg-white/10 rounded-full transition-colors z-50 hover:bg-white/20"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation */}
                        <button onClick={handlePrev} className="absolute left-6 text-white/50 p-3 bg-white/10 hover:bg-white/20 hover:text-white rounded-full transition-colors z-50 hidden md:block">
                            <ChevronLeft size={32} />
                        </button>

                        <button onClick={handleNext} className="absolute right-6 text-white/50 p-3 bg-white/10 hover:bg-white/20 hover:text-white rounded-full transition-colors z-50 hidden md:block">
                            <ChevronRight size={32} />
                        </button>

                        {/* Main Image */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full max-w-5xl px-4 flex flex-col items-center"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Gallery image ${currentIndex + 1}`}
                                className="max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
                            />
                            <div className="mt-6 text-gray-400 font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </motion.div>

                        {/* Mobile Navigation */}
                        <div className="absolute bottom-10 flex space-x-6 md:hidden z-50">
                            <button onClick={handlePrev} className="text-white p-3 bg-white/20 rounded-full"><ChevronLeft size={24} /></button>
                            <button onClick={handleNext} className="text-white p-3 bg-white/20 rounded-full"><ChevronRight size={24} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GalleryModal;
