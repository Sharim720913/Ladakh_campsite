import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Users, CreditCard, Check } from 'lucide-react';
import { useTourism } from '../../context/TourismContext';

const BookingCard = ({ homestayId, price }) => {
    const { createBooking } = useTourism();
    const [guests, setGuests] = useState(2);
    const [days, setDays] = useState(3);
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const total = price * guests * days;

    const handleBooking = async () => {
        setStatus('loading');
        await createBooking({ homestayId, guests, days, total });
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-brand-teal text-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center sticky top-32"
            >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Check size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Booking Confirmed</h3>
                <p className="text-teal-100 mb-6">Your Inner Line Permits are auto-processing.</p>
                <button onClick={() => setStatus('idle')} className="w-full py-3 bg-white text-brand-teal rounded-xl font-bold hover:bg-gray-50 transition-colors">
                    View Receipt
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 sticky top-32">
            <div className="flex justify-between items-end mb-6 pb-6 border-b border-gray-100">
                <div>
                    <span className="text-3xl font-bold text-brand-teal">₹{price}</span>
                    <span className="text-gray-500 font-medium"> / night</span>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                <div className="flex items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-brand-teal transition-colors">
                    <CalendarIcon className="text-brand-teal mr-3" size={20} />
                    <div className="flex-1">
                        <label className="text-xs text-gray-500 font-bold uppercase block">Duration</label>
                        <select
                            className="w-full bg-transparent outline-none font-semibold text-gray-800"
                            value={days} onChange={e => setDays(Number(e.target.value))}
                        >
                            <option value={1}>1 Night</option>
                            <option value={2}>2 Nights</option>
                            <option value={3}>3 Nights</option>
                            <option value={4}>4 Nights</option>
                            <option value={5}>5 Nights</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-brand-teal transition-colors">
                    <Users className="text-brand-teal mr-3" size={20} />
                    <div className="flex-1">
                        <label className="text-xs text-gray-500 font-bold uppercase block">Guests</label>
                        <select
                            className="w-full bg-transparent outline-none font-semibold text-gray-800"
                            value={guests} onChange={e => setGuests(Number(e.target.value))}
                        >
                            <option value={1}>1 Traveler</option>
                            <option value={2}>2 Travelers</option>
                            <option value={3}>3 Travelers</option>
                            <option value={4}>4 Travelers</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                <div className="flex justify-between text-gray-600">
                    <span>₹{price} x {days} nights x {guests} </span>
                    <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Tourism Tax (5%)</span>
                    <span>₹{(total * 0.05).toFixed(0)}</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>₹{total + (total * 0.05)}</span>
                </div>
            </div>

            <button
                onClick={handleBooking}
                disabled={status === 'loading'}
                className="w-full py-4 bg-brand-teal hover:bg-brand-teal-light text-white rounded-2xl font-bold flex items-center justify-center shadow-lg shadow-brand-teal/30 hover:shadow-brand-teal/50 transition-all transform hover:-translate-y-1"
            >
                {status === 'loading' ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                    <>
                        <CreditCard size={20} className="mr-2" />
                        <span>Secure Booking</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default BookingCard;
