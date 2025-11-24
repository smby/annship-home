import Layout from "../components/Layout";
import { Globe, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <Layout title="About Us - Annship" description="Learn about Annship's mission to revolutionize global logistics.">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Moving the World <span className="text-primary-light">Forward</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Annship is a technology-driven logistics company dedicated to simplifying global trade. We believe that shipping should be fast, reliable, and transparent for everyone.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our mission is to democratize access to global supply chains. By leveraging advanced technology and a vast network of partners, we empower businesses of all sizes to reach new markets and grow without limits.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are committed to sustainability, innovation, and customer success. Every package we deliver is a promise kept.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-slate-600 font-medium">Countries Served</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
                <p className="text-slate-600 font-medium">Shipments Delivered</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">50k+</h3>
                <p className="text-slate-600 font-medium">Happy Customers</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-slate-600 font-medium">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", icon: TrendingUp, desc: "We constantly push boundaries to improve our services." },
              { title: "Reliability", icon: Award, desc: "We deliver on our promises, no matter what." },
              { title: "Global Mindset", icon: Globe, desc: "We think globally and act locally." },
              { title: "Customer First", icon: Users, desc: "Your success is our success." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
