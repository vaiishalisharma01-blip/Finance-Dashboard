import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const categoryTotals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b, ""
  );

  const totalExpenses = Object.values(categoryTotals).reduce((a, b) => a + b, 0);
  const avgExpense = totalExpenses / transactions.filter(t => t.type === "expense").length;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Insights</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 shadow rounded bg-yellow-100">
          <h3 className="font-bold">Highest Spending Category</h3>
          <p className="text-lg">{highestCategory || "N/A"}</p>
        </div>
        <div className="p-4 shadow rounded bg-purple-100">
          <h3 className="font-bold">Average Expense</h3>
          <p className="text-lg">₹{avgExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}