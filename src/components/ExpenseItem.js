import React from "react";

function ExpenseItem({ expense, deleteExpense, index }) {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
      <span>₹{expense.amount}</span>
      <span>{expense.date}</span>
      <button onClick={() => deleteExpense(index)}>❌</button>
    </div>
  );
}

export default ExpenseItem;
