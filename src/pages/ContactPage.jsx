import { Helmet } from 'react-helmet-async';
import { Mail, GraduationCap, Briefcase, Info } from 'lucide-react';
import { seoData } from '../data/seoData';

import OfficeImg from '../assets/images/optimized/OfficeOverseeMine.webp';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.contact.title}</title>
        <meta name="description" content={seoData.contact.description} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={OfficeImg} 
            alt="Office overseeing mine operations" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 select-none grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Pathways & Contact
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Build Practical Pathways Into Mining. Filament supports productivity transformation through practical operational-excellence work and structured graduate-development pathways.
          </p>
        </div>
      </section>

      {/* 2. DUAL PATHWAY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-filament-blue mb-4">Dual Pathway</h2>
            <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-6"></div>
            <p className="text-xl font-bold text-slate-800 max-w-3xl mx-auto">
              A wider pathway for graduate development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Briefcase className="w-12 h-12 text-filament-blue mb-6" />
              <h3 className="text-2xl font-bold text-filament-blue mb-4">Filament (Pty) Ltd</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Focuses strictly on the operational-excellence consulting, shift diagnostics, time-and-motion studies, and the mine-exposure model.
              </p>
              <p className="text-slate-600 font-medium">
                Filament drives the engineering, observation, and productivity tools directly inside operational mines.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <GraduationCap className="w-12 h-12 text-filament-orange mb-6" />
              <h3 className="text-2xl font-bold text-filament-blue mb-4">Chasm Bridge Charity</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Focuses on the broader graduate-development programs, social impact, funding support, and candidate integration.
              </p>
              <p className="text-slate-600 font-medium">
                Chasm Bridge Charity supports the broader pipeline and pathway mechanisms for emerging professionals.
              </p>
            </div>
          </div>
          
          <div className="bg-filament-blue text-white rounded-xl p-8 max-w-4xl mx-auto text-center shadow-lg">
            <p className="text-xl leading-relaxed">
              Filament and Chasm Bridge Charity are <strong>distinct but complementary</strong>. Together, they help connect qualified graduates with structured support, practical exposure, and meaningful industry pathways.
            </p>
          </div>
        </div>
      </section>

      {/* 3. RESPONSIBLE COMMUNICATION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center bg-slate-50 border-l-4 border-filament-orange p-8 rounded-r-xl">
            <Info className="w-16 h-16 text-filament-orange mr-6 flex-shrink-0 mb-4 md:mb-0" />
            <div>
              <h3 className="text-xl font-bold text-filament-blue mb-2">Responsible Communication</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Evidence-led, not exaggerated</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Filament’s documented outcome is important, but it must be communicated responsibly. The six-graduate employment outcome reflects one specific initiative. It does not guarantee that every future participant will be absorbed into employment.
              </p>
              <p className="text-slate-800 font-medium leading-relaxed">
                The value of the model is that it creates a stronger, more practical pathway between graduate development and operational improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT / ENQUIRIES */}
      <section className="py-24 bg-filament-blue-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Program Enquiries</h2>
          <div className="w-16 h-0.5 bg-filament-orange mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            For stakeholder, partnership, or programme-related enquiries, please contact the project team directly.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 max-w-xl mx-auto backdrop-blur-sm">
            <Mail className="w-12 h-12 text-filament-orange mx-auto mb-6" />
            <a 
              href="mailto:info@filament-transformation.com" 
              className="block text-2xl sm:text-3xl font-bold text-white hover:text-filament-orange transition-colors mb-4 break-all"
            >
              info@filament-transformation.com
            </a>
            <p className="text-sm text-slate-400">
              (Official email connection to be finalized with domain)
            </p>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <a 
                href="mailto:info@filament-transformation.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-filament-orange hover:bg-orange-600 transition-colors shadow-lg"
              >
                Send an Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
