/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Preview } from "../components/preview.component";
import Clipboard from "../public/Clipboard.png";
import Emoji from "../public/Emoji.png";
import Gifs from "../public/Gifs.png";
import Maps from "../public/Maps.png";
import osp from "../public/osp.png";
import Scratchpad from "../public/Scratchpad.png";
import WindowManagement from "../public/WindowManagement.png";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const copyCommand = () => {
    navigator.clipboard.writeText("brew install --cask sol");
    setIsCopied(true);
  };

  return (
    <>
      <Head>
        <title>SOL - MacOS Launcher</title>
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
          content="https://www.solapp.io/preview.png"
        />
      </Head>

      <div className="main">
        <div className="content">
          <div className="mx-auto w-full max-w-3xl py-32 px-6 items-center flex flex-col">
            {/* <img src="/SOL.svg" alt="Sol logo" className="h-8" /> */}
            <h1 className="text-white mt-4 text-6xl text-center font-semibold">
              Sol is a new way to interact with your Mac
            </h1>
            <h2 className="text-neutral-300 mt-4 text-xl text-center">
              Get everything done faster with a simple and beautiful launcher
            </h2>

            <div className="relative h-[500px] mt-20 w-full">
              <div className="absolute top-0 bottom-0 -left-10 right-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-purple-400 opacity-30" />
              <div className="absolute top-0 bottom-0 -right-10 left-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-blue-400 opacity-30" />
              <Preview />
            </div>

            <div className="flex flex-row gap-3 items-center mt-8 text-sm justify-center">
              <a
                className="bg-neutral-700 border-neutral-700 bg-opacity-50 rounded-full px-6 py-2 text-neutral-300 hover:text-white text-xs font-mono  cursor-copy"
                onMouseDown={() => {
                  navigator.clipboard.writeText("brew install --cask sol");
                }}
              >
                brew install --cask sol
              </a>
              <p className="text-gray-300">or</p>
              <a
                className="text-white cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 rounded px-6 py-2 text-xs"
                href="https://github.com/ospfranco/sol/tree/main/releases"
              >
                Download
              </a>
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
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-10 mb-20">
        <div className="h-[1px] w-[80%] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 mb-5"/>
        <div className="flex flex-wrap gap-44">
          <p className="font-semibold w-52">🚀 Emoji Picker. <span className="text-neutral-400 font-normal">Faster and more reliable than the native picker</span></p>
          <p className="font-semibold w-52">🪟 Window Manager. <span className="text-neutral-400 font-normal">Resize and move windows with a few keystrokes</span></p>
          <p className="font-semibold w-52">📋 Clipboard Manager. <span className="text-neutral-400 font-normal">Never loose copied text again</span></p>

        </div>
        <div className="flex flex-wrap gap-44">
          <p className="font-semibold w-52">📆 Calendar integration. <span className="text-neutral-400 font-normal">Your calendar accessible all the time</span></p>
          <p className="font-semibold w-52">📖 Browser Bookmarks. <span className="text-neutral-400 font-normal">Quickly access your browser bookmarks</span></p>
          <p className="font-semibold w-52">♫ Media key forwarding. <span className="text-neutral-400 font-normal">Send play/pause commands directly to Spotify instead of the video you just opened</span></p>
        </div>
        <div className="flex flex-wrap gap-44">
          <p className="font-semibold w-52">🗣️ Translation. <span className="text-neutral-400 font-normal">Quickly translate between and up to 3 languages</span></p>
          <p className="font-semibold w-52">🙈 Hide the notch. <span className="text-neutral-400 font-normal">Hide the new macbook pros notch</span></p>
          <p className="font-semibold w-52">🤓 Developer commands. <span className="text-neutral-400 font-normal">Clean xcode derived data, launch scripts and more</span></p>
        </div>
      </div>
    </>
  );
}
