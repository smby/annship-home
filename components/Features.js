import { Truck, DollarSign, Clock, ShieldCheck, BarChart } from 'lucide-react';

const Features = () => {
    const features = [
        {
            name: 'Real-time Tracking',
            description: 'Track your shipments in real-time from pickup to delivery. Keep your customers informed every step of the way.',
            icon: Truck,
        },
        {
            name: 'Fast Delivery',
            description: 'Choose from a variety of delivery speeds to meet your needs. From overnight to economy, we have you covered.',
            icon: Clock,
        },
        {
            name: 'Best Rates',
            description: 'Access discounted rates from major carriers. Save money on every shipment without sacrificing quality.',
            icon: DollarSign,
        },
        {
            name: 'Insurance Coverage',
            description: 'Protect your valuable shipments with our comprehensive insurance options. Peace of mind included.',
            icon: ShieldCheck,
        },
        {
            name: 'Analytics & Reporting',
            description: 'Gain insights into your shipping costs and performance with our detailed analytics dashboard.',
            icon: BarChart,
        },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to ship better
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Our platform provides all the tools you need to manage your shipping operations efficiently and cost-effectively.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;
