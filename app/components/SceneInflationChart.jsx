const inflationData = [
  { label: "1965", value: 1.6 },
  { label: "1966", value: 2.9 },
  { label: "1967", value: 3.0 },
  { label: "1968", value: 4.2 },
  { label: "1969", value: 5.5 }
];

export default function SceneInflationChart() {
  const maxValue = Math.max(...inflationData.map((point) => point.value));
  const points = inflationData
    .map((point, index) => {
      const x = (index / (inflationData.length - 1)) * 560 + 40;
      const y = 260 - (point.value / maxValue) * 200;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="chart" role="img" aria-labelledby="scene2-title">
      <svg viewBox="0 0 640 320">
        <title id="scene2-title">Macroeconomic inflation surging through the late 1960s</title>
        <g className="chart-grid">
          {[0, 1, 2, 3, 4].map((step) => (
            <line key={step} x1="40" x2="600" y1={60 + step * 50} y2={60 + step * 50} className={step === 4 ? "axis" : ""} />
          ))}
          <line x1="40" x2="40" y1="60" y2="260" className="axis" />
          <line x1="600" x2="600" y1="60" y2="260" className="axis" />
        </g>
        <polyline className="chart-line glow" stroke="#e3bf6b" points={points} />
        <polyline className="chart-line" stroke="rgba(255, 211, 110, 0.35)" points={points} />
        {inflationData.map((point, index) => {
          const cx = (index / (inflationData.length - 1)) * 560 + 40;
          const cy = 260 - (point.value / maxValue) * 200;
          return (
            <g key={point.label}>
              <circle cx={cx} cy={cy} r="6" fill="#e3bf6b" className="neon-glow" />
              <text x={cx} y="280" textAnchor="middle" className="chart-label">
                {point.label}
              </text>
            </g>
          );
        })}
        <text x="45" y="40" fontSize="14" fill="rgba(224, 239, 244, 0.92)" letterSpacing="0.2em">
          GLOBAL INFLATION PRESSURES
        </text>
        <text x="45" y="310" fontSize="12" fill="rgba(210, 223, 230, 0.68)">
          Source: International Monetary Estimates, 1965-1969
        </text>
      </svg>
    </div>
  );
}
