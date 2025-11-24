import Layout from "../components/Layout";
import Link from 'next/link';
import { Code2, Terminal, Zap, Lock, ArrowRight } from 'lucide-react';

const ApiIntegration = () => {
    return (
        <Layout title="API Integration - Annship" description="Powerful shipping APIs for developers.">
            {/* Hero Section */}
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-primary-light text-sm font-medium mb-6">
                            <Terminal size={16} className="mr-2" />
                            Developer First
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Powerful Shipping <span className="text-primary-light">APIs</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Integrate shipping capabilities directly into your application. Get rates, create labels, and track shipments programmatically.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact-us" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/25">
                                Get API Keys
                            </Link>
                            <Link href="#" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-700">
                                View Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Instant Rates",
                                desc: "Get real-time shipping quotes from multiple carriers in milliseconds."
                            },
                            {
                                icon: Lock,
                                title: "Secure & Reliable",
                                desc: "99.99% uptime SLA with enterprise-grade security and encryption."
                            },
                            {
                                icon: Code2,
                                title: "Modern SDKs",
                                desc: "Ready-to-use libraries for Node.js, Python, PHP, and Ruby."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Code Snippet */}
                    <div className="mt-20 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                        <div className="flex items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 text-sm text-slate-400 font-mono">create_shipment.js</div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono text-slate-300">
                                {`const annship = require('annship-sdk')('YOUR_API_KEY');

const shipment = await annship.shipments.create({
  from: {
    name: 'Warehouse A',
    street1: '123 Logistics Way',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'US'
  },
  to: {
    name: 'John Doe',
    street1: '456 Residential St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US'
  },
  parcel: {
    length: 10,
    width: 8,
    height: 4,
    weight: 2
  }
});

console.log(shipment.label_url);`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ApiIntegration;
