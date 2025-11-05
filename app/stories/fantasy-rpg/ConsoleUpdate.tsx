
export default function ConsoleUpdateStory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src="https://jziiuvusgsqonnjefeay.supabase.co/storage/v1/object/sign/gameguide/Pictures/controller.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOWM0YzRmNi1kY2FjLTQ5ZDAtYmI4ZC1kODIxNTE5Y2U3YmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYW1lZ3VpZGUvUGljdHVyZXMvY29udHJvbGxlci53ZWJwIiwiaWF0IjoxNzYyMjAyODkyLCJleHAiOjE3OTM3Mzg4OTJ9.OI35YR523XcJt2WHF0_CEQCY0eQp66rtseYYCNq9h5w"
              alt="Console Update"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Hardware
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Console Update Brings Major Performance Improvements
              </h1>
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span>By Jordan Lee</span>
                <span>•</span>
                <span>November 3, 2025</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 font-medium">
                The latest system software update delivers significant performance enhancements 
                and stability improvements across all supported titles.
              </p>

              <p className="text-gray-700 mb-4">
                Console manufacturers released a substantial firmware update this week that addresses 
                long-standing performance concerns and introduces several quality-of-life improvements 
                that gamers have been requesting for months.
              </p>

              <p className="text-gray-700 mb-4">
                The update, labeled version 24.11, focuses primarily on optimization. Load times have 
                been reduced by up to 30% across backward-compatible titles, while native next-gen 
                games see improved frame pacing and reduced stuttering. The systems variable refresh 
                rate (VRR) support has been expanded to include a wider range of displays.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Improved Thermal Management
              </h2>

              <p className="text-gray-700 mb-4">
                Perhaps most notably, the update improves thermal management with a revised fan curve 
                algorithm. Early testing shows console temperatures running 5-8 degrees Celsius cooler 
                under sustained loads, which should improve longevity and reduce noise during extended 
                gaming sessions.
              </p>

              <p className="text-gray-700 mb-4">
                Storage management also received attention. Users can now compress inactive games to 
                save space without fully uninstalling them, reducing download times when revisiting 
                older titles. The interface for managing external storage devices has been streamlined 
                significantly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Enhanced Quick Resume and Accessibility
              </h2>

              <p className="text-gray-700 mb-4">
                Quick Resume functionality, which allows players to suspend multiple games and return 
                to them instantly, now supports up to six titles simultaneously, up from four. The 
                feature also works more reliably with online multiplayer games, though some limitations 
                remain for live-service titles.
              </p>

              <p className="text-gray-700 mb-4">
                Accessibility features expanded considerably. New options include customizable haptic 
                feedback intensity, enhanced color blind modes, and improved text-to-speech for UI 
                navigation. Controller button remapping can now be saved on a per-game basis automatically.
              </p>

              <p className="text-gray-700 mb-4">
                The update rolls out automatically over the next week, but users can manually initiate 
                the download through system settings. A full restart is required to apply all changes. 
                Early adopter feedback has been overwhelmingly positive, with minimal reported issues.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}