import {CommandPrompt} from '../components/CommandPrompt'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4" name="get-started">
            Get Started
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        <main className="space-y-16">
          {/* Installation */}
          <section className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                1
              </span>
              Installation
            </h2>

            <div className="space-y-6">
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🍺</span>
                  Via Homebrew (Recommended)
                </h3>
                <CommandPrompt />
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">📦</span>
                  Manual Download
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Download the latest{' '}
                  <a
                    href="https://github.com/ospfranco/sol/releases"
                    className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors">
                    release
                  </a>{' '}
                  from GitHub.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-200 text-sm">
                  💡 <strong>Tip:</strong> After installation, launch Sol using
                  your preferred keyboard shortcut.
                </p>
              </div>
            </div>
          </section>

          {/* Built-in Shortcuts */}
          <section className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                2
              </span>
              Built-in Shortcuts
            </h2>
            <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
              Sol comes with many shortcuts. Type in the name of any one of
              them:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                  <span className="mr-2">📝</span>
                  Text and Data
                </h3>
                <ul className="space-y-3">
                  <li className="text-neutral-300">
                    <strong className="text-white">Paste as JSON</strong> -
                    Format clipboard content as JSON
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Generate Nano ID</strong> -
                    Create a Nano ID
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Generate UUID</strong> -
                    Generate a UUID
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Generate Lorem Ipsum</strong>{' '}
                    - Create placeholder text
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                  <span className="mr-2">⚙️</span>
                  System Management
                </h3>
                <ul className="space-y-3">
                  <li className="text-neutral-300">
                    <strong className="text-white">
                      Remove derived data folder
                    </strong>{' '}
                    - Clear Xcode derived data
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Kill process</strong> -
                    Terminate running processes
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Kill all apps</strong> -
                    Close all running applications
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">
                      Toggle system appearance
                    </strong>{' '}
                    - Switch between light and dark mode
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2">🌐</span>
                  Communication & Network
                </h3>
                <ul className="space-y-3">
                  <li className="text-neutral-300">
                    <strong className="text-white">Start Google Meet</strong> -
                    Quick access to Google Meet
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">
                      Reveal Wi-Fi password
                    </strong>{' '}
                    - Show current Wi-Fi password
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">
                      Copy Wi-Fi password to clipboard
                    </strong>{' '}
                    - Copy Wi-Fi credentials
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center">
                  <span className="mr-2">🚀</span>
                  Productivity Tools
                </h3>
                <ul className="space-y-3">
                  <li className="text-neutral-300">
                    <strong className="text-white">Scratchpad</strong> -
                    Scratchpad for your notes
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Clipboard manager</strong> -
                    or{' '}
                    <code className="bg-neutral-700 text-yellow-300 px-2 py-1 rounded font-mono text-sm">
                      ⌘⌥V
                    </code>
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">Emoji picker</strong> - or{' '}
                    <code className="bg-neutral-700 text-yellow-300 px-2 py-1 rounded font-mono text-sm">
                      ⌘⌃Space
                    </code>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-neutral-900/30 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                  <span className="mr-2">🪟</span>
                  Window Management
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Comprehensive window management tools. Search "window" to see
                  all available options.
                </p>
              </div>

              <div className="bg-neutral-900/30 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-pink-400 mb-3 flex items-center">
                  <span className="mr-2">⚡</span>
                  Custom Shortcuts
                </h3>
                <p className="text-neutral-300 mb-4">
                  Create your own shortcuts using:
                </p>
                <ul className="ml-4 space-y-2">
                  <li className="text-neutral-300">
                    <strong className="text-white">URL shortcuts</strong> -
                    Launch websites or web apps
                  </li>
                  <li className="text-neutral-300">
                    <strong className="text-white">
                      AppleScript shortcuts
                    </strong>{' '}
                    - Execute custom AppleScript commands
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                3
              </span>
              Features
            </h2>

            <div className="space-y-8">
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  <span className="mr-2">🌍</span>
                  Translation
                </h3>
                <ol className="list-decimal ml-6 space-y-2 text-neutral-300">
                  <li>
                    Go to{' '}
                    <strong className="text-white">
                      Sol Settings → Translation
                    </strong>
                  </li>
                  <li>Select up to three languages</li>
                  <li>
                    Type any sentence and press{' '}
                    <code className="bg-neutral-700 text-yellow-300 px-2 py-1 rounded text-sm">
                      ⇧ Shift + Enter
                    </code>{' '}
                    to translate using Google Translate
                  </li>
                </ol>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  <span className="mr-2">🧮</span>
                  Quick Calculations
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Type any mathematical expression in the search bar to evaluate
                  it instantly.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2">🌐</span>
                  IP Address Lookup
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Type "IP" to quickly reveal your current IP address.
                </p>
              </div>
            </div>
          </section>

          {/* Settings */}
          <section className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                4
              </span>
              Settings
            </h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
              <p className="text-yellow-200 text-sm">
                💡 <strong>Access settings</strong> by searching for "Sol
                Settings" in the app.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                  <span className="mr-2">🚀</span>
                  Startup Options
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  <strong className="text-white">Open at Login</strong> -
                  Automatically launch Sol when your computer starts
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  <span className="mr-2">⌨️</span>
                  Global Shortcuts
                </h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">
                  Choose your preferred keyboard shortcut to open Sol:
                </p>
                <div className="flex flex-wrap gap-3">
                  <code className="bg-neutral-700 text-yellow-300 px-3 py-2 rounded-lg font-mono">
                    ⌘Space
                  </code>
                  <code className="bg-neutral-700 text-yellow-300 px-3 py-2 rounded-lg font-mono">
                    ⌥Space
                  </code>
                  <code className="bg-neutral-700 text-yellow-300 px-3 py-2 rounded-lg font-mono">
                    ⌃Space
                  </code>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  <span className="mr-2">🔍</span>
                  Search Engine
                </h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">
                  Select your preferred search engine for web searches:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <span className="bg-neutral-700 text-center py-2 px-3 rounded text-white">
                    Google
                  </span>
                  <span className="bg-neutral-700 text-center py-2 px-3 rounded text-white">
                    DuckDuckGo
                  </span>
                  <span className="bg-neutral-700 text-center py-2 px-3 rounded text-white">
                    Bing
                  </span>
                  <span className="bg-neutral-700 text-center py-2 px-3 rounded text-white">
                    Custom
                  </span>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-neutral-600">
                  <p className="text-sm text-neutral-300 mb-2">
                    Example custom URL:{' '}
                    <code className="bg-neutral-700 text-green-300 px-2 py-1 rounded font-mono">
                      https://example.com/search?q=%s
                    </code>
                  </p>
                  <p className="text-sm text-neutral-400">
                    A colored indicator shows whether your custom URL is valid
                    (green) or invalid (red).
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                  <span className="mr-2">📁</span>
                  File Search
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li>
                    <strong className="text-white">File Search Paths</strong> -
                    Add or remove folders where Sol will search for files
                  </li>
                  <li>Use the system file picker to add new folders</li>
                  <li>Remove folders from the search scope as needed</li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2">🖥️</span>
                  Display Behavior
                </h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">
                  Choose where Sol appears when opened:
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li>
                    <strong className="text-white">Frontmost Window</strong> -
                    Opens on the screen of the currently active window
                  </li>
                  <li>
                    <strong className="text-white">Cursor Screen</strong> -
                    Opens on the screen where your cursor is located
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-600">
                <h3 className="text-xl font-semibold text-pink-400 mb-4 flex items-center">
                  <span className="mr-2">🎛️</span>
                  Additional Options
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li>
                    <strong className="text-white">Show In-App Calendar</strong>{' '}
                    - Display your calendar within Sol
                  </li>
                  <li>
                    <strong className="text-white">
                      Show Browser Bookmarks
                    </strong>{' '}
                    - View and search your browser bookmarks
                  </li>
                  <li>
                    <strong className="text-white">
                      Show Upcoming Event in Menu Bar
                    </strong>{' '}
                    - Display your next calendar event in the menu bar
                  </li>
                  <li>
                    <strong className="text-white">
                      Save Clipboard History
                    </strong>{' '}
                    - Store and access previous clipboard items
                  </li>
                  <li>
                    <strong className="text-white">
                      Forward Media Keys to Media Player
                    </strong>{' '}
                    - Control your media player with keyboard media keys
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
