import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import RoleSwitcher from "./components/RoleSwitcher";

function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
      <RoleSwitcher />
      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
}

export default App;
