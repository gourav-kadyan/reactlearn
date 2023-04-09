import { useState, useCallback } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  }, []);

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;
