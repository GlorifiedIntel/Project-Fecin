// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Leadership from './pages/Leadership';
import WhatWeDo from './pages/WhatWeDo';
import Events from './pages/Events';
import Login from './pages/Login';
import Register from './pages/Register';
import SubmitPrayerRequest from './pages/SubmitPrayerRequest';
import MakeDonation from './pages/MakeDonation';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/what-we-do" component={WhatWeDo} />
        <Route path="/events" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/submit-prayer-request" component={SubmitPrayerRequest} />
        <Route path="/make-donation" component={MakeDonation} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
