import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import LoginOverlay from './components/Login/LoginOverlay';
import Carousel from './components/Carousel/Carousel';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'; // Import the loading spinner component
import Footer from './components/Footer/Footer';
import About from './components/AboutUs/About';

// Lazy load the Chefs component
const Chefs = lazy(() => import('./components/Chefs/Chefs'));

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel />
      {/* Wrap the lazy-loaded component in Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Chefs />
      </Suspense>
      <About />
      <Footer />
    </div>
  );
}

export default App;
