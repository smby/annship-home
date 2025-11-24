import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <Layout title="Contact Us - Annship" description="Get in touch with our team for support, sales, or general inquiries.">
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our team for expert assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">Mon-Fri from 8am to 6pm.</p>
              <a href="tel:+15551234567" className="text-primary font-bold hover:underline">+1 (555) 123-4567</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">We'll get back to you within 24 hours.</p>
              <a href="mailto:support@annship.com" className="text-primary font-bold hover:underline">support@annship.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Visit Us</h3>
              <p className="text-slate-600">
                123 Logistics Way,<br />
                Global City, ST 12345
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-secondary mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Sales & Quotes</option>
                    <option>Support & Tracking</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-primary/25">
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
