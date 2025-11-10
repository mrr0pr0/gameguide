# Supabase Storage Setup

## Create Storage Buckets

1. Go to Storage in Supabase Dashboard
2. Create the following buckets:

### game-covers
- Public bucket
- For game cover images
- Allowed MIME types: image/jpeg, image/png, image/webp
- Max file size: 5MB

### guide-images
- Public bucket  
- For images used in guides
- Allowed MIME types: image/jpeg, image/png, image/webp, image/gif
- Max file size: 10MB

### avatars
- Public bucket
- For user profile pictures
- Allowed MIME types: image/jpeg, image/png, image/webp
- Max file size: 2MB

## Storage Policies

Run this SQL to set up storage policies:
```sql
-- game-covers policies
CREATE POLICY "Anyone can view game covers" ON storage.objects FOR SELECT USING (bucket_id = 'game-covers');
CREATE POLICY "Authenticated users can upload game covers" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'game-covers' AND auth.role() = 'authenticated');

-- guide-images policies
CREATE POLICY "Anyone can view guide images" ON storage.objects FOR SELECT USING (bucket_id = 'guide-images');
CREATE POLICY "Authenticated users can upload guide images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'guide-images' AND auth.role() = 'authenticated');

-- avatars policies
CREATE POLICY "Anyone can view avatars" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Users can upload their own avatar" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can update their own avatar" ON storage.objects FOR UPDATE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```