function ExpenseList(props) {
  return (
    <ul>
      {props.expenses.map((expense, index) => (
        <li key={index}>
          <div>{expense.title}</div>
          <div>{expense.amount}</div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
