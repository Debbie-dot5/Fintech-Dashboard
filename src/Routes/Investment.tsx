"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"

const COLORS = ["#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"]

const Investments = () => {
  const { investments, isLoading } = useAppContext()
  const [selectedInvestment, setSelectedInvestment] = useState<number | null>(null)

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  // Mock performance data - in a real app, this would come from the API
  const performanceData = [
    { month: "Jan", Tech: 2400, SP500: 2000, Emerging: 1800, Bonds: 1000 },
    { month: "Feb", Tech: 2200, SP500: 2100, Emerging: 1700, Bonds: 1050 },
    { month: "Mar", Tech: 2800, SP500: 2300, Emerging: 1600, Bonds: 1100 },
    { month: "Apr", Tech: 2600, SP500: 2400, Emerging: 1900, Bonds: 1150 },
    { month: "May", Tech: 3000, SP500: 2500, Emerging: 1750, Bonds: 1200 },
    { month: "Jun", Tech: 3200, SP500: 2700, Emerging: 1650, Bonds: 1250 },
  ]

  const data = investments.map((inv) => ({
    name: inv.name,
    value: inv.value,
  }))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Investments</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Portfolio Allocation</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      onClick={() => setSelectedInvestment(index)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div
                  key={investment.id}
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${selectedInvestment === index ? "bg-gray-100" : ""}`}
                  onClick={() => setSelectedInvestment(index)}
                >
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{investment.name}</p>
                      <p className="font-medium">${investment.value.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>{investment.allocation}% of portfolio</p>
                      <p className={investment.growth >= 0 ? "text-emerald-500" : "text-red-500"}>
                        {investment.growth >= 0 ? "+" : ""}
                        {investment.growth}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Performance History</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, ""]} />
              <Legend />
              <Line type="monotone" dataKey="Tech" stroke="#10B981" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="SP500" stroke="#3B82F6" />
              <Line type="monotone" dataKey="Emerging" stroke="#8B5CF6" />
              <Line type="monotone" dataKey="Bonds" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Risk Assessment</h2>
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={`risk-${investment.id}`}>
                <div className="flex justify-between mb-1">
                  <span>{investment.name}</span>
                  <span>{investment.risk}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      investment.risk === "Low"
                        ? "bg-emerald-500"
                        : investment.risk === "Medium"
                          ? "bg-amber-500"
                          : investment.risk === "High"
                            ? "bg-red-500"
                            : "bg-purple-500"
                    }`}
                    style={{
                      width:
                        investment.risk === "Low"
                          ? "30%"
                          : investment.risk === "Medium"
                            ? "60%"
                            : investment.risk === "High"
                              ? "90%"
                              : "15%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-emerald-600">Diversify Portfolio</h3>
              <p className="text-sm text-gray-600 mt-1">Consider adding more bonds to reduce overall portfolio risk.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-emerald-600">Rebalance</h3>
              <p className="text-sm text-gray-600 mt-1">Your tech allocation is above target. Consider rebalancing.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-emerald-600">Tax Optimization</h3>
              <p className="text-sm text-gray-600 mt-1">Review tax-loss harvesting opportunities before year end.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investments

