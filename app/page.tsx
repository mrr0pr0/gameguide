"use client";

import Link from "next/link";
import { Flame, Newspaper, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <main className="w-full max-w-5xl px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-16 h-16 text-red-600" />
            <h1 className="text-6xl font-bold">
              GameGuide<span className="text-red-600">Nordic</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your ultimate destination for gaming news, reviews, and comprehensive guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/firstpage">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900 to-red-600 p-8 h-80 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/20 rounded-full -ml-20 -mb-20" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <Newspaper className="w-16 h-16 mb-4 text-white group-hover:scale-110 transition-transform" />
                  <h2 className="text-4xl font-bold mb-3">News</h2>
                  <p className="text-red-100 text-lg">
                    Latest gaming news, reviews, and industry updates from around the world
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  Explore News 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/guides">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 h-80 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl hover:shadow-zinc-700/50 border border-zinc-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-600/10 rounded-full -ml-20 -mb-20" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <BookOpen className="w-16 h-16 mb-4 text-red-600 group-hover:scale-110 transition-transform" />
                  <h2 className="text-4xl font-bold mb-3">Guides</h2>
                  <p className="text-gray-300 text-lg">
                    Complete walkthroughs, tips, strategies, and expert advice for your favorite games
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  Browse Guides 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-16 text-gray-500 text-sm">
          <p>© 2025 GameGuideNordic. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}