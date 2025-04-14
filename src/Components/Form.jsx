const Form = () => {
  return (
    <form
      id="expenseForm"
      action=""
      onSubmit={() => alert("Brian Kiprono is gay")}
    >
      <div>
        <h1>Add Expense</h1>
        <h4>Enter your expense details below</h4>
      </div>
      <div>
        <label for="expense">Expense: </label>
        <input type="text" id="expense" placeholder="Enter expense" required />
        <br />
        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter Description"
          required
        />
        <br />
        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          placeholder="Enter Category"
          required
        />
        <br />
        <label for="amount">Amount:</label>
        <input
          type="quantity"
          id="amount"
          placeholder="Enter amount"
          required
        />
        <br />
        <label for="date">Date:</label>
        <input type="date" id="date" placeholder="Enter date" required />
        <br />
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
