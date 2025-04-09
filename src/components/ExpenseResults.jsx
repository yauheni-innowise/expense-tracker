import { useState } from "react";

const ExpenseResults = ({ expenses }) => {
  const [results, setResults] = useState(null);

  // Format number with commas
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US");
  };

  const calculateResults = () => {
    // Aggregate expenses by category (case-insensitive)
    const aggregatedExpenses = expenses.reduce((acc, expense) => {
      const categoryLower = expense.category.toLowerCase();
      if (!acc[categoryLower]) {
        acc[categoryLower] = {
          category: expense.category, // Keep original casing for display
          amount: 0,
        };
      }
      acc[categoryLower].amount += expense.amount;
      return acc;
    }, {});

    // Convert to array for calculations
    const aggregatedExpensesArray = Object.values(aggregatedExpenses);

    // Calculate total expenses
    const totalExpenses = aggregatedExpensesArray.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    // Calculate average daily expense (assuming 30 days in a month)
    const averageDailyExpense = totalExpenses / 30;

    // Get top 3 largest expenses
    const topExpenses = [...aggregatedExpensesArray]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);

    setResults({
      totalExpenses,
      averageDailyExpense,
      topExpenses,
    });
  };

  return (
    <div className="card results">
      <h2>Expense Analysis</h2>

      {expenses.length === 0 ? (
        <p>Add some expenses to see the analysis.</p>
      ) : (
        <>
          <button
            onClick={calculateResults}
            className="btn btn-primary"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            Calculate
          </button>

          {results && (
            <>
              <div className="result-item">
                <span className="label">Total Expenses:</span>
                <span className="value">
                  ${formatAmount(results.totalExpenses)}
                </span>
              </div>

              <div className="result-item">
                <span className="label">Average Daily Expense:</span>
                <span className="value">
                  ${formatAmount(results.averageDailyExpense)}
                </span>
              </div>

              <h3>Top 3 Largest Expenses</h3>
              <div className="top-expenses">
                {results.topExpenses.map((expense, index) => (
                  <div key={index} className="expense-item">
                    <span className="label">
                      {index + 1}. {expense.category}
                    </span>
                    <span className="value">
                      ${formatAmount(expense.amount)}
                    </span>
                  </div>
                ))}
                {results.topExpenses.length === 0 && (
                  <p>No expenses to display.</p>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseResults;
