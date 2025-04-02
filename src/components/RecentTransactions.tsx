import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { useAppContext } from "../context/AppContext"

const RecentTransactions = () => {
  const { transactions, isLoading } = useAppContext()

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Get only the 5 most recent transactions
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "income":
        return <ArrowUpRight className="h-5 w-5 text-emerald-500" />
      case "expense":
        return <ArrowDownRight className="h-5 w-5 text-red-500" />
      case "investment":
        return <ArrowUpRight className="h-5 w-5 text-purple-500" />
      case "savings":
        return <ArrowUpRight className="h-5 w-5 text-blue-500" />
      default:
        return <ArrowUpRight className="h-5 w-5 text-gray-500" />
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "income":
        return "text-emerald-500"
      case "expense":
        return "text-red-500"
      case "investment":
        return "text-purple-500"
      case "savings":
        return "text-blue-500"
      default:
        return "text-gray-500"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
              {getTransactionIcon(transaction.type)}
            </div>
            <div className="flex-1">
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">
                {formatDate(transaction.date)} • {transaction.category}
              </p>
            </div>
            <div className={`font-medium ${getTransactionColor(transaction.type)}`}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 text-center text-sm text-emerald-600 hover:text-emerald-700 font-medium">
        View All Transactions
      </button>
    </div>
  )
}

export default RecentTransactions

