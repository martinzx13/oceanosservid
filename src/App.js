import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import Blog from './container/Blog/Blog'; // Assuming Blog is the new page you want
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/our team" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
