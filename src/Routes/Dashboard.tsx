import AccountSummary from "../components/AccountSummary"
import InvestmentPortfolio from "../components/InvestmentPortfolio"
import SavingsGoals from "../components/SavingsGoals"
import RecentTransactions from "../components/RecentTransactions"
import IncomeExpenseChart from "../components/IncomeExpenseChart"
import { useAppContext } from "../context/AppContext"

const Dashboard = () => {
  const { error } = useAppContext()

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="btn-primary px-4 py-2  text-white rounded-lg hover:bg-emerald-600 cursor-pointer ">+ Add Money</button>
      </div>

      <AccountSummary />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvestmentPortfolio />
        <IncomeExpenseChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SavingsGoals />
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard

