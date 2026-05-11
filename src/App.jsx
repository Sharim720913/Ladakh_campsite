import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import SOSModule from './components/ui/SOSModule';
import { TourismProvider } from './context/TourismContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Explore = lazy(() => import('./pages/Explore'));
const Homestays = lazy(() => import('./pages/Homestays'));
const Campsites = lazy(() => import('./pages/Campsites'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <TourismProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[var(--color-bg-offset)] relative overflow-x-hidden">

          {/* Global UI Components */}
          <Navbar />
          <SOSModule />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Suspense fallback={
              <div className="h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
                  <p className="text-[var(--color-text-secondary)] font-bold uppercase tracking-widest text-xs">Loading Exploration...</p>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetail />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/homestays" element={<Homestays />} />
                <Route path="/campsites" element={<Campsites />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </TourismProvider>
  );
}

export default App;
