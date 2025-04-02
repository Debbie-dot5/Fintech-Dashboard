"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { fetchAccountData, fetchInvestments, fetchSavingsGoals, fetchTransactions } from "../api/api"
import type { AccountData, Investment, SavingsGoal, Transaction } from "../types"

interface AppContextType {
  accountData: AccountData | null
  investments: Investment[]
  savingsGoals: SavingsGoal[]
  transactions: Transaction[]
  isLoading: boolean
  error: string | null
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [accountData, setAccountData] = useState<AccountData | null>(null)
  const [investments, setInvestments] = useState<Investment[]>([])
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const [accountResponse, investmentsResponse, savingsResponse, transactionsResponse] = await Promise.all([
          fetchAccountData(),
          fetchInvestments(),
          fetchSavingsGoals(),
          fetchTransactions(),
        ])

        setAccountData(accountResponse)
        setInvestments(investmentsResponse)
        setSavingsGoals(savingsResponse)
        setTransactions(transactionsResponse)
      } catch (err) {
        setError("Failed to load data. Please try again later.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        accountData,
        investments,
        savingsGoals,
        transactions,
        isLoading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

