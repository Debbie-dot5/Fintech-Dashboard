import { useState } from "react";
import { PlusCircle, Pencil, Trash2, DollarSign } from "lucide-react";
import { useAppContext } from "../context/AppContext"; // Import AppContext hook
import { SavingsGoal } from "../types";

const Savings = () => {
  const { savingsGoals, setSavingsGoals } = useAppContext(); // Use savingsGoals from context
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [editingGoal, setEditingGoal] = useState<SavingsGoal | null>(null);

  const handleAddOrEditGoal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newGoal: SavingsGoal = {
      id: editingGoal ? editingGoal.id : Date.now(),
      name: (formData.get("name") as string) || "",
      targetAmount: parseFloat(formData.get("targetAmount") as string) || 0,
      currentAmount: parseFloat(formData.get("currentAmount") as string) || 0,
      category: (formData.get("category") as string) || "",
      deadline: (formData.get("deadline") as string) || "",
    };

    if (editingGoal) {
      // Update existing goal
      setSavingsGoals((prevGoals :SavingsGoal[]) =>
        prevGoals.map((goal: SavingsGoal) => (goal.id === editingGoal.id ? newGoal : goal))
      );
    } else {
      // Add new goal
      setSavingsGoals((prevGoals: SavingsGoal[]) => [...prevGoals, newGoal]);
    }

    setShowAddGoal(false);
    setEditingGoal(null);
  };

  const handleEditGoal = (goal: SavingsGoal) => {
    setEditingGoal(goal);
    setShowAddGoal(true);
  };

  const handleDeleteGoal = (id: number) => {
    setSavingsGoals((prevGoals: SavingsGoal[]) => prevGoals.filter((goal: SavingsGoal) => goal.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Savings</h1>
        <button
          onClick={() => {
            setShowAddGoal(true);
            setEditingGoal(null);
          }}
          className="flex items-center gap-2 px-4 py-2 btn-primary text-white rounded-full  cursor-pointer"
        >
          <PlusCircle className="h-4 w-4" />
          New Goal
        </button>
      </div>

      {showAddGoal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingGoal ? "Edit Savings Goal" : "New Savings Goal"}
              </h2>
              <button
                onClick={() => setShowAddGoal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleAddOrEditGoal}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingGoal?.name || ""}
                    placeholder="Goal Name"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <input
                  type="number"
                  name="targetAmount"
                  defaultValue={editingGoal?.targetAmount || ""}
                  placeholder="Target ($)"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="number"
                  name="currentAmount"
                  defaultValue={editingGoal?.currentAmount || ""}
                  placeholder="Initial ($)"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  name="category"
                  defaultValue={editingGoal?.category || ""}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Category</option>
                  <option>Emergency</option>
                  <option>Travel</option>
                  <option>Education</option>
                  <option>Home</option>
                  <option>Tech</option>
                  <option>Other</option>
                </select>
                <input
                  type="date"
                  name="deadline"
                  defaultValue={editingGoal?.deadline || ""}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddGoal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 btn-primary text-white rounded-lg hover:bg-indigo-700"
                >
                  {editingGoal ? "Save Changes" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savingsGoals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const deadline = new Date(goal.deadline);
          const daysLeft = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

          return (
            <div key={goal.id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{goal.name}</h3>
                  <span className="text-xs text-gray-500">{goal.category}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    className="text-gray-400 hover:text-indigo-600"
                    onClick={() => handleEditGoal(goal)}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-red-600"
                    onClick={() => handleDeleteGoal(goal.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                  </span>
                  <span className="text-gray-500">{daysLeft} days</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="btn-primary p-0 h-2 rounded-full transition-all"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{progress.toFixed(1)}%</span>
                  <span className="text-gray-500">{deadline.toLocaleDateString()}</span>
                </div>
              </div>

              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                <DollarSign className="h-4 w-4" />
                Add Funds
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Savings;