import React, { useState } from "react";
import Form from "./Components/Form";
import Introduction from "./Components/Introduction";

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (expenseData) => {
    setInputArray([...inputArray, expenseData]);
  };

  const filteredExpenses = inputArray.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.expense.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Introduction />
      <Form onAddExpense={addExpense} />

      <h2>Expense List</h2>

      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      {filteredExpenses.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((item, index) => (
              <tr key={index}>
                <td>{item.expense}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matching expenses found.</p>
      )}
    </div>
  );
}

export default App;
