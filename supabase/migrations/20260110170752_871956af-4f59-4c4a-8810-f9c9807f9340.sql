-- Create a function to call the edge function when a new form submission is created
CREATE OR REPLACE FUNCTION public.notify_new_form_submission()
RETURNS trigger AS $$
DECLARE
  payload jsonb;
BEGIN
  payload := jsonb_build_object(
    'type', 'INSERT',
    'table', TG_TABLE_NAME,
    'record', row_to_json(NEW)
  );
  
  -- Call the edge function using pg_net
  PERFORM net.http_post(
    url := 'https://ztrtsrrwcnhwrjrmlaaw.supabase.co/functions/v1/send-notification-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := payload
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger on form_submissions table
DROP TRIGGER IF EXISTS on_form_submission_created ON public.form_submissions;
CREATE TRIGGER on_form_submission_created
  AFTER INSERT ON public.form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_form_submission();