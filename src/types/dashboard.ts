export interface AccountSummaryData {
    totalBalance: number
    totalInvestments: number
    income: number
    expenses: number
  }
  
  export interface Asset {
    name: string
    value: number
    percentage: number
    color: string
  }
  
  export interface InvestmentPortfolioData {
    totalValue: number
    returnPercentage: number
    assets: Asset[]
  }
  
  export interface Transaction {
    id: string
    description: string
    amount: number
    date: string
    type: "credit" | "debit"
  }
  
  export interface SavingsGoal {
    id: string
    name: string
    currentAmount: number
    targetAmount: number
    daysLeft: number
  }
  
  export interface DashboardData {
    accountSummary: AccountSummaryData
    investmentPortfolio: InvestmentPortfolioData
    recentTransactions: Transaction[]
    savingsGoals: SavingsGoal[]
  }
  
  