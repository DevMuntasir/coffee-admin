import { useId } from 'react';

/** Static, accessible chart previews using the original template's sample series. */
type ChartKind = 'revenue-chart' | 'category-chart' | 'sales-chart' | 'statistic-chart';
const revenue = [4, 2, 3.5, 3, 2, 2.8, 3.2];
const orders = [40, 35, 45, 44, 63, 50, 84];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function ChartPreview({ kind }: { kind: ChartKind }) {
  const gradientId = useId();
  if (kind === 'category-chart')
    return (
      <div
        className="flex h-48 items-center justify-center"
        role="img"
        aria-label="Demo category statistics: Delivery 30%, Reservation 20%, Take Away 15%, Dine 35%"
      >
        <div
          className="relative size-40 rounded-full"
          style={{
            background:
              'conic-gradient(#14b51d 0% 30%, #ffa80b 30% 50%, #0d76e1 50% 65%, #a91cff 65% 100%)',
          }}
        >
          <div className="absolute inset-7 grid place-content-center rounded-full bg-card text-center">
            <span className="text-xs text-muted-foreground">Dine</span>
            <strong className="text-xl">35%</strong>
          </div>
        </div>
      </div>
    );
  if (kind === 'sales-chart')
    return (
      <svg
        viewBox="0 0 320 200"
        className="mx-auto h-56 w-full max-w-sm"
        role="img"
        aria-label="Demo sales performance: 40 percent"
      >
        <title>Sales performance — template sample: 40 percent</title>
        <path
          d="M 40 155 A 120 120 0 0 1 280 155"
          fill="none"
          strokeWidth="24"
          className="stroke-muted"
        />
        <path
          d="M 40 155 A 120 120 0 0 1 280 155"
          fill="none"
          strokeWidth="24"
          stroke="#ffa80b"
          pathLength="100"
          strokeDasharray="40 100"
        />
        <text
          x="160"
          y="130"
          textAnchor="middle"
          className="fill-foreground text-3xl font-semibold"
        >
          40%
        </text>
        <text x="160" y="155" textAnchor="middle" className="fill-muted-foreground text-sm">
          Sales
        </text>
      </svg>
    );
  const isArea = kind === 'statistic-chart';
  const points = orders.map((value, index) => `${45 + index * 92},${185 - value * 1.8}`).join(' ');
  return (
    <svg
      viewBox="0 0 640 230"
      className="h-auto min-h-40 w-full"
      role="img"
      aria-label={
        isArea
          ? 'Demo orders by day: 40, 35, 45, 44, 63, 50, 84'
          : 'Demo revenue by day: 4k, 2k, 3.5k, 3k, 2k, 2.8k, 3.2k'
      }
    >
      <title>{`${kind.replaceAll('-', ' ')} — template sample values`}</title>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d76e1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0d76e1" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((n) => (
        <g key={n}>
          <line
            x1="35"
            x2="630"
            y1={185 - n * 40}
            y2={185 - n * 40}
            className="stroke-border"
            strokeDasharray="4 4"
          />
          <text x="4" y={189 - n * 40} className="fill-muted-foreground text-[11px]">
            {isArea ? n * 25 : `${n}k`}
          </text>
        </g>
      ))}
      {isArea ? (
        <>
          <polygon points={`45,185 ${points} 597,185`} fill={`url(#${gradientId})`} />
          <polyline points={points} fill="none" strokeWidth="2" className="stroke-primary" />
          {orders.map((value, index) => (
            <circle
              key={index}
              cx={45 + index * 92}
              cy={185 - value * 1.8}
              r="3"
              className="fill-primary"
            />
          ))}
        </>
      ) : (
        revenue.map((value, index) => (
          <rect
            key={index}
            x={62 + index * 80}
            y={185 - value * 40}
            width="32"
            height={value * 40}
            rx="6"
            className="fill-primary"
          />
        ))
      )}
      {weekdays.map((day, index) => (
        <text
          key={day}
          x={isArea ? 45 + index * 92 : 78 + index * 80}
          y="214"
          textAnchor="middle"
          className="fill-muted-foreground text-[12px]"
        >
          {day}
        </text>
      ))}
    </svg>
  );
}
