import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seoData';
import { leadership, partnerBench } from '../data/team';

// We import the WebP images manually so Vite bundles them correctly
import moniqueImg from '../assets/images/optimized/monique-phillis-executive.webp';
import vincentImg from '../assets/images/optimized/vincent-seboni.webp';
import mxolisiImg from '../assets/images/optimized/mxolisi-kobus.webp';
import sadhaImg from '../assets/images/optimized/sadha-govender.webp';
import marcImg from '../assets/images/optimized/marc-corcoran.webp';
import lefuImg from '../assets/images/optimized/lefu-mohloki.webp';
import rudyImg from '../assets/images/optimized/dr-rudy-phillis.webp';

const imageMap = {
  'monique.png': moniqueImg,
  'vincent.png': vincentImg,
  'mxolisi-kobus.jpg': mxolisiImg,
  'sadha-govender.jpg': sadhaImg,
  'marc-corcoran.jpg': marcImg,
  'lefu.png': lefuImg,
  'dr-rudy.jpg': rudyImg
};

export default function PeoplePage() {
  return (
    <>
      <Helmet>
        <title>{seoData.people.title}</title>
        <meta name="description" content={seoData.people.description} />
      </Helmet>

      {/* 1. HEADER SECTION */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            People & Leadership
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Led by Executive Directors and supported by Enterprise Transformation Partners spanning mining, strategy, engineering, and TOC governance.
          </p>
        </div>
      </section>

      {/* 2. EXECUTIVE DIRECTORS */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">Executive Directors</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {leadership.map((person, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 shadow-md bg-slate-50">
                  <img 
                    src={imageMap[person.image]} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-filament-blue mb-2">{person.name}</h3>
                <p className="text-filament-orange font-medium mb-4">{person.role}</p>
                <p className="text-slate-600 mb-6 flex-grow">{person.summary}</p>
                
                <div className="bg-slate-50 rounded-xl p-6 text-left border border-slate-100 shadow-sm">
                  <ul className="space-y-3">
                    {person.details.slice(0, 4).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-filament-orange mt-1.5 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE TRANSFORMATION PARTNERS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">Enterprise Transformation Partners</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A partnership system combining shared mining leadership, Lean enterprise architecture, and TOC application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partnerBench.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="p-8 text-center border-b border-slate-100 relative">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100">
                    <img 
                      src={imageMap[person.image]} 
                      alt={person.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-filament-blue mb-1">{person.name}</h3>
                  <p className="text-sm font-bold text-filament-orange leading-tight min-h-[40px] flex items-center justify-center">
                    {person.role}
                  </p>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                    {person.summary}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {person.details.slice(0, 3).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs text-slate-500">
                          <span className="w-1 h-1 rounded-full bg-filament-blue mt-1.5 mr-2 flex-shrink-0"></span>
                          <span className="leading-tight">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
