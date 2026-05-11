import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock DB for Firebase/Supabase structure
const mockDB = {
    homestays: [
        { id: 'h1', name: 'Tsomgo Heritage Home', price: 2500, available: true },
        { id: 'h2', name: 'Nubra Valley Oasis', price: 3200, available: true }
    ],
    bookings: []
};

const TourismContext = createContext();

export const TourismProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [homestays, setHomestays] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching data from backend
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // Simulating network request
            await new Promise(res => setTimeout(res, 800));
            setHomestays(mockDB.homestays);
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
