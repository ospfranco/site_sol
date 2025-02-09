/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import {Preview} from '../components/Preview'
import osp from '../public/osp.png'
import {Key} from '../components/Key'
import spotify from '../public/spotify.png'
import xcode from '../public/xcode.png'
import {Card} from '../components/Card'

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

      <div class="absolute inset-0 -z-10 h-full w-full px-5 py-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-y-scroll flex flex-col items-center">
        <div className="mx-auto w-full py-32 px-6 items-center flex flex-col gap-4">
          {/* <img src="/SOL.svg" alt="Sol logo" className="h-8" /> */}
          <h1 className="text-white mt-4 text-5xl text-center font-semibold max-w-xl">
            Sol is a new way to interact with your Mac
          </h1>
          <h2 className="text-neutral-300 text-lg text-center">
            Get everything done faster with a simple, beautiful and open source
            launcher
          </h2>

          <Preview />

          <div className="flex flex-row gap-3 items-center mt-20 text-sm justify-center">
            <a
              className="text-white cursor-pointer bg-blue-500 rounded-full px-6 h-9 flex items-center text-xs border border-blue-500 bg-opacity-50 hover:bg-blue-600 transition duration-200"
              href="https://github.com/ospfranco/sol/tree/main/releases">
              Download
            </a>
            <p className="text-white">or</p>
            <button className=" text-white cursor-pointer bg-black rounded-full px-6 h-9 flex items-center text-xs border border-neutral-800 bg-opacity-50 hover:bg-neutral-700 transition duration-200">
              View Source
            </button>
          </div>
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
