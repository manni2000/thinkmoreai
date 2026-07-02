/**
 * TeamPortrait - original black-and-white flat avatar illustrations.
 *
 * Four deterministic male avatar variants are drawn as inline SVG so the team
 * cards stay fast, crisp, and free of external image dependencies.
 */

interface TeamPortraitProps {
  seed: string;
  variant?: number;
  className?: string;
}

const TeamPortrait = ({ seed, variant = 0, className }: TeamPortraitProps) => {
  const style = ((variant % 4) + 4) % 4;
  const ink = "#201b1d";
  const paper = "#ffffff";
  const soft = "#f7f7f4";

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={`${seed} portrait`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="200" height="200" fill={paper} />
      <circle cx="100" cy="92" r="66" fill={soft} />

      <g transform="translate(0 -2)">
        {/* Shirt and shoulders */}
        {style === 0 ? (
          <>
            <path
              d="M45 190c8-34 30-52 55-52s47 18 55 52Z"
              fill={ink}
              stroke={ink}
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M82 146l18 24 18-24"
              fill={paper}
              stroke={paper}
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            <path
              d="M45 190c8-34 30-52 55-52s47 18 55 52Z"
              fill={paper}
              stroke={ink}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80 149c9 12 15 17 20 17s11-5 20-17"
              fill="none"
              stroke={ink}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {/* Neck */}
        <path
          d="M87 129h26v25c0 7-6 13-13 13s-13-6-13-13Z"
          fill={paper}
          stroke={ink}
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Ears and head */}
        <circle cx="62" cy="97" r="10" fill={paper} stroke={ink} strokeWidth="5" />
        <circle cx="138" cy="97" r="10" fill={paper} stroke={ink} strokeWidth="5" />
        <ellipse cx="100" cy="94" rx="38" ry="46" fill={paper} stroke={ink} strokeWidth="5" />

        {/* Hair variants */}
        {style === 0 && (
          <>
            <path
              d="M63 85c2-29 18-45 38-45 19 0 34 14 36 40-10-7-21-10-34-9-15 2-26-1-35-8-3 6-5 14-5 22Z"
              fill={ink}
            />
            <path
              d="M70 107c5 29 16 46 30 46s25-17 30-46v18c0 20-13 34-30 34s-30-14-30-34Z"
              fill={ink}
            />
            <path
              d="M83 121c8 7 26 7 34 0"
              fill="none"
              stroke={paper}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}

        {style === 1 && (
          <>
            <path
              d="M62 89c0-28 16-48 38-48s38 20 38 48c-8-10-16-16-25-17-8 6-18 6-27 0-9 1-17 7-24 17Z"
              fill={ink}
            />
            <circle cx="75" cy="59" r="14" fill={ink} />
            <circle cx="95" cy="49" r="16" fill={ink} />
            <circle cx="117" cy="55" r="15" fill={ink} />
            <circle cx="130" cy="73" r="13" fill={ink} />
          </>
        )}

        {style === 2 && (
          <>
            <path
              d="M62 88c4-30 20-46 42-46 20 0 34 15 35 39-13-8-28-9-45-3-12 5-22 6-32 10Z"
              fill={ink}
            />
            <path
              d="M79 65c17-11 36-11 51 0"
              fill="none"
              stroke={paper}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M72 76c11-3 21-8 31-17"
              fill="none"
              stroke={paper}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}

        {style === 3 && (
          <>
            <path
              d="M64 89c1-23 13-38 32-42 4-14 19-18 31-8 10 6 14 19 11 40-12-7-25-9-39-5-13 4-24 6-35 15Z"
              fill={ink}
            />
            <path
              d="M87 49c9 4 17 4 25 0"
              fill="none"
              stroke={paper}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Brows and eyes */}
        {style !== 0 && (
          <>
            <path
              d="M78 91c6-4 13-4 20 0"
              fill="none"
              stroke={ink}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M103 91c6-4 13-4 20 0"
              fill="none"
              stroke={ink}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}

        {style === 0 ? (
          <>
            <circle cx="86" cy="97" r="9" fill="none" stroke={ink} strokeWidth="4" />
            <circle cx="114" cy="97" r="9" fill="none" stroke={ink} strokeWidth="4" />
            <path d="M95 97h10" stroke={ink} strokeWidth="4" strokeLinecap="round" />
            <circle cx="86" cy="97" r="2.8" fill={ink} />
            <circle cx="114" cy="97" r="2.8" fill={ink} />
          </>
        ) : (
          <>
            <circle cx="88" cy="101" r="4" fill={ink} />
            <circle cx="112" cy="101" r="4" fill={ink} />
          </>
        )}

        {/* Nose */}
        <path
          d="M100 102v13"
          fill="none"
          stroke={ink}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Mouth variants */}
        {style === 1 && (
          <path
            d="M86 121c8 9 20 9 28 0"
            fill="none"
            stroke={ink}
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        {style === 2 && (
          <path
            d="M89 124h22"
            fill="none"
            stroke={ink}
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        {style === 3 && (
          <path
            d="M86 119c7 12 21 12 28 0Z"
            fill={paper}
            stroke={ink}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        )}
      </g>
    </svg>
  );
};

export default TeamPortrait;
