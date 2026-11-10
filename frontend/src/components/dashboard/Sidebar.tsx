
import {
  LayoutDashboard,
  Store,
  ChartLine,
  TrendingUp,
  Wheat,
  CloudSun,
  Lightbulb,
  Settings,
  CircleHelp,
  Sprout,
  type LucideIcon,
} from 'lucide-react'

interface NavigationItem {
  label: string
  icon: LucideIcon
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

interface SidebarProps {
  activePage: string
  onNavigate: (page: string) => void
}

const navigationGroups: NavigationGroup[] = [
  {
    title: 'OVERVIEW',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'MARKET INTELLIGENCE',
    items: [
      { label: 'Market Overview', icon: Store },
      { label: 'Price Trends', icon: ChartLine },
      { label: 'Price Forecasts', icon: TrendingUp },
      { label: 'Supply & Demand', icon: Wheat },
    ],
  },
  {
    title: 'ENVIRONMENT',
    items: [
      { label: 'Weather Insights', icon: CloudSun },
    ],
  },
  {
    title: 'DECISION SUPPORT',
    items: [
      { label: 'Smart Insights', icon: Lightbulb },
    ],
  },
]

export default function Sidebar({
  activePage,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-surface">

      {/* Brand */}
      <div className="flex h-20 items-center gap-3 border-b border-border px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sprout size={23} strokeWidth={2.2} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            AgriPulse
          </h1>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-muted">
            MARKET INTELLIGENCE
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-7">
        {navigationGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-muted">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = activePage === item.label

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavigate(item.label)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted hover:bg-surface-muted hover:text-foreground'
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.9} />

                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="space-y-1 border-t border-border p-4">
        <button
          type="button"
          onClick={() => onNavigate('Help & Support')}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          <CircleHelp size={18} />
          Help & Support
        </button>

        <button
          type="button"
          onClick={() => onNavigate('Settings')}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          <Settings size={18} />
          Settings
        </button>
      </div>

      {/* Platform Identity */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-surface-muted p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Sprout size={19} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-foreground">
              AgriPulse Platform
            </p>
            <p className="text-[10px] text-muted">
              Agricultural Intelligence
            </p>
          </div>
        </div>
      </div>

    </aside>
  )
}
