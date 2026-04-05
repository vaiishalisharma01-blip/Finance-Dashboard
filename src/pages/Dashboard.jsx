import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expense;

  // Prepare data for line chart (balance trend)
  const sortedTransactions = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
  let cumulativeBalance = 0;
  const balanceData = sortedTransactions.map(t => {
    cumulativeBalance += t.type === "income" ? t.amount : -t.amount;
    return { date: t.date, balance: cumulativeBalance };
  });

  // Prepare data for pie chart (spending categories)
  const categoryTotals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });
  const pieData = Object.keys(categoryTotals).map(category => ({
    name: category,
    value: categoryTotals[category]
  }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 shadow rounded bg-green-100 text-green-800">
          <h3 className="font-bold">Total Balance</h3>
          <p className="text-2xl">₹{balance}</p>
        </div>
        <div className="p-4 shadow rounded bg-blue-100 text-blue-800">
          <h3 className="font-bold">Total Income</h3>
          <p className="text-2xl">₹{income}</p>
        </div>
        <div className="p-4 shadow rounded bg-red-100 text-red-800">
          <h3 className="font-bold">Total Expense</h3>
          <p className="text-2xl">₹{expense}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">Balance Trend</h3>
          <LineChart width={400} height={300} data={balanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </div>
        <div>
          <h3 className="font-bold mb-2">Spending Breakdown</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}