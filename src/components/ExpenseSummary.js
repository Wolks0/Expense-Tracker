import React from "react";

function ExpenseSummary({ expenses }) {
  const grouped = expenses.reduce((acc, exp) => {
    if (!exp.date) return acc;
    if (!acc[exp.date]) acc[exp.date] = 0;
    acc[exp.date] += parseFloat(exp.amount || 0);
    return acc;
  }, {});

  return (
    <div className="summary-container">
      <h2>📅 Summary by Date</h2>
      <ul>
        {Object.keys(grouped).length === 0 ? (
          <li>No data yet</li>
        ) : (
          Object.entries(grouped).map(([date, total]) => (
            <li key={date}>
              <span>{date}</span>
              <span>₹{total}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ExpenseSummary;
