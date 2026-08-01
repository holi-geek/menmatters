import { supabase } from "@/integrations/supabase/client";

export const CONTENT_BUCKET = "content-images";

/**
 * Images are stored either as external https URLs (legacy/seed content)
 * or as storage paths inside the private `content-images` bucket.
 * Storage paths are resolved to time-limited signed URLs.
 */
export async function resolveImageUrl(value?: string | null): Promise<string | null> {
  if (!value) return null;
  if (/^(https?:)?\/\//.test(value) || value.startsWith("data:") || value.startsWith("/")) {
    return value;
  }
  const { data, error } = await supabase.storage
    .from(CONTENT_BUCKET)
    .createSignedUrl(value, 60 * 60 * 24 * 7);
  if (error) return null;
  return data?.signedUrl ?? null;
}

export async function resolveAll<T extends { image_url?: string | null }>(
  rows: T[],
): Promise<(T & { resolvedImage: string | null })[]> {
  return Promise.all(
    rows.map(async (row) => ({ ...row, resolvedImage: await resolveImageUrl(row.image_url) })),
  );
}

export async function uploadContentImage(file: File, folder: string): Promise<string> {
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(CONTENT_BUCKET)
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw error;
  return path;
}
