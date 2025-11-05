// app/stories/multiplayer-shooter/page.tsx

export default function MultiplayerShooterStory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src="https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/multiplayer.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvbXVsdGlwbGF5ZXIud2VicCIsImlhdCI6MTc2MjIwMjcyOCwiZXhwIjoxNzkzNzM4NzI4fQ.NbpAiQxXrDu9MHxIGsvkaTcrD6x5mrjH8R4IAm33_Og"
              alt="Multiplayer Shooter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Multiplayer
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Multiplayer Shooter Beta Dates Announced
              </h1>
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span>By Morgan Taylor</span>
                <span>•</span>
                <span>November 1, 2025</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 font-medium">
                The highly anticipated tactical shooter opens its doors for public beta testing 
                next month, with early access for pre-order customers.
              </p>

              <p className="text-gray-700 mb-4">
                Velocity Games has officially announced the beta testing schedule for Battlefront: 
                Zero Hour, their ambitious entry into the competitive tactical shooter space. The 
                news comes after months of closed alpha testing with selected community members and 
                content creators.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Beta Schedule and Content
              </h2>

              <p className="text-gray-700 mb-4">
                The closed beta begins December 6th for players who pre-ordered any edition of the 
                game. This phase runs through December 13th and includes four maps and three game 
                modes: classic 5v5 Search and Destroy, a new Extraction mode, and Team Deathmatch. 
                Progress during closed beta will not carry over to launch.
              </p>

              <p className="text-gray-700 mb-4">
                Open beta follows immediately from December 14-21, accessible to all players on PC, 
                PlayStation 5, and Xbox Series X/S through their respective platform stores. Cross-play 
                will be enabled from day one, though players can opt into platform-specific matchmaking 
                if preferred. The open beta adds two additional maps and introduces the ranked 
                competitive mode.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Innovative Tactical Toolkit System
              </h2>

              <p className="text-gray-700 mb-4">
                According to game director Marcus Chen, the beta serves multiple purposes beyond 
                stress-testing servers. Were gathering data on weapon balance, map flow, and 
                matchmaking algorithms. Player feedback from alpha testing already resulted in 
                significant changes to movement mechanics and time-to-kill values.
              </p>

              <p className="text-gray-700 mb-4">
                The game distinguishes itself in the crowded shooter market through its Tactical 
                Toolkit system. Instead of selecting hero characters with predetermined abilities, 
                players customize their operator with three gadgets from a pool of 24 options. This 
                creates thousands of potential loadout combinations while maintaining competitive balance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Technical Excellence and Anti-Cheat
              </h2>

              <p className="text-gray-700 mb-4">
                Netcode improvements top the priority list. The development team partnered with 
                specialized networking engineers to implement 128-tick servers and predictive lag 
                compensation. Early testing shows hit registration feeling crisp even with 60ms latency, 
                crucial for competitive viability.
              </p>

              <p className="text-gray-700 mb-4">
                Weapon customization goes deep, with attachments that meaningfully alter gun handling 
                rather than just providing stat bonuses. Barrel length affects movement speed and ADS 
                time. Ammunition types trade damage for penetration or accuracy. Stock selection impacts 
                recoil patterns.
              </p>

              <p className="text-gray-700 mb-4">
                Anti-cheat measures received special attention following community concerns. The game 
                implements kernel-level protection that activates only during play sessions, along with 
                AI-driven behavioral analysis to catch sophisticated cheaters that traditional methods miss.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Rewards and Release Date
              </h2>

              <p className="text-gray-700 mb-4">
                Velocity Games confirmed beta participation grants exclusive cosmetic rewards at launch, 
                including weapon skins and operator uniforms. All beta players also receive 20% off the 
                games battle pass system launching with season one.
              </p>

              <p className="text-gray-700 mb-4">
                The full release is scheduled for February 18, 2026. Based on alpha feedback and recent 
                gameplay reveals, Battlefront: Zero Hour appears positioned to compete seriously with 
                established franchises in the tactical shooter ecosystem.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}