import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseResults from "./components/ExpenseResults";
import "./styles/main.scss";

function App() {
  const [expenses, setExpenses] = useState([
    // Sample initial data (optional - can be removed for a clean start)
    { id: 1, category: "Groceries", amount: 15000 },
    { id: 2, category: "Rent", amount: 40000 },
    { id: 3, category: "Transportation", amount: 5000 },
    { id: 4, category: "Entertainment", amount: 10000 },
    { id: 5, category: "Communication", amount: 2000 },
    { id: 6, category: "Gym", amount: 3000 },
  ]);

  // Add a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Remove an expense by id
  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Calculate all expenses (handled in ExpenseResults component)

  return (
    <div className="container">
      <header className="app-header">
        <h1>Monthly Expense Tracker</h1>
        <p>Track and analyze your monthly expenses</p>
      </header>

      <div className="app-content">
        <div className="expense-input">
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="expense-display">
          <ExpenseTable expenses={expenses} removeExpense={removeExpense} />
        </div>

        <div className="expense-analysis">
          <ExpenseResults expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
