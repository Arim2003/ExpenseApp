import React, { useState } from 'react';
//import ExpenseList from './ExpenseList'; // Import ExpenseList component
import './Home.css'; // Import the associated CSS file

const Home= () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });
  const [walletBalance, setWalletBalance] = useState(100000); // Initial wallet balance

  const addExpense = () => {
    if (newExpense.description && newExpense.amount) {
      const amount = parseFloat(newExpense.amount);
      if (!isNaN(amount)) {
        setExpenses([...expenses, { ...newExpense, amount }]);
        setWalletBalance(walletBalance - amount);
        setNewExpense({ description: '', amount: '' });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  return (
    <div className="family-expenses-app-container">
      <h1>Family Expenses App</h1>
      <div className="wallet-balance">
        <p>Wallet Balance: ₹{walletBalance.toFixed(2)}</p>
      </div>
      <div className="expense-input">
        <label htmlFor="description">Expense Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newExpense.description}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newExpense.amount}
          onChange={handleInputChange}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        {expenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount Spent</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>₹ {expense.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
/*import React, { useState } from 'react';
import './Home.css'; // Import the associated CSS file

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });
  const [walletBalance, setWalletBalance] = useState(100000); // Initial wallet balance

  const addExpense = () => {
    if (newExpense.description && newExpense.amount) {
      const amount = parseFloat(newExpense.amount);
      if (!isNaN(amount)) {
        setExpenses([...expenses, { ...newExpense, amount }]);
        setWalletBalance(walletBalance - amount);
        setNewExpense({ description: '', amount: '' });
      }
    }
  };

  const calculateTotalSpent = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  return (
    <div className="family-expenses-app-container">
      <h1>Family Expenses App</h1>
      <div className="wallet-balance">
        <p>Wallet Balance: ${walletBalance.toFixed(2)}</p>
      </div>
      <div className="expense-input">
        <label htmlFor="description">Expense Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        {expenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount Spent</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="total-spent-graph">
        <h2>Total Amount Spent</h2>
        <div className="graph">
          <div className="bar" style={{ height: `${(calculateTotalSpent() / 1000) * 100}px` }}></div>
        </div>
        <p>${calculateTotalSpent().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Home;*/
