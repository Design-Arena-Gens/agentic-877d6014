const overlays = [
  { label: "Launch Cost", value: "$25.4B", x: 420, y: 120 },
  { label: "Jobs Supported", value: "400K+", x: 460, y: 174 },
  { label: "R&D Spillover", value: "11%", x: 442, y: 228 }
];

export default function SceneMoonLanding() {
  return (
    <div className="chart" role="img" aria-labelledby="scene5-title">
      <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet">
        <title id="scene5-title">Moon landing and its economic reverberations</title>
        <defs>
          <radialGradient id="scene5-bg" cx="60%" cy="30%" r="80%">
            <stop offset="0%" stopColor="rgba(22, 112, 138, 0.6)" />
            <stop offset="55%" stopColor="rgba(6, 46, 66, 0.5)" />
            <stop offset="100%" stopColor="rgba(3, 20, 33, 0.92)" />
          </radialGradient>
          <radialGradient id="rocket-plume" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(227, 191, 107, 0.65)" />
            <stop offset="65%" stopColor="rgba(18, 104, 126, 0.4)" />
            <stop offset="100%" stopColor="rgba(3, 20, 33, 0.1)" />
          </radialGradient>
          <linearGradient id="rocket-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f2f4f6" />
            <stop offset="100%" stopColor="#c9d0d5" />
          </linearGradient>
          <linearGradient id="rocket-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(4, 40, 60, 0.65)" />
            <stop offset="100%" stopColor="rgba(2, 18, 28, 0)" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" fill="url(#scene5-bg)" />
        <circle cx="190" cy="120" r="90" fill="rgba(40, 108, 132, 0.32)" />
        <circle cx="190" cy="120" r="68" fill="rgba(225, 198, 116, 0.18)" />
        <g transform="translate(180, 60)" className="neon-glow">
          <polygon points="32 0 56 92 8 92" fill="url(#rocket-body)" />
          <polygon points="32 0 48 32 16 32" fill="rgba(227, 191, 107, 0.4)" />
          <rect x="26" y="32" width="12" height="34" fill="rgba(6, 56, 78, 0.85)" />
          <rect x="20" y="66" width="24" height="8" fill="rgba(195, 210, 218, 0.85)" />
          <polygon points="8 92 56 92 46 124 18 124" fill="url(#rocket-shadow)" />
          <polygon points="18 124 46 124 32 158" fill="url(#rocket-plume)" />
          <g opacity="0.5">
            <polygon points="10 92 0 118 14 118" fill="rgba(201, 180, 96, 0.5)" />
            <polygon points="54 92 64 118 50 118" fill="rgba(201, 180, 96, 0.5)" />
          </g>
        </g>
        <g opacity="0.7">
          <path
            d="M120 300c24-18 64-30 104-32s80 8 120 4 80-24 112-28 62 8 74 24"
            fill="none"
            stroke="rgba(205, 220, 228, 0.3)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M120 300c24-18 64-30 104-32s80 8 120 4 80-24 112-28 62 8 74 24"
            fill="none"
            stroke="rgba(227, 191, 107, 0.32)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
        <g>
          <text x="80" y="44" fill="rgba(226, 238, 244, 0.9)" fontSize="18" letterSpacing="0.28em">
            APOLLO 11 ECONOMIC IMPACT
          </text>
          <text x="80" y="70" fill="rgba(205, 220, 228, 0.82)" fontSize="13">
            Defense-to-innovation spillovers and fiscal stimulus in the space race.
          </text>
        </g>
        {overlays.map((overlay, index) => (
          <g key={overlay.label} transform={`translate(${overlay.x}, ${overlay.y})`}>
            <rect
              x="-60"
              y="-28"
              width="140"
              height="54"
              rx="10"
              fill="rgba(8, 50, 70, 0.72)"
              stroke="rgba(73, 166, 192, 0.48)"
              className="neon-glow"
            />
            <text x="10" y="-6" fill="rgba(143, 199, 210, 0.82)" fontSize="12" letterSpacing="0.16em" textAnchor="middle">
              {overlay.label.toUpperCase()}
            </text>
            <text x="10" y="16" fill="#e3bf6b" fontSize="18" fontWeight="600" textAnchor="middle">
              {overlay.value}
            </text>
          </g>
        ))}
        <text x="80" y="332" fill="rgba(202, 215, 223, 0.72)" fontSize="12">
          Post-landing capital formation accelerated in semiconductors, materials, and systems engineering.
        </text>
      </svg>
    </div>
  );
}
