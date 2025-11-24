import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Package, Truck, Globe, ArrowRight, Check } from 'lucide-react';

export default function Quote() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: '',
        origin: '',
        destination: '',
        weight: '',
        dimensions: '',
        name: '',
        email: '',
        company: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <Layout title="Get a Quote - Annship" description="Request a competitive shipping quote for your business.">
            <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Shipping Quote</h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">Tell us about your shipment and we'll provide you with the best rates and transit times.</p>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Progress Bar */}
                    <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                                    {step > s ? <Check size={16} /> : s}
                                </div>
                                <span className={`ml-2 text-sm font-medium hidden sm:block ${step >= s ? 'text-primary' : 'text-slate-400'}`}>
                                    {s === 1 ? 'Service' : s === 2 ? 'Details' : 'Contact'}
                                </span>
                                {s < 3 && <div className={`w-12 h-0.5 mx-4 ${step > s ? 'bg-primary' : 'bg-slate-200'}`}></div>}
                            </div>
                        ))}
                    </div>

                    <div className="p-8 md:p-12">
                        {step === 4 ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Quote Request Received!</h2>
                                <p className="text-slate-600 mb-8">Thank you for your interest. One of our logistics experts will review your details and contact you within 24 hours with a personalized quote.</p>
                                <button onClick={() => window.location.href = '/'} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                    Back to Home
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-secondary mb-6">Select Service Type</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { id: 'express', title: 'Express', icon: Truck, desc: 'Fastest delivery for urgent shipments.' },
                                                { id: 'freight', title: 'Freight', icon: Package, desc: 'Cost-effective for large cargo.' },
                                                { id: 'international', title: 'International', icon: Globe, desc: 'Global shipping solutions.' }
                                            ].map((type) => (
                                                <div
                                                    key={type.id}
                                                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary hover:shadow-md ${formData.serviceType === type.id ? 'border-primary bg-primary/5' : 'border-slate-100'}`}
                                                    onClick={() => setFormData({ ...formData, serviceType: type.id })}
                                                >
                                                    <type.icon className={`w-10 h-10 mb-4 ${formData.serviceType === type.id ? 'text-primary' : 'text-slate-400'}`} />
                                                    <h3 className="font-bold text-lg text-secondary mb-2">{type.title}</h3>
                                                    <p className="text-sm text-slate-500">{type.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-secondary mb-6">Shipment Details</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Origin City/Zip</label>
                                                <input required type="text" name="origin" value={formData.origin} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="e.g. New York, 10001" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Destination City/Zip</label>
                                                <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="e.g. London, UK" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Total Weight (kg)</label>
                                                <input required type="number" name="weight" value={formData.weight} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="0.00" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Dimensions (L x W x H cm)</label>
                                                <input required type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="e.g. 50 x 40 x 30" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@company.com" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
                                                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Company Ltd." />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
                                    {step > 1 ? (
                                        <button type="button" onClick={prevStep} className="px-6 py-3 text-slate-600 font-medium hover:text-secondary transition-colors">
                                            Back
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}
                                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center shadow-lg shadow-primary/25">
                                        {step === 3 ? 'Request Quote' : 'Next Step'}
                                        {step < 3 && <ArrowRight size={18} className="ml-2" />}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
