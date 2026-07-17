import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import OurApproachPage from './pages/OurApproachPage';
import PeoplePage from './pages/PeoplePage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import DigitalBusinessCard from './components/DigitalBusinessCard';

const DigitalCardRoute = () => {
  const { slug } = useParams();
  return <DigitalBusinessCard slug={slug} />;
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/our-approach" element={<OurApproachPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          <Route path="/cards/:slug" element={<DigitalCardRoute />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
