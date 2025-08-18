import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
        <h2 className="text-xl font-bold text-center mb-4">My App</h2>
        <nav>
          <NavLink to="/dashboard" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/finance" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Financial Tracker
          </NavLink>
          <NavLink to="/dashboard/certificates" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Certificate Gallery
          </NavLink>
          <NavLink to="/dashboard/tasks" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Task Notes
          </NavLink>
          <NavLink to="/dashboard/calendar" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Calendar
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
