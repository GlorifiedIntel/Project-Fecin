// src/pages/MakeDonation.js
import React, { useState } from 'react';
import donationService from '../services/donationService';

const MakeDonation = () => {
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      await donationService.makeDonation(amount);
      setSuccess('Donation successful! Thank you.');
    } catch (err) {
      setSuccess('Failed to make donation.');
    }
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <form onSubmit={handleDonate}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount"
        />
        <button type="submit">Donate</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default MakeDonation;
