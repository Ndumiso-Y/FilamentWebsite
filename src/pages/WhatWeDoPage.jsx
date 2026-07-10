import { Helmet } from 'react-helmet-async';
import { Activity, Target, TrendingUp, Award, ShieldCheck } from 'lucide-react';
import { seoData } from '../data/seoData';
import { capabilities, services, disciplines } from '../data/capabilities';

import OpReadinessImg from '../assets/images/optimized/filament-operational-readiness.webp';
import EnterpriseImg from '../assets/images/optimized/filament-enterprise-transformation.webp';

export default function WhatWeDoPage() {
  const iconMap = {
    Activity: <Activity className="w-8 h-8 text-filament-orange" />,
    Target: <Target className="w-8 h-8 text-filament-orange" />,
    TrendingUp: <TrendingUp className="w-8 h-8 text-filament-orange" />,
    Award: <Award className="w-8 h-8 text-filament-orange" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-filament-orange" />
  };

  return (
    <>
      <Helmet>
        <title>{seoData.whatWeDo.title}</title>
        <meta name="description" content={seoData.whatWeDo.description} />
      </Helmet>
      
      {/* 1. HEADER SECTION */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={EnterpriseImg} 
            alt="Enterprise transformation and business capabilities" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise transformation by connecting strategic intent with execution discipline. Our capabilities, services, and execution depth form a single, coherent operating model.
          </p>
        </div>
      </section>

      {/* 2. CAPABILITY AREAS (The Strategic Layer) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">Primary Capability Areas</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border border-slate-100">
                  {iconMap[cap.icon]}
                </div>
                <h3 className="text-xl font-bold text-filament-blue mb-3">{cap.title}</h3>
                <p className="text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRACTICAL SERVICES (The Tactical Layer) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Practical Improvement Services</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-8"></div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Capabilities mean nothing without the practical ability to implement them at the coalface. We deploy targeted services that engage the workforce and generate immediate momentum.
              </p>
              
              <div className="space-y-6">
                {services.map((service, idx) => (
                  <div key={idx} className="border-l-2 border-filament-orange pl-4">
                    <h4 className="text-lg font-bold text-filament-blue">{service.title}</h4>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-filament-orange/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={OpReadinessImg} 
                alt="Operational readiness and team training" 
                className="relative rounded-2xl shadow-xl w-full object-cover border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTION DISCIPLINES (The Domain Layer) */}
      <section className="py-24 bg-filament-blue-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Execution Disciplines</h2>
          <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {disciplines.map((discipline, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-filament-orange mb-3">{discipline.title}</h3>
                <p className="text-slate-300 leading-relaxed">{discipline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
