"use client";
import React, { useState } from 'react';
import { BookOpen, Search, Home, Sword, Trophy, Users, Lightbulb, Map, ChevronRight, Star, Flame } from 'lucide-react';
import Link from 'next/link';

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Guides', icon: BookOpen },
    { id: 'walkthroughs', name: 'Walkthroughs', icon: Map },
    { id: 'beginner', name: 'Beginner Guides', icon: Lightbulb },
    { id: 'strategy', name: 'Strategy', icon: Sword },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'multiplayer', name: 'Multiplayer', icon: Users }
  ];

  const featuredGuides = [
    {
      title: "Complete Beginner's Guide to RPG Mechanics",
      game: "Fantasy RPG Series",
      category: "beginner",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/controller.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvY29udHJvbGxlci53ZWJwIiwiaWF0IjoxNzYyMjAyODkyLCJleHAiOjE3OTM3Mzg4OTJ9.OI35YR523XcJt2WHF0_CEQCY0eQp66rtseYYCNq9h5w",
      difficulty: "Beginner",
      readTime: "15 min",
      rating: 4.8,
      description: "Master the basics of character building, combat systems, and progression in modern RPGs."
    },
    {
      title: "Ultimate Weapons & Gear Location Guide",
      game: "Adventure Quest",
      category: "walkthroughs",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/PS5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvUFM1LndlYnAiLCJpYXQiOjE3NjIyMDI2MDMsImV4cCI6MTc5MzczODYwM30.d_wufYLYPMnn8fcTTcNd7vmTN_Ot0jqOgmDmT7lSEaA",
      difficulty: "Advanced",
      readTime: "25 min",
      rating: 4.9,
      description: "Find every legendary weapon, hidden armor set, and secret treasure in the game."
    },
    {
      title: "Competitive Multiplayer Strategy Guide",
      game: "Battle Arena",
      category: "multiplayer",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/multiplayer.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvbXVsdGlwbGF5ZXIud2VicCIsImlhdCI6MTc2MjIwMjcyOCwiZXhwIjoxNzkzNzM4NzI4fQ.NbpAiQxXrDu9MHxIGsvkaTcrD6x5mrjH8R4IAm33_Og",
      difficulty: "Intermediate",
      readTime: "20 min",
      rating: 4.7,
      description: "Advanced tactics, team compositions, and map control strategies for ranked play."
    }
  ];

  const popularGuides = [
    { title: "100% Achievement Completion Roadmap", category: "achievements", readTime: "30 min" },
    { title: "Boss Fight Strategies & Weaknesses", category: "strategy", readTime: "18 min" },
    { title: "Best Character Builds for Each Playstyle", category: "strategy", readTime: "22 min" },
    { title: "Hidden Secrets & Easter Eggs Location", category: "walkthroughs", readTime: "12 min" },
    { title: "Beginner's Guide to Crafting & Resources", category: "beginner", readTime: "15 min" },
    { title: "PvP Tier List & Meta Analysis", category: "multiplayer", readTime: "10 min" }
  ];

  const filteredFeaturedGuides = featuredGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredPopularGuides = popularGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <Home className="w-5 h-5" />
              <div className="flex items-center gap-2">
                <Flame className="w-8 h-8 text-red-600" />
                <h1 className="text-2xl font-bold">GameGuide<span className="text-red-600">Nordic</span></h1>
              </div>
            </Link>
            <nav className="flex gap-6">
              <Link href="/firstpage" className="text-gray-400 hover:text-white transition">News</Link>
              <Link href="/guides" className="text-red-600 font-semibold">Guides</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative h-64 bg-gradient-to-r from-red-900 via-red-700 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-white" />
            <h1 className="text-5xl font-bold">Game Guides</h1>
          </div>
          <p className="text-xl text-red-100 max-w-2xl">
            Master your favorite games with expert walkthroughs, strategies, and tips
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48" />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides by game title, topic, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Star className="w-7 h-7 text-red-600" />
              Featured Guides
            </h2>
            <button className="text-red-600 flex items-center gap-1 hover:gap-2 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeaturedGuides.map((guide, idx) => (
              <article key={idx} className="group bg-zinc-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-600 transition cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {guide.difficulty}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold">{guide.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-red-600 font-semibold uppercase mb-2">{guide.game}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{guide.readTime} read</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Flame className="w-7 h-7 text-orange-500" />
            Popular Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {filteredPopularGuides.map((guide, idx) => (
              <div 
                key={idx}
                className="group flex items-center gap-4 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold group-hover:text-red-600 transition">
                    {guide.title}
                  </h4>
                  <p className="text-sm text-gray-500">{guide.readTime} read</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-600 group-hover:translate-x-1 transition" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-gradient-to-br from-red-900 to-red-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-red-100 mb-6 text-lg">
            Request a guide and our expert team will create it for you
          </p>
          <button className="bg-black hover:bg-zinc-900 text-white px-8 py-3 rounded-lg font-semibold transition">
            Request a Guide
          </button>
        </section>
      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 GameGuideNordic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
