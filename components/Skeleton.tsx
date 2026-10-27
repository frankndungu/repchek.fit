// The rowing skeleton from the design. Colors come from CSS variables so one
// drawing serves every state.
type Props = {
  main: string;
  far?: string;
  spine?: number;
  className?: string;
  viewBox?: string;
};

export function Skeleton({
  main,
  far,
  spine = 0.8,
  className,
  viewBox = "0 0 300 340",
}: Props) {
  const farColor = far ?? main;
  return (
    <svg
      className={className}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        d="M112 150L182 218L164 300M112 150L220 118L220 188L225 242"
        fill="none"
        stroke={farColor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="210" cy="244" r="22" fill="none" stroke="#555" strokeWidth="5" />
      <path
        d="M112 150L168 218L150 300M212 118L205 185L210 240"
        fill="none"
        stroke={main}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M250 100L212 118L112 150"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={spine}
      />
      <g fill={main}>
        <circle cx="112" cy="150" r="7" />
        <circle cx="168" cy="218" r="7" />
        <circle cx="150" cy="300" r="7" />
        <circle cx="212" cy="118" r="7" />
        <circle cx="205" cy="185" r="7" />
        <circle cx="210" cy="240" r="7" />
        <circle cx="250" cy="100" r="7" />
      </g>
      <path d="M20 312H280" stroke="#2a2a2a" strokeWidth="3" />
    </svg>
  );
}
