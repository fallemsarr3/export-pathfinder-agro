-- Create enum for form types
CREATE TYPE public.form_type AS ENUM ('afrique', 'europe', 'premium');

-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type form_type NOT NULL,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  products TEXT NOT NULL,
  volume TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit a form"
ON public.form_submissions
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated admins could read submissions (for future admin panel)
-- For now, no SELECT policy means submissions are write-only from frontend
-- This protects PII (emails, phone numbers) from being publicly readable

-- Add index for faster queries by form type and date
CREATE INDEX idx_form_submissions_type ON public.form_submissions(form_type);
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);