import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Placeholders for routes to be built
const Placeholder = ({ title }) => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-we-do" element={<Placeholder title="What We Do" />} />
            <Route path="/our-approach" element={<Placeholder title="Our Approach" />} />
            <Route path="/people" element={<Placeholder title="People & Leadership" />} />
            <Route path="/insights" element={<Placeholder title="Insights & Evidence" />} />
            <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          </Route>
          
          {/* Keep digital business cards route standalone if needed, or route under main layout */}
          {/* We'll handle this in a dedicated refactor if requested */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
