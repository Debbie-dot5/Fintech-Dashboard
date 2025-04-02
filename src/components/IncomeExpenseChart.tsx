import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useAppContext } from "../context/AppContext"

const IncomeExpenseChart = () => {
  const { accountData, isLoading } = useAppContext()

  if (isLoading || !accountData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow h-80 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    )
  }

  // Mock data for the chart - in a real app, this would come from the API
  const data = [
    { name: "Jan", income: 3800, expenses: 2900 },
    { name: "Feb", income: 3900, expenses: 3100 },
    { name: "Mar", income: 4100, expenses: 3000 },
    { name: "Apr", income: 4200, expenses: 3100 },
    { name: "May", income: 4200, expenses: 3200 },
    { name: "Jun", income: 4300, expenses: 3300 },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, ""]} />
            <Bar dataKey="income" name="Income" fill='rgba(255, 99, 132)' />
            <Bar dataKey="expenses" name="Expenses" fill='rgba(54, 162, 235, 0.6)' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default IncomeExpenseChart

