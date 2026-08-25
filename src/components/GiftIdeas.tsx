"use client";

import Reveal from "./Reveal";
import { giftIdeas } from "@/lib/content";

export default function GiftIdeas() {
  return (
    <section className="bg-gradient-to-b from-maroon-black to-maroon-deep/60 px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold/80">
            What to Bring
          </p>
          <h2 className="mt-2 text-center font-display text-3xl text-ivory">
            For Bappa
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {giftIdeas.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-gold/20 bg-maroon-deep/40 p-5">
                <p className="font-display text-lg text-saffron">
                  {group.category}
                </p>
                <ul className="mt-3 space-y-1.5 text-ivory/85">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
