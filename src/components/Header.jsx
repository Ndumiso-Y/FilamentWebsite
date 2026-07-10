import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Filament-logo.png';
import { navigation } from '../data/navigation';
import { siteConfig } from '../data/siteConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen || location.pathname !== '/'
          ? 'bg-filament-blue/95 backdrop-blur-md shadow-lg border-b border-white/10 py-1.5' 
          : 'bg-transparent py-3 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-filament-orange rounded">
              <img 
                src={Logo} 
                alt="Filament Logo" 
                className="h-12 sm:h-16 w-auto object-contain"
              />
              <div className="hidden md:flex flex-col border-l border-white/20 pl-4">
                <span className="text-white font-bold tracking-wider text-sm font-sans uppercase">{siteConfig.shortName}</span>
                <span className="text-filament-orange text-xs font-semibold tracking-wide italic">{siteConfig.tagline}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navigation.map((item) => {
              if (item.name === 'Contact') {
                return (
                  <NavLink 
                    key={item.name}
                    to={item.href}
                    className="bg-filament-orange hover:bg-filament-orange-dark text-white font-semibold text-sm px-4 py-2 rounded shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.name}
                  </NavLink>
                );
              }
              return (
                <NavLink 
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => 
                    `font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1 ${
                      isActive ? 'text-filament-orange' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-filament-orange"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Main Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-filament-blue-dark border-t border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          <div className="block px-3 py-1 mb-2 border-b border-white/10 md:hidden">
            <span className="text-filament-orange text-xs font-semibold block tracking-wide italic">{siteConfig.tagline}</span>
          </div>
          {navigation.map((item) => {
            if (item.name === 'Contact') {
              return (
                <NavLink 
                  key={item.name}
                  to={item.href}
                  className="block w-full text-center bg-filament-orange hover:bg-filament-orange-dark text-white font-semibold px-4 py-2.5 rounded shadow-md mt-4"
                >
                  {item.name}
                </NavLink>
              );
            }
            return (
              <NavLink 
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `block w-full text-left hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-filament-orange bg-white/5' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
