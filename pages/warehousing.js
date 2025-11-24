import Layout from "../components/Layout";
import Link from 'next/link';
import { Warehouse, Package, Truck, Shield, ArrowRight } from 'lucide-react';

const Warehousing = () => {
    return (
        <Layout title="Warehousing Solutions - Annship" description="Secure, scalable warehousing and distribution services.">
            {/* Hero Section */}
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                                Smart Warehousing & <br /><span className="text-primary-light">Distribution</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Optimize your inventory with our global network of secure, tech-enabled fulfillment centers. We handle the logistics so you can focus on growth.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/25">
                                Get a Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Modern Warehouse"
                                className="relative rounded-3xl shadow-2xl border border-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary">Why Choose Our Warehousing?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Warehouse,
                                title: "Strategic Locations",
                                desc: "Facilities positioned near major ports and transport hubs to reduce transit times."
                            },
                            {
                                icon: Shield,
                                title: "Secure Storage",
                                desc: "24/7 surveillance, climate control, and advanced security systems for your valuable cargo."
                            },
                            {
                                icon: Package,
                                title: "Pick & Pack",
                                desc: "Efficient order fulfillment services with high accuracy and custom packaging options."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-surface p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Warehousing;
