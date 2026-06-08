import React, { useState, useEffect } from 'react';
import { 
  Search, 
  BarChart3, 
  Workflow, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Building2, 
  BookOpen, 
  Mail, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Compass,
  FileText
} from 'lucide-react';
import Logo from './assets/Filament-logo.png';
import HeroImg from './assets/images/operations-improvement-team-reviewing.png';
import ApproachImg from './assets/images/operational-excellence-in-action.png';
import GraduateImg from './assets/images/graduate-exposure-learning-environment.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-filament-charcoal flex flex-col font-sans antialiased selection:bg-filament-orange selection:text-white">
      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-filament-blue/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
            : 'bg-transparent py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Tagline */}
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-filament-orange" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img 
                  src={Logo} 
                  alt="Filament Logo" 
                  className="h-10 sm:h-12 w-auto object-contain bg-white p-1 rounded-sm shadow-sm"
                />
                <div className="hidden md:flex flex-col border-l border-white/20 pl-4">
                  <span className="text-white font-bold tracking-wider text-sm font-sans uppercase">Filament</span>
                  <span className="text-filament-orange text-xs font-semibold tracking-wide italic">Productivity Transformation One Person at a time</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              <button onClick={() => scrollToSection('challenge')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">Challenge</button>
              <button onClick={() => scrollToSection('what-we-do')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">What We Do</button>
              <button onClick={() => scrollToSection('approach')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">Approach</button>
              <button onClick={() => scrollToSection('graduate-dev')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">Graduates</button>
              <button onClick={() => scrollToSection('evidence')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">Evidence</button>
              <button onClick={() => scrollToSection('technical-credibility')} className="text-gray-300 hover:text-white font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-filament-orange rounded px-2 py-1">Credibility</button>
              <button onClick={() => scrollToSection('contact')} className="bg-filament-orange hover:bg-filament-orange-dark text-white font-semibold text-sm px-4 py-2 rounded shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white">Contact Us</button>
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
              <span className="text-filament-orange text-xs font-semibold block tracking-wide italic">Productivity Transformation One Person at a time</span>
            </div>
            <button onClick={() => scrollToSection('challenge')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">The Challenge</button>
            <button onClick={() => scrollToSection('what-we-do')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">What Filament Does</button>
            <button onClick={() => scrollToSection('approach')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">The Model & Approach</button>
            <button onClick={() => scrollToSection('graduate-dev')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">Graduate Development</button>
            <button onClick={() => scrollToSection('evidence')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">Evidence of Impact</button>
            <button onClick={() => scrollToSection('technical-credibility')} className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium">Technical Credibility</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-center bg-filament-orange hover:bg-filament-orange-dark text-white font-semibold px-4 py-2.5 rounded shadow-md mt-4">Contact Us</button>
          </div>
        )}
      </header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-slate-950">
        {/* Full-bleed background image and overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroImg} 
            alt="Operations improvement team reviewing mining schedules and data charts" 
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Softer charcoal/deep blue overlay across the full image to ensure overall visibility */}
          <div className="absolute inset-0 bg-slate-950/40"></div>
          {/* Lighter text-side gradient for subtle readability assistance */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/20 to-transparent"></div>
          {/* Bottom subtle transition into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Subtle orange accent glow/blur behind the text for branding connection */}
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-filament-orange/15 rounded-full filter blur-3xl pointer-events-none z-0"></div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 md:py-32">
          {/* Translucent glass panel for text content readability */}
          <div className="max-w-3xl lg:max-w-2xl text-left space-y-6 p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 border-l-4 border-l-filament-orange bg-slate-950/70 backdrop-blur-md shadow-2xl relative overflow-hidden">
            
            {/* Orange Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-filament-orange/20 border border-filament-orange/30 rounded-full px-3 py-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-filament-orange animate-pulse"></span>
              <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">Mining Sector Productivity</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
              Productivity Transformation Through <span className="text-filament-orange">People, Process and Purpose</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Filament works at the intersection of operational excellence and human development — helping mining environments improve how work flows while creating practical exposure for emerging talent.
            </p>

            {/* Supporting Copy */}
            <div className="space-y-3 text-slate-400 text-xs sm:text-sm border-l border-white/20 pl-4 italic">
              <p>
                Mining performance depends on more than systems and targets. It depends on people understanding the work, identifying constraints, and improving the way operations move.
              </p>
              <p className="not-italic font-semibold text-slate-200">
                Filament brings a practical approach to productivity transformation in mining environments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('approach')}
                className="bg-filament-orange hover:bg-filament-orange-dark text-white font-bold px-5 py-3 rounded shadow-lg hover:shadow-filament-orange/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
              >
                <span>Explore the Model</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('evidence')}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/30 font-semibold px-5 py-3 rounded hover:border-white/55 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
              >
                <span>View the Proof Point</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. THE MINING PRODUCTIVITY CHALLENGE --- */}
      <section id="challenge" className="py-20 bg-white bg-dots relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded px-2.5 py-1">
                <span className="text-filament-orange font-bold text-xs uppercase tracking-wider">The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight leading-tight">
                Mining operations need clarity where work really happens
              </h2>
              <div className="h-1 w-20 bg-filament-orange"></div>
              
              <div className="space-y-4 text-base sm:text-lg text-filament-slate leading-relaxed">
                <p>
                  Mining operations are complex environments. Delays, bottlenecks, waiting time, unclear handovers, and disconnected workflows can quietly reduce performance.
                </p>
                <p className="font-semibold text-filament-blue">
                  Improvement begins when teams understand the real flow of work.
                </p>
                <p>
                  Filament focuses on practical operational insight: observing, measuring, analysing, and helping teams identify where improvement is possible.
                </p>
              </div>
            </div>

            {/* Visual breakdown cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-2.5 rounded text-filament-orange shrink-0">
                  <Workflow className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-filament-blue text-base">Unclear Workflow Handovers</h3>
                  <p className="text-sm text-filament-slate mt-1">Handovers between shifts, teams, and departments represent high-risk windows for bottleneck accumulation.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2.5 rounded text-filament-blue shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-filament-blue text-base">Invisible Bottlenecks</h3>
                  <p className="text-sm text-filament-slate mt-1">Delays and idle times are often undocumented because of a lack of direct shift-level continuous observations.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-200 p-2.5 rounded text-filament-blue shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-filament-blue text-base">Disconnected Field Teams</h3>
                  <p className="text-sm text-filament-slate mt-1">Supervisors often lack the granular data needed to drive proactive daily productivity improvements.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. WHAT FILAMENT DOES --- */}
      <section id="what-we-do" className="py-20 bg-slate-50 border-t border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-filament-orange uppercase tracking-wider bg-orange-100/70 border border-orange-200 px-3 py-1 rounded-full">Core Activities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
              Operational excellence with people at the centre
            </h2>
            <div className="h-1 w-20 bg-filament-orange mx-auto"></div>
            <p className="text-lg text-filament-slate leading-relaxed">
              Filament supports productivity transformation through operational-excellence work that connects process improvement with people development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-filament-orange/30 transition-all">
              <div className="bg-amber-50 text-filament-orange rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-filament-blue mb-2">Granular Diagnostics</h3>
              <p className="text-sm text-filament-slate leading-relaxed">
                Conducting field-level checks, shift reviews, and operational profiling to surface deep inefficiencies in current workflows.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-filament-orange/30 transition-all">
              <div className="bg-blue-50 text-filament-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-filament-blue mb-2">Time-and-Motion Studies</h3>
              <p className="text-sm text-filament-slate leading-relaxed">
                Collecting real-time cycle data on mining operations, logistics, machine utilization, and team delays.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-filament-orange/30 transition-all">
              <div className="bg-slate-100 text-filament-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-filament-blue mb-2">Mining-Cycle Analysis</h3>
              <p className="text-sm text-filament-slate leading-relaxed">
                Analysing movement, waiting times, operational delays, and material flows to build visibility of constraints.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 text-left shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h4 className="font-bold text-filament-blue text-base flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-filament-orange shrink-0"></span>
                <span>Practical and Grounded Collaboration</span>
              </h4>
              <p className="text-sm text-filament-slate leading-relaxed">
                We work alongside supervisors, business-improvement teams, and operational leaders. The aim is to help operations see constraints more clearly, improve flow, and create structured learning environments where graduates develop through real contribution.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('approach')}
              className="bg-filament-blue hover:bg-filament-blue-light text-white text-sm font-semibold px-5 py-3 rounded shadow transition-all shrink-0 hover:scale-[1.02] flex items-center space-x-2"
            >
              <span>See the Approach</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. THE FILAMENT APPROACH --- */}
      <section id="approach" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-4 max-w-3xl mb-12">
            <span className="text-xs font-bold text-filament-orange uppercase tracking-wider">Operational Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
              A practical model for improvement and exposure
            </h2>
            <div className="h-1 w-20 bg-filament-orange"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: 6 Cards grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">01. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Diagnose</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Understand where delays, constraints, and operational gaps appear in the workflow.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">02. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Measure</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Use observation, time-and-motion studies, and field-level data to understand what is actually happening.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">03. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Analyse</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Study mining cycles, movement, waiting time, and work patterns to identify improvement opportunities.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">04. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Collaborate</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Work alongside supervisors, business-improvement teams, and operational leaders.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">05. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Develop</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Expose graduates to real operational challenges so they build technical, analytical, and professional capability.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 hover:border-filament-orange/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-all group">
                <span className="text-xs font-bold text-filament-orange/70 block mb-1">06. STAGE</span>
                <h3 className="font-bold text-lg text-filament-blue mb-2 group-hover:text-filament-orange transition-colors">Improve</h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Support better operational visibility and more focused improvement conversations.
                </p>
              </div>

            </div>

            {/* Right Column: Image and quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src={ApproachImg} 
                  alt="Operational excellence in action with staff pointing out constraints on an operations board" 
                  className="w-full h-auto object-cover max-h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="bg-filament-blue text-white rounded-lg p-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-filament-orange/10 rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
                <h4 className="font-bold text-filament-orange text-sm uppercase tracking-wider mb-2">Operational Excellence In Action</h4>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "By establishing structured checkpoints at shift intervals, teams gain operational insights that support continuous improvement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. GRADUATE DEVELOPMENT --- */}
      <section id="graduate-dev" className="py-20 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-filament-blue to-filament-orange rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg overflow-hidden border border-slate-200 shadow-xl">
                <img 
                  src={GraduateImg} 
                  alt="Graduate gaining practical exposure in a mining-sector learning environment" 
                  className="w-full h-auto object-cover max-h-[420px]"
                />
                {/* Floating caption */}
                <div className="absolute bottom-4 left-4 bg-filament-blue-dark/95 backdrop-blur-sm px-3 py-2 rounded text-left border border-white/10">
                  <span className="text-[10px] font-bold tracking-wider text-filament-orange uppercase">Active Training Model</span>
                  <p className="text-xs text-white mt-0.5">Direct on-site observations under expert mentorship.</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded px-2.5 py-1">
                <span className="text-filament-blue-light font-bold text-xs uppercase tracking-wider">Human Development</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight leading-tight">
                Graduates learn best when exposure is real
              </h2>
              <div className="h-1 w-20 bg-filament-orange"></div>
              
              <div className="space-y-4 text-base sm:text-lg text-filament-slate leading-relaxed">
                <p>
                  Many graduates leave university with strong academic knowledge, but limited practical exposure to the working environment they hope to enter.
                </p>
                <p className="font-semibold text-filament-blue">
                  Filament’s graduate-development model connects learning with real operational contribution.
                </p>
                <p>
                  Through structured exposure, graduates can participate in diagnostics, data collection, time-and-motion studies, and mining-cycle analysis. This helps them build confidence, workplace awareness, and technical understanding while contributing to operational improvement.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 6. EVIDENCE OF IMPACT --- */}
      <section id="evidence" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-filament-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold text-filament-orange uppercase tracking-wider bg-orange-100/70 border border-orange-200 px-3 py-1 rounded-full">Proof of Concept</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
              A documented outcome in a real mining environment
            </h2>
            <div className="h-1 w-20 bg-filament-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm text-left relative">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-filament-orange via-filament-blue-light to-filament-blue rounded-t-xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* Stat panel */}
              <div className="md:col-span-1 bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 shadow-inner">
                <span className="text-5xl font-black text-filament-orange block">6 / 6</span>
                <span className="text-xs font-bold text-filament-blue uppercase tracking-wider block">Graduates Absorbed</span>
                <div className="h-px w-12 bg-slate-200 mx-auto"></div>
                <p className="text-xs text-filament-slate">
                  Participating graduates absorbed into employment after structured underground program.
                </p>
              </div>

              {/* Text copy panel */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-bold text-lg text-filament-blue flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-filament-orange shrink-0" />
                  <span>Two Rivers Platinum Mine & Wits School of Mining Engineering</span>
                </h3>
                <p className="text-sm text-filament-slate leading-relaxed">
                  Filament implemented a graduate-development initiative with <strong>Two Rivers Platinum Mine</strong>, endorsed by the <strong>Wits School of Mining Engineering</strong>.
                </p>
                <p className="text-sm text-filament-slate leading-relaxed">
                  In that specific initiative, six unemployed Wits Mining Engineering graduates received structured underground exposure through operational-excellence work.
                </p>
                <p className="text-sm text-filament-slate leading-relaxed">
                  The endorsement records that all six participating graduates were absorbed into employment after the intervention conducted between March 2025 and February 2026.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-filament-orange p-3 text-xs text-amber-800 rounded-r">
                  <strong>Disclaimer:</strong> This is a strong proof point for the model. It is presented as a specific documented outcome, not as a guarantee of future employment results.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 7. WHY MINES BENEFIT --- */}
      <section className="py-20 bg-filament-blue text-white relative overflow-hidden bg-dots-dark">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-filament-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy side */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-filament-orange uppercase tracking-wider">Mutual Value Model</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                A model designed for mutual value
              </h2>
              <div className="h-1 w-20 bg-filament-orange"></div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Mines need operational clarity, improved productivity, and stronger talent pipelines. Graduates need exposure, structure, mentorship, and practical experience.
              </p>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Filament’s model brings those needs together. Graduates develop through meaningful operational-excellence work, while mines gain structured observation, diagnostics, and analysis that can support improvement conversations.
              </p>
            </div>

            {/* Benefit cards grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="text-filament-orange font-bold text-sm mb-2 flex items-center space-x-1.5">
                  <Building2 className="w-4.5 h-4.5" />
                  <span>Value for Mines</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Structured shift-level observation data.</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Bottlenecks identified in operational flows.</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Strong talent pipelines of pre-assessed grads.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="text-filament-orange font-bold text-sm mb-2 flex items-center space-x-1.5">
                  <GraduationCap className="w-4.5 h-4.5" />
                  <span>Value for Graduates</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Real-world workplace underground exposure.</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Technical & analytical capability building.</span>
                  </li>
                  <li className="flex items-start space-x-1">
                    <span className="text-filament-orange mr-1">•</span>
                    <span>Mentorship under technical leadership.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 8. TECHNICAL CREDIBILITY --- */}
      <section id="technical-credibility" className="py-20 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold text-filament-orange uppercase tracking-wider bg-orange-100/70 border border-orange-200 px-3 py-1 rounded-full">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
              Grounded in mining improvement experience
            </h2>
            <div className="h-1 w-20 bg-filament-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            {/* Leadership Details */}
            <div className="md:col-span-8 space-y-5">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-filament-blue">Dr Rudy Phillis</h3>
                <p className="text-sm font-semibold text-filament-orange uppercase tracking-wider">PhD, Theory of Constraints in SA Mining Industry</p>
              </div>
              <div className="h-px w-full bg-slate-200"></div>
              <div className="space-y-3 text-sm text-filament-slate leading-relaxed">
                <p>
                  The technical leadership behind the model is supported by academic and historical mining-sector credibility.
                </p>
                <p>
                  Dr Rudy Phillis holds a PhD with distinction related to Theory of Constraints in the South African mining industry and has a documented historical track record in mining improvement work.
                </p>
                <p>
                  Historical reference material supports the depth of this technical background. These references should be understood as leadership credibility and historical evidence, not as claims of current partnerships unless confirmed.
                </p>
              </div>
            </div>

            {/* Box highlight */}
            <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm text-center">
              <Award className="w-10 h-10 text-filament-orange mx-auto" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-filament-blue uppercase tracking-wider block">Doctorate Focus</span>
                <p className="text-xs text-filament-slate">
                  Applying Theory of Constraints to optimize workflow flows in South African underground mines.
                </p>
              </div>
              <div className="text-[10px] text-filament-slate bg-white px-2 py-1 rounded border border-slate-200">
                Academic & Practical Leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. FILAMENT AND CHASM BRIDGE --- */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box highlight */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-filament-blue text-base flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-filament-orange shrink-0"></span>
                  <span>Filament (Pty) Ltd</span>
                </h3>
                <p className="text-xs text-filament-slate mt-2 leading-relaxed">
                  Focuses strictly on the operational-excellence consulting, shift diagnostics, time-and-motion studies, and the mine-exposure model.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-filament-blue text-base flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-filament-blue-light shrink-0"></span>
                  <span>Chasm Bridge Charity</span>
                </h3>
                <p className="text-xs text-filament-slate mt-2 leading-relaxed">
                  Focuses on the broader graduate-development programs, social impact, funding support, and candidate integration.
                </p>
              </div>
            </div>

            {/* Right text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-filament-orange uppercase tracking-wider">Dual Pathway</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-filament-blue tracking-tight">
                A wider pathway for graduate development
              </h2>
              <div className="h-1 w-20 bg-filament-orange"></div>
              
              <div className="space-y-4 text-base text-filament-slate leading-relaxed">
                <p>
                  Filament and Chasm Bridge Charity are distinct but complementary.
                </p>
                <p className="font-semibold text-filament-blue">
                  Together, they help connect qualified graduates with structured support, practical exposure, and meaningful industry pathways.
                </p>
                <p>
                  While Filament drives the engineering, observation, and productivity tools directly inside operational mines, Chasm Bridge Charity supports the broader pipeline and pathway mechanisms for emerging professionals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 10. RESPONSIBLE EXPECTATIONS --- */}
      <section className="py-12 bg-white border-t border-b border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
            <Compass className="w-4.5 h-4.5 text-filament-orange shrink-0" />
            <span className="text-amber-800 text-xs font-semibold uppercase tracking-wider">Responsible Communication</span>
          </div>
          <h2 className="text-2xl font-bold text-filament-blue tracking-tight">
            Evidence-led, not exaggerated
          </h2>
          <p className="text-sm text-filament-slate leading-relaxed max-w-2xl mx-auto">
            Filament’s documented outcome is important, but it must be communicated responsibly. The six-graduate employment outcome reflects one specific initiative. It does not guarantee that every future participant will be absorbed into employment.
          </p>
          <div className="text-xs font-semibold text-filament-blue">
            The value of the model is that it creates a stronger, more practical pathway between graduate development and operational improvement.
          </div>
        </div>
      </section>

      {/* --- 11. FINAL CTA --- */}
      <section id="contact" className="py-24 bg-filament-blue text-white relative overflow-hidden bg-dots-dark">
        {/* Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-filament-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Build Practical Pathways Into Mining
            </h2>
            <div className="h-1.5 w-24 bg-filament-orange mx-auto"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Filament supports productivity transformation through practical operational-excellence work and structured graduate-development pathways.
            </p>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              For stakeholder, partnership, or programme-related enquiries, contact the project team.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto space-y-4">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-filament-orange">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Program Enquiries</span>
              {/* Highlight placeholder clearly but professionally */}
              <p className="text-xl font-bold text-white tracking-wide">
                Email: <span className="text-filament-orange">enquiries@filament-transformation.com</span>
              </p>
              <span className="text-[10px] text-slate-400 italic block mt-1">(Official email connection to be finalized with domain)</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-filament-blue-dark text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Logo side */}
            <div className="flex flex-col space-y-3 items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-3">
                <img 
                  src={Logo} 
                  alt="Filament logo details" 
                  className="h-8 w-auto bg-white p-1 rounded-sm"
                />
                <span className="text-white font-extrabold tracking-wider uppercase text-sm">Filament (Pty) Ltd</span>
              </div>
              <p className="text-xs text-slate-500 italic max-w-sm">
                Productivity Transformation One Person at a time
              </p>
            </div>

            {/* Links and legal side */}
            <div className="flex flex-col space-y-4 items-center md:items-end text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs">
                <button onClick={() => scrollToSection('challenge')} className="hover:text-white transition-colors">Challenge</button>
                <button onClick={() => scrollToSection('what-we-do')} className="hover:text-white transition-colors">What We Do</button>
                <button onClick={() => scrollToSection('approach')} className="hover:text-white transition-colors">Approach</button>
                <button onClick={() => scrollToSection('graduate-dev')} className="hover:text-white transition-colors">Graduate Dev</button>
                <button onClick={() => scrollToSection('evidence')} className="hover:text-white transition-colors">Evidence</button>
              </div>
              <p className="text-xs text-slate-600">
                &copy; {currentYear} Filament (Pty) Ltd. All rights reserved. Registered static landing page.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
