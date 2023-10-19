import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [payer, setPayer] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill) return;

    const amount =
      payer === "user"
        ? friend.balance + friendExpense
        : friend.balance - userExpense;

    onSplitBill(amount);

    setBill("");
    setUserExpense("");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🤖Your Expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label>🥸{friend.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>👀Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
