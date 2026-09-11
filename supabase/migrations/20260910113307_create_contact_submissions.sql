/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `company` (text, nullable) — optional company name
  - `email` (text, not null) — sender's email address
  - `phone` (text, nullable) — optional phone number
  - `product_requirement` (text, nullable) — which product or requirement they're interested in
  - `message` (text, not null) — the enquiry message body
  - `is_read` (boolean, default false) — tracks whether the enquiry has been reviewed
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT so the public contact form can submit without signing in.
- No SELECT/UPDATE/DELETE for anon — only site operators with dashboard access should read or manage submissions.
- The INSERT policy uses WITH CHECK (true) because any visitor may submit an enquiry; this is the intended public behavior of a contact form.

3. Notes
- This is a no-auth public contact form. The anon-key frontend only inserts; reading submissions is done through the Supabase dashboard or a future authenticated admin view.
- A honeypot field check is handled in the frontend before insertion.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  product_requirement text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);