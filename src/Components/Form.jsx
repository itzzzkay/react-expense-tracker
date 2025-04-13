const Form = () => {
  return (
    <form
      id="expenseForm"
      action=""
      onSubmit={() => alert("Brian Kiprono is gay")}
    >
      <div>
        <label for="expense"></label>
        <input type="text" id="expense" placeholder="" required />
        <br />
        <label for="description"></label>
        <input type="text" id="description" placeholder="" required />
        <br />
        <label for="category"></label>
        <input type="text" id="category" placeholder="" required />
        <br />
        <label for="amount"></label>
        <input type="quantity" id="amount" placeholder="" required />
        <br />
        <label for="date"></label>
        <input type="date" id="date" placeholder="" required />
        <br />
        <input type="submit" required />
      </div>
    </form>
  );
};

export default Form;
