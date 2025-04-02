"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight } from "lucide-react"

const Transactions = () => {
  const { transactions, isLoading } = useAppContext()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || transaction.type === filterType
    return matchesSearch && matchesFilter
  })

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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <select
                className="appearance-none pl-10 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expenses</option>
                <option value="investment">Investments</option>
                <option value="savings">Savings</option>
              </select>
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <span>{transaction.description}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm">{transaction.category}</td>
                  <td className="px-4 py-4 text-sm capitalize">{transaction.type}</td>
                  <td className={`px-4 py-4 text-right font-medium ${getTransactionColor(transaction.type)}`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No transactions found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transactions

