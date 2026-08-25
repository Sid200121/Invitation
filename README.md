# Bappa Pass

A cinematic digital Ganpati invitation + visit companion.

## What's in V1

- Cinematic opening (lotus bloom + Sanskrit invocation)
- Invitation reveal (family name, occasion, date, time)
- Event details (address with a Google Maps link, Add to Calendar)
- Gift ideas (flowers, sweets, offerings — no pricing, no relationship question)
- Aarti (traditional Sukhkarta Dukhaharta, Marathi, large-text toggle)
- RSVP (Yes / Maybe / Can't make it + optional message, saved to Supabase)
- Closing blessing screen

Live geolocation/directions distance calc was intentionally left out of V1 —
the Google Maps link covers "get me there" for now.

## 1. Edit your event details

Everything editable lives in one file: `src/lib/content.ts`
- Family name, occasion, date/time, address, host note
- Gift categories and items
- Aarti lyrics
- RSVP options

Also update the actual event date/time in `src/lib/calendar.ts`
(`EVENT_START`) so "Add to Calendar" creates the correct entry.

## 2. Set up Supabase (for RSVPs)

1. Create a free project at supabase.com
2. In the SQL Editor, run `supabase/schema.sql`
3. Copy your Project URL and anon public key (Settings → API)
4. Create a `.env.local` file (copy `.env.example`) and fill both in

Without these env vars, the RSVP form still works in the UI but won't
save anywhere — good for previewing, not for the real event.

## 3. Run locally

```
npm install
npm run dev
```

## 4. Deploy

Push to GitHub, import into Vercel, add the Supabase env vars in
Vercel's project settings, deploy.

## 5. Set your live site URL (for the WhatsApp preview image)

After your first deploy, copy your Vercel URL (e.g.
`https://bappa-pass.vercel.app`) into `NEXT_PUBLIC_SITE_URL` in Vercel's
env vars, then redeploy. This makes the link preview image resolve
correctly when the link is pasted into WhatsApp.

## 6. (Optional) Precise map pin

By default "Open in Google Maps" does a text search on your address,
which usually works fine but can miss for generic addresses. For an
exact pin: find your location on Google Maps, right-click the exact
spot, click the lat/lng shown at the top of the menu to copy it, and
paste it into `coordinates` in `src/lib/content.ts`.

## What's new since the last version

- Custom lotus favicon + Apple touch icon (was the default Next.js icon)
- A generated WhatsApp/social link-preview image matching the invite's design
- Optional precise coordinates for the "Open in Google Maps" button

## Reading RSVP responses

Go to your Supabase project → Table Editor → `rsvps` table.
