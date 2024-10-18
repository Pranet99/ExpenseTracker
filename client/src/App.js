// src/App.js
import React, { useState } from 'react';

import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTransaction = (transaction) => {
    if (editingIndex !== null) {
      // Update existing transaction
      const updatedTransactions = transactions.map((t, index) =>
        index === editingIndex ? transaction : t
      );
      setTransactions(updatedTransactions);
      setEditingIndex(null); // Reset the editing state after updating
    } else {
      // Add new transaction
      setTransactions([...transactions, transaction]);
    }
  };

  const handleEditTransaction = (index) => {
    setEditingIndex(index); // Set the index of the transaction being edited
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm
        onSubmit={handleAddTransaction}
        editingTransaction={editingIndex !== null ? transactions[editingIndex] : null}
      />
      <TransactionList
        transactions={transactions}
        onEdit={handleEditTransaction}
        onDelete={handleDeleteTransaction}
      />

    </div>
  );
}

export default App;
