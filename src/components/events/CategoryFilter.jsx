import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Users, Sun, Snowflake, Tent } from 'lucide-react';
import { categoriesData } from '../../data/eventsData';

// Map icon strings to actual Lucide components
const iconMap = {
    'masks': Users,
    'mountain': Mountain,
    'sun': Sun,
    'snowflake': Snowflake,
    'tent': Tent
};

const CategoryFilter = () => {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand-teal mb-8">Browse By Category</h2>
                <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4">
                    {categoriesData.map((cat, index) => {
                        const IconComponent = iconMap[cat.icon] || Mountain;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, boxShadow: '0 10px 40px -10px rgba(13,148,136,0.3)' }}
                                className="flex-shrink-0 w-48 h-48 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center p-6 cursor-pointer group transition-all"
                            >
                                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-brand-teal transition-colors">
                                    <IconComponent size={28} className="text-brand-teal group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors text-center">{cat.name}</h3>
                                <span className="text-xs text-gray-400 mt-2 font-medium">{cat.count} Events Active</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoryFilter;
