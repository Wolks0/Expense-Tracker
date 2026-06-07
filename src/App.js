import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete an expense by index
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>💸 Expense Tracker</h1>

      {/* Expense Form */}
      <ExpenseForm addExpense={addExpense} />

      {/* Summary by Date */}
      <ExpenseSummary expenses={expenses} />

      {/* Expense List */}
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      {/* Total Section */}
      <div className="total-bar">
        💰 Total Spent: ₹
        {expenses.reduce(
          (sum, exp) => sum + parseFloat(exp.amount || 0),
          0
        )}
      </div>
    </div>
  );
}

export default App;
