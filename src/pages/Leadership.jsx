// src/pages/Leadership.js
import React from 'react';

const Leadership = () => (
  <div>
    <h2>Our Leadership</h2>
    <p>Meet the visionary leaders guiding FECIN:</p>
    <div className="leadership-team">
      <div className="leader">
        <img src="/path/to/leader1.jpg" alt="Leader Name" />
        <h3>Pastor Luka Ebega</h3>
        <p>Lead Pastor</p>
        <p>Pastor Ebega is a passionate leader committed to empowering individuals and spreading the gospel.</p>
      </div>
      <div className="leader">
        <img src="/path/to/leader2.jpg" alt="Leader Name" />
        <h3>Sister Janet Ojochide</h3>
        <p>Associate Pastor</p>
        <p>Sister Jane supports the church's mission with a focus on community outreach and women's ministry.</p>
      </div>
    </div>
  </div>
);

export default Leadership;
