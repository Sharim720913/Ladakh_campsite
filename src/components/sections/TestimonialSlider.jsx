import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, ArrowRight, ShieldCheck, User } from 'lucide-react';

const testimonials = [
    {
        name: "David Chen",
        role: "Backcountry Trekker",
        text: "The official permit system through Ladakh Explorer was seamless. It's rare to find such high-quality facility data for such a remote region.",
        rating: 5
    },
    {
        name: "Sarah Miller",
        role: "Cultural Historian",
        text: "Staying at the verified heritage homestays changed my perspective. The stewardship guidelines helped us explore with respect.",
        rating: 5
    }
];

const TestimonialSlider = () => {
    return (
        <section className="py-24 bg-[var(--color-bg-base)]">
            <div className="rec-container">
                <div className="flex items-center space-x-3 text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px] mb-8">
                    <ShieldCheck size={16} />
                    <span>Verified Reviews</span>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        1024: { slidesPerView: 2 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    className="testimonals-swiper !pb-20"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="rec-card p-12 bg-gray-50 border-none shadow-none flex flex-col h-full">
                                <Quote className="text-[var(--color-primary)] opacity-20 mb-8" size={60} />
                                <p className="text-xl font-medium text-[var(--color-text-primary)] leading-relaxed mb-10 flex-grow italic">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] border border-gray-200 shadow-sm">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-text-primary)]">{t.name}</h4>
                                            <p className="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-500">
                                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
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

export default TestimonialSlider;
