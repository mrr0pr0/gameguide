// app/stories/indie-game/page.tsx

export default function IndieGameStory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src="https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/arcade.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvYXJjYWRlLndlYnAiLCJpYXQiOjE3NjIyMDI2ODIsImV4cCI6MTc5MzczODY4Mn0.SBokh7HX7fSFfuieu99ZGEPnjUiIOmvpjRxxBt_u_pI"
              alt="Indie Game"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Indie
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Indie Developers New Game Gets Perfect Score
              </h1>
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span>By Casey Williams</span>
                <span>•</span>
                <span>November 2, 2025</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 font-medium">
                A solo developers passion project has captured critics hearts, earning rare 
                perfect scores from major gaming publications.
              </p>

              <p className="text-gray-700 mb-4">
                In a year dominated by big-budget blockbusters, a small indie game called Echoes 
                of Yesterday has emerged as the surprise critical darling, earning perfect 10/10 
                scores from multiple major gaming outlets.
              </p>

              <p className="text-gray-700 mb-4">
                Created single-handedly over four years by developer Emma Kowalski, the narrative 
                puzzle-adventure game tells a deeply personal story about memory, loss, and connection. 
                What began as a therapeutic project following a family tragedy transformed into a 
                meditation on grief that resonates universally.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Hand-Crafted Art and Design
              </h2>

              <p className="text-gray-700 mb-4">
                The games hand-painted art style draws inspiration from watercolor illustrations, 
                with each scene crafted individually. No procedural generation here - every background, 
                character, and object represents countless hours of meticulous artwork. The visual 
                presentation shifts subtly based on the protagonists emotional state, creating an 
                intimate connection between player and character.
              </p>

              <p className="text-gray-700 mb-4">
                Gameplay revolves around solving environmental puzzles by manipulating memories, 
                represented as physical objects the player can rearrange, combine, or view from 
                different temporal perspectives. The mechanic serves both the narrative and creates 
                genuinely challenging brainteasers that never feel arbitrary.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Critical Praise and Impact
              </h2>

              <p className="text-gray-700 mb-4">
                Critics have particularly praised the games restraint. At roughly six hours, it 
                never overstays its welcome. Theres no combat, no fail states, no artificial padding. 
                The focus remains laser-sharp on delivering an emotionally resonant experience. The 
                soundtrack, also composed by Kowalski, features minimalist piano pieces that underscore 
                key moments without overwhelming them.
              </p>

              <p className="text-gray-700 mb-4">
                What makes this achievement more remarkable is Kowalski had no formal game development 
                training. She taught herself programming, art, music composition, and sound design 
                through online resources and community forums. The game was built entirely in Unity, 
                with most assets created in free or low-cost software.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Commercial Success with Purpose
              </h2>

              <p className="text-gray-700 mb-4">
                Echoes of Yesterday launched simultaneously on PC, Switch, and mobile platforms at 
                a modest $14.99 price point. Within 48 hours, it topped sales charts across all 
                platforms. Kowalski announced all proceeds beyond covering development costs will be 
                donated to grief counseling organizations.
              </p>

              <p className="text-gray-700 mb-4">
                The gaming community has rallied around the title, with streamers emotional reactions 
                going viral and social media flooded with personal stories from players sharing how 
                the game helped them process their own losses. This indie success story serves as a 
                powerful reminder that in gaming, genuine creative vision and emotional authenticity 
                can triumph over massive budgets and marketing campaigns.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}