import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  if (!expenses || expenses.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        No expenses added yet 📝
      </p>
    );
  }

  return (
    <div className="expense-list">
      {expenses.map((exp, index) => (
        <ExpenseItem
          key={index}
          expense={exp}
          deleteExpense={deleteExpense}
          index={index}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
