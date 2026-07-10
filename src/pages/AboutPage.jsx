import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seoData';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.about.title}</title>
        <meta name="description" content={seoData.about.description} />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Filament</h1>
        </div>
      </div>
    </>
  );
}
