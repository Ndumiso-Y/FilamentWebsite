import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { navigation } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-filament-blue-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-filament-orange transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Legal & Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-filament-orange transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-filament-orange transition-colors text-sm flex items-center">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-filament-orange transition-colors text-sm flex items-center">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
