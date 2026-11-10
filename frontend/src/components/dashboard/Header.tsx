
import {
  Search,
  Bell,
  Sun,
  Moon,
  Sprout,
} from 'lucide-react'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export default function Header({
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="flex h-20 w-full items-center justify-between gap-4 border-b border-border bg-surface px-5 sm:px-8">

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />

        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search markets, commodities..."
          aria-label="Search markets and commodities"
          className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </div>

      {/* Header Actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">

        {/* Platform Status */}
        <div className="hidden items-center gap-2 rounded-full bg-surface-muted px-3 py-2 md:flex">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-medium text-muted">
            Market Intelligence
          </span>
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          {theme === 'light' ? (
            <Moon size={19} />
          ) : (
            <Sun size={19} />
          )}
        </button>

        {/* Notifications */}
        <div
          aria-label="Notifications"
          title="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
        </div>

        {/* User Profile Placeholder */}
        <div className="flex items-center gap-3 border-l border-border pl-3 sm:pl-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sprout size={20} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">
              AgriPulse
            </p>
            <p className="text-xs text-muted">
              Workspace
            </p>
          </div>
        </div>

      </div>
    </header>
  )
}
