import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ image, title, subtitle, quote }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-transparent to-brand-obsidian/40 z-[1]" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {quote ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-3xl md:text-5xl font-serif text-white italic mb-6 leading-tight">
                            "{quote}"
                        </p>
                        <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">{subtitle}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white">{title}</h2>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ParallaxSection;
