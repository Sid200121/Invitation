"use client";

import Reveal from "./Reveal";
import { event } from "@/lib/content";
import { downloadCalendarInvite } from "@/lib/calendar";

export default function EventDetails() {
  const address = `${event.addressLine1}, ${event.addressLine2}`;
  const mapsQuery = event.coordinates
    ? `${event.coordinates.lat},${event.coordinates.lng}`
    : address;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`;

  return (
    <section className="bg-maroon-black px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold/80">
            Event Details
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6">
          <div className="rounded-2xl border border-gold/20 bg-maroon-deep/40 p-6">
            <p className="font-body text-xs uppercase tracking-wider text-rose-dust">
              Where
            </p>
            <p className="mt-2 font-display text-lg text-ivory">
              {event.addressLine1}
              <br />
              {event.addressLine2}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-saffron/50 px-5 py-2 text-sm text-saffron transition-colors hover:bg-saffron/10"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-maroon-deep/40 p-6">
            <p className="font-body text-xs uppercase tracking-wider text-rose-dust">
              When
            </p>
            <p className="mt-2 font-display text-lg text-ivory">
              {event.dateLabel}
            </p>
            <p className="text-ivory/70">{event.timeLabel}</p>
            <button
              onClick={downloadCalendarInvite}
              className="mt-4 inline-block rounded-full border border-saffron/50 px-5 py-2 text-sm text-saffron transition-colors hover:bg-saffron/10"
            >
              Add to Calendar
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
