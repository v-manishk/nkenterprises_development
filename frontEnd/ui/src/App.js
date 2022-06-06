import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


// routing file path
const Home = lazy(() => import('./components/User/Home'))
const About = lazy(() => import('./components/User/About'))
const Gallery = lazy(() => import('./components/User/Gallery'))
const Contact = lazy(() => import('./components/User/Contact'))
const Quote = lazy(() => import('./components/User/Quote'))
const Profile = lazy(() => import('./components/Admin/Profile'))

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
            <Route path="/Admin/Profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
