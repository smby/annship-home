import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Globe size={20} />
              </div>
              <span className="text-2xl font-bold text-white">Annship</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Global logistics partner delivering reliability, speed, and innovation. We connect your business to the world with seamless shipping solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Express Shipping', 'Freight Forwarding', 'Warehousing', 'Customs Brokerage', 'Supply Chain'].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="hover:text-primary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {[
                { name: 'Track Shipment', href: '/tracking' },
                { name: 'Get a Quote', href: '/quote' },
                { name: 'Help Center', href: '/resources' },
                { name: 'Terms of Service', href: '/term-of-use' },
                { name: 'Privacy Policy', href: '/privacy-policy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>123 Logistics Way,<br />Global City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>support@annship.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Annship Logistics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/term-of-use" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
