import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Homestays from './pages/Homestays';
import Campsites from './pages/Campsites';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import AdminDashboard from './pages/AdminDashboard';
import SOSModule from './components/ui/SOSModule';
import Footer from './layouts/Footer';
import { TourismProvider } from './context/TourismContext';

function App() {
  return (
    <TourismProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-brand-snow text-brand-gray selection:bg-brand-teal selection:text-white">
          {/* We use a wildcard conditionally, but assuming AdminDashboard handles its own layout, we might want to hide navbar there. For simplicity, we just keep navbar. */}
          <Navbar />
          <SOSModule />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/homestays" element={<Homestays />} />
              <Route path="/campsites" element={<Campsites />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TourismProvider>
  );
}

export default App;
