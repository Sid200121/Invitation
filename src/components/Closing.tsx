"use client";

import Reveal from "./Reveal";
import LotusMotif from "./LotusMotif";

export default function Closing() {
  return (
    <section className="flex flex-col items-center bg-maroon-black px-6 py-24 text-center">
      <Reveal>
        <LotusMotif size={56} animate={false} />
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 font-display text-xl italic text-ivory/80">
          May Ganpati Bappa bring happiness, health and prosperity to your
          home.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-8 font-devanagari text-lg text-gold/80">
          गणपती बाप्पा मोरया
        </p>
      </Reveal>
    </section>
  );
}
