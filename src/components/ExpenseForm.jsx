import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!category.trim() || !amount.trim()) {
      setError("Both fields are required");
      return;
    }

    // Convert amount to number and validate
    const amountValue = parseFloat(amount.replace(/,/g, ""));
    if (isNaN(amountValue) || amountValue <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    // Add expense
    addExpense({
      id: Date.now(),
      category: category.trim(),
      amount: amountValue,
    });

    // Reset form
    setCategory("");
    setAmount("");
    setError("");
  };

  return (
    <div className="card">
      <h2>Add New Expense</h2>
      {error && (
        <div
          className="error-message"
          style={{ color: "red", marginBottom: "10px" }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Groceries, Rent, Transportation"
          />
          <small style={{ color: "#666", display: "block", marginTop: "10px" }}>
            Note: Expenses with the same category (case-insensitive) will be
            aggregated in the analysis.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 15,000"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
