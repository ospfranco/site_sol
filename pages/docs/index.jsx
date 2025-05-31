export default function Documentation() {
	return (
		<div className="p-8 gap-2 flex flex-col  items-center bg-neutral-900 bg-opacity-50">
			<header className="mb-8">
				<h1 className="text-4xl font-semibold" name="get-started">
					Get Started
				</h1>
			</header>

			<main className="space-y-12">
				{/* Installation */}
				<section>
					<h2 className="text-2xl font-semibold  mb-4">
						Installation
					</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-medium  mb-2">
								Via Homebrew (Recommended)
							</h3>
							<pre className="bg-[#101010] p-4 rounded-lg text-sm overflow-x-auto">
								<code>brew install --cask sol</code>
							</pre>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-2">
								Manual Download
							</h3>
							<p className="">
								Download the latest{" "}
								<a
									href="https://github.com/ospfranco/sol/releases"
									className="text-blue-600 hover:underline"
								>
									release
								</a>{" "}
								from GitHub.
							</p>
						</div>

						<p className="">
							After installation, launch Sol using your preferred keyboard
							shortcut.
						</p>
					</div>
				</section>

				{/* Built-in Shortcuts */}
				<section>
					<h2 className="text-2xl font-semibold  mb-4">
						Built-in Shortcuts
					</h2>
					<p className=" mb-6">
						Sol comes with many shortcuts. Type in the name of any
						one of them:
					</p>

					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-medium  mb-3">
								Text and data
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>Paste as JSON</strong> - Format clipboard content as
									JSON
								</li>
								<li>
									<strong>Generate Nano ID</strong> - Create a Nano ID
								</li>
								<li>
									<strong>Generate UUID</strong> - Generate a UUID
								</li>
								<li>
									<strong>Generate Lorem Ipsum</strong> - Create placeholder
									text
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								System Management
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>Remove derived data folder</strong> - Clear Xcode
									derived data
								</li>
								<li>
									<strong>Kill process</strong> - Terminate running processes
								</li>
								<li>
									<strong>Kill all apps</strong> - Close all running
									applications
								</li>
								<li>
									<strong>Toggle system appearance</strong> - Switch between
									light and dark mode
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Communication & Network
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>Start Google Meet</strong> - Quick access to Google
									Meet
								</li>
								<li>
									<strong>Reveal Wi-Fi password</strong> - Show current Wi-Fi
									password
								</li>
								<li>
									<strong>Copy Wi-Fi password to clipboard</strong> - Copy Wi-Fi
									credentials
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Productivity Tools
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>Scratchpad</strong> - Scratchpad for your notes
								</li>
								<li>
									<strong>Clipboard manager</strong> - or {" "}
									<code className=" px-1 rounded">⌘⌥V </code>
								</li>
								<li>
									<strong>Emoji picker</strong> - or {" "}
									<code className=" px-1 rounded">⌘⌃Space </code>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-6 space-y-4">
						<div>
							<h3 className="text-xl font-medium ">
								Window Management
							</h3>
							<p className="">
								Comprehensive window management tools similar to Raycast. Search
								&quot;window&quot; to see all available options.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium ">
								Custom Shortcuts
							</h3>
							<p className="">Create your own shortcuts using:</p>
							<ul className="mt-2 ml-4 space-y-1 ">
								<li>
									<strong>URL shortcuts</strong> - Launch websites or web apps
								</li>
								<li>
									<strong>AppleScript shortcuts</strong> - Execute custom
									AppleScript commands
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Features */}
				<section>
					<h2 className="text-2xl font-semibold  mb-4">
						Features
					</h2>

					<div className="space-y-6">
						<div>
							<h3 className="text-xl font-medium  mb-2">
								Translation
							</h3>
							<ol className="list-decimal ml-6 space-y-1 ">
								<li>
									Go to <strong>Sol Settings → Translation</strong>
								</li>
								<li>Select up to three languages</li>
								<li>
									Type any sentence and press{" "}
									<code className=" px-1 rounded">⇧Enter</code> to
									translate using Google Translate
								</li>
							</ol>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-2">
								Quick Calculations
							</h3>
							<p className="">
								Type any mathematical expression in the search bar to evaluate
								it instantly.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-2">
								IP Address Lookup
							</h3>
							<p className="">
								Type &quot;IP&quot; to quickly reveal your current IP address.
							</p>
						</div>
					</div>
				</section>

				{/* Settings */}
				<section>
					<h2 className="text-2xl font-semibold  mb-4">
						Settings
					</h2>
					<p className=" mb-6">
						Access settings by searching for &quot;Sol Settings&quot; in the
						app.
					</p>

					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-medium  mb-3">
								Startup Options
							</h3>
							<p className="">
								<strong>Open at Login</strong> - Automatically launch Sol when
								your computer starts
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Global Shortcuts
							</h3>
							<p className=" mb-2">
								Choose your preferred keyboard shortcut to open Sol:
							</p>
							<ul className="ml-4 space-y-1 ">
								<li>
									<code className=" px-2 py-1 rounded">⌘Space</code>{" "}
									(Command + Space)
								</li>
								<li>
									<code className=" px-2 py-1 rounded">⌥Space</code>{" "}
									(Option + Space)
								</li>
								<li>
									<code className=" px-2 py-1 rounded">⌃Space</code>{" "}
									(Control + Space)
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Search Engine
							</h3>
							<p className=" mb-2">
								Select your preferred search engine for web searches:
							</p>
							<ul className="ml-4 space-y-1 ">
								<li>Google</li>
								<li>DuckDuckGo</li>
								<li>Bing</li>
								<li>
									Custom (enter your own URL with{" "}
									<code className=" px-1 rounded">%s</code> as the
									query placeholder)
								</li>
							</ul>
							<div className="bg-[#101010] mt-3 p-4  rounded-lg">
								<p className="text-sm ">
									Example custom URL:{" "}
									<code className=" px-2 py-1 rounded">
										https://example.com/search?q=%s
									</code>
								</p>
								<p className="text-sm  mt-1">
									A colored indicator shows whether your custom URL is valid
									(green) or invalid (red).
								</p>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								File Search
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>File Search Paths</strong> - Add or remove folders
									where Sol will search for files
								</li>
								<li>Use the system file picker to add new folders</li>
								<li>Remove folders from the search scope as needed</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Display Behavior
							</h3>
							<p className=" mb-2">
								Choose where Sol appears when opened:
							</p>
							<ul className="ml-4 space-y-1 ">
								<li>
									<strong>Frontmost Window</strong> - Opens on the screen of the
									currently active window
								</li>
								<li>
									<strong>Cursor Screen</strong> - Opens on the screen where
									your cursor is located
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-medium  mb-3">
								Additional Options
							</h3>
							<ul className="space-y-2 ">
								<li>
									<strong>Show In-App Calendar</strong> - Display your calendar
									within Sol
								</li>
								<li>
									<strong>Show Browser Bookmarks</strong> - View and search your
									browser bookmarks
								</li>
								<li>
									<strong>Show Upcoming Event in Menu Bar</strong> - Display
									your next calendar event in the menu bar
								</li>
								<li>
									<strong>Save Clipboard History</strong> - Store and access
									previous clipboard items
								</li>
								<li>
									<strong>Forward Media Keys to Media Player</strong> - Control
									your media player with keyboard media keys
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

