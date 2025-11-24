import Layout from '../components/Layout';
import Link from 'next/link';
import { ArrowRight, Truck, Globe, Clock, Shield, BarChart, Users } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Global Logistics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Shipping made <br />
              <span className="text-primary-light">simple and affordable</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Get the best rates from top carriers like UPS, FedEx, and USPS. Streamline your logistics with our powerful shipping platform designed for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://annship.com/review-info" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/25 flex items-center">
                Get Started
                <ArrowRight className="ml-2" />
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-lg font-bold rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">FEATURES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Everything you need to ship better</h3>
            <p className="text-lg text-slate-600">
              Our platform provides all the tools you need to manage your shipping operations efficiently and cost-effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Globe,
                title: 'Global Network',
                desc: 'Seamless connections to over 200 countries and territories worldwide.'
              },
              {
                icon: Clock,
                title: 'Real-Time Tracking',
                desc: 'End-to-end visibility of your shipments with our advanced tracking system.'
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                desc: 'Industry-leading security protocols to ensure your cargo arrives safely.'
              },
              {
                icon: Truck,
                title: 'Multimodal Transport',
                desc: 'Flexible options including air, ocean, road, and rail freight solutions.'
              },
              {
                icon: BarChart,
                title: 'Data Analytics',
                desc: 'Actionable insights to optimize your shipping costs and efficiency.'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: '24/7 customer service from logistics experts who understand your business.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to streamline your shipping?</h2>
              <p className="text-lg text-blue-100">
                Join thousands of businesses that trust Annship for their global logistics needs. Get started today.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us" className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
