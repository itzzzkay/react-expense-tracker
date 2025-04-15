import React, { useState } from "react";

function Form({ onAddExpense }) {
  const [inputData, setInputData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    onAddExpense(inputData);
    setInputData({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  }

  return (
    <div>
      <h2>Add Expense</h2>
      <label htmlFor="expense">Expense:</label>
      <input
        type="text"
        name="expense"
        value={inputData.expense}
        onChange={handleChange}
        placeholder="Enter expense"
        required
      />
      <br />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={inputData.description}
        onChange={handleChange}
        placeholder="Enter Description"
        required
      />
      <br />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        name="category"
        value={inputData.category}
        onChange={handleChange}
        placeholder="Enter Category"
        required
      />
      <br />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        name="amount"
        value={inputData.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        required
      />
      <br />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        value={inputData.date}
        onChange={handleChange}
        required
      />
      <br />

      <button onClick={handleSubmit}>Add Expense</button>
    </div>
  );
}

export default Form;
