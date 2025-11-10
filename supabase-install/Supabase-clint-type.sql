// lib/supabase/types.ts
export type Database = {
  public: {
    Tables: {
      games: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          cover_image_url: string | null;
          release_date: string | null;
          developer: string | null;
          publisher: string | null;
          platforms: string[] | null;
          genres: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          cover_image_url?: string | null;
          release_date?: string | null;
          developer?: string | null;
          publisher?: string | null;
          platforms?: string[] | null;
          genres?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          cover_image_url?: string | null;
          release_date?: string | null;
          developer?: string | null;
          publisher?: string | null;
          platforms?: string[] | null;
          genres?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      guides: {
        Row: {
          id: string;
          game_id: string | null;
          title: string;
          slug: string;
          content: string | null;
          guide_type: string | null;
          difficulty: string | null;
          read_time_minutes: number | null;
          author_id: string | null;
          views: number;
          rating: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          game_id?: string | null;
          title: string;
          slug: string;
          content?: string | null;
          guide_type?: string | null;
          difficulty?: string | null;
          read_time_minutes?: number | null;
          author_id?: string | null;
          views?: number;
          rating?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string | null;
          title?: string;
          slug?: string;
          content?: string | null;
          guide_type?: string | null;
          difficulty?: string | null;
          read_time_minutes?: number | null;
          author_id?: string | null;
          views?: number;
          rating?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

// lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/ssr';
import type { Database } from './types';

export const createClient = () => createClientComponentClient<Database>();

// lib/supabase/server.ts
import { createServerComponentClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './types';

export const createServerClient = () => {
  const cookieStore = cookies();
  return createServerComponentClient<Database>({ cookies: () => cookieStore });
};

// lib/supabase/queries.ts
import { createClient } from './client';

export async function getGames() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getGameBySlug(slug: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getGuides(gameId?: string) {
  const supabase = createClient();
  let query = supabase
    .from('guides')
    .select(`
      *,
      games (
        title,
        slug,
        cover_image_url
      ),
      profiles (
        username,
        avatar_url
      )
    `)
    .order('created_at', { ascending: false });
  
  if (gameId) {
    query = query.eq('game_id', gameId);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  return data;
}

export async function getGuideBySlug(slug: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('guides')
    .select(`
      *,
      games (
        title,
        slug,
        cover_image_url
      ),
      profiles (
        username,
        avatar_url
      ),
      guide_sections (
        id,
        title,
        content,
        order_index
      )
    `)
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  return data;
}

export async function incrementGuideViews(guideId: string) {
  const supabase = createClient();
  const { error } = await supabase.rpc('increment_guide_views', { guide_id: guideId });
  
  if (error) throw error;
}

export async function getUserBookmarks(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('bookmarks')
    .select(`
      *,
      guides (
        *,
        games (
          title,
          cover_image_url
        )
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function toggleBookmark(userId: string, guideId: string) {
  const supabase = createClient();
  
  // Check if bookmark exists
  const { data: existing } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', userId)
    .eq('guide_id', guideId)
    .single();
  
  if (existing) {
    // Remove bookmark
    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', existing.id);
    
    if (error) throw error;
    return { bookmarked: false };
  } else {
    // Add bookmark
    const { error } = await supabase
      .from('bookmarks')
      .insert({ user_id: userId, guide_id: guideId });
    
    if (error) throw error;
    return { bookmarked: true };
  }
}

export async function rateGuide(userId: string, guideId: string, rating: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from('guide_ratings')
    .upsert(
      { user_id: userId, guide_id: guideId, rating },
      { onConflict: 'guide_id,user_id' }
    );
  
  if (error) throw error;
}