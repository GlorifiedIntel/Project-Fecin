// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>About FECIN</h3>
          <p>
            FECIN is a faith-based organization dedicated to spreading the gospel and empowering
            communities through love and support. Join us in our mission to make a meaningful impact!
          </p>
        </div>
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.linksList}>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: info@fecin.org</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Faith Street, Cityville, Country</p>
        </div>
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" style={styles.icon}></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={styles.icon}></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={styles.icon}></i> Instagram
            </a>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; 2024 FECIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline styling for the footer
const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '30px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: 1,
    margin: '0 15px',
    minWidth: '250px',
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
  },
  linksListItem: {
    marginBottom: '10px',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    marginRight: '10px',
  },
  bottomBar: {
    backgroundColor: '#34495e',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  },
};

export default Footer;
