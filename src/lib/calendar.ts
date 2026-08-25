import { event } from "./content";

// Update this to the real start date/time (24hr, local) when it's finalized.
// Format: [year, month(1-12), day, hour, minute]
const EVENT_START: [number, number, number, number, number] = [
  2026,
  9,
  14,
  18,
  0,
];
const EVENT_DURATION_HOURS = 3;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function toICSDate(y: number, m: number, d: number, h: number, min: number) {
  return `${y}${pad(m)}${pad(d)}T${pad(h)}${pad(min)}00`;
}

export function downloadCalendarInvite() {
  const [y, m, d, h, min] = EVENT_START;
  const start = toICSDate(y, m, d, h, min);

  const endDate = new Date(y, m - 1, d, h + EVENT_DURATION_HOURS, min);
  const end = toICSDate(
    endDate.getFullYear(),
    endDate.getMonth() + 1,
    endDate.getDate(),
    endDate.getHours(),
    endDate.getMinutes()
  );

  const address = `${event.addressLine1}, ${event.addressLine2}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bappa Pass//Invitation//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@bappapass`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.occasion} — ${event.hostFamily}`,
    `LOCATION:${address}`,
    `DESCRIPTION:${event.hostNote}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ganpati-darshan.ics";
  link.click();
  URL.revokeObjectURL(url);
}
