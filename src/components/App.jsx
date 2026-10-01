// src/components/App.jsx
import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';
import ScrollUp from './ScrollUp/ScrollUp';

import css from './App.module.css';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={css.backgroundContainer}>
      {!isHomePage && <div className={css.regularBackground}></div>}
      {isHomePage && <div className={css.homepageBackground}></div>}
      {isHomePage && <div className={css.overlay}></div>}
      <div className={css.pageContainer}>
        {/* Header Component */}
        <Header />
        <main className={css.contentContainer}>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Home Page Component */}
              <Route path="/" element={<HomePage />} />
              {/* About Page Component */}
              <Route path="/about" element={<AboutPage />} />
              {/* Contact Page Component */}
              <Route path="/contact" element={<ContactPage />} />
              {/* Not Found Page Component */}
              <Route path="*" element={<NotFoundPage />} />
              // <Route path="/product" element={<ProductPage />} />
              // <Route path="/careers" element={<CareersPage />} />
            </Routes>
            {/* ScrollUp Component */}
            <ScrollUp />
          </Suspense>
        </main>
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
