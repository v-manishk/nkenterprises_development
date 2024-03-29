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
const Gallery_Type = lazy(() => import('./components/User/GType'))
const Services = lazy(() => import('./components/User/Services'))
const Civil = lazy(() => import('./components/User/services/civil'))
const Projects = lazy(() => import('./components/User/Projects'))
const Project_details = lazy(() => import('./components/User/Project_detail'))
const Project_category = lazy(() => import('./components/User/Projects_category'))

function App() {
  return (
    <div>

      {/* Routing */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery_type" element={<Gallery_Type />} />
            <Route path="/services" element={<Services />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project_details" element={<Project_details />} />
            <Route path="/project_category" element={<Project_category />} />
            <Route path="/admin" element={<Profile />} />
          </Routes>
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
