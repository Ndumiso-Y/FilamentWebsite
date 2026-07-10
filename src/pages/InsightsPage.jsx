import { Helmet } from 'react-helmet-async';
import { Target, Search, Clock, Activity, BarChart, Users, BookOpen, GraduationCap } from 'lucide-react';
import { seoData } from '../data/seoData';

import ReviewSpaceImg from '../assets/images/optimized/operations-improvement-team-reviewing-space.webp';
import ReviewingImg from '../assets/images/optimized/operations-improvement-team-reviewing.webp';
import ActionImg from '../assets/images/optimized/operational-excellence-in-action.webp';
import GradExposureImg from '../assets/images/optimized/graduate-exposure-learning-environment.webp';
import RudyImg from '../assets/images/optimized/dr-rudy-phillis.webp';

export default function InsightsPage() {
  const stages = [
    { num: '01', title: 'Diagnose', desc: 'Understand where delays, constraints, and operational gaps appear in the workflow.' },
    { num: '02', title: 'Measure', desc: 'Use observation, time-and-motion studies, and field-level data to understand what is actually happening.' },
    { num: '03', title: 'Analyse', desc: 'Study mining cycles, movement, waiting time, and work patterns to identify improvement opportunities.' },
    { num: '04', title: 'Collaborate', desc: 'Work alongside supervisors, business-improvement teams, and operational leaders.' },
    { num: '05', title: 'Develop', desc: 'Expose graduates to real operational challenges so they build technical, analytical, and professional capability.' },
    { num: '06', title: 'Improve', desc: 'Support better operational visibility and more focused improvement conversations.' }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.insights.title}</title>
        <meta name="description" content={seoData.insights.description} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={ReviewSpaceImg} 
            alt="Operations improvement team reviewing space" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 select-none grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Insights & Evidence
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Grounded in mining improvement experience. Filament supports productivity transformation through practical operational-excellence work and structured graduate-development pathways.
          </p>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">The Challenge</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
            <p className="text-xl text-slate-800 font-bold max-w-3xl mx-auto">
              Mining operations need clarity where work really happens
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Mining operations are complex environments. Delays, bottlenecks, waiting time, unclear handovers, and disconnected workflows can quietly reduce performance. <strong>Improvement begins when teams understand the real flow of work.</strong>
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Filament focuses on practical operational insight: observing, measuring, analysing, and helping teams identify where improvement is possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <Target className="w-8 h-8 text-filament-orange mb-4" />
                <h4 className="font-bold text-filament-blue mb-2">Unclear Workflow Handovers</h4>
                <p className="text-sm text-slate-600">Handovers between shifts, teams, and departments represent high-risk windows for bottleneck accumulation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <Search className="w-8 h-8 text-filament-blue mb-4" />
                <h4 className="font-bold text-filament-blue mb-2">Invisible Bottlenecks</h4>
                <p className="text-sm text-slate-600">Delays and idle times are often undocumented because of a lack of direct shift-level continuous observations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sm:col-span-2">
                <Users className="w-8 h-8 text-filament-orange mb-4" />
                <h4 className="font-bold text-filament-blue mb-2">Disconnected Field Teams</h4>
                <p className="text-sm text-slate-600">Supervisors often lack the granular data needed to drive proactive daily productivity improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ACTIVITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-filament-blue/5 rounded-2xl transform -translate-x-4 translate-y-4"></div>
              <img 
                src={ReviewingImg} 
                alt="Operations improvement team reviewing" 
                className="relative rounded-2xl shadow-xl w-full object-cover border border-slate-200"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Core Activities</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-6"></div>
              <p className="text-xl font-bold text-slate-800 mb-6">
                Operational excellence with people at the centre
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Filament supports productivity transformation through operational-excellence work that connects process improvement with people development.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Activity className="w-6 h-6 text-filament-orange mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-filament-blue">Granular Diagnostics</h4>
                    <p className="text-slate-600">Conducting field-level checks, shift reviews, and operational profiling to surface deep inefficiencies in current workflows.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-filament-orange mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-filament-blue">Time-and-Motion Studies</h4>
                    <p className="text-slate-600">Collecting real-time cycle data on mining operations, logistics, machine utilization, and team delays.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="w-6 h-6 text-filament-orange mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-filament-blue">Mining-Cycle Analysis</h4>
                    <p className="text-slate-600">Analysing movement, waiting times, operational delays, and material flows to build visibility of constraints.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-filament-blue rounded-r-lg">
                <h4 className="font-bold text-filament-blue mb-2">Practical and Grounded Collaboration</h4>
                <p className="text-sm text-slate-600">We work alongside supervisors, business-improvement teams, and operational leaders. The aim is to help operations see constraints more clearly, improve flow, and create structured learning environments where graduates develop through real contribution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE APPROACH (STAGES) */}
      <section className="py-24 bg-filament-blue-dark text-white relative">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See the Approach</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
            <p className="text-xl font-bold max-w-3xl mx-auto text-filament-orange mb-2">
              Operational Framework
            </p>
            <p className="text-lg text-slate-300">A practical model for improvement and exposure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stages.map((stage, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-filament-orange text-sm font-bold tracking-widest mb-2">STAGE {stage.num}</div>
                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={ActionImg} 
              alt="Operational Excellence In Action" 
              className="w-full h-64 object-cover grayscale opacity-80"
            />
            <div className="p-8 text-center bg-filament-blue">
              <h4 className="text-xl font-bold mb-2">Operational Excellence In Action</h4>
              <p className="text-slate-300 italic max-w-2xl mx-auto">
                "By establishing structured checkpoints at shift intervals, teams gain operational insights that support continuous improvement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HUMAN DEVELOPMENT & EVIDENCE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-filament-blue mb-4">Human Development</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-6"></div>
              <p className="text-xl font-bold text-slate-800 mb-4">
                Graduates learn best when exposure is real
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Many graduates leave university with strong academic knowledge, but limited practical exposure to the working environment they hope to enter. Filament’s graduate-development model connects learning with real operational contribution.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Through structured exposure, graduates can participate in diagnostics, data collection, time-and-motion studies, and mining-cycle analysis. This helps them build confidence, workplace awareness, and technical understanding while contributing to operational improvement.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
                <BookOpen className="w-10 h-10 text-filament-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-filament-blue">Active Training Model</h4>
                  <p className="text-sm text-slate-600">Direct on-site observations under expert mentorship.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={GradExposureImg} 
                alt="Graduate exposure learning environment" 
                className="relative rounded-2xl shadow-xl w-full object-cover border border-slate-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-filament-orange text-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <p className="font-bold text-sm">Graduate gaining practical exposure in a mining-sector learning environment</p>
              </div>
            </div>
          </div>

          {/* PROOF OF CONCEPT */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-filament-blue p-10 text-white flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold mb-2">Proof of Concept</h3>
                <div className="w-12 h-0.5 bg-filament-orange mb-6"></div>
                <div className="text-6xl font-black text-filament-orange mb-2 tracking-tighter">6 / 6</div>
                <h4 className="text-xl font-bold mb-2">Graduates Absorbed</h4>
                <p className="text-sm text-slate-300">Participating graduates absorbed into employment after structured underground program.</p>
              </div>
              <div className="col-span-2 p-10 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-filament-blue mb-4">Two Rivers Platinum Mine & Wits School of Mining Engineering</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Filament implemented a graduate-development initiative with Two Rivers Platinum Mine, endorsed by the Wits School of Mining Engineering.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  In that specific initiative, six unemployed Wits Mining Engineering graduates received structured underground exposure through operational-excellence work. The endorsement records that all six participating graduates were absorbed into employment after the intervention conducted between March 2025 and February 2026.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-filament-orange">
                  <p className="text-sm text-slate-500 italic">
                    <strong>Disclaimer:</strong> This is a strong proof point for the model. It is presented as a specific documented outcome, not as a guarantee of future employment results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MUTUAL VALUE MODEL */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-filament-blue mb-4">Mutual Value Model</h2>
          <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
          <p className="text-xl font-bold text-slate-800 max-w-3xl mx-auto mb-4">
            A model designed for mutual value
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Mines need operational clarity, improved productivity, and stronger talent pipelines. Graduates need exposure, structure, mentorship, and practical experience. Filament’s model brings those needs together. Graduates develop through meaningful operational-excellence work, while mines gain structured observation, diagnostics, and analysis that can support improvement conversations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-filament-blue text-white flex items-center justify-center mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-filament-blue">Value for Mines</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Structured shift-level observation data.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Bottlenecks identified in operational flows.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Strong talent pipelines of pre-assessed grads.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-filament-orange text-white flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-filament-blue">Value for Graduates</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Real-world workplace underground exposure.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Technical & analytical capability building.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-filament-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Mentorship under technical leadership.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP CREDIBILITY */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-slate-700">
                <img 
                  src={RudyImg} 
                  alt="Dr Rudy Phillis" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-2">Leadership</h2>
              <div className="w-16 h-0.5 bg-filament-orange mb-6"></div>
              <p className="text-xl font-bold text-filament-orange mb-6">
                Grounded in mining improvement experience
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-1">Dr Rudy Phillis</h3>
                <p className="text-slate-300 font-medium mb-6">PhD, Theory of Constraints in SA Mining Industry</p>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  The technical leadership behind the model is supported by academic and historical mining-sector credibility.
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Dr Rudy Phillis holds a PhD with distinction related to Theory of Constraints in the South African mining industry and has a documented historical track record in mining improvement work.
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-filament-orange font-bold text-sm uppercase tracking-wider mb-2">Doctorate Focus</h4>
                  <p className="text-slate-300">
                    Applying Theory of Constraints to optimize workflow flows in South African underground mines.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-slate-400 italic">
                Historical reference material supports the depth of this technical background. These references should be understood as leadership credibility and historical evidence, not as claims of current partnerships unless confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
