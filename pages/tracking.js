import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function Tracking() {
    const [trackingId, setTrackingId] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = (e) => {
        e.preventDefault();
        if (!trackingId) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setResult({
                id: trackingId,
                status: 'In Transit',
                origin: 'Shanghai, CN',
                destination: 'Los Angeles, USA',
                estimatedDelivery: 'Nov 25, 2025',
                events: [
                    { date: 'Nov 22, 2025', time: '08:30 AM', location: 'Los Angeles, USA', status: 'Arrived at distribution center', icon: Truck },
                    { date: 'Nov 20, 2025', time: '14:15 PM', location: 'Pacific Ocean', status: 'In transit to destination', icon: Clock },
                    { date: 'Nov 18, 2025', time: '09:00 AM', location: 'Shanghai, CN', status: 'Departed from origin facility', icon: Package },
                    { date: 'Nov 17, 2025', time: '16:45 PM', location: 'Shanghai, CN', status: 'Shipment received', icon: CheckCircle },
                ]
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <Layout title="Track Your Shipment - Annship" description="Real-time tracking for your global shipments.">
            <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 z-0"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Track Your Shipment</h1>
                    <p className="text-xl text-slate-300 mb-10">Enter your tracking number to get real-time updates on your cargo.</p>

                    <form onSubmit={handleTrack} className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            placeholder="Enter Tracking ID (e.g., ANN-12345678)"
                            className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-primary/50 shadow-xl pr-36"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark text-white px-8 rounded-full font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                        >
                            {loading ? 'Tracking...' : 'Track'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {result ? (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Tracking Number</p>
                                <p className="text-2xl font-bold text-secondary">{result.id}</p>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-green-100 text-green-800">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                    {result.status}
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-slate-500 mb-1">Origin</p>
                                    <p className="text-lg font-bold text-secondary flex items-center justify-center md:justify-start">
                                        <MapPin className="w-5 h-5 text-primary mr-2" />
                                        {result.origin}
                                    </p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-slate-500 mb-1">Destination</p>
                                    <p className="text-lg font-bold text-secondary flex items-center justify-center md:justify-start">
                                        <MapPin className="w-5 h-5 text-primary mr-2" />
                                        {result.destination}
                                    </p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-slate-500 mb-1">Estimated Delivery</p>
                                    <p className="text-lg font-bold text-secondary flex items-center justify-center md:justify-start">
                                        <Clock className="w-5 h-5 text-primary mr-2" />
                                        {result.estimatedDelivery}
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                                <div className="space-y-8">
                                    {result.events.map((event, index) => (
                                        <div key={index} className="relative pl-20">
                                            <div className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md ${index === 0 ? 'bg-primary text-white z-10' : 'bg-slate-100 text-slate-400'}`}>
                                                <event.icon size={24} />
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-secondary">{event.status}</p>
                                                <p className="text-slate-600">{event.location}</p>
                                                <p className="text-sm text-slate-400 mt-1">{event.date} • {event.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">No tracking info yet</h3>
                        <p className="text-slate-500">Enter your tracking ID above to see your shipment status.</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
