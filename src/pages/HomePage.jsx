import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { seoData } from '../data/seoData';
import { siteConfig } from '../data/siteConfig';

import HeroImg from '../assets/images/optimized/filament-underground-productivity-context.webp';
import SprintImg from '../assets/images/optimized/filament-mining-productivity-sprint.webp';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoData.home.title}</title>
        <meta name="description" content={seoData.home.description} />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85svh] md:min-h-screen flex items-start md:items-center justify-start overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <picture>
            <img 
              src={HeroImg} 
              alt="Underground productivity context and mining operations" 
              className="absolute inset-0 w-full h-full object-cover object-center md:object-[right_center] md:right-0 md:top-0 md:left-auto md:bottom-auto md:w-[120%] md:min-w-[100%] md:max-w-none select-none opacity-80"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 30, 54, 0.18)' }}></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950/55 via-slate-950/15 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E36]/35 via-[#0F1E36]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute left-0 top-1/3 w-72 h-72 bg-filament-orange/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16 md:py-32">
          <div className="max-w-[650px] text-left space-y-6 bg-slate-950/45 md:bg-transparent p-5 sm:p-6 md:p-0 rounded-lg backdrop-blur-none md:backdrop-blur-none">
            
            <div className="inline-flex items-center space-x-2 bg-filament-orange/20 border border-filament-orange/30 rounded-full px-3 py-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-filament-orange animate-pulse"></span>
              <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">Mining Sector Productivity</span>
            </div>

            <div className="relative pl-4 sm:pl-6 border-l-4 border-filament-orange">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans drop-shadow-md">
                Productivity Transformation, <br/><span className="text-filament-orange">One Person at a Time.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-sm">
              {siteConfig.description}
            </p>

            <div className="space-y-3 text-slate-200 text-sm sm:text-base border-l border-white/20 pl-4 italic drop-shadow-sm">
              <p>
                Mining performance behaves like a connected system: a decision in one node changes flow, risk and attention elsewhere.
              </p>
              <p className="not-italic font-bold text-white">
                Filament brings a governed, disciplined approach to unlock the constraint and sustain the gains.
              </p>
            </div>

            <div className="pt-2">
              <div className="w-16 h-0.5 bg-filament-orange mb-4 rounded shadow-sm"></div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/our-approach"
                  className="bg-filament-orange hover:bg-filament-orange-dark text-white font-bold px-6 py-3.5 rounded shadow-lg hover:shadow-filament-orange/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
                >
                  <span>Explore the Model</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/insights"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/35 font-semibold px-6 py-3.5 rounded hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
                >
                  <span>View the Proof Point</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PRODUCTIVITY PROBLEM */}
      <section className="py-20 bg-white bg-dots relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded px-2.5 py-1">
                <span className="text-filament-orange font-bold text-xs uppercase tracking-wider">The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight leading-tight">
                The Employer Dilemma in a Highly Interdependent System
              </h2>
              <div className="h-1 w-20 bg-filament-orange"></div>
              
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Volatility, uncertainty, complexity, ambiguity, governance intensity and safety compliance compress the employer's available problem-solving bandwidth.
                </p>
                <p className="font-semibold text-filament-blue">
                  The employer must manage immediate production while solving systemic transformation problems.
                </p>
                <p>
                  Mining performance behaves like a connected system. A seemingly balanced flowline at 90% local efficiency can collapse to roughly 59% throughput because local efficiency does not equal global output. 
                </p>
              </div>
              
              <Link to="/our-approach" className="inline-flex items-center text-filament-orange font-semibold hover:text-filament-orange-dark transition-colors">
                See how we diagnose the constraint <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm glass-card">
               <h3 className="text-xl font-bold text-filament-blue mb-4">A Day in the Life of an Employer</h3>
               <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                 <div className="bg-white p-3 rounded shadow-sm border border-slate-100 flex items-center">Mine Health & Safety</div>
                 <div className="bg-white p-3 rounded shadow-sm border border-slate-100 flex items-center">Governance</div>
                 <div className="bg-white p-3 rounded shadow-sm border border-slate-100 flex items-center">Labour Relations</div>
                 <div className="bg-filament-orange/10 text-filament-orange p-3 rounded shadow-sm border border-filament-orange/20 flex items-center">Tonnes (The Goal)</div>
                 <div className="bg-white p-3 rounded shadow-sm border border-slate-100 flex items-center">Technical Services</div>
                 <div className="bg-white p-3 rounded shadow-sm border border-slate-100 flex items-center">Investor Demands</div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. APPROACH PREVIEW */}
      <section className="py-24 bg-filament-blue-dark text-white relative">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Our Approach: The 4Ps
              </h2>
              <p className="text-lg text-slate-300 max-w-xl">
                Productivity transformation that delivers early proof — and sustains the gain. We integrate Theory of Constraints (TOC) and Lean Transformation into a governed, auditable operating model.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={SprintImg} 
                alt="Productivity sprint showing flowline and buffer logic" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
            {[
              { title: 'Promise', desc: 'Unlock the constraint, develop the people, and make productivity pay for itself.' },
              { title: 'Proof', desc: 'Deliver early credibility through measurable operating improvement.' },
              { title: 'Process', desc: 'Integrate Lean and Theory of Constraints into an auditable operating model.' },
              { title: 'Price', desc: 'Connect improvement to throughput, quality, and value uplift.' },
            ].map((p, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-filament-orange mb-3">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.desc}</p>
              </div>
            ))}
          </div>
          
          <Link to="/what-we-do" className="inline-flex items-center text-white bg-filament-orange hover:bg-filament-orange-dark px-6 py-3 rounded font-semibold transition-colors">
            View our practical services
          </Link>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
            Ready to transform your operation?
          </h2>
          <p className="text-lg text-slate-600">
            Let's discuss how we can build internal capability and unlock sustained productivity growth together.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-filament-blue hover:bg-filament-blue-dark text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
