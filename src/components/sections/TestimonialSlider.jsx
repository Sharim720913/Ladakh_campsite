import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    { id: 1, name: 'Sarah Jenkins', loc: 'UK', text: 'The Homestay experience in Turtuk was life-changing. True Himalayan hospitality.', rating: 5 },
    { id: 2, name: 'Raj Kumar', loc: 'India', text: 'Booking inner line permits through the platform saved us days of hassle.', rating: 5 },
    { id: 3, name: 'Elena Rostova', loc: 'Russia', text: 'The Pangong eco-campsite had the most breathtaking view of the milky way.', rating: 5 },
];

const TestimonialSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-brand-teal text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <Quote className="mx-auto w-16 h-16 text-brand-teal-light mb-8 opacity-50" />
                <div className="h-48 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center"
                        >
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-8">
                                "{testimonials[index].text}"
                            </p>
                            <div className="flex space-x-1 mb-3">
                                {[...Array(testimonials[index].rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <h4 className="font-bold text-lg">{testimonials[index].name}</h4>
                            <span className="text-teal-200 text-sm">{testimonials[index].loc}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* Dots */}
                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === index ? 'bg-white' : 'bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
