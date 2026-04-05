import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="mb-4">
      <label className="mr-2 font-bold">Role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-1"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}