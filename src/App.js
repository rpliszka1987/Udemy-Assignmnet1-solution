import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Rent",
      amount: 1250.0,
      date: new Date(2023, 2, 14),
    },
    {
      id: "2",
      title: "Phone bill",
      amount: 125.0,
      date: new Date(2023, 2, 18),
    },
    {
      id: "3",
      title: "Grocaries",
      amount: 200.0,
      date: new Date(2023, 2, 20),
    },
  ];
  return (
    <div>
      <h1>Expense Item's</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
