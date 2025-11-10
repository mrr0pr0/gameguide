"use client";
import React from 'react';
import { Home, Flame, Hammer, ArrowLeft, Package, TreePine, Gem } from 'lucide-react';
import Link from 'next/link';

export default function CraftingPage() {
  const craftingCategories = [
    { title: "Weapons", recipes: 45, materials: "Metal, Wood, Gems", icon: Hammer },
    { title: "Armor", recipes: 38, materials: "Leather, Cloth, Ore", icon: Package },
    { title: "Consumables", recipes: 62, materials: "Herbs, Minerals, Animal Parts", icon: TreePine },
    { title: "Upgrades", recipes: 28, materials: "Rare Materials, Essences", icon: Gem }
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

      <div className="relative h-72 bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-orange-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Hammer className="w-12 h-12 text-orange-400" />
            <h1 className="text-5xl font-bold">Beginner's Guide to Crafting & Resources</h1>
          </div>
          <p className="text-xl text-orange-100">
            Master the crafting system, find all materials, and create the best equipment
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Crafting System Overview</h2>
          <p className="text-gray-300 mb-4">
            The crafting system allows you to create powerful weapons, armor, consumables, and upgrades. Gather materials from exploration, combat, and resource nodes throughout the world.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-black/40 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">173</div>
              <div className="text-sm text-gray-400">Total Recipes</div>
            </div>
            <div className="p-4 bg-black/40 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">85</div>
              <div className="text-sm text-gray-400">Material Types</div>
            </div>
            <div className="p-4 bg-black/40 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">12</div>
              <div className="text-sm text-gray-400">Crafting Stations</div>
            </div>
            <div className="p-4 bg-black/40 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">5</div>
              <div className="text-sm text-gray-400">Rarity Tiers</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {craftingCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-600 transition">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-orange-600/20 rounded-lg">
                    <Icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.recipes} recipes available</p>
                  </div>
                </div>
                <div className="p-4 bg-black/40 rounded">
                  <div className="text-sm text-gray-400 mb-1">Required Materials:</div>
                  <div className="font-semibold text-orange-400">{category.materials}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Essential Crafting Tips for Beginners</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Gather Everything:</strong> Pick up all resources as you explore, you'll need them later</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Unlock Crafting Stations:</strong> Find and unlock all crafting stations for access to recipes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Save Rare Materials:</strong> Don't waste rare materials on low-tier items</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Experiment with Combinations:</strong> Try different material combinations to discover new recipes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Upgrade Your Tools:</strong> Better tools yield more materials per gather</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Complete recipe lists and material farming routes coming soon!</p>
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
