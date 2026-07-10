import { Helmet } from 'react-helmet-async';
import { RefreshCw, LayoutTemplate, Layers, AlertCircle, TrendingUp, Anchor, CheckCircle } from 'lucide-react';
import { seoData } from '../data/seoData';
import { methodologies } from '../data/methodologies';

export default function OurApproachPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.ourApproach.title}</title>
        <meta name="description" content={seoData.ourApproach.description} />
      </Helmet>

      {/* 1. HEADER SECTION */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-filament-blue-dark/50 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Our Approach: The 4Ps
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Productivity transformation that delivers early proof — and sustains the gain. We integrate Theory of Constraints (TOC) and Lean Transformation into a governed, auditable operating model.
          </p>
        </div>
      </section>

      {/* 2. THE 4Ps FOUNDATION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">Promise. Proof. Process. Price.</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <span className="font-bold text-filament-orange text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-filament-blue mb-2">Promise</h3>
              <p className="text-sm text-slate-600">Unlock the constraint, develop the people, stabilise the system, and make productivity pay for itself.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <span className="font-bold text-filament-orange text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-filament-blue mb-2">Proof</h3>
              <p className="text-sm text-slate-600">Deliver early credibility through measurable operating improvement and field-tested results.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <span className="font-bold text-filament-orange text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-filament-blue mb-2">Process</h3>
              <p className="text-sm text-slate-600">Integrate Lean Transformation and Theory of Constraints into a governed, auditable operating model.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <span className="font-bold text-filament-orange text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-filament-blue mb-2">Price</h3>
              <p className="text-sm text-slate-600">Connect productivity improvement to throughput, safer work, repeatable results, and value uplift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THEORY OF CONSTRAINTS & THE 5 FOCUSING STEPS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Theory of Constraints (TOC)</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TOC focuses attention on the system constraint, because local improvements do not automatically improve the whole mine.
              </p>
              
              <div className="space-y-4">
                {methodologies.find(m => m.id === 'toc')?.process.map((step, idx) => (
                  <div key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-filament-orange text-white flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-filament-blue">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800 text-white relative">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-filament-orange mb-2">Buffer Logic & Flowline</h4>
                <p className="text-sm text-slate-400">Inventory accumulates before the constraint. Local efficiency is not system output.</p>
              </div>
              
              {/* Native React SVG Diagram for Flowline */}
              <div className="w-full bg-slate-800 rounded-lg p-6 mb-8 flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2 z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center border-2 border-slate-500 mb-2">A</div>
                  <span className="text-xs text-slate-400">50%</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-16 bg-filament-orange rounded mx-2 mb-2"></div>
                  <span className="text-xs text-filament-orange font-bold uppercase">Buffer</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center border-4 border-red-700 mb-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]">B</div>
                  <span className="text-xs font-bold text-white bg-red-600 px-2 py-0.5 rounded">CONSTRAINT</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center border-2 border-slate-500 mb-2">C</div>
                  <span className="text-xs text-slate-400">33%</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center border-2 border-slate-500 mb-2">D</div>
                  <span className="text-xs text-slate-400">25%</span>
                </div>
              </div>
              
              <div className="bg-filament-blue-dark/50 p-4 rounded-lg border border-filament-blue-dark">
                <p className="text-sm text-slate-300">
                  <strong className="text-white block mb-1">Unbalanced Flowline:</strong>
                  Capacity varies across the process, but the constraint determines system throughput. Constraint focus improves output by protecting the highest-leverage point in the line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEAN TRANSFORMATION & SUSTAINMENT */}
      <section className="py-24 bg-filament-blue-dark text-white text-center border-t border-white/10 relative">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Lean Transformation & Sustainment</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              TOC can prove results in 3-6 months. Lean transformation provides the 5-year architecture and infrastructure needed to hold those gains permanently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <Layers className="w-10 h-10 text-filament-orange mb-6" />
              <h3 className="text-xl font-bold mb-3">Management Systems</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Deploying daily management, standard work, and tiered accountability to ensure the new way of working becomes institutionalised.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <RefreshCw className="w-24 h-24" />
              </div>
              <Anchor className="w-10 h-10 text-filament-orange mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">Capability Transfer</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                We embed capability back into your workforce. We don't just leave a report; we leave competent leaders who can sustain the improvement.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <CheckCircle className="w-10 h-10 text-filament-orange mb-6" />
              <h3 className="text-xl font-bold mb-3">Graduate Pathway</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We align unemployed graduates to the sustainment model, giving them a foot in the door while providing you with an ongoing pipeline of continuous improvement talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTIVITY SPRINTS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Diagnostic assessment",
                  "Constraint identification",
                  "Sponsor alignment",
                  "Implementation planning",
                  "Execution coaching",
                  "Results verification"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-filament-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-filament-blue" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Productivity Sprints</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Short, intense bursts of focused execution. Our Productivity Sprints are designed to rapidly prove the hypothesis, align the team, and generate the momentum required for wider enterprise transformation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <LayoutTemplate className="w-6 h-6 text-filament-orange mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Rapid Proof:</strong> Demonstrate measurable performance uplift in a contained environment within weeks, not years.</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-filament-orange mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Buy-in Generation:</strong> Nothing convinces a sceptic like success. Sprints create the internal champions needed for scale.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
