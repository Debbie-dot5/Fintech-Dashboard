"use client"

import { useState } from "react"
import { Bell, CreditCard, Lock, User, Shield, HelpCircle } from "lucide-react"

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "help", label: "Help & Support", icon: HelpCircle },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r">
            <nav className="p-4">
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`w-full flex items-center px-4 py-3 text-sm rounded-lg ${
                        activeTab === tab.id ? "btn-primary2 text-white" : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <tab.icon className="h-5 w-5 mr-3" />
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex-1 p-6">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-12 w-12 text-gray-600 cursor-pointer" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Profile Photo</h3>
                      <p className="text-sm text-gray-500 mb-3">This will be displayed on your profile</p>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          className="px-4 py-2 btn-primary text-white rounded-lg hover:bg-emerald-600 cursor-pointer"
                        >
                          Upload
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        defaultValue="Mary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        defaultValue="Anna"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        defaultValue="maryana.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="123 Main St, Anytown, CA 12345"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 btn-primary text-white rounded-lg hover:bg-emerald-600 cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "payment" && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Payment Methods</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-16 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold mr-4">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-emerald-500">Edit</button>
                      <button className="text-gray-500 hover:text-red-500">Remove</button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-16 bg-red-500 rounded-md flex items-center justify-center text-white font-bold mr-4">
                        MC
                      </div>
                      <div>
                        <p className="font-medium">Mastercard ending in 5555</p>
                        <p className="text-sm text-gray-500">Expires 08/2024</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-emerald-500">Edit</button>
                      <button className="text-gray-500 hover:text-red-500">Remove</button>
                    </div>
                  </div>

                  <button className="w-full py-3 border border-dashed rounded-lg text-emerald-500 hover:bg-emerald-50 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Add New Payment Method
                  </button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Notification Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Account activity</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Weekly summary</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Investment alerts</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Promotional emails</label>
                        <input type="checkbox" className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Transaction alerts</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Savings goal progress</label>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Investment performance</label>
                        <input type="checkbox" className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex-1">Tips and recommendations</label>
                        <input type="checkbox" className="h-5 w-5 text-emerald-500 rounded focus:ring-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Two-factor authentication is enabled</p>
                        <p className="text-sm text-gray-500">Your account is secured with SMS verification</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        Manage
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Login Sessions</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-gray-500">Chrome on macOS • New York, USA</p>
                          </div>
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full">Active</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Previous Session</p>
                            <p className="text-sm text-gray-500">Safari on iPhone • New York, USA</p>
                          </div>
                          <button className="text-red-500 text-sm">Revoke</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

