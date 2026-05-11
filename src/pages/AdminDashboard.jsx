import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Tent, Calendar, Users, Settings, LogOut, CheckCircle2, TrendingUp, XCircle } from 'lucide-react';
import { useTourism } from '../context/TourismContext';

const AdminDashboard = () => {
    const { bookings, homestays } = useTourism();
    const [activeTab, setActiveTab] = useState('Overview');

    const navItems = [
        { name: 'Overview', icon: LayoutDashboard },
        { name: 'Homestays', icon: Tent },
        { name: 'Bookings', icon: Calendar },
        { name: 'Users', icon: Users },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex pt-20">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Admin Portal</span>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map(item => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === item.name ? 'bg-brand-teal/10 text-brand-teal font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <button className="w-full flex items-center space-x-3 text-red-600 px-4 py-3 hover:bg-red-50 rounded-xl transition-colors">
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-10">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">{activeTab}</h1>
                    <div className="flex space-x-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">A</div>
                    </div>
                </div>

                {activeTab === 'Overview' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-4 bg-green-50 text-green-500 rounded-2xl"><TrendingUp /></div>
                                <div>
                                    <p className="text-gray-500 text-sm">Total Revenue</p>
                                    <p className="text-2xl font-bold text-gray-900">₹{bookings.reduce((acc, curr) => acc + (curr.total || 0), 0) + 145000}</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-4 bg-brand-glacier/30 text-brand-teal rounded-2xl"><Calendar /></div>
                                <div>
                                    <p className="text-gray-500 text-sm">Active Bookings</p>
                                    <p className="text-2xl font-bold text-gray-900">{bookings.length + 24}</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl"><Tent /></div>
                                <div>
                                    <p className="text-gray-500 text-sm">Verifed Homestays</p>
                                    <p className="text-2xl font-bold text-gray-900">{homestays.length + 8}</p>
                                </div>
                            </div>
                        </div>

                        {/* Pending Approvals */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100"><h3 className="font-bold text-lg text-gray-900">Pending Host Approvals</h3></div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                                        <tr>
                                            <th className="px-6 py-4">Homestay Name</th>
                                            <th className="px-6 py-4">Location</th>
                                            <th className="px-6 py-4">Contact</th>
                                            <th className="px-6 py-4 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr className="hover:bg-gray-50 text-gray-700">
                                            <td className="px-6 py-4 font-semibold">Turtuk River View</td>
                                            <td className="px-6 py-4">Turtuk Village</td>
                                            <td className="px-6 py-4">+91 9876543210</td>
                                            <td className="px-6 py-4 flex justify-center space-x-3">
                                                <button className="text-green-500 hover:text-green-700"><CheckCircle2 size={20} /></button>
                                                <button className="text-red-500 hover:text-red-700"><XCircle size={20} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
