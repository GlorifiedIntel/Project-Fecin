// src/pages/SubmitPrayerRequest.js
import React, { useState } from 'react';
import prayerRequestService from '../services/prayerRequestService';

const SubmitPrayerRequest = () => {
  const [request, setRequest] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await prayerRequestService.submitRequest(request);
      setSuccess('Prayer request submitted successfully!');
    } catch (err) {
      setSuccess('Failed to submit request.');
    }
  };

  return (
    <div>
      <h2>Submit Prayer Request</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Enter your prayer request"
        />
        <button type="submit">Submit</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default SubmitPrayerRequest;
