// src/components/Summary.js
import React from 'react';
import '../styles/Summary.css';  // We will create this CSS file for styling

function Summary({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const expenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const balance = income + expenses;

  return (
    <div className="summary">
      <div className="summary-item">
        <h3>Total Income:</h3>
        <p>₹{income.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <h3>Total Expenses:</h3>
        <p>₹{Math.abs(expenses).toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <h3>Net Balance:</h3>
        <p>₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Summary;
