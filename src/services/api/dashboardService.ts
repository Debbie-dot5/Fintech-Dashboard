import { apiService } from "./apiClient"
import type { DashboardData } from "../../types/dashboard"

// Dashboard API service
const dashboardService = {
  // Get dashboard data
  getDashboardData: async (): Promise<DashboardData> => {
    try {
      // Replace with your actual API endpoint
      return await apiService.get<DashboardData>("/post")
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error)
      throw error
    }
  },

  // Get account summary
  getAccountSummary: async () => {
    try {
      return await apiService.get("/dashboard/account-summary")
    } catch (error) {
      console.error("Failed to fetch account summary:", error)
      throw error
    }
  },

  // Get investment portfolio
  getInvestmentPortfolio: async () => {
    try {
      return await apiService.get("/dashboard/investment-portfolio")
    } catch (error) {
      console.error("Failed to fetch investment portfolio:", error)
      throw error
    }
  },

  // Get recent transactions
  getRecentTransactions: async (limit = 10) => {
    try {
      return await apiService.get(`/transactions/recent?limit=${limit}`)
    } catch (error) {
      console.error("Failed to fetch recent transactions:", error)
      throw error
    }
  },

  // Get savings goals
  getSavingsGoals: async () => {
    try {
      return await apiService.get("/savings/goals")
    } catch (error) {
      console.error("Failed to fetch savings goals:", error)
      throw error
    }
  },
}

export default dashboardService

