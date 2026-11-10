
import {
  ArrowDownRight,
  ArrowUpRight,
  CloudSun,
  Database,
  Leaf,
  MapPin,
  RefreshCw,
  Search,
  Sprout,
  TrendingUp,
  Wheat,
} from 'lucide-react'

const overviewCards = [
  {
    title: 'Market Prices',
    description: 'Latest verified commodity prices',
    icon: TrendingUp,
  },
  {
    title: 'Active Markets',
    description: 'Markets covered by our data sources',
    icon: MapPin,
  },
  {
    title: 'Price Forecasts',
    description: 'Available model-generated forecasts',
    icon: Sprout,
  },
  {
    title: 'Weather Insights',
    description: 'Weather observations and climate signals',
    icon: CloudSun,
  },
]

// Reusable component for commodity price movement indicators.
function PriceMovement({
  direction,
}: {
  direction: 'up' | 'down'
}) {
  const isUp = direction === 'up'
  const Icon = isUp ? ArrowUpRight : ArrowDownRight

  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted">
      <Icon size={15} />
      {isUp ? 'Price increase' : 'Price decrease'}
    </span>
  )
}

// Reusable empty state for sections awaiting verified data.
function DataPending({
  message,
}: {
  message: string
}) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-background px-5 py-8 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-muted text-muted">
        <Database size={21} />
      </div>

      <p className="max-w-sm text-sm text-muted">
        {message}
      </p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-8">

      {/* Page Heading */}
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sprout size={15} />
            Agricultural Intelligence Platform
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Market Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Understand agricultural market movements, explore price
            trends, and make more informed decisions with data-driven
            insights.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-muted sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Data integration in progress
        </div>
      </section>

      {/* Overview Cards */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Platform Overview
            </h2>
            <p className="mt-1 text-xs text-muted">
              Key agricultural intelligence indicators
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => {
            const Icon = card.icon

            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={21} />
                  </div>

                  <span className="rounded-lg bg-surface-muted px-2 py-1 text-[10px] font-semibold text-muted">
                    Awaiting data
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-foreground">
                  {card.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-muted">
                  {card.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-muted">
                  Not available yet
                </p>

                {card.title === 'Market Prices' && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    <PriceMovement direction="up" />
                    <PriceMovement direction="down" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Main Analytics Area */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Price Trends */}
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 xl:col-span-2">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={19} className="text-primary" />
                <h2 className="text-base font-semibold text-foreground">
                  Agricultural Price Trends
                </h2>
              </div>

              <p className="mt-1 text-xs text-muted">
                Historical commodity price movements across markets
              </p>
            </div>

            <span className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted">
              Historical analysis
            </span>
          </div>

          <DataPending
            message="Historical price visualizations will appear here once verified market price data has been collected and processed."
          />
        </div>

        {/* Forecast Overview */}
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <div className="mb-6 flex items-center gap-2">
            <Leaf size={19} className="text-primary" />
            <h2 className="text-base font-semibold text-foreground">
              Forecast Overview
            </h2>
          </div>

          <DataPending
            message="Price forecasts will become available after model development, validation, and evaluation."
          />
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Commodity Intelligence */}
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Wheat size={19} className="text-primary" />
                <h2 className="text-base font-semibold text-foreground">
                  Commodity Intelligence
                </h2>
              </div>

              <p className="mt-1 text-xs text-muted">
                Market activity and commodity-level analysis
              </p>
            </div>

            <Search size={18} className="text-muted" />
          </div>

          <DataPending
            message="Commodity comparisons, market arrivals, and price analysis will be displayed here when source data is available."
          />
        </div>

        {/* Supply and Demand */}
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-2">
            <RefreshCw size={19} className="text-primary" />
            <h2 className="text-base font-semibold text-foreground">
              Supply & Demand Intelligence
            </h2>
          </div>

          <DataPending
            message="Supply-side indicators and available demand proxies will be analyzed here. Market arrivals will not be treated as direct demand measurements."
          />
        </div>
      </section>

      {/* Environmental Intelligence */}
      <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <CloudSun size={19} className="text-primary" />
              <h2 className="text-base font-semibold text-foreground">
                Weather & Climate Intelligence
              </h2>
            </div>

            <p className="mt-1 text-xs text-muted">
              Environmental conditions and their relationship with agricultural markets
            </p>
          </div>

          <span className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted">
            Environmental analysis
          </span>
        </div>

        <DataPending
          message="Weather observations, rainfall patterns, temperature indicators, and their potential relationship with commodity prices will appear here after weather data integration."
        />
      </section>

      {/* Decision Support */}
      <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <Leaf size={15} />
              Decision Support
            </div>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Turn agricultural data into informed decisions.
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              AgriPulse will combine market history, supply indicators,
              weather information, and validated forecasting models to
              provide useful agricultural market insights.
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <ArrowUpRight size={27} />
          </div>
        </div>

        <div className="relative mt-6 border-t border-border pt-4">
          <p className="text-xs leading-5 text-muted">
            Decision-support recommendations will be introduced after
            reliable data integration and model evaluation. Forecasts
            will include appropriate uncertainty information and will
            not represent guaranteed prices or profits.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 border-t border-border py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          AgriPulse — AI-Based Agriculture Market Price Forecasting
          and Decision-Support System
        </p>

        <p>
          Built for data-driven agricultural intelligence
        </p>
      </footer>

    </div>
  )
}
