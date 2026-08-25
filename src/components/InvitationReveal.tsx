"use client";

import { motion } from "framer-motion";
import LotusMotif from "./LotusMotif";
import { event } from "@/lib/content";

export default function InvitationReveal() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-maroon-black via-maroon-deep to-maroon-black px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <LotusMotif size={64} animate={false} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-8 font-display text-xl italic text-rose-dust sm:text-2xl"
      >
        {event.hostFamily}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-1 font-display text-base text-ivory/70"
      >
        warmly invites you to
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 font-display text-5xl font-semibold tracking-wide text-gold sm:text-6xl"
      >
        {event.occasion}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-8 gold-divider"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.7 }}
        className="mt-8 space-y-1 font-body text-ivory/90"
      >
        <p className="text-lg">{event.dateLabel}</p>
        <p className="text-base text-ivory/70">{event.timeLabel}</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.7 }}
        className="mt-6 max-w-xs font-display text-lg italic text-ivory/70"
      >
        &ldquo;{event.hostNote}&rdquo;
      </motion.p>
    </section>
  );
}
