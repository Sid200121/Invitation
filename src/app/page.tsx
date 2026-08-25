"use client";

import { useRef, useState } from "react";
import Intro from "@/components/Intro";
import InvitationReveal from "@/components/InvitationReveal";
import EventDetails from "@/components/EventDetails";
import GiftIdeas from "@/components/GiftIdeas";
import Aarti from "@/components/Aarti";
import RSVP from "@/components/RSVP";
import Closing from "@/components/Closing";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function handleContinue() {
    setOpened(true);
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <main>
      {!opened && <Intro onContinue={handleContinue} />}
      <div ref={contentRef} className={opened ? "" : "hidden"}>
        <InvitationReveal />
        <EventDetails />
        <GiftIdeas />
        <Aarti />
        <RSVP />
        <Closing />
      </div>
    </main>
  );
}
