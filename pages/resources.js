import Layout from "../components/Layout";
import { HelpCircle, FileText, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Resources = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "How do I track my shipment?", a: "You can track your shipment by entering your tracking number on our Tracking page. Real-time updates are available 24/7." },
    { q: "What are your shipping rates?", a: "Shipping rates vary based on weight, dimensions, origin, and destination. Use our Quote tool to get an instant estimate." },
    { q: "Do you offer international shipping?", a: "Yes, we ship to over 200 countries and territories worldwide with customs clearance support." },
    { q: "How do I file a claim?", a: "If your package is lost or damaged, you can file a claim through our Damage Claim or Lost Claim pages within 30 days of the incident." },
    { q: "Can I integrate Annship with my online store?", a: "Absolutely! We offer API integrations and plugins for major e-commerce platforms like Shopify, WooCommerce, and Magento." }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout title="Resources & Support - Annship" description="Find answers, guides, and support for your shipping needs.">
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Resources & Support</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Everything you need to ship with confidence. Guides, FAQs, and expert support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Documentation</h3>
            <p className="text-slate-600 mb-4">Detailed guides on packaging, customs, and API integration.</p>
            <a href="#" className="text-primary font-bold hover:underline">View Guides &rarr;</a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <HelpCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Help Center</h3>
            <p className="text-slate-600 mb-4">Browse our knowledge base for answers to common questions.</p>
            <a href="#" className="text-primary font-bold hover:underline">Visit Help Center &rarr;</a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Community</h3>
            <p className="text-slate-600 mb-4">Connect with other shippers and developers in our community forum.</p>
            <a href="#" className="text-primary font-bold hover:underline">Join Community &rarr;</a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-secondary">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white text-slate-600 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
