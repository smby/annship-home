import Layout from "../components/Layout";
import { Search, Upload, Send } from 'lucide-react';

const LostClaim = () => {
  return (
    <Layout title="File a Lost Package Claim - Annship" description="Submit a claim for lost shipments.">
      <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">File a Lost Package Claim</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          We take lost shipments seriously. Please provide the details below to initiate an investigation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
          <div className="flex items-center mb-8 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
            <Search className="w-6 h-6 mr-3 flex-shrink-0" />
            <p className="text-sm">We recommend checking the tracking status one last time before filing. Investigations typically take 5-7 business days.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tracking Number</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="ANN-12345678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Expected Delivery Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Contents Description</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Please describe the contents and value of the package..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Proof of Value (Invoice/Receipt)</label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer bg-slate-50">
                <Upload className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">PDF, JPG or PNG (max 5MB)</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-primary/25">
              Submit Claim
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LostClaim;
