"use client";
import React, { useState } from 'react';
import { Home, Flame, BookOpen, ChevronDown, ChevronUp, Map, Sword, Trophy, Users, Target, Ship, Compass, Star, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AssassinsCreedRoguePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const guideOutline = [
    {
      id: "introduction",
      title: "Introduction & Overview",
      icon: BookOpen,
      color: "red",
      subsections: [
        { title: "About Assassin's Creed Rogue", content: "Assassin's Creed Rogue is set during the Seven Years' War and follows Shay Patrick Cormac, a former Assassin who becomes a Templar. This game bridges the gap between AC III and AC Unity." },
        { title: "Key Features", content: "Naval combat, North Atlantic exploration, Arctic environments, Assassin hunting mechanics, improved gameplay from AC IV: Black Flag" },
        { title: "Setting & Time Period", content: "Mid-18th century (1752-1761), spanning New York, North Atlantic, and River Valley locations" },
        { title: "Protagonist Background", content: "Shay Patrick Cormac starts as an Assassin but turns Templar after witnessing the destruction caused by Assassin actions" }
      ]
    },
    {
      id: "main-story",
      title: "Main Story Walkthrough",
      icon: Map,
      color: "blue",
      subsections: [
        { title: "Sequence 1: Lessons and Revelations", content: "Introduction to Shay, the Assassin Brotherhood, and the first mission in Lisbon that changes everything" },
        { title: "Sequence 2: The Color of Right", content: "Shay's defection from the Assassins, stealing the manuscript, and his first steps toward the Templars" },
        { title: "Sequence 3: The Ends of the Earth", content: "Shay recovers and begins working with the Templars, hunting down Assassin targets" },
        { title: "Sequence 4: Circumstances", content: "Missions in New York, dealing with gangs, and taking out Assassin operations" },
        { title: "Sequence 5: Cui Bono", content: "Investigating the precursor sites and uncovering the truth about the artifacts" },
        { title: "Sequence 6: The Way the Wind Blows", content: "Naval missions, upgrading the Morrigan, and expanding Templar control in the North Atlantic" }
      ]
    },
    {
      id: "naval-combat",
      title: "Naval Combat & The Morrigan",
      icon: Ship,
      color: "cyan",
      subsections: [
        { title: "Ship Controls & Basics", content: "Steering, sailing speed, firing cannons, and using special weapons" },
        { title: "The Morrigan Upgrades", content: "Hull armor, weapons, crew capacity, speed improvements, and harpoon upgrades" },
        { title: "Naval Weapons Guide", content: "Broadside cannons, swivel guns, mortars, puckle guns, burning oil, and ram attacks" },
        { title: "Naval Combat Strategies", content: "Weak point targeting, boarding tactics, storm navigation, and fleet encounters" },
        { title: "Legendary Ship Battles", content: "How to defeat all legendary ships in the North Atlantic" },
        { title: "Naval Contracts", content: "Complete guide to all naval contracts and rewards" }
      ]
    },
    {
      id: "locations",
      title: "Locations & Exploration",
      icon: Compass,
      color: "green",
      subsections: [
        { title: "New York City", content: "Districts, viewpoints, fast travel locations, collectibles, and side activities" },
        { title: "River Valley", content: "Wilderness exploration, outposts, settlements, and hunting grounds" },
        { title: "North Atlantic", content: "Islands, icebergs, naval locations, and hidden treasures" },
        { title: "Viewpoint Locations", content: "All synchronization points across all regions with maps" },
        { title: "Fast Travel Guide", content: "Unlocking and using fast travel points efficiently" },
        { title: "Secret Locations", content: "Hidden caves, underwater locations, and special areas" }
      ]
    },
    {
      id: "combat",
      title: "Combat & Stealth Guide",
      icon: Sword,
      color: "orange",
      subsections: [
        { title: "Basic Combat Mechanics", content: "Attack combos, counter-kills, defense, and dodging" },
        { title: "Weapon Types", content: "Swords, hidden blades, firearms, grenades, and special weapons" },
        { title: "Stealth Tactics", content: "Air assassinations, hiding spots, blend mechanics, and silent takedowns" },
        { title: "Fighting Multiple Enemies", content: "Managing groups, environmental kills, and crowd control" },
        { title: "Boss Fight Strategies", content: "How to defeat each major story boss encounter" },
        { title: "Assassin Stalkers", content: "How to detect and counter Assassin ambushes (unique to Rogue)" }
      ]
    },
    {
      id: "collectibles",
      title: "Collectibles & 100% Completion",
      icon: Trophy,
      color: "yellow",
      subsections: [
        { title: "Animus Fragments", content: "All 100 fragment locations with detailed maps" },
        { title: "Viking Sword Pieces", content: "Locations of all sword fragments to unlock the Viking sword" },
        { title: "Manuscripts", content: "Templar and Assassin manuscripts scattered across the world" },
        { title: "Treasure Maps", content: "Finding and using all treasure maps to locate buried treasure" },
        { title: "Shanties Collection", content: "All sea shanty locations for your crew to sing" },
        { title: "Cave Paintings", content: "Native American cave paintings and their locations" },
        { title: "Renovation Projects", content: "All buildings to renovate for income and completion" }
      ]
    },
    {
      id: "side-activities",
      title: "Side Missions & Activities",
      icon: Target,
      color: "purple",
      subsections: [
        { title: "Assassin Interception", content: "Hunting down remaining Assassins throughout the world" },
        { title: "Gang Headquarters", content: "Taking over all gang hideouts in New York" },
        { title: "Fort Capturing", content: "Strategies for capturing all forts in the wilderness and sea" },
        { title: "Hunting & Whaling", content: "Hunting legendary animals and whaling locations" },
        { title: "Naval Convoy Missions", content: "Intercepting enemy convoys for resources" },
        { title: "Settlement Missions", content: "Helping settlements and unlocking rewards" },
        { title: "Courier Missions", content: "Timed delivery challenges throughout the regions" }
      ]
    },
    {
      id: "equipment",
      title: "Equipment & Upgrades",
      icon: Star,
      color: "pink",
      subsections: [
        { title: "Weapon Upgrades", content: "How to unlock and upgrade all weapons" },
        { title: "Outfit Crafting", content: "Crafting all outfits and their special abilities" },
        { title: "Armor Sets", content: "Complete armor sets and their bonuses" },
        { title: "Equipment Holsters", content: "Increasing capacity for pistols, grenades, and ammunition" },
        { title: "Best Loadouts", content: "Recommended equipment combinations for different playstyles" },
        { title: "Material Gathering", content: "Where to find all crafting materials efficiently" }
      ]
    },
    {
      id: "achievements",
      title: "Achievements & Trophies",
      icon: Trophy,
      color: "gold",
      subsections: [
        { title: "Story Achievements", content: "Achievements unlocked through story progression" },
        { title: "Combat Achievements", content: "Kill streaks, special kills, and combat challenges" },
        { title: "Exploration Achievements", content: "Sync all viewpoints, discover all locations" },
        { title: "Naval Achievements", content: "Ship upgrades, legendary ships, and naval combat feats" },
        { title: "Collectible Achievements", content: "Finding all collectibles and completing collections" },
        { title: "Miscellaneous Achievements", content: "Special and hidden achievements with strategies" },
        { title: "100% Sync Guide", content: "Step-by-step roadmap to full synchronization" }
      ]
    },
    {
      id: "tips",
      title: "Pro Tips & Strategies",
      icon: Flame,
      color: "red",
      subsections: [
        { title: "Beginner Tips", content: "Essential tips for players starting their journey as Shay" },
        { title: "Money Making Guide", content: "Best methods to earn currency quickly" },
        { title: "Resource Farming", content: "Efficient routes for gathering materials" },
        { title: "Time-Saving Techniques", content: "Shortcuts and efficient completion strategies" },
        { title: "Common Mistakes to Avoid", content: "Pitfalls and how to prevent them" },
        { title: "Speed Run Strategies", content: "For players looking to complete the game quickly" },
        { title: "New Game Plus Tips", content: "Making the most of subsequent playthroughs" }
      ]
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

      <div className="relative h-96 bg-gradient-to-br from-red-900 via-red-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/guides" className="flex items-center gap-2 text-red-400 hover:text-red-300 transition mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-2 text-red-400 mb-3">
            <Ship className="w-6 h-6" />
            <span className="font-semibold uppercase text-sm">Complete Walkthrough</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">Assassin's Creed Rogue</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Master your journey as Shay Patrick Cormac - from Assassin to Templar hunter. Complete walkthrough, naval combat strategies, collectibles, and 100% synchronization guide.
          </p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span>~15-20 hours for 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Difficulty: Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-red-400" />
              <span>All Achievements Covered</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-red-500" />
            About This Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            This comprehensive guide covers everything you need to achieve 100% synchronization in Assassin's Creed Rogue. Whether you're hunting Assassins across the North Atlantic, upgrading the Morrigan to legendary status, or tracking down every collectible, this guide has you covered.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Click on any section below to expand and view detailed information. Each section includes step-by-step instructions, maps, strategies, and tips to make your playthrough as smooth as possible.
          </p>
        </div>

        <div className="space-y-4">
          {guideOutline.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections[section.id];
            const colorClasses = {
              red: 'from-red-900/40 to-red-800/20 border-red-700 hover:border-red-600',
              blue: 'from-blue-900/40 to-blue-800/20 border-blue-700 hover:border-blue-600',
              cyan: 'from-cyan-900/40 to-cyan-800/20 border-cyan-700 hover:border-cyan-600',
              green: 'from-green-900/40 to-green-800/20 border-green-700 hover:border-green-600',
              orange: 'from-orange-900/40 to-orange-800/20 border-orange-700 hover:border-orange-600',
              yellow: 'from-yellow-900/40 to-yellow-800/20 border-yellow-700 hover:border-yellow-600',
              purple: 'from-purple-900/40 to-purple-800/20 border-purple-700 hover:border-purple-600',
              pink: 'from-pink-900/40 to-pink-800/20 border-pink-700 hover:border-pink-600',
              gold: 'from-amber-900/40 to-amber-800/20 border-amber-700 hover:border-amber-600'
            };

            return (
              <div key={section.id} className={`bg-gradient-to-r ${colorClasses[section.color as keyof typeof colorClasses]} border rounded-xl overflow-hidden transition-all duration-300`}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {section.subsections.length} subsections
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {section.subsections.map((subsection, idx) => (
                      <div key={idx} className="p-5 bg-black/40 rounded-lg border border-white/10">
                        <h4 className="font-bold text-lg mb-2 text-red-400">
                          {subsection.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Quick Start Tips
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Upgrade the Morrigan early for easier naval combat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Sync all viewpoints to reveal collectibles on the map</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Listen for whispers to detect Assassin stalkers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Hunt animals for crafting materials to upgrade equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Complete side missions as you explore for maximum efficiency</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              100% Completion Checklist
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Complete all 6 main sequences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Collect all 100 Animus Fragments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Capture all forts and gang headquarters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Fully upgrade the Morrigan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Find all Viking sword pieces and treasures</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-red-900 to-red-700 rounded-xl text-center">
          <h3 className="text-3xl font-bold mb-3">Need More Help?</h3>
          <p className="text-red-100 mb-6 text-lg">
            Have questions about specific missions or stuck on a collectible? Check our community forums or request specific guide sections.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/guides" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Back to All Guides
            </Link>
            <Link href="/request-guide" className="bg-black/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/70 transition border border-white/20">
              Request Help
            </Link>
          </div>
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
