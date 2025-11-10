"use client";
import React from 'react';
import { Home, Flame, Swords, ArrowLeft, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Link from 'next/link';

export default function PvPTierListPage() {
  const tierList = [
    { tier: "S", characters: ["Shadow Assassin", "Arcane Mage"], color: "from-red-600 to-red-500", icon: TrendingUp },
    { tier: "A", characters: ["Paladin", "Ranger", "Spellblade"], color: "from-orange-600 to-orange-500", icon: TrendingUp },
    { tier: "B", characters: ["Warrior", "Cleric", "Rogue"], color: "from-yellow-600 to-yellow-500", icon: Minus },
    { tier: "C", characters: ["Berserker", "Druid"], color: "from-green-600 to-green-500", icon: TrendingDown },
    { tier: "D", characters: ["Necromancer"], color: "from-blue-600 to-blue-500", icon: TrendingDown }
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

      <div className="relative h-72 bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-red-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Swords className="w-12 h-12 text-red-500" />
            <h1 className="text-5xl font-bold">PvP Tier List & Meta Analysis</h1>
          </div>
          <p className="text-xl text-red-100">
            Current competitive rankings, character viability, and meta strategies for PvP
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-red-900/20 to-purple-900/20 border border-red-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Meta Overview - Season 3</h2>
          <p className="text-gray-300 mb-4">
            This tier list reflects the current competitive meta based on tournament results, ranked statistics, and professional player input. Rankings are updated monthly.
          </p>
          <div className="flex gap-4 text-sm">
            <div className="px-4 py-2 bg-black/40 rounded">
              <span className="text-gray-400">Last Updated:</span>
              <span className="ml-2 font-bold">January 2025</span>
            </div>
            <div className="px-4 py-2 bg-black/40 rounded">
              <span className="text-gray-400">Patch Version:</span>
              <span className="ml-2 font-bold">3.2.1</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-12">
          {tierList.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition">
                <div className={`flex items-center justify-between p-6 bg-gradient-to-r ${tier.color}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold">{tier.tier}</div>
                    <div>
                      <div className="font-semibold text-sm">
                        {tier.tier === 'S' ? 'Top Tier' : 
                         tier.tier === 'A' ? 'Strong Picks' : 
                         tier.tier === 'B' ? 'Viable' : 
                         tier.tier === 'C' ? 'Situational' : 'Weak'}
                      </div>
                      <div className="text-xs opacity-90">
                        {tier.characters.length} characters
                      </div>
                    </div>
                  </div>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {tier.characters.map((character, charIdx) => (
                      <div key={charIdx} className="px-4 py-2 bg-zinc-800 rounded-lg font-semibold hover:bg-zinc-700 transition cursor-pointer">
                        {character}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-red-400">Meta Trends</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong>Rising:</strong> Burst damage compositions are dominating</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span><strong>Falling:</strong> Sustain and tanky builds losing effectiveness</span>
              </li>
              <li className="flex items-start gap-3">
                <Minus className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Stable:</strong> Balanced team compositions remain viable</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Pro Tips</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Counter-pick based on enemy team composition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Master 2-3 characters from different tiers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Practice optimal combos in training mode</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Stay updated on balance patches</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Detailed character matchups and strategy guides coming soon!</p>
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
