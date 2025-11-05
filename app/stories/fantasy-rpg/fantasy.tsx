// app/stories/fantasy-rpg/page.tsx

export default function FantasyRPGStory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src="https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/PS5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvUFM1LndlYnAiLCJpYXQiOjE3NjIyMDI2MDMsImV4cCI6MTc5MzczODYwM30.d_wufYLYPMnn8fcTTcNd7vmTN_Ot0jqOgmDmT7lSEaA"
              alt="New Fantasy RPG"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                RPG
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                New Fantasy RPG Announced with Stunning Visuals
              </h1>
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span>By Alex Martinez</span>
                <span>•</span>
                <span>November 4, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 font-medium">
                A groundbreaking new fantasy RPG has been unveiled, showcasing next-generation 
                graphics that push the boundaries of visual fidelity.
              </p>

              <p className="text-gray-700 mb-4">
                Developers at Mythic Studios have finally pulled back the curtain on their highly 
                anticipated fantasy RPG, tentatively titled Realms of Eternity. The announcement 
                came during a surprise showcase event that left audiences stunned with its 
                photorealistic environments and innovative combat system.
              </p>

              <p className="text-gray-700 mb-4">
                The game promises an open world spanning over 200 square miles of diverse landscapes, 
                from snow-capped mountains to bioluminescent underground caverns. What sets it apart 
                is the proprietary lighting engine that renders real-time ray tracing with unprecedented 
                efficiency on next-gen consoles.
              </p>

              <p className="text-gray-700 mb-4">
                Lead designer Sarah Chen described the project as a love letter to classic fantasy 
                while embracing cutting-edge technology. Players will create custom characters from 
                eight distinct races, each with unique storylines that converge in unexpected ways.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Revolutionary Combat System
              </h2>

              <p className="text-gray-700 mb-4">
                The combat system blends tactical positioning with real-time action, allowing players 
                to pause and issue commands to party members. Magic spells react dynamically to 
                environmental conditions - cast a lightning spell during rain for devastating area 
                effects, or ignite oil slicks to control battlefields.
              </p>

              <p className="text-gray-700 mb-4">
                Initial gameplay footage revealed incredibly detailed character models with over 100 
                points of facial animation, making dialogue scenes feel cinematic. The game features 
                a dynamic weather system where seasons change naturally, affecting both gameplay and 
                narrative events.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Release Date and Platforms
              </h2>

              <p className="text-gray-700 mb-4">
                Mythic Studios confirmed the game is targeting a Q4 2026 release window for 
                PlayStation 5, Xbox Series X/S, and PC. Early previews suggest this could be a 
                strong contender for next years Game of the Year awards.
              </p>

              <p className="text-gray-700 mb-4">
                Pre-orders are expected to open in early 2026, with special editions including 
                art books, soundtrack collections, and exclusive in-game content. The development 
                team plans to share more details through monthly developer diaries leading up to 
                launch.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}