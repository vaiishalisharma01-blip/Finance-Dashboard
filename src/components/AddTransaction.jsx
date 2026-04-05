import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction({ onClose }) {
  const { transactions, setTransactions } = useContext(AppContext);
  const [form, setForm] = useState({ date: "", amount: "", category: "", type: "expense" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      ...form,
      amount: parseFloat(form.amount)
    };
    setTransactions([...transactions, newTransaction]);
    setForm({ date: "", amount: "", category: "", type: "expense" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">Add Transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block">Date</label>
            <input
              type="date"
              className="border p-1 w-full"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block">Amount</label>
            <input
              type="number"
              className="border p-1 w-full"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block">Category</label>
            <input
              type="text"
              className="border p-1 w-full"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Type</label>
            <select
              className="border p-1 w-full"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}