import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet } from "lucide-react"
import { useAppContext } from "../context/AppContext"

const AccountSummary = () => {
  const { accountData, isLoading } = useAppContext()

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!accountData) return null

  const cards = [
    {
      title: "Total Balance",
      value: accountData.balance,
      icon: <DollarSign className="h-6 w-6 text-emerald-600" />,
      change: "+5.2%",
      positive: true,
    },
    {
      title: "Savings",
      value: accountData.savingsTotal,
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      change: "+2.4%",
      positive: true,
    },
    {
      title: "Investments",
      value: accountData.investmentsTotal,
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      change: "+8.1%",
      positive: true,
    },
    {
      title: "Monthly Cashflow",
      value: accountData.monthlyIncome - accountData.monthlyExpenses,
      icon: <CreditCard className="h-6 w-6 text-amber-600" />,
      change: "-3.2%",
      positive: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="text-2xl font-semibold mt-1">${card.value.toLocaleString()}</h3>
            </div>
            <div className="p-2 rounded-full bg-gray-50">{card.icon}</div>
          </div>
          <div className="flex items-center">
            {card.positive ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={card.positive ? "text-emerald-500" : "text-red-500"}>{card.change} from last month</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Import the missing icons
import { TrendingUp, CreditCard } from "lucide-react"

export default AccountSummary

