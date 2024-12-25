// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/events">Events</Link>
    <Link to="/submit-prayer-request">Prayer Requests</Link>
    <Link to="/make-donation">Make Donation</Link>
    <Link to="/about-us">About Us</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/leadership">Leadership</Link>
    <Link to="/what-we-do">What We Do</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
