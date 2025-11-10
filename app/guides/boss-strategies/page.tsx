"use client";
import React from 'react';
import { Home, Flame, Sword, ArrowLeft, Shield, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function BossStrategiesPage() {
  const bosses = [
    { name: "The Corrupted King", difficulty: "Hard", phase: "End Game", weakness: "Fire & Lightning" },
    { name: "Shadow Assassin", difficulty: "Medium", phase: "Mid Game", weakness: "Light Magic" },
    { name: "Ancient Dragon", difficulty: "Very Hard", phase: "Optional", weakness: "Ice" },
    { name: "The Betrayer", difficulty: "Medium", phase: "Chapter 5", weakness: "Counter Attacks" },
    { name: "Final Boss", difficulty: "Very Hard", phase: "End Game", weakness: "All Elements" }
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

      <div className="relative h-72 bg-gradient-to-br from-red-900 via-red-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-red-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Sword className="w-12 h-12 text-red-500" />
            <h1 className="text-5xl font-bold">Boss Fight Strategies & Weaknesses</h1>
          </div>
          <p className="text-xl text-red-100">
            Master every boss encounter with detailed strategies, attack patterns, and exploit weaknesses
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-red-900/20 to-purple-900/20 border border-red-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Boss Battle Essentials</h2>
          <p className="text-gray-300">
            Each boss has unique attack patterns, weaknesses, and phases. Study these strategies to defeat even the toughest enemies and claim victory.
          </p>
        </div>

        <div className="space-y-4">
          {bosses.map((boss, idx) => (
            <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-red-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{boss.name}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-400">Phase: <span className="text-white">{boss.phase}</span></span>
                    <span className="text-gray-400">Weakness: <span className="text-red-400">{boss.weakness}</span></span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  boss.difficulty === 'Very Hard' ? 'bg-red-600/20 text-red-400' :
                  boss.difficulty === 'Hard' ? 'bg-orange-600/20 text-orange-400' :
                  'bg-yellow-600/20 text-yellow-400'
                }`}>
                  {boss.difficulty}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-black/40 rounded-lg flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Defense</div>
                    <div className="font-bold">Strategy</div>
                  </div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-sm text-gray-400">Offense</div>
                    <div className="font-bold">Tactics</div>
                  </div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-sm text-gray-400">Survival</div>
                    <div className="font-bold">Tips</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Detailed boss strategies with phase breakdowns coming soon!</p>
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
