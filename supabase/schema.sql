-- Run this once in your Supabase project's SQL editor.

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status text not null check (status in ('yes', 'maybe', 'no')),
  message text,
  created_at timestamptz not null default now()
);

alter table rsvps enable row level security;

-- Anyone with the anon key can submit an RSVP (this is a public invite link).
create policy "Anyone can insert an RSVP"
  on rsvps for insert
  to anon
  with check (true);

-- Reading responses back is restricted — do that from the Supabase
-- dashboard's Table Editor as the host, not from the public site.
