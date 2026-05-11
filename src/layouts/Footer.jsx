import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Mail, Phone, MapPin, Globe, Camera, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => { setSubscribed(false); setEmail(''); }, 4000);
        }
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center transform transition-transform">
                                <Map className="text-white w-6 h-6" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">
                                Ladakh <span className="text-brand-teal">Explorer</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The official smart tourism ecosystem for Ladakh. Centralized platform for ILP permits, certified homestays, and high altitude safety tracking.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors"><Globe size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors"><Camera size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors"><MessageSquare size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/explore" className="hover:text-brand-teal transition-colors">Explore Destinations</Link></li>
                            <li><Link to="/homestays" className="hover:text-brand-teal transition-colors">Certified Homestays</Link></li>
                            <li><Link to="/events" className="hover:text-brand-teal transition-colors">Festivals & Events</Link></li>
                            <li><Link to="/campsites" className="hover:text-brand-teal transition-colors">Eco Campsites</Link></li>
                        </ul>
                    </div>

                    {/* Emergency & Contacts */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Emergency & Contacts</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start text-red-400 font-bold hover:text-red-300 transition-colors">
                                <Phone size={16} className="mr-3 mt-0.5" /> SOS: 112 / 108
                            </li>
                            <li className="flex items-start hover:text-white transition-colors">
                                <Phone size={16} className="mr-3 mt-0.5" /> Tourist Info: +91 1982 252297
                            </li>
                            <li className="flex items-start hover:text-white transition-colors">
                                <Mail size={16} className="mr-3 mt-0.5" /> support@ladakhexplorer.gov
                            </li>
                            <li className="flex items-start hover:text-white transition-colors">
                                <MapPin size={16} className="mr-3 mt-0.5" /> TRC Leh, Main Bazaar Road, Ladakh 194101
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Travel Alerts Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Get verified updates on road openings (Khardung La, Chang La) and weather warnings.</p>

                        {!subscribed ? (
                            <form onSubmit={handleSubscribe} className="relative">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email address"
                                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-colors"
                                />
                                <button type="submit" className="absolute right-2 top-2 bottom-2 bg-brand-teal hover:bg-brand-teal-light text-white px-4 rounded-lg text-sm font-bold transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand-teal/20 border border-brand-teal/50 text-brand-teal p-3 rounded-xl flex items-center space-x-3">
                                <CheckCircle size={20} />
                                <span className="font-bold text-sm">Subscribed successfully!</span>
                            </motion.div>
                        )}
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
                    <p>© 2026 Ladakh Explorer Ecosystem. Built for the Himalayas.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Tracking</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
