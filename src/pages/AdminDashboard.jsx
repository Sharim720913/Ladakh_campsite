import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Tent, Calendar, Users, Settings, LogOut, Check, TrendingUp, XCircle, Sun, Navigation, Info, Search, Filter } from 'lucide-react';
import { useTourism } from '../context/TourismContext';

const AdminDashboard = () => {
    const { bookings, homestays } = useTourism();
    const [activeTab, setActiveTab] = useState('Overview');

    const navItems = [
        { name: 'Overview', icon: LayoutDashboard },
        { name: 'Facility Hub', icon: Tent },
        { name: 'Bookings', icon: Calendar },
        { name: 'Permit Desk', icon: Navigation },
        { name: 'Agency Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-bg-offset)] flex pt-20">

            {/* Sidebar - Pro White */}
            <aside className="w-72 bg-white border-r border-[var(--color-border)] hidden md:flex flex-col relative z-50">
                <div className="p-8 flex items-center space-x-4 border-b border-[var(--color-border)] bg-[var(--color-bg-offset)]/50">
                    <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white shadow-lg"><Sun size={20} /></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black text-[var(--color-text-primary)] tracking-widest leading-none mb-1">Territory Portal</span>
                        <span className="text-[8px] uppercase font-bold text-[var(--color-text-secondary)] tracking-widest leading-none">Official Agency Console</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    {navItems.map(item => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-lg transition-all duration-300 ${activeTab === item.name
                                ? 'bg-[var(--color-primary)] text-white shadow-lg border border-[var(--color-primary)]'
                                : 'text-[var(--color-text-secondary)] hover:bg-gray-50 hover:text-[var(--color-primary)]'
                                }`}
                        >
                            <item.icon size={18} />
                            <span className="text-xs uppercase tracking-widest font-black">{item.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-6 border-t border-[var(--color-border)]">
                    <button className="w-full flex items-center justify-center space-x-3 text-rose-600 px-6 py-4 hover:bg-rose-50 rounded-lg transition-all border border-transparent hover:border-rose-100 group">
                        <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-widest font-black">Agent Sign-Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 lg:p-16">

                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">{activeTab}</h1>
                        <p className="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.2em]">Ladakh Territory Discovery Network • Live Data Feed</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="hidden lg:flex items-center space-x-4 px-6 py-3 bg-white border border-[var(--color-border)] rounded-full shadow-sm text-[var(--color-text-secondary)]">
                            <Info size={16} className="text-[var(--color-primary)]" />
                            <span className="text-xs font-bold">Standard Agency Protocols Active</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center font-bold text-lg border-2 border-white shadow-xl">A</div>
                    </div>
                </div>

                {activeTab === 'Overview' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-12">

                        {/* Summary Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { label: 'Settled Revenue', value: `₹${bookings.reduce((acc, curr) => acc + (curr.total || 0), 0) + 145000}`, icon: TrendingUp, delta: '+12.5%' },
                                { label: 'Active Permits', value: bookings.length + 24, icon: Calendar, delta: '+4 Since Dawn' },
                                { label: 'Facility Stanza', value: homestays.length + 8, icon: Tent, delta: '95% Occupancy' },
                            ].map((stat, i) => (
                                <div key={i} className="rec-card p-10 flex flex-col justify-between group">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="p-4 bg-gray-50 border border-[var(--color-border)] rounded-xl text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                                            <stat.icon size={24} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{stat.delta}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">{stat.label}</p>
                                        <p className="text-3xl font-extrabold text-[var(--color-text-primary)]">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity / Table Section */}
                        <div className="rec-card">
                            <div className="p-8 border-b border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6">
                                <h3 className="text-lg font-bold flex items-center">
                                    <Filter size={18} className="text-[var(--color-primary)] mr-3" />
                                    Pending Facility Reviews
                                </h3>
                                <div className="flex bg-[var(--color-bg-offset)] p-1 rounded-lg border border-[var(--color-border)]">
                                    <button className="px-4 py-2 bg-white text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest rounded shadow-sm border border-[var(--color-border)]">Active Items</button>
                                    <button className="px-4 py-2 text-[var(--color-text-secondary)] text-[10px] font-black uppercase tracking-widest">Archived</button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-[var(--color-bg-offset)] text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)]">
                                        <tr>
                                            <th className="px-8 py-5">Host Facility</th>
                                            <th className="px-8 py-5">Sector</th>
                                            <th className="px-8 py-5">Contact Node</th>
                                            <th className="px-8 py-5 text-center">Status Control</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[var(--color-border)]">
                                        {[
                                            { name: 'Turtuk River View', sector: 'Turtuk Village', contact: '+91 9876543210' },
                                            { name: 'Hunder Sand Homestay', sector: 'Nubra Valley', contact: '+91 8877665544' },
                                            { name: 'Changpastures Camp', sector: 'Pangong Sector', contact: '+91 7766554433' }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="px-8 py-6">
                                                    <p className="font-bold text-[var(--color-text-primary)]">{row.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">ID: FAC-2026-0{i + 1}</p>
                                                </td>
                                                <td className="px-8 py-6 text-sm font-bold text-[var(--color-text-secondary)]">{row.sector}</td>
                                                <td className="px-8 py-6 text-sm font-medium">{row.contact}</td>
                                                <td className="px-8 py-6 flex justify-center space-x-3">
                                                    <button className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center border border-emerald-100 shadow-sm"><Check size={18} /></button>
                                                    <button className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center border border-rose-100 shadow-sm"><XCircle size={18} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-6 bg-[var(--color-bg-offset)] border-t border-[var(--color-border)] text-center">
                                <button className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] hover:underline">
                                    Access Full Territory Registry
                                </button>
                            </div>
                        </div>

                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
