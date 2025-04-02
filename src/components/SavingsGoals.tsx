import { useAppContext } from "../context/AppContext"

const SavingsGoals = () => {
  const { savingsGoals, isLoading } = useAppContext()

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Savings Goals</h2>
      <div className="space-y-6">
        {savingsGoals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100
          const deadline = new Date(goal.deadline)
          const today = new Date()
          const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

          return (
            <div key={goal.id}>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">{goal.name}</h3>
                <span className="text-sm text-gray-500">
                  ${goal.currentAmount.toLocaleString()} of ${goal.targetAmount.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">{progress.toFixed(0)}% complete</span>
                <span className="text-sm text-gray-500">{daysLeft} days left</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SavingsGoals

