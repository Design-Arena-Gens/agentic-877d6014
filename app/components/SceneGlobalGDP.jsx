const regions = [
  { name: "North America", value: "$1.1T", x: 160, y: 110 },
  { name: "Western Europe", value: "$1.2T", x: 320, y: 96 },
  { name: "Eastern Europe", value: "$0.45T", x: 360, y: 130 },
  { name: "Latin America", value: "$0.32T", x: 200, y: 190 },
  { name: "Asia-Pacific", value: "$1.4T", x: 460, y: 130 },
  { name: "Africa", value: "$0.17T", x: 340, y: 172 }
];

export default function SceneGlobalGDP() {
  return (
    <div className="world-map" role="img" aria-labelledby="scene4-title">
      <div className="grain" aria-hidden />
      <svg viewBox="0 0 640 320">
        <title id="scene4-title">Global GDP patterns slowing into the 1970s</title>
        <defs>
          <radialGradient id="gdp-glow" cx="45%" cy="47%" r="75%">
            <stop offset="0%" stopColor="rgba(25, 164, 186, 0.55)" />
            <stop offset="50%" stopColor="rgba(10, 78, 103, 0.42)" />
            <stop offset="100%" stopColor="rgba(2, 18, 28, 0.1)" />
          </radialGradient>
        </defs>
        <rect width="640" height="320" fill="url(#gdp-glow)" />
        <g opacity="0.5">
          {Array.from({ length: 7 }).map((_, index) => (
            <line key={`lat-${index}`} x1="40" x2="600" y1={60 + index * 32} y2={60 + index * 32} stroke="rgba(60, 130, 148, 0.28)" />
          ))}
          {Array.from({ length: 12 }).map((_, index) => (
            <line key={`lon-${index}`} y1="48" y2="280" x1={60 + index * 44} x2={60 + index * 44} stroke="rgba(60, 130, 148, 0.28)" />
          ))}
        </g>
        <g opacity="0.8">
          <path
            className="continent"
            d="M140 126l62-42 42 6 18 18 28-12 34 20 18-20 44-14 60 18 26 34-34 34-66 22-56 10-50-16-32-26-40 16-34-10-22-16z"
          />
        </g>
        {regions.map((region) => (
          <g key={region.name} className="neon-glow">
            <circle cx={region.x} cy={region.y} r="18" fill="rgba(3, 26, 42, 0.64)" stroke="rgba(227, 191, 107, 0.45)" />
            <text x={region.x} y={region.y - 22} textAnchor="middle" fill="rgba(215, 229, 236, 0.8)" fontSize="12" letterSpacing="0.14em">
              {region.value}
            </text>
            <text x={region.x} y={region.y + 4} textAnchor="middle" fill="#e3bf6b" fontSize="11">
              {region.name}
            </text>
          </g>
        ))}
        <text x="40" y="46" fill="rgba(214, 228, 236, 0.88)" letterSpacing="0.2em" fontSize="14">
          GLOBAL GDP MOMENTUM
        </text>
        <text x="40" y="300" fill="rgba(200, 214, 222, 0.72)" fontSize="12">
          Real output growth slows amid tightening financial conditions, 1969.
        </text>
      </svg>
    </div>
  );
}
