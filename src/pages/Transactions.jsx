import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AddTransaction from "../components/AddTransaction";

export default function Transactions() {
  const { transactions, role } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);

  const filtered = transactions.filter(t => {
    const matchesSearch = t.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || t.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {role === "admin" && (
          <button onClick={() => setShowAdd(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Transaction
          </button>
        )}
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td className="border p-2">{t.date}</td>
              <td className="border p-2">₹{t.amount}</td>
              <td className="border p-2">{t.category}</td>
              <td className="border p-2">{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAdd && <AddTransaction onClose={() => setShowAdd(false)} />}
    </div>
  );
}