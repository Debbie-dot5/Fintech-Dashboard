export interface AccountData {
    balance: number
    savingsTotal: number
    investmentsTotal: number
    monthlyIncome: number
    monthlyExpenses: number
    currency: string
  }
  
  export interface Investment {
    id: number
    name: string
    value: number
    allocation: number
    growth: number
    risk: string
  }
  
  export interface SavingsGoal {
    id: number
    name: string
    currentAmount: number
    targetAmount: number
    deadline: string
    category: string
  }
  
  export interface Transaction {
    id: number
    date: string
    description: string
    amount: number
    type: "income" | "expense" | "investment" | "savings"
    category: string
  }
  
  