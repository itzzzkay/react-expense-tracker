import React from "react";

const Table = ({ inputArray }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {inputArray.length > 0 ? (
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
            {inputArray.map((item, index) => (
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
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default Table;
  