// src/components/TransactionList.js
import React from 'react';
import '../styles/TransactionList.css';

function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions to display.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Source</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.source}</td>
                <td>{transaction.date}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionList;
