const ExpenseTable = ({ expenses, removeExpense }) => {
  // Format number with commas
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US");
  };

  return (
    <div className="card">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet. Use the form above to add some expenses.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{formatAmount(expense.amount)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeExpense(expense.id)}
                    style={{ padding: "5px 10px", fontSize: "0.9rem" }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTable;
