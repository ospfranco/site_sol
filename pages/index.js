/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'
import {Preview} from '../components/preview'
import osp from '../public/osp.png'
import {Key} from '../components/key'
import spotify from '../public/spotify.png'
import xcode from '../public/xcode.png'

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const copyCommand = () => {
    navigator.clipboard.writeText('brew install --cask sol')
    setIsCopied(true)
  }

  return (
    <div className="flex flex-col items-center">
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

      <div className="w-full">
        <div className="bg-gradient-to-tl from-pink-600 via-blue-600 to-orange-500">
          <div className="mx-auto w-full max-w-4xl py-32 px-6 items-center flex flex-col">
            {/* <img src="/SOL.svg" alt="Sol logo" className="h-8" /> */}
            <h1 className="text-white mt-4 text-5xl text-center font-semibold max-w-xl">
              Sol is a new way to interact with your Mac
            </h1>
            <h2 className="text-neutral-300 mt-4 text-lg text-center">
              Get everything done faster with a simple and beautiful launcher
            </h2>

            <div className="relative sm:h-[500px] mt-8 sm:mt-20 w-full">
              <div className="absolute top-0 bottom-0 -left-10 right-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-pink-400 opacity-30" />
              <div className="absolute top-0 bottom-0 -right-10 left-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-blue-400 opacity-30" />
              <Preview />
            </div>

            <div className="flex flex-col gap-3 items-center mt-20 text-sm justify-center">
              <p className="text-white">Install via brew</p>
              <a
                className="bg-neutral-700 border-neutral-600 bg-opacity-50 rounded-full px-6 h-9 flex items-center text-neutral-300 hover:text-white text-xs font-mono cursor-copy border "
                onMouseDown={() => {
                  navigator.clipboard.writeText('brew install --cask sol')
                }}>
                brew install --cask sol
              </a>
              <p className="text-white">Download and install</p>
              <a
                className="text-white cursor-pointer bg-blue-500 rounded-lg px-6 h-9 flex items-center text-xs border border-blue-500 bg-opacity-50"
                href="https://github.com/ospfranco/sol/tree/main/releases">
                Download
              </a>
              <p className="text-white">or contribute</p>
              <button className=" text-white cursor-pointer bg-black rounded-full px-6 h-9 flex items-center text-xs border border-neutral-800 bg-opacity-50">
                View Source
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-10 mt:10 sm:mt-20 sm:max-w-7xl text-center">
        <h2 className="text-3xl font-semibold p-12">
          Replace many of the smaller macOS utilities
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 px-10">
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Emoji Picker</p>
            <p className="text-gray-300">
              Faster and more reliable than the native picker
            </p>
            <div className="flex-1" />
            <div className="flex flex-row gap-2">
              <Key title="⌃" />
              <Key title="⌘" />
              <Key title="space" />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Window Manager</p>
            <p className="text-gray-300">
              Resize and move windows with a few keystrokes
            </p>
            <div className="flex-1" />
            <div className="flex flex-row gap-2">
              <Key title="⌃" />
              <Key title="⌥" />
              <Key title="return" />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Clipboard Manager</p>
            <p className="text-gray-300">
              Keep up to 20k entries of your copy history
            </p>

            <div className="flex-1" />
            <div className="flex flex-row gap-2">
              <Key title="⇧" />
              <Key title="⌘" />
              <Key title="v" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 px-12">
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60">
            <p className="text-xl font-semibold">Calendar integration</p>
            <p className="text-gray-300">
              Your calendar shown in the launcher and on the menu bar
            </p>
            <div className="flex-1" />
            <div className="flex flex-row items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <p>Daily meeting</p>
              <div className="flex-1" />
              <Key title="return" primary />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60">
            <p className="text-xl font-semibold">Browser Bookmarks</p>
            <p className="text-gray-300">
              Quickly access your browser bookmarks
            </p>
            <div className="flex-1" />
            <div className="flex flex-row items-center gap-2">
              <p>github.com</p>
              <div className="flex-1" />
              <Key title="return" primary />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Media key forwarding</p>
            <p className="text-gray-300">
              Media commands go to Spotify instead of the video player
            </p>

            <div className="flex-1" />
            <div className="flex flex-row items-center gap-2">
              <Image src={spotify} height={22} width={22} alt="slack" />
              <p>Spotify</p>
            </div>
          </div>
        </div>
        {/* Third row */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 px-12">
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Quick Notes</p>
            <p className="text-gray-300">
              Quickly jot down notes and access them later
            </p>
            <div className="flex-1" />
            <div className="flex flex-row gap-2">
              <Key title="⇧" />
              <Key title="⌘" />
              <Key title="space" />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60">
            <p className="text-xl font-semibold">Process Killer</p>
            <p className="text-gray-300">Kill any stuck process quickly</p>
            <div className="flex-1" />
            {/* <div className="flex flex-row items-center gap-2">
              <p>github.com</p>
              <div className="flex-1" />
              <Key title="return" primary />
            </div> */}
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Keyboard Shortcuts</p>
            <p className="text-gray-300">
              Bind global shortcuts to any action you want
            </p>

            <div className="flex-1" />
            {/* <div className="flex flex-row items-center gap-2">
              <Image src={spotify} height={22} width={22} alt="slack" />
              <p>Spotify</p>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 px-12">
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Translation</p>
            <p className="text-gray-300">
              Quickly translate between and up to 3 languages
            </p>
            <div className="flex-1" />
            <div className="flex flex-row gap-2">
              <Key title="⇧" />
              <Key title="return" />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60">
            <p className="text-xl font-semibold">Hide the notch</p>
            <p className="text-gray-300">
              Hide the macbook notch with on-the-fly updating
            </p>
            <div className="flex-1" />
            <div className="flex flex-col items-center">
              <div className="w-32 bg-white h-1 rounded-full" />
              <div className="w-16 bg-white h-3 rounded-b" />
            </div>
          </div>
          <div className="border rounded-3xl p-8 border-gray-800 flex-1 gap-1 flex flex-col h-60 items-center">
            <p className="text-xl font-semibold">Developer commands</p>
            <p className="text-gray-300">
              Clean derived data, launch scripts and more
            </p>
            <div className="flex-1" />
            <div className="flex flex-row items-center gap-2">
              <Image src={xcode} height={22} width={22} alt="slack" />
              <p>Xcode</p>
            </div>
          </div>
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
  )
}
