import CommandPrompt from '../../components/CommandPrompt'
import Prompt from '../../components/Prompt'
import {Key} from '../../components/Key'
import Head from 'next/head'
import Link from 'next/link'
import MacKeyboard from '../../components/MacKeyboard'

export default function Documentation() {
  return (
    <div className="bg-black">
      <Head>
        <title>SOL - Getting started</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-8 overflow-y-scroll flex flex-col items-center">
        <header className="fixed top-0 left-0 w-full z-20 flex flex-col items-center justify-between py-4 bg-black/60 backdrop-blur-md border-b border-neutral-800">
          <div className="w-full sm:w-[80%] md:w-[70%] px-6 flex flex-row items-center justify-between">
            <span className="text-white font-bold text-lg">
              Getting Started
            </span>
            <Link href="/" className="text-white hover:text-blue-400">
              Home
            </Link>
          </div>
        </header>
        <div className="h-20" />

        <div className="mx-auto w-full pt-24 pb-16 px-6 gap-4 sm:w-[70%] md:w-[60%] flex flex-col">
          <h1 className="text-white mt-4 text-4xl sm:text-6xl max-w-3xl relative">
            <span className="text-neutral-400 font-thin text-base absolute -left-6 top-1">
              00
            </span>
            Get Started
          </h1>
          <h2 className="text-neutral-400 text-lg mb-12">
            The basic tips to use Sol effectively
          </h2>

          {/* Installation */}
          <div className="pb-16">
            <h2 className="text-white text-2xl font-medium mt-4 relative">
              <span className="text-neutral-400 font-thin text-base absolute -left-6">
                01
              </span>
              Invoke Sol
            </h2>

            <div className="space-y-8">
              <p className="text-neutral-400">
                After installation always invoke Sol via the shortcut you
                selected
              </p>

              <MacKeyboard
                highlightedKeys={['command', 'space']}
                className="mt-6"
              />
            </div>
          </div>

          {/* Built-in Shortcuts */}
          <div className="pb-16">
            <h2 className="text-white text-2xl font-medium mt-4 relative">
              <span className="text-neutral-400 font-thin text-base absolute -left-6">
                02
              </span>
              Built-in Shortcuts
            </h2>
            <p className="text-neutral-400 mb-6">
              Sol comes with many shortcuts. Type in the main search field to
              access them them:
            </p>

            <div className="space-y-12">
              {/* Text and Data */}
              <div>
                <h3 className="text-lg text-orange-400 mb-4 flex items-center">
                  Text and Data
                </h3>
                <div className="space-y-4">
                  <div>
                    <Prompt text="Paste as JSON" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Format clipboard content as JSON
                    </p>
                  </div>
                  <div>
                    <Prompt text="Generate Nano ID" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Create a Nano ID
                    </p>
                  </div>
                  <div>
                    <Prompt text="Generate UUID" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Generate a UUID
                    </p>
                  </div>
                  <div>
                    <Prompt text="Generate Lorem Ipsum" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Create placeholder text
                    </p>
                  </div>
                </div>
              </div>

              {/* System Management */}
              <div>
                <h3 className="text-lg font-medium text-red-400 mb-4 flex items-center">
                  System Management
                </h3>
                <div className="space-y-4">
                  <div>
                    <Prompt text="Remove derived data folder" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Clear Xcode derived data
                    </p>
                  </div>
                  <div>
                    <Prompt text="Kill process" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Terminate running processes
                    </p>
                  </div>
                  <div>
                    <Prompt text="Kill all apps" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Close all running applications
                    </p>
                  </div>
                  <div>
                    <Prompt text="Toggle system appearance" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Switch between light and dark mode
                    </p>
                  </div>
                </div>
              </div>

              {/* Window Management */}
              <div>
                <h3 className="text-lg font-medium text-indigo-400 mb-4 flex items-center">
                  Window Management
                </h3>
                <div>
                  <Prompt text="Window Management" />
                  <p className="text-neutral-400 text-sm mt-1 ml-1">
                    Comprehensive window management tools. Search window to see
                    all available options.
                  </p>
                </div>
              </div>

              {/* Custom Shortcuts */}
              <div>
                <h3 className="text-lg font-medium text-pink-400 mb-4 flex items-center">
                  <span className="mr-2">⚡</span>
                  Custom Shortcuts
                </h3>
                <div className="space-y-4">
                  <div>
                    <Prompt text="URL shortcuts" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Launch websites or web apps
                    </p>
                  </div>
                  <div>
                    <Prompt text="AppleScript shortcuts" />
                    <p className="text-neutral-400 text-sm mt-1 ml-1">
                      Execute custom AppleScript commands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="pb-16">
            <h2 className="text-white text-2xl font-medium mt-4 relative">
              <span className="text-neutral-400 font-thin text-base absolute -left-6">
                03
              </span>
              Features
            </h2>
            <p className="text-neutral-400 mb-6">
              Special features to boost your productivity
            </p>

            <div className="space-y-8">
              <div className="border border-neutral-700 rounded-lg p-6 bg-black/50">
                <h3 className="text-lg font-medium text-blue-400 mb-4 flex items-center">
                  Translation
                </h3>
                <ol className="list-decimal ml-6 space-y-2 text-neutral-400">
                  <li>
                    Go to{' '}
                    <strong className="text-white">
                      Sol Settings → Translation
                    </strong>
                  </li>
                  <li>Select up to three languages</li>
                  <li>
                    Type any sentence and press{' '}
                    <span className="flex items-center gap-2 inline-flex">
                      <Key title="⇧" />
                      <Key title="return" />
                    </span>{' '}
                    to translate using Google Translate
                  </li>
                </ol>
              </div>

              <div className="border border-neutral-700 rounded-lg p-6 bg-black/50">
                <h3 className="text-lg font-medium text-purple-400 mb-4 flex items-center">
                  <span className="mr-2">🧮</span>
                  Quick Calculations
                </h3>
                <p className="text-neutral-400">
                  Type any mathematical expression in the search bar to evaluate
                  it instantly.
                </p>
              </div>

              <div className="border border-neutral-700 rounded-lg p-6 bg-black/50">
                <h3 className="text-lg font-medium text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2">🌐</span>
                  IP Address Lookup
                </h3>
                <p className="text-neutral-400">
                  Type IP to quickly reveal your current IP address.
                </p>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="pb-16">
            <h2 className="text-white text-2xl font-medium mt-4 relative">
              <span className="text-neutral-400 font-thin text-base absolute -left-6">
                04
              </span>
              Settings
            </h2>
            <p className="text-neutral-400 mb-6">
              Customize Sol to fit your workflow
            </p>

            <div className="border border-yellow-500/20 rounded-lg p-4 bg-yellow-900/10 mb-8">
              <p className="text-yellow-200 text-sm flex items-center">
                <span className="mr-2">💡</span>
                <span>
                  <strong>Access settings</strong> by searching for Sol Settings
                  in the app, or by pressing ⌘ + comma when the app is open.
                </span>
              </p>
            </div>

            <div className="space-y-8">
              <div className="border border-neutral-700 rounded-lg p-6 bg-black/50">
                <h3 className="text-lg font-medium text-green-400 mb-4 flex items-center">
                  <span className="mr-2">🚀</span>
                  Startup Options
                </h3>
                <p className="text-neutral-400">
                  <strong className="text-white">Open at Login</strong> -
                  Automatically launch Sol when your computer starts
                </p>
              </div>

              <div className="border border-neutral-700 rounded-lg p-6 bg-black/50">
                <h3 className="text-lg font-medium text-blue-400 mb-4 flex items-center">
                  <span className="mr-2">⌨️</span>
                  Global Shortcuts
                </h3>
                <p className="text-neutral-400 mb-4">
                  Choose your preferred keyboard shortcut to open Sol:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Key title="⌘" />
                  <Key title="Space" />
                  <span className="mx-2 text-neutral-400">or</span>
                  <Key title="⌥" />
                  <Key title="Space" />
                  <span className="mx-2 text-neutral-400">or</span>
                  <Key title="⌃" />
                  <Key title="Space" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-neutral-300 flex flex-row items-center justify-center text-sm pb-12 mt-8">
          <a
            href="https://github.com/ospfranco/sol"
            className="text-blue-500 hover:text-blue-400">
            GitHub
          </a>
          <span className="mx-3">•</span>
          <Link href="/" className="text-blue-500 hover:text-blue-400">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
