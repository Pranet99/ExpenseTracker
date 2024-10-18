// src/App.js
import React, { useState } from 'react';

import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import TransactionFilter from './components/TransactionFilter';
import IncomeExpenseChart from './components/IncomeExpenseChart';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTransaction = (transaction) => {
    if (editingIndex !== null) {
      // Update existing transaction
      const updatedTransactions = transactions.map((t, index) =>
        index === editingIndex ? transaction : t
      );
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
      setEditingIndex(null); // Reset editing state after updating
    } else {
      // Add new transaction
      const updatedTransactions = [...transactions, transaction];
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
    }
  };

  const handleEditTransaction = (index) => {
    setEditingIndex(index); // Set the index of the transaction being edited
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleFilterTransactions = (filterCriteria) => {
    const filtered = transactions.filter((transaction) => {
      const meetsCategory =
        !filterCriteria.category ||
        transaction.category.toLowerCase().includes(filterCriteria.category.toLowerCase());
      const meetsMinAmount =
        !filterCriteria.minAmount || parseFloat(transaction.amount) >= parseFloat(filterCriteria.minAmount);
      const meetsMaxAmount =
        !filterCriteria.maxAmount || parseFloat(transaction.amount) <= parseFloat(filterCriteria.maxAmount);
      const meetsDate =
        !filterCriteria.date || transaction.date === filterCriteria.date;

      return meetsCategory && meetsMinAmount && meetsMaxAmount && meetsDate;
    });

    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Summary transactions={filteredTransactions} />
      <IncomeExpenseChart transactions={filteredTransactions} />
      <TransactionFilter onFilter={handleFilterTransactions} />
      <TransactionForm
        onSubmit={handleAddTransaction}
        editingTransaction={editingIndex !== null ? transactions[editingIndex] : null}
      />
      <TransactionList
        transactions={filteredTransactions}
        onEdit={handleEditTransaction}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;
