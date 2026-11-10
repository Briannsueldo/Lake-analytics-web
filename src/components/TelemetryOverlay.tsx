/**
 * Drawn in the photo's own 1920×1080 space and sliced like `object-cover object-left`,
 * so the tracking box stays on the car at every crop.
 */
const box = { x: 70, y: 330, w: 1520, h: 380 }
const arm = 56

const corners = [
  `M${box.x} ${box.y + arm}V${box.y}H${box.x + arm}`,
  `M${box.x + box.w - arm} ${box.y}H${box.x + box.w}V${box.y + arm}`,
  `M${box.x} ${box.y + box.h - arm}V${box.y + box.h}H${box.x + arm}`,
  `M${box.x + box.w - arm} ${box.y + box.h}H${box.x + box.w}V${box.y + box.h - arm}`,
]

const sectors = [
  { x: 520, label: 'S1' },
  { x: 1140, label: 'S2' },
  { x: 1660, label: 'S3' },
]

const trace =
  'M0 838C80 830 150 792 230 796S360 848 440 842 560 772 650 764 780 810 860 816 980 752 1080 746 1210 802 1300 810 1420 754 1520 748 1660 800 1760 806 1880 780 1920 776'
const traceSecondary =
  'M0 882C110 876 190 860 280 870S430 900 520 892 650 854 740 858 880 884 980 886 1110 846 1200 852 1340 890 1440 888 1580 850 1680 856 1840 880 1920 872'

export default function TelemetryOverlay({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMinYMid slice"
      data-active={active}
      className="telemetry absolute inset-0 size-full"
    >
      <rect x={box.x} y={box.y} width={box.w} height={box.h} className="telemetry-box" />
      {corners.map((d) => (
        <path key={d} d={d} className="telemetry-corner" />
      ))}
      <g className="telemetry-tag">
        <rect x={box.x} y={box.y - 46} width="190" height="34" fill="rgb(6 8 11 / 0.72)" />
        <circle cx={box.x + 22} cy={box.y - 29} r="5" fill="var(--color-accent)" />
        <text x={box.x + 40} y={box.y - 23} className="telemetry-label">
          TRACKING
        </text>
      </g>

      {sectors.map((sector) => (
        <g key={sector.label} className="telemetry-sector">
          <line x1={sector.x} x2={sector.x} y1="736" y2="920" />
          <text x={sector.x + 10} y="756" className="telemetry-label">
            {sector.label}
          </text>
        </g>
      ))}
      <path d={traceSecondary} pathLength={1} className="telemetry-trace telemetry-trace--secondary" />
      <path d={trace} pathLength={1} className="telemetry-trace" />
    </svg>
  )
}
