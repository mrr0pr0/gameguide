"use client";
import React from 'react';
import { Home, Flame, Eye, ArrowLeft, Map, Sparkles, Package } from 'lucide-react';
import Link from 'next/link';

export default function HiddenSecretsPage() {
  const secretCategories = [
    { title: "Secret Areas", count: 15, icon: Map, description: "Hidden locations and secret rooms" },
    { title: "Easter Eggs", count: 23, icon: Sparkles, description: "Pop culture references and developer secrets" },
    { title: "Hidden Items", count: 42, icon: Package, description: "Rare weapons, armor, and collectibles" }
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

      <div className="relative h-72 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-emerald-200 hover:text-white transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-12 h-12 text-emerald-400" />
            <h1 className="text-5xl font-bold">Hidden Secrets & Easter Eggs Location</h1>
          </div>
          <p className="text-xl text-emerald-100">
            Discover every hidden secret, easter egg, and rare collectible in the game
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Secret Hunter's Guide</h2>
          <p className="text-gray-300">
            This comprehensive guide reveals all hidden secrets, easter eggs, and rare collectibles throughout the game world. Use the interactive maps and detailed descriptions to find them all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {secretCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-600 transition text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <div className="text-4xl font-bold text-emerald-400">{category.count}</div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Secret Hunting Tips</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong>Explore Thoroughly:</strong> Check behind waterfalls, inside hollow trees, and on rooftops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong>Listen Carefully:</strong> Many secrets emit unique sounds when you're nearby</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong>Try Everything:</strong> Hit suspicious walls, use abilities in unusual places</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong>Return Later:</strong> Some secrets require abilities or items unlocked later in the game</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Detailed locations with maps and screenshots coming soon!</p>
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
