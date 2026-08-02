CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path TO 'public'
AS $function$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$function$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
GRANT SELECT ON public.user_roles TO authenticated;

DROP POLICY IF EXISTS "Anyone can view published stories" ON public.stories;
CREATE POLICY "Anon can view published stories" ON public.stories
  FOR SELECT TO anon USING (published = true);
CREATE POLICY "Users can view published stories" ON public.stories
  FOR SELECT TO authenticated USING (published = true OR public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Anyone can view published slides" ON public.gallery_slides;
CREATE POLICY "Anon can view published slides" ON public.gallery_slides
  FOR SELECT TO anon USING (published = true);
CREATE POLICY "Users can view published slides" ON public.gallery_slides
  FOR SELECT TO authenticated USING (published = true OR public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Anyone can view published testimonials" ON public.testimonials;
CREATE POLICY "Anon can view published testimonials" ON public.testimonials
  FOR SELECT TO anon USING (published = true);
CREATE POLICY "Users can view published testimonials" ON public.testimonials
  FOR SELECT TO authenticated USING (published = true OR public.has_role(auth.uid(), 'admin'::public.app_role));