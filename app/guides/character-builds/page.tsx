"use client";
import React from 'react';
import { Home, Flame, Users, ArrowLeft, Sword, Shield, Wand2, Target } from 'lucide-react';
import Link from 'next/link';

export default function CharacterBuildsPage() {
  const builds = [
    { name: "Berserker Warrior", playstyle: "Aggressive Melee", primary: "Strength", secondary: "Vitality", difficulty: "Beginner" },
    { name: "Shadow Assassin", playstyle: "Stealth & Critical", primary: "Dexterity", secondary: "Agility", difficulty: "Intermediate" },
    { name: "Arcane Mage", playstyle: "Magic DPS", primary: "Intelligence", secondary: "Spirit", difficulty: "Intermediate" },
    { name: "Holy Paladin", playstyle: "Tank & Support", primary: "Vitality", secondary: "Faith", difficulty: "Beginner" },
    { name: "Hybrid Spellblade", playstyle: "Magic Melee", primary: "Intelligence", secondary: "Strength", difficulty: "Advanced" },
    { name: "Ranger Marksman", playstyle: "Ranged DPS", primary: "Dexterity", secondary: "Perception", difficulty: "Intermediate" }
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

      <div className="relative h-72 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-purple-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold">Best Character Builds for Each Playstyle</h1>
          </div>
          <p className="text-xl text-purple-100">
            Optimize your character with min-max builds for every playstyle and combat approach
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Build Optimization Guide</h2>
          <p className="text-gray-300">
            Choose the perfect build that matches your playstyle. Each build includes stat distribution, equipment recommendations, skill trees, and combat strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {builds.map((build, idx) => {
            const icons = {
              "Aggressive Melee": Sword,
              "Stealth & Critical": Target,
              "Magic DPS": Wand2,
              "Tank & Support": Shield,
              "Magic Melee": Sword,
              "Ranged DPS": Target
            };
            const Icon = icons[build.playstyle as keyof typeof icons];

            return (
              <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-purple-600 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <Icon className="w-6 h-6 text-purple-400" />
                      {build.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{build.playstyle}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    build.difficulty === 'Advanced' ? 'bg-red-600/20 text-red-400' :
                    build.difficulty === 'Intermediate' ? 'bg-yellow-600/20 text-yellow-400' :
                    'bg-green-600/20 text-green-400'
                  }`}>
                    {build.difficulty}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-black/40 rounded">
                    <span className="text-sm text-gray-400">Primary Stat</span>
                    <span className="font-bold text-purple-400">{build.primary}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/40 rounded">
                    <span className="text-sm text-gray-400">Secondary Stat</span>
                    <span className="font-bold text-blue-400">{build.secondary}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Build Crafting Tips</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">•</span>
              <span><strong>Plan Early:</strong> Decide on your build before distributing stat points</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">•</span>
              <span><strong>Synergize Equipment:</strong> Match your gear and weapons to your build's strengths</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">•</span>
              <span><strong>Test Variations:</strong> Experiment with different stat distributions to find what works</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">•</span>
              <span><strong>Respec Wisely:</strong> Save respec items for major build changes</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Detailed build guides with skill trees and equipment sets coming soon!</p>
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
