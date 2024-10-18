// src/components/IncomeExpenseChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/IncomeExpenseChart.css';

// Register required elements from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeExpenseChart({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const expenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + Math.abs(parseFloat(transaction.amount)), 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="income-expense-chart">
      <h3>Income vs Expenses</h3>
      <Pie data={data} />
    </div>
  );
}

export default IncomeExpenseChart;
