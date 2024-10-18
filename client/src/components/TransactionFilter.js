// src/components/TransactionFilter.js
import React, { useState } from 'react';
import '../styles/TransactionFilter.css';

function TransactionFilter({ onFilter }) {
  const [filterCategory, setFilterCategory] = useState('');
  const [filterMinAmount, setFilterMinAmount] = useState('');
  const [filterMaxAmount, setFilterMaxAmount] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const filterCriteria = {
      category: filterCategory,
      minAmount: filterMinAmount,
      maxAmount: filterMaxAmount,
      date: filterDate,
    };

    onFilter(filterCriteria);
  };

  return (
    <form className="transaction-filter" onSubmit={handleFilterSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Min Amount:</label>
        <input
          type="number"
          value={filterMinAmount}
          onChange={(e) => setFilterMinAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Max Amount:</label>
        <input
          type="number"
          value={filterMaxAmount}
          onChange={(e) => setFilterMaxAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default TransactionFilter;
