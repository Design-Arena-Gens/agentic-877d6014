const continents = [
  {
    id: "north-america",
    d: "M120 110l48-32 36 8 24-16 28 24-16 42-46 20-32-6-30-34z"
  },
  {
    id: "south-america",
    d: "M210 196l32 30 12 36-14 40-30-16-8-56z"
  },
  {
    id: "europe",
    d: "M325 82l30-18 32 6 18 18-8 24-28 12-34-10z"
  },
  {
    id: "africa",
    d: "M340 126l40 10 22 30-10 58-32 18-28-24-8-54z"
  },
  {
    id: "asia",
    d: "M404 90l60-36 62 20 32 52-40 42-58 8-36-26-18-32z"
  },
  {
    id: "australia",
    d: "M500 206l46 12 18 28-22 26-42-12-12-28z"
  }
];

const economicIcons = [
  { id: "stocks", cx: 210, cy: 124, r: 5, label: "NYSE" },
  { id: "oil", cx: 358, cy: 180, r: 5, label: "Oil" },
  { id: "tech", cx: 454, cy: 136, r: 5, label: "Automation" },
  { id: "industry", cx: 312, cy: 156, r: 5, label: "Industry" }
];

export default function SceneWorldMap() {
  return (
    <div className="world-map">
      <div className="grain" aria-hidden />
      <svg viewBox="0 0 640 320" role="img" aria-labelledby="scene1-title">
        <title id="scene1-title">Cinematic globe highlighting the 1969 economic landscape</title>
        <defs>
          <radialGradient id="map-glow" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="rgba(25, 162, 185, 0.55)" />
            <stop offset="55%" stopColor="rgba(12, 63, 94, 0.45)" />
            <stop offset="100%" stopColor="rgba(3, 20, 33, 0.1)" />
          </radialGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <rect width="640" height="320" fill="url(#map-glow)" />
        <g opacity="0.55">
          <g stroke="rgba(63, 141, 160, 0.35)" strokeWidth="0.6">
            {Array.from({ length: 8 }).map((_, index) => (
              <line key={`lat-${index}`} x1="0" x2="640" y1={40 * (index + 1)} y2={40 * (index + 1)} />
            ))}
            {Array.from({ length: 15 }).map((_, index) => (
              <line key={`long-${index}`} y1="0" y2="320" x1={40 * (index + 1)} x2={40 * (index + 1)} />
            ))}
          </g>
        </g>
        <g className="map-glow" filter="url(#softGlow)">
          <circle cx="320" cy="160" r="140" fill="rgba(227, 191, 107, 0.16)" />
        </g>
        <g>
          {continents.map(({ id, d }) => (
            <path key={id} className="continent" d={d} />
          ))}
        </g>
        <g>
          {economicIcons.map(({ id, cx, cy, r, label }) => (
            <g key={id} className="icon neon-glow">
              <circle cx={cx} cy={cy} r={r + 6} fill="rgba(5, 31, 46, 0.45)" />
              <circle cx={cx} cy={cy} r={r} />
              <text x={cx + 12} y={cy + 4} fill="rgba(222, 231, 236, 0.78)" fontSize="11">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
