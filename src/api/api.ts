import type { AccountData, Investment, SavingsGoal, Transaction } from "../types"

// Mock data for the API
const mockAccountData: AccountData = {
  balance: 12450.75,
  savingsTotal: 5000,
  investmentsTotal: 7450.75,
  monthlyIncome: 4200,
  monthlyExpenses: 3100,
  currency: "USD",
}

const mockInvestments: Investment[] = [
  { id: 1, name: "Tech ETF", value: 2500, allocation: 33.5, growth: 12.4, risk: "Medium" },
  { id: 2, name: "S&P 500 Index", value: 3000, allocation: 40.3, growth: 8.7, risk: "Low" },
  { id: 3, name: "Emerging Markets", value: 1200, allocation: 16.1, growth: -2.3, risk: "High" },
  { id: 4, name: "Bonds", value: 750.75, allocation: 10.1, growth: 3.1, risk: "Very Low" },
]

const mockSavingsGoals: SavingsGoal[] = [
  {
    id: 1,
    name: "Emergency Fund",
    currentAmount: 3000,
    targetAmount: 5000,
    deadline: "2023-12-31",
    category: "Emergency",
  },
  { id: 2, name: "Vacation", currentAmount: 1200, targetAmount: 3000, deadline: "2023-08-15", category: "Travel" },
  { id: 3, name: "New Laptop", currentAmount: 800, targetAmount: 1500, deadline: "2023-10-01", category: "Tech" },
]

const mockTransactions: Transaction[] = [
  { id: 1, date: "2023-05-15", description: "Salary Deposit", amount: 4200, type: "income", category: "Salary" },
  { id: 2, date: "2023-05-16", description: "Rent Payment", amount: -1500, type: "expense", category: "Housing" },
  { id: 3, date: "2023-05-17", description: "Grocery Shopping", amount: -120, type: "expense", category: "Food" },
  {
    id: 4,
    date: "2023-05-18",
    description: "Investment Deposit",
    amount: -500,
    type: "investment",
    category: "Investment",
  },
  { id: 5, date: "2023-05-19", description: "Savings Transfer", amount: -300, type: "savings", category: "Savings" },
  { id: 6, date: "2023-05-20", description: "Freelance Work", amount: 350, type: "income", category: "Freelance" },
  { id: 7, date: "2023-05-21", description: "Utilities Bill", amount: -85, type: "expense", category: "Utilities" },
  { id: 8, date: "2023-05-22", description: "Dividend Payment", amount: 25, type: "income", category: "Investment" },
]

// Simulated API calls with delay to mimic real API behavior
export const fetchAccountData = (): Promise<AccountData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAccountData), 800)
  })
}

export const fetchInvestments = (): Promise<Investment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockInvestments), 1000)
  })
}

export const fetchSavingsGoals = (): Promise<SavingsGoal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSavingsGoals), 700)
  })
}

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTransactions), 900)
  })
}

