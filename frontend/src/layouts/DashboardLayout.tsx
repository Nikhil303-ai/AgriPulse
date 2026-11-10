
import { useEffect, useState, type ReactNode } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [activePage, setActivePage] = useState('Dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  // Apply the selected theme to the document.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Toggle between light and dark themes.
  const handleToggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light',
    )
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          activePage={activePage}
          onNavigate={setActivePage}
        />
      </div>

      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <Header
          theme={theme}
          onToggleTheme={handleToggleTheme}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Page Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-5 sm:p-8">
          {children}
        </main>

      </div>
    </div>
  )
}
