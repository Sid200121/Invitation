"use client";

import { motion } from "framer-motion";
import LotusMotif from "./LotusMotif";

const emberCount = 14;

export default function Intro({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-maroon-black px-6 text-center">
      <div className="embers">
        {Array.from({ length: emberCount }).map((_, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: `${(i * 137) % 100}%`,
              animationDelay: `${(i * 0.7) % 9}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <LotusMotif size={112} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="mt-6 font-devanagari text-2xl text-ivory/90 sm:text-3xl"
      >
        ॥ श्री गणेशाय नमः ॥
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.9 }}
        className="mt-3 font-display text-lg italic text-rose-dust sm:text-xl"
      >
        You&rsquo;ve received an invitation
      </motion.p>

      <motion.button
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.9 }}
        className="mt-12 rounded-full border border-gold/60 px-8 py-3 font-body text-sm tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold/10"
      >
        Open Invitation
      </motion.button>
    </section>
  );
}
