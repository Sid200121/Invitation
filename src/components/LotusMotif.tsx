"use client";

import { motion } from "framer-motion";

export default function LotusMotif({
  size = 96,
  animate = true,
}: {
  size?: number;
  animate?: boolean;
}) {
  const petals = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="lotusGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#e2892f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e2892f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petalFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f6eee0" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="58" r="46" fill="url(#lotusGlow)" />

      {petals.map((i) => {
        const angle = (360 / petals.length) * i;
        return (
          <motion.g
            key={i}
            style={{ originX: "60px", originY: "58px" }}
            transform={`rotate(${angle} 60 58)`}
            initial={animate ? { opacity: 0, scale: 0.4 } : undefined}
            animate={animate ? { opacity: 1, scale: 1 } : undefined}
            transition={
              animate
                ? { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                : undefined
            }
          >
            <path
              d="M60 58 C 56 40, 56 22, 60 10 C 64 22, 64 40, 60 58 Z"
              fill="url(#petalFill)"
              opacity="0.92"
            />
          </motion.g>
        );
      })}

      <circle cx="60" cy="58" r="9" fill="#6b1e23" />
      <circle cx="60" cy="58" r="5" fill="#e2892f" />
    </svg>
  );
}
