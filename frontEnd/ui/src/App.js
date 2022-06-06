import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


// routing file path
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const Quote = lazy(() => import('./components/Quote'))

function App() {
  return (
    <div>

      {/* Routing */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Quote" element={<Quote />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
