"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./Routes/Dashboard"
import Investments from "./Routes/Investment"
import Savings from "./Routes/Savings"
import Transactions from "./Routes/Transactions"
import Settings from "./Routes/Settings"
import MobileHeader from "./components/MobileHeader"
import { AppProvider } from "./context/AppContext"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="flex flex-col flex-1 w-full overflow-hidden">
            <MobileHeader setSidebarOpen={setSidebarOpen} />

            <main className="flex-1 overflow-y-auto pt-2 pb-6 px-4 bg-gray-50 md:px-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/savings" element={<Savings />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App

