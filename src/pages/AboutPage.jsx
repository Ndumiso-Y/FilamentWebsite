import { Helmet } from 'react-helmet-async';
import { Building2, Users, Shield, Target } from 'lucide-react';
import { seoData } from '../data/seoData';

import AboutHeroImg from '../assets/images/optimized/filament-underground-productivity-context.webp';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.about.title}</title>
        <meta name="description" content={seoData.about.description} />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={AboutHeroImg} 
            alt="Corporate identity and mining productivity" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 select-none grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Corporate Profile
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Champions in successful productivity transformation. We combine expertise in engineering, innovation and applied research, supported by experienced mining engineering and business personnel.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE SNAPSHOT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Who We Are</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Filament (Pty) Ltd was registered to provide Consulting Improvement Services. 
                We use Theory of Constraints (TOC) and Lean Transformation as our primary methods of improvement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Operating across South Africa, Filament provides a triple thread of services spanning Mining & Engineering, Construction and Contract Management, and Consulting disciplines.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-filament-orange/10 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-filament-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-filament-blue text-sm">BBBEE</h4>
                    <p className="text-slate-500 text-sm">Level One</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-filament-blue/10 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-filament-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-filament-blue text-sm">Ownership</h4>
                    <p className="text-slate-500 text-sm">100% Black Ownership</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-filament-blue/10 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-filament-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-filament-blue text-sm">Empowerment</h4>
                    <p className="text-slate-500 text-sm">100% Woman Empowerment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-filament-orange/10 flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-filament-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-filament-blue text-sm">Operations</h4>
                    <p className="text-slate-500 text-sm">Black Operated</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-filament-blue mb-6">Company Information</h3>
              
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-medium">Company Name</span>
                  <span className="text-slate-800 font-bold">Filament (Pty) Ltd</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-medium">Business Type</span>
                  <span className="text-slate-800 font-bold">Private Company</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-medium">Registration</span>
                  <span className="text-slate-800 font-bold">2021/526902/07</span>
                </li>
                <li className="flex justify-between items-center pb-4">
                  <span className="text-slate-500 font-medium">Head Office</span>
                  <span className="text-slate-800 font-bold text-right">8 Bokmakierie Road<br />Cashan Ext 5, Rustenburg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS PHILOSOPHY */}
      <section className="py-24 bg-filament-blue-dark text-white text-center border-t border-white/10 relative">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Business Philosophy</h2>
          <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-filament-orange mb-3">Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be champions in successful productivity transformation.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-filament-orange mb-3">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To systematically train, diagnose, sprint, sustain and transform operating environments.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-filament-orange mb-3">Values</h3>
              <p className="text-slate-300 leading-relaxed">
                Intelligence, trustworthiness, humaneness, courage, and sternness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
