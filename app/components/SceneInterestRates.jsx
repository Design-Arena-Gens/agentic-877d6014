const rateData = [
  { label: "Q1 1967", prime: 5.5, treasury: 4.1 },
  { label: "Q3 1967", prime: 6.0, treasury: 4.3 },
  { label: "Q1 1968", prime: 6.5, treasury: 4.6 },
  { label: "Q3 1968", prime: 7.0, treasury: 5.0 },
  { label: "Q1 1969", prime: 7.5, treasury: 5.4 },
  { label: "Q3 1969", prime: 8.5, treasury: 6.1 }
];

export default function SceneInterestRates() {
  const primeMax = Math.max(...rateData.map(({ prime }) => prime));
  const treasuryMax = Math.max(...rateData.map(({ treasury }) => treasury));
  const maxValue = Math.max(primeMax, treasuryMax);

  const createPoints = (key) =>
    rateData
      .map((entry, index) => {
        const x = (index / (rateData.length - 1)) * 520 + 80;
        const y = 260 - (entry[key] / maxValue) * 200;
        return `${x},${y}`;
      })
      .join(" ");

  const primePoints = createPoints("prime");
  const treasuryPoints = createPoints("treasury");

  return (
    <div className="chart" role="img" aria-labelledby="scene3-title">
      <svg viewBox="0 0 640 320">
        <title id="scene3-title">Interest rate pressure in the lead-up to the 1970s</title>
        <defs>
          <linearGradient id="prime-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2eb5c6" />
            <stop offset="100%" stopColor="#e3bf6b" />
          </linearGradient>
          <linearGradient id="treasury-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(82, 178, 206, 0.95)" />
            <stop offset="100%" stopColor="rgba(68, 134, 180, 0.78)" />
          </linearGradient>
        </defs>
        <g className="chart-grid">
          {[0, 1, 2, 3, 4].map((step) => (
            <line key={step} x1="80" x2="600" y1={60 + step * 50} y2={60 + step * 50} className={step === 4 ? "axis" : ""} />
          ))}
          <line x1="80" x2="80" y1="60" y2="260" className="axis" />
          <line x1="600" x2="600" y1="60" y2="260" className="axis" />
        </g>
        <polyline className="chart-line glow" stroke="url(#prime-gradient)" points={primePoints} />
        <polyline className="chart-line" stroke="rgba(231, 187, 104, 0.35)" points={primePoints} />
        <polyline className="chart-line glow" stroke="url(#treasury-gradient)" points={treasuryPoints} />
        <polyline className="chart-line" stroke="rgba(101, 177, 206, 0.28)" points={treasuryPoints} />
        {rateData.map((entry, index) => {
          const x = (index / (rateData.length - 1)) * 520 + 80;
          const primeY = 260 - (entry.prime / maxValue) * 200;
          const treasuryY = 260 - (entry.treasury / maxValue) * 200;
          return (
            <g key={entry.label}>
              <circle cx={x} cy={primeY} r="5" fill="#e3bf6b" className="neon-glow" />
              <circle cx={x} cy={treasuryY} r="5" fill="#49a5c1" className="neon-glow" />
              <text x={x} y="280" textAnchor="middle" className="chart-label">
                {entry.label}
              </text>
            </g>
          );
        })}
        <text x="88" y="42" fontSize="14" fill="rgba(227, 240, 247, 0.92)" letterSpacing="0.2em">
          BENCHMARK INTEREST RATES
        </text>
        <g transform="translate(88, 292)">
          <rect width="12" height="12" fill="#e3bf6b" rx="3" />
          <text x="18" y="10" fill="rgba(224, 235, 241, 0.85)" fontSize="12">
            U.S. PRIME RATE
          </text>
        </g>
        <g transform="translate(260, 292)">
          <rect width="12" height="12" fill="#49a5c1" rx="3" />
          <text x="18" y="10" fill="rgba(224, 235, 241, 0.85)" fontSize="12">
            10Y TREASURY YIELD
          </text>
        </g>
      </svg>
    </div>
  );
}
