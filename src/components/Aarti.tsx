"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { aarti } from "@/lib/content";

export default function Aarti() {
  const [large, setLarge] = useState(false);

  return (
    <section className="bg-maroon-deep/60 px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold/80">
            Aarti
          </p>
          <h2 className="mt-2 text-center font-devanagari text-3xl text-ivory">
            {aarti.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 flex justify-center">
          <button
            onClick={() => setLarge((v) => !v)}
            className="rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            {large ? "Normal text" : "Large text"}
          </button>
        </Reveal>

        <Reveal delay={0.25}>
          <div
            className={`mt-8 space-y-2 rounded-2xl border border-gold/20 bg-maroon-black/40 p-6 text-center font-devanagari leading-relaxed text-ivory/90 ${
              large ? "text-2xl" : "text-lg"
            }`}
          >
            {aarti.lines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-2" />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
