-- Seed data for GameGuide
-- Run this after your schema is set up

-- Insert sample games
INSERT INTO games (title, slug, description, cover_image_url, release_date, developer, publisher, platforms, genres) VALUES
('Assassin''s Creed Rogue', 'assassins-creed-rogue', 'Experience the darkest chapter of the Assassin''s Creed franchise. Play as Shay, an Assassin turned Templar hunter.', 'https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/PS5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvUFM1LndlYnAiLCJpYXQiOjE3NjIyMDI2MDMsImV4cCI6MTc5MzczODYwM30.d_wufYLYPMnn8fcTTcNd7vmTN_Ot0jqOgmDmT7lSEaA', '2014-11-11', 'Ubisoft Sofia', 'Ubisoft', ARRAY['PlayStation 4', 'Xbox One', 'PC'], ARRAY['Action', 'Adventure', 'Stealth']),
('Elden Ring', 'elden-ring', 'A massive open-world action RPG set in the Lands Between.', 'https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/controller.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvY29udHJvbGxlci53ZWJwIiwiaWF0IjoxNzYyMjAyODkyLCJleHAiOjE3OTM3Mzg4OTJ9.OI35YR523XcJt2WHF0_CEQCY0eQp66rtseYYCNq9h5w', '2022-02-25', 'FromSoftware', 'Bandai Namco', ARRAY['PlayStation 5', 'Xbox Series X/S', 'PC'], ARRAY['Action', 'RPG', 'Souls-like']),
('The Legend of Zelda: Breath of the Wild', 'zelda-breath-of-the-wild', 'An open-world adventure game that redefined the Zelda franchise.', 'https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/arcade.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvYXJjYWRlLndlYnAiLCJpYXQiOjE3NjIyMDI2ODIsImV4cCI6MTc5MzczODY4Mn0.SBokh7HX7fSFfuieu99ZGEPnjUiIOmvpjRxxBt_u_pI', '2017-03-03', 'Nintendo', 'Nintendo', ARRAY['Nintendo Switch'], ARRAY['Action', 'Adventure', 'Open World']);

-- Note: For guides, you'll need to create them with actual user IDs after authentication is set up
-- Here's an example structure:

-- INSERT INTO guides (game_id, title, slug, content, guide_type, difficulty, read_time_minutes, author_id) VALUES
-- (
--   (SELECT id FROM games WHERE slug = 'assassins-creed-rogue'),
--   'Complete Walkthrough',
--   'assassins-creed-rogue-complete-walkthrough',
--   'This is a comprehensive guide covering all missions...',
--   'walkthrough',
--   'beginner',
--   450,
--   'user-uuid-here'
-- );

-- Insert sample news articles (without author_id for now)
INSERT INTO news_articles (title, slug, excerpt, content, cover_image_url, category, published) VALUES
('The Most Anticipated Games of 2025', 'most-anticipated-games-2025', 'From massive RPGs to indie darlings, here are the games we cant wait to play this year.', 'Full article content here...', 'https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/controller.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvY29udHJvbGxlci53ZWJwIiwiaWF0IjoxNzYyMjAyODkyLCJleHAiOjE3OTM3Mzg4OTJ9.OI35YR523XcJt2WHF0_CEQCY0eQp66rtseYYCNq9h5w', 'Feature', true),
('New Fantasy RPG Announced', 'new-fantasy-rpg-announced', 'A stunning new RPG was revealed today with impressive visuals.', 'Full article content here...', 'https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/PS5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvUFM1LndlYnAiLCJpYXQiOjE3NjIyMDI2MDMsImV4cCI6MTc5MzczODYwM30.d_wufYLYPMnn8fcTTcNd7vmTN_Ot0jqOgmDmT7lSEaA', 'News', true);