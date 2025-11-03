"use client";
import React, { useState } from 'react';
import { Menu, Search, Play, ChevronRight, Star, Flame, TrendingUp } from 'lucide-react';

export default function IGNNordic() {
  const [activeTab, setActiveTab] = useState('news');
  const [menuOpen, setMenuOpen] = useState(false);

  const mainStory = {
    title: "The Most Anticipated Games of 2025",
    image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/controller.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvY29udHJvbGxlci53ZWJwIiwiaWF0IjoxNzYyMjAyODkyLCJleHAiOjE3OTM3Mzg4OTJ9.OI35YR523XcJt2WHF0_CEQCY0eQp66rtseYYCNq9h5w",
    category: "Feature",
    excerpt: "From massive RPGs to indie darlings, here are the games we can't wait to play this year."
  };

  const stories = [
    {
      title: "New Fantasy RPG Announced with Stunning Visuals",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/arcade.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvYXJjYWRlLndlYnAiLCJpYXQiOjE3NjIyMDMwNDYsImV4cCI6MTc5MzczOTA0Nn0.ytrj_EBFCLk8833gEhqrvB6qnZAiPfIH3HSbFMS2Wrg",
      category: "News",
      score: null
    },
    {
      title: "Console Update Brings Major Performance Improvements",
      Image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/PS5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvUFM1LndlYnAiLCJpYXQiOjE3NjIyMDMxNjMsImV4cCI6MTc5MzczOTE2M30.KOnr17nWJ0dRQuGVdZ4O1dfaf-Q5CX_X8LEznel3qiY",
      category: "Tech",
      score: null
    },
    {
      title: "Indie Developer's New Game Gets Perfect Score",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/arcade.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvYXJjYWRlLndlYnAiLCJpYXQiOjE3NjIyMDI2ODIsImV4cCI6MTc5MzczODY4Mn0.SBokh7HX7fSFfuieu99ZGEPnjUiIOmvpjRxxBt_u_pI",
      category: "Review",
      score: 10
    },
    {
      title: "Multiplayer Shooter Beta Dates Announced",
      image: "https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/multiplayer.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvbXVsdGlwbGF5ZXIud2VicCIsImlhdCI6MTc2MjIwMjcyOCwiZXhwIjoxNzkzNzM4NzI4fQ.NbpAiQxXrDu9MHxIGsvkaTcrD6x5mrjH8R4IAm33_Og",
      category: "News",
      score: null
    }
  ];

  const videos = [
    { title: "Game of the Year Trailer", views: "2.3M", duration: "4:32" },
    { title: "Developer Interview: Behind the Scenes", views: "890K", duration: "12:45" },
    { title: "Top 10 Upcoming Releases", views: "1.5M", duration: "8:20" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <Flame className="w-8 h-8 text-red-600" />
                <h1 className="text-2xl font-bold">GameGuide<span className="text-red-600">Nordic</span></h1>
              </div>
              <nav className="hidden lg:flex gap-6">
                <button onClick={() => setActiveTab('news')} className={`${activeTab === 'news' ? 'text-red-600' : 'text-gray-400'} hover:text-white transition`}>News</button>
                <button onClick={() => setActiveTab('reviews')} className={`${activeTab === 'reviews' ? 'text-red-600' : 'text-gray-400'} hover:text-white transition`}>Reviews</button>
                <button onClick={() => setActiveTab('videos')} className={`${activeTab === 'videos' ? 'text-red-600' : 'text-gray-400'} hover:text-white transition`}>Videos</button>
                <button onClick={() => setActiveTab('features')} className={`${activeTab === 'features' ? 'text-red-600' : 'text-gray-400'} hover:text-white transition`}>Features</button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-red-600 transition" />
              <button className="hidden md:block px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-900 border-b border-zinc-800">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => { setActiveTab('news'); setMenuOpen(false); }} className="text-left hover:text-red-600">News</button>
            <button onClick={() => { setActiveTab('reviews'); setMenuOpen(false); }} className="text-left hover:text-red-600">Reviews</button>
            <button onClick={() => { setActiveTab('videos'); setMenuOpen(false); }} className="text-left hover:text-red-600">Videos</button>
            <button onClick={() => { setActiveTab('features'); setMenuOpen(false); }} className="text-left hover:text-red-600">Features</button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Story */}
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-8 group cursor-pointer">
          <img 
            src={mainStory.image} 
            alt={mainStory.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-red-600 font-semibold uppercase text-sm">{mainStory.category}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-red-600 transition">
              {mainStory.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl">
              {mainStory.excerpt}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stories */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-600" />
                Latest Stories
              </h3>
              <button className="text-red-600 flex items-center gap-1 hover:gap-2 transition-all">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {stories.map((story, idx) => (
                <article key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />
                    {story.score && (
                      <div className="absolute top-3 right-3 bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
                        {story.score}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/80 px-3 py-1 rounded text-sm uppercase font-semibold">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold group-hover:text-red-600 transition">
                    {story.title}
                  </h4>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Videos */}
            <div className="bg-zinc-900 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-red-600" />
                Featured Videos
              </h3>
              <div className="space-y-4">
                {videos.map((video, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative bg-zinc-800 rounded-lg overflow-hidden mb-2 h-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white group-hover:text-red-600 transition" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <h5 className="text-sm font-semibold group-hover:text-red-600 transition mb-1">
                      {video.title}
                    </h5>
                    <p className="text-xs text-gray-400">{video.views} views</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-red-900 to-red-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm mb-4 text-red-100">Get the latest gaming news delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 mb-3 placeholder-red-200 text-white"
              />
              <button className="w-full bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 Game Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
