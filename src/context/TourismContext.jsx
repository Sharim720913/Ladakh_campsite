import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock DB for Firebase/Supabase structure
const mockDB = {
    homestays: [
        { id: 'h1', name: 'Tsomgo Heritage Home', price: '₹2,500', location: 'Tsomgo Lake', image: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d3?q=80&w=2070&auto=format&fit=crop' },
        { id: 'h2', name: 'Nubra Valley Oasis', price: '₹3,200', location: 'Hunder', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop' }
    ],
    camps: [
        { id: 'c1', name: 'Rumbak Valley Camp', price: '₹1,800', location: 'Rumbak, Leh', image: 'https://images.unsplash.com/photo-1544070282-591d487c6ce7?q=80&w=2070&auto=format&fit=crop', type: 'Standard', isAvailable: true, rating: 4.7, reviews: 32 },
        { id: 'c2', name: 'Tsokar Lake Camp', price: '₹2,200', location: 'Tsokar, Changthang', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop', type: 'Premium', isAvailable: true, rating: 4.8, reviews: 45 }
    ],
    bookings: []
};

const TourismContext = createContext();

export const TourismProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [homestays, setHomestays] = useState([]);
    const [camps, setCamps] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching data from backend
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // Simulating network request
            await new Promise(res => setTimeout(res, 800));
            setHomestays(mockDB.homestays);
            setCamps(mockDB.camps);
            setBookings(mockDB.bookings);

            // Simulating authenticated user
            setCurrentUser({ uid: 'usr123', name: 'Traveler', role: 'user' });
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const createBooking = async (bookingData) => {
        // Simulating API POST
        await new Promise(res => setTimeout(res, 500));
        const newBooking = { id: `b_${Date.now()}`, ...bookingData };
        setBookings(prev => [...prev, newBooking]);
        return newBooking;
    };

    const value = {
        currentUser,
        homestays,
        camps,
        bookings,
        isLoading,
        createBooking
    };

    return (
        <TourismContext.Provider value={value}>
            {children}
        </TourismContext.Provider>
    );
};

export const useTourism = () => {
    return useContext(TourismContext);
};
