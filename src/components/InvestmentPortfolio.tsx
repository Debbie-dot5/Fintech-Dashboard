import { Doughnut } from "react-chartjs-2"
import { useAppContext } from "../context/AppContext"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

//const COLORS = ["#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"]
const COLORS = ['rgb(255, 99, 132)', "#3B82F6", "#8B5CF6", "#F59E0B"]


const InvestmentPortfolio = () => {
  const { investments, isLoading } = useAppContext()

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow h-96 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="flex h-64">
          <div className="w-1/2 bg-gray-200 rounded"></div>
          <div className="w-1/2 space-y-4 pl-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Prepare Chart.js Data
  const data = {
    labels: investments.map((inv) => inv.name),
    datasets: [
      {
        data: investments.map((inv) => inv.value),
        backgroundColor: COLORS,
        hoverOffset: 6,
      },
    ],
  }

  // Chart.js Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'doughnut'>) => {
            const value = tooltipItem.raw.toLocaleString()
            return `$${value}`
          },
        },
      },
    },
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Investment Portfolio</h2>
      <div className="flex flex-col md:flex-row">
        {/* Doughnut Chart */}
        <div className="w-full md:w-1/2 h-64 flex justify-center">
          <Doughnut data={data} options={options} />
        </div>

        {/* Investment Details */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="space-y-4">
            {investments.map((investment, index) => (
              <div key={investment.id} className="flex items-center">
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
                    <p>{investment.allocation}%</p>
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
  )
}

export default InvestmentPortfolio
