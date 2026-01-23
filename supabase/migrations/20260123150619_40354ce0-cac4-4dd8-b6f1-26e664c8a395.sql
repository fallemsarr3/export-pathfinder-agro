-- Add explicit policies to protect form_submissions data
-- Only admins can update submissions
CREATE POLICY "Admins can update submissions" 
ON public.form_submissions 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete submissions
CREATE POLICY "Admins can delete submissions" 
ON public.form_submissions 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'::app_role));