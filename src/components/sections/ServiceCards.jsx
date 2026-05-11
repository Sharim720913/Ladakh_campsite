import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Heart, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
    const services = [
        {
            title: 'Wilderness Permits',
            desc: 'Secure authorized access to Ladakh\'s restricted frontier regions and high-altitude trails.',
            icon: ShieldCheck,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            title: 'Facility Intelligence',
            desc: 'Real-time data on campsites, medical outposts, and emergency supply nodes.',
            icon: Database,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            title: 'Cultural Stewardship',
            desc: 'Expert-led journeys into the heart of Buddhist heritage and local sustainable living.',
            icon: Heart,
            color: 'text-rose-600',
            bg: 'bg-rose-50'
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-[var(--color-bg-offset)]">
            {/* Cinematic Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
                <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="rec-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center space-x-3 text-[var(--color-secondary)] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                            <span className="w-8 h-[1px] bg-[var(--color-secondary)]"></span>
                            <span>System Modules</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-text-primary)]">
                            Engineered for <span className="text-[var(--color-primary)]">Frontier.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group rec-card p-12 hover:border-[var(--color-secondary)]/30 transition-all duration-700"
                        >
                            <div className={`${service.bg} ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm shadow-black/5`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-4">{service.title}</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-10">
                                {service.desc}
                            </p>
                            <button className="text-[var(--color-primary)] font-black text-[10px] uppercase tracking-widest flex items-center group/btn">
                                Access Module <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
