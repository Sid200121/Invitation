"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { rsvpOptions, type RsvpValue } from "@/lib/content";
import { supabase } from "@/lib/supabaseClient";

export default function RSVP() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<RsvpValue | null>(null);
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !status) return;

    setState("sending");

    if (!supabase) {
      // Supabase isn't configured yet — see README for setup.
      console.warn(
        "Supabase env vars are missing, so this RSVP wasn't saved."
      );
      setState("sent");
      return;
    }

    const { error } = await supabase.from("rsvps").insert({
      name: name.trim(),
      status,
      message: message.trim() || null,
    });

    setState(error ? "error" : "sent");
  }

  if (state === "sent") {
    return (
      <section className="bg-maroon-black px-6 py-20">
        <div className="mx-auto max-w-md text-center">
          <Reveal>
            <p className="font-display text-2xl text-gold">
              Thank you, {name || "friend"}.
            </p>
            <p className="mt-2 font-body text-ivory/70">
              Bappa is looking forward to your visit. 🙏
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-maroon-black px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-gold/80">
            RSVP
          </p>
          <h2 className="mt-2 text-center font-display text-3xl text-ivory">
            Will you be joining us?
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-gold/25 bg-maroon-deep/40 px-4 py-3 font-body text-ivory placeholder:text-ivory/40 focus:border-gold/60 focus:outline-none"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {rsvpOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setStatus(opt.value)}
                  className={`rounded-xl border px-4 py-3 text-sm transition-colors ${
                    status === opt.value
                      ? "border-saffron bg-saffron/15 text-saffron"
                      : "border-gold/20 text-ivory/80 hover:border-gold/40"
                  }`}
                >
                  <span className="mr-1.5">{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A short message for the family (optional)"
              rows={3}
              className="w-full resize-none rounded-xl border border-gold/25 bg-maroon-deep/40 px-4 py-3 font-body text-ivory placeholder:text-ivory/40 focus:border-gold/60 focus:outline-none"
            />

            <button
              type="submit"
              disabled={!name.trim() || !status || state === "sending"}
              className="w-full rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-body font-medium text-maroon-black transition-opacity disabled:opacity-40"
            >
              {state === "sending" ? "Sending…" : "Send RSVP"}
            </button>

            {state === "error" && (
              <p className="text-center text-sm text-rose-dust">
                Something went wrong — please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
