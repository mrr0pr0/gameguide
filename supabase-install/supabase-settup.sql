-- GameGuide Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Games Table
CREATE TABLE games (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  release_date DATE,
  developer TEXT,
  publisher TEXT,
  platforms TEXT[],
  genres TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Guides Table
CREATE TABLE guides (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  game_id UUID REFERENCES games(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  guide_type TEXT, -- 'walkthrough', 'achievement', 'strategy', etc.
  difficulty TEXT, -- 'beginner', 'intermediate', 'advanced'
  read_time_minutes INTEGER,
  author_id UUID REFERENCES auth.users(id),
  views INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Guide Sections (for long guides with multiple parts)
CREATE TABLE guide_sections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News/Articles Table
CREATE TABLE news_articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image_url TEXT,
  category TEXT,
  author_id UUID REFERENCES auth.users(id),
  views INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Profiles (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comments
CREATE TABLE comments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookmarks/Favorites
CREATE TABLE bookmarks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, guide_id)
);

-- Guide Ratings
CREATE TABLE guide_ratings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(guide_id, user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_games_slug ON games(slug);
CREATE INDEX idx_guides_game_id ON guides(game_id);
CREATE INDEX idx_guides_slug ON guides(slug);
CREATE INDEX idx_guides_author ON guides(author_id);
CREATE INDEX idx_guide_sections_guide_id ON guide_sections(guide_id);
CREATE INDEX idx_news_slug ON news_articles(slug);
CREATE INDEX idx_comments_guide_id ON comments(guide_id);
CREATE INDEX idx_bookmarks_user_id ON bookmarks(user_id);

-- Enable Row Level Security
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE guide_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE guide_ratings ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Games: Public read access
CREATE POLICY "Anyone can view games" ON games FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert games" ON games FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update games" ON games FOR UPDATE USING (auth.role() = 'authenticated');

-- Guides: Public read, authenticated write
CREATE POLICY "Anyone can view published guides" ON guides FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create guides" ON guides FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their guides" ON guides FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete their guides" ON guides FOR DELETE USING (auth.uid() = author_id);

-- Guide Sections: Follow parent guide permissions
CREATE POLICY "Anyone can view guide sections" ON guide_sections FOR SELECT USING (true);
CREATE POLICY "Guide authors can manage sections" ON guide_sections FOR ALL USING (
  EXISTS (
    SELECT 1 FROM guides WHERE guides.id = guide_sections.guide_id AND guides.author_id = auth.uid()
  )
);

-- News: Public read, authenticated write
CREATE POLICY "Anyone can view published news" ON news_articles FOR SELECT USING (published = true);
CREATE POLICY "Authenticated users can create news" ON news_articles FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their news" ON news_articles FOR UPDATE USING (auth.uid() = author_id);

-- Profiles: Public read, own profile write
CREATE POLICY "Anyone can view profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Comments: Public read, authenticated write
CREATE POLICY "Anyone can view comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments" ON comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comments" ON comments FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON comments FOR DELETE USING (auth.uid() = user_id);

-- Bookmarks: Users can only see and manage their own
CREATE POLICY "Users can view own bookmarks" ON bookmarks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own bookmarks" ON bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own bookmarks" ON bookmarks FOR DELETE USING (auth.uid() = user_id);

-- Ratings: Users can only see and manage their own
CREATE POLICY "Anyone can view ratings" ON guide_ratings FOR SELECT USING (true);
CREATE POLICY "Users can create own ratings" ON guide_ratings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own ratings" ON guide_ratings FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own ratings" ON guide_ratings FOR DELETE USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON games FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_guides_updated_at BEFORE UPDATE ON guides FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news_articles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'username',
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update guide rating average
CREATE OR REPLACE FUNCTION update_guide_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE guides
  SET rating = (
    SELECT AVG(rating)::DECIMAL(3,2)
    FROM guide_ratings
    WHERE guide_id = COALESCE(NEW.guide_id, OLD.guide_id)
  )
  WHERE id = COALESCE(NEW.guide_id, OLD.guide_id);
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Trigger to update rating when ratings change
CREATE TRIGGER update_guide_rating_trigger
  AFTER INSERT OR UPDATE OR DELETE ON guide_ratings
  FOR EACH ROW EXECUTE FUNCTION update_guide_rating();