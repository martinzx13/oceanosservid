import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Blog from './container/Blog/Blog';
import BlogPost from './container/Blog/BlogPost';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/timeline" element={<Skills />} />
        <Route path="/team" element={<Testimonials />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  </Router>
);

export default App;