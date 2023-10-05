// App.js

import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import LoginOverlay from './components/Login/LoginOverlay';
import Carousel from './components/Carousel/Carousel';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Footer from './components/Footer/Footer';
import { useRef } from 'react';

// Lazy load the Chefs component
const Chefs = lazy(() => import('./components/Chefs/Chefs'));

// Lazy load the About section
const LazyAbout = lazy(() => import('./components/AboutUs/About'));

function App() {
  const aboutRef = useRef();
  const homeRef = useRef();

  return (
    <div className="App">
      <Navbar aboutRef={aboutRef} homeRef={homeRef} />
      <Carousel homeRef={homeRef} />
      <Suspense fallback={<LoadingSpinner />}>
        <Chefs />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAbout aboutRef={aboutRef}/>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
