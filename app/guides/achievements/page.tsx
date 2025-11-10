"use client";
import React from 'react';
import { Home, Flame, Trophy, ArrowLeft, Star, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AchievementsPage() {
  const achievementCategories = [
    {
      title: "Story-Related Achievements",
      description: "Unlocked through natural progression",
      difficulty: "Easy",
      count: 15
    },
    {
      title: "Combat & Skill Achievements",
      description: "Master combat techniques and special moves",
      difficulty: "Medium",
      count: 12
    },
    {
      title: "Collectible Achievements",
      description: "Find all hidden items and treasures",
      difficulty: "Medium",
      count: 10
    },
    {
      title: "Completion Achievements",
      description: "100% game completion requirements",
      difficulty: "Hard",
      count: 8
    },
    {
      title: "Challenge & Miscellaneous",
      description: "Special challenges and hidden achievements",
      difficulty: "Hard",
      count: 5
    }
  ];

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

      <div className="relative h-72 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-amber-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold">100% Achievement Completion Roadmap</h1>
          </div>
          <p className="text-xl text-amber-100">
            Complete guide to unlocking every achievement and trophy in the game
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-6 h-6 text-yellow-500" />
            Overview
          </h2>
          <p className="text-gray-300 mb-4">
            This comprehensive achievement guide provides a strategic roadmap to unlock all achievements efficiently. Follow the optimized order to minimize playthroughs and maximize your completion percentage.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-black/40 rounded-lg">
              <div className="text-3xl font-bold text-yellow-400 mb-1">50</div>
              <div className="text-sm text-gray-400">Total Achievements</div>
            </div>
            <div className="p-4 bg-black/40 rounded-lg">
              <div className="text-3xl font-bold text-yellow-400 mb-1">~30h</div>
              <div className="text-sm text-gray-400">Estimated Time</div>
            </div>
            <div className="p-4 bg-black/40 rounded-lg">
              <div className="text-3xl font-bold text-yellow-400 mb-1">1-2</div>
              <div className="text-sm text-gray-400">Playthroughs Needed</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievementCategories.map((category, idx) => (
            <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-yellow-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-600/20 rounded-full text-xs font-bold text-yellow-400">
                  <Trophy className="w-3 h-3" />
                  {category.count}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-500">Difficulty:</span>
                <span className={category.difficulty === 'Easy' ? 'text-green-400' : category.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'}>
                  {category.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-yellow-500" />
            Achievement Hunting Tips
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Plan Your Route:</strong> Many achievements can be unlocked simultaneously with proper planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Use Guides for Missables:</strong> Some achievements can only be unlocked during specific story moments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Track Your Progress:</strong> Keep notes on which achievements you're working toward</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Clean-Up Playthrough:</strong> Save collectible and completion achievements for after the main story</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">More detailed achievement walkthroughs coming soon!</p>
          <Link href="/guides" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Back to All Guides
          </Link>
        </div>
      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 GameGuideNordic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
