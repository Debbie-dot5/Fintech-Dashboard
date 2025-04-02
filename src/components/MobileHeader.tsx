

import { Menu, Bell, User } from "lucide-react"
import { useAppContext } from "../context/AppContext"

interface MobileHeaderProps {
  setSidebarOpen: (open: boolean) => void
}

const MobileHeader = ({ setSidebarOpen }: MobileHeaderProps) => {
  const { accountData } = useAppContext()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-b-gray-300 md:px-6">
      <button className="p-1 text-gray-600 md:hidden" onClick={() => setSidebarOpen(true)}>
        <Menu className="h-6 w-6" />
      </button>

      <div className="hidden md:flex md:items-center">
        <h1 className="text-xl font-semibold text-gray-800">Welcome back!</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-1 text-gray-600 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center">
          <div className="mr-2 text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-700">Mary</p>
            <p className="text-xs text-gray-500">
              Balance: {accountData ? `$${accountData.balance.toLocaleString()}` : "..."}
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader

