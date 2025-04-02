"use client"

import { Link, useLocation } from "react-router-dom"
import { Home, TrendingUp, PiggyBank, CreditCard, Settings, X } from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation()

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${
          sidebarOpen ? "opacity-10" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform md:translate-x-0 md:static md:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-b-gray-300">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full btn-primary flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="ml-2 text-lg font-semibold">Finify</span>
          </Link>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  location.pathname === "/" ? "btn-primary text-white-200" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/investments"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  location.pathname === "/investments"
                    ? "btn-primary text-white-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <TrendingUp className="h-5 w-5 mr-3" />
                Investments
              </Link>
            </li>
            <li>
              <Link
                to="/savings"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  location.pathname === "/savings"
                    ? "btn-primary text-white-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <PiggyBank className="h-5 w-5 mr-3" />
                Savings
              </Link>
            </li>
            <li>
              <Link
                to="/transactions"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  location.pathname === "/transactions"
                    ? "btn-primary text-white-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <CreditCard className="h-5 w-5 mr-3" />
                Transactions
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  location.pathname === "/settings"
                    ? "btn-primary text-white-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar

