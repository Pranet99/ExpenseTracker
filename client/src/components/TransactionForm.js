// src/components/TransactionForm.js
import React, { useState, useEffect } from 'react';
import '../styles/TransactionForm.css';


function TransactionForm({ onSubmit, editingTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');

  // When editingTransaction changes, populate the form fields
  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount);
      setDescription(editingTransaction.description);
      setCategory(editingTransaction.category);
      setSource(editingTransaction.source);
    } else {
      // Reset the form if not editing
      setAmount('');
      setDescription('');
      setCategory('');
      setSource('');
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the transaction object
    const transaction = {
      amount,
      description,
      category,
      source,
      date: new Date().toLocaleDateString(), // Example of setting a default date
    };

    // Call onSubmit to handle either add or edit
    onSubmit(transaction);

    // Clear the form after submission
    setAmount('');
    setDescription('');
    setCategory('');
    setSource('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Source:</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <button type="submit">{editingTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
    </form>
  );
}

export default TransactionForm;
