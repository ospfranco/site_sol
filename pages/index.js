/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import osp from '../public/osp.png'
import {Key} from '../components/Key'
import spotify from '../public/spotify.png'
import xcode from '../public/xcode.png'
import preview from '../public/preview.jpg'
import {Card} from '../components/Card'
import {useState} from 'react'

function CommandPrompt() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const command = 'brew install --cask sol'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div
      className={`relative group w-full max-w-xl mx-auto my-4 cursor-pointer transition border rounded-lg px-5 py-4 bg-neutral-900 border-neutral-700 shadow-lg flex items-center`}
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label="Copy install command">
      <span className="text-green-400 font-mono text-base select-none">$</span>
      <span className="ml-3 text-white font-mono text-base select-all">
        {command}
      </span>
      <span className="ml-auto flex items-center">
        {copied ? (
          <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </span>
        ) : (
          <span
            className={`transition-opacity duration-200 flex items-center gap-1 ${
              hovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block">
              <rect
                x="9"
                y="9"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="3"
                y="3"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="text-neutral-400 text-xs">Click to copy</span>
          </span>
        )}
      </span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>SOL - Open Source MacOS Launcher</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Sol" />
        <meta
          name="twitter:title"
          content="An simple and fast macOS launcher"
        />
        <meta
          name="twitter:description"
          content="macOS launcher focused on simplicity and speed."
        />
        <meta
          name="twitter:image"
          content="https://www.sol.ospfranco.com/preview.png"
        />
      </Head>

      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-8 [background:radial-gradient(125%_125%_at_50%_10%,#111_40%,#222_100%)] overflow-y-scroll flex flex-col items-center">
        <header className="fixed top-0 left-0 w-full z-20 flex flex-col items-center justify-between py-4 bg-black/60 backdrop-blur-md border-b border-neutral-800">
          <div className="w-full sm:w-[80%] md:w-[70%] px-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">Sol</span>
            </div>
            <div className="flex gap-3">
              <a href="./docs/">
                <button className="text-white bg-black rounded-full px-5 h-9 flex items-center text-xs  bg-opacity-70 hover:bg-neutral-700 transition duration-200">
                  Documentation
                </button>
              </a>
              <a
                href="https://github.com/ospfranco/sol/tree/main/releases"
                className="text-white bg-blue-500 rounded-full px-5 h-9 flex items-center text-xs border border-blue-500 bg-opacity-70 hover:bg-blue-600 transition duration-200">
                Download
              </a>
            </div>
          </div>
        </header>
        <div className="h-20" />
        <div className="mx-auto w-full pt-12 pb-32 px-6 flex flex-col gap-4 sm:w-[70%] md:w-[60%]">
          <h1 className="text-white mt-4 text-4xl sm:text-6xl max-w-3xl">
            Sol is an open-source macOS launcher
          </h1>
          <h2 className="text-neutral-300 text-lg">
            Free, focused on simplicity and speed.
          </h2>

          <div className="w-full max-w-4xl mx-auto p-2 border border-neutral-700 rounded-lg shadow-lg backdrop-blur-md bg-white/10">
            <Image
              src={preview}
              alt="preview"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          <CommandPrompt />
        </div>

        <div className="flex flex-col items-center gap-2 mt:10 sm:mt-20 sm:max-w-7xl px-8 sm:px-0">
          <h2 className="text-3xl font-semibold p-12 text-center">
            Replace many of the smaller macOS utilities
          </h2>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card
              title="Emoji Picker"
              text="Faster and more reliable than the native picker"
              BottomComponent={
                <div className="flex flex-row gap-2">
                  <Key title="⌃" />
                  <Key title="⌘" />
                  <Key title="space" />
                </div>
              }
            />
            <Card title="Calculator" text="Quickly do math calculations" />
            <Card title="File Search" text="Search for files and folders" />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card title="App Search" text="Search for apps and open them" />
            <Card
              title="Window Manager"
              text="Resize and move windows with the keyboard"
              BottomComponent={
                <div className="flex flex-row gap-2">
                  <Key title="⌃" />
                  <Key title="⌥" />
                  <Key title="return" />
                </div>
              }
            />
            <Card
              title="Clipboard Manager"
              text="Keep all your copy and paste history saved"
              BottomComponent={
                <div className="flex flex-row gap-2">
                  <Key title="⇧" />
                  <Key title="⌘" />
                  <Key title="v" />
                </div>
              }
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card
              title="Calendar Integration"
              text="Your calendar shown in the launcher and on the menu bar"
              BottomComponent={
                <div className="flex flex-row items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <p>Daily meeting</p>
                  <div className="flex-1" />
                  <Key title="return" primary />
                </div>
              }
            />
            <Card
              title="Browser Bookmarks"
              text="Quickly access your browser bookmarks"
              BottomComponent={
                <div className="flex flex-row items-center gap-2">
                  <p>github.com</p>
                  <div className="flex-1" />
                  <Key title="return" primary />
                </div>
              }
            />
            <Card
              title="Media Key Forwarding"
              text="Media commands go to Spotify instead of the video player"
              BottomComponent={
                <div className="flex flex-row items-center gap-2">
                  <Image src={spotify} height={22} width={22} alt="Spotify" />
                  <p>Spotify</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card
              title="Quick Notes"
              text="Quickly take a note and access it from anywhere"
              BottomComponent={
                <div className="flex flex-row gap-2">
                  <Key title="⇧" />
                  <Key title="⌘" />
                  <Key title="space" />
                </div>
              }
            />
            <Card
              title="Process Manager"
              text="Monitor and kill rogue processes"
            />
            <Card
              title="Keyboard Shortcuts"
              text="Bind global shortcuts to any action you want"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card
              title="Translation"
              text="Quickly translate between and up to 3 languages"
              BottomComponent={
                <div className="flex flex-row gap-2">
                  <Key title="⇧" />
                  <Key title="return" />
                </div>
              }
            />
            <Card
              title="Notch Hider"
              text="Hide the macbook notch with on-the-fly updating"
              BottomComponent={
                <div className="flex flex-col items-center">
                  <div className="w-32 bg-white h-1 rounded-full" />
                  <div className="w-16 bg-white h-3 rounded-b" />
                </div>
              }
            />
            <Card
              title="Developer Commands"
              text="Clean derived data, launch scripts and more"
              BottomComponent={
                <div className="flex flex-row items-center gap-2">
                  <Image src={xcode} height={22} width={22} alt="slack" />
                  <p>Xcode</p>
                </div>
              }
            />
          </div>
        </div>

        <div className="text-center text-neutral-300 flex flex-row items-center justify-center text-sm pb-12 mt-8">
          <div className="mr-1">Built by</div>
          <Image
            src={osp}
            alt="osp"
            height={18}
            width={18}
            objectFit="contain"
            className="rounded-full"
          />
          <a href="www.ospfranco.com">
            <span className="font-semibold text-white ml-1">ospfranco</span>
          </a>
        </div>
      </div>
    </>
  )
}
