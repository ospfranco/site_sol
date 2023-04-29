/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Preview } from "../components/preview.component";
import Clipboard from "../public/Clipboard.png";
import Emoji from "../public/Emoji.png";
import Gifs from "../public/Gifs.png";
import Maps from "../public/Maps.png";
import osp from "../public/osp.jpeg";
import Scratchpad from "../public/Scratchpad.png";
import WindowManagement from "../public/WindowManagement.png";
import Header from "../public/header2.png";

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
            <h2 className="text-neutral-300 mt-4 text-xl text-center max-w-lg">
              MacOS is great, but it can be better. Sol fills the gaps and makes your Mac more productive.
            </h2>

            <div className="relative h-[500px] mt-20 w-full">
              <div className="absolute top-0 bottom-0 -left-10 right-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-purple-400 opacity-50" />
              <div className="absolute top-0 bottom-0 -right-10 left-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-blue-400 opacity-50" />
              <Image src={Header} alt="Sol preview" layout="fill" />
              {/* <Preview /> */}
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
                className="text-blue-500 cursor-pointer"
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
              <span className="font-semibold text-white ml-1">ospfranco</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="content">
          <div className="mx-auto w-full max-w-3xl py-32 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={Maps}
                    alt="Google maps preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Google Maps</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Quickly lookup adresses
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={Emoji}
                    alt="Emoji picker preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Emoji Picker</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Faster and more reliable
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={Gifs}
                    alt="Gif picker preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Gif Picker</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Find that perfect Gif
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={Clipboard}
                    alt="Clipboard picker preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Clipboard Manager</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Never lose copied text
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={WindowManagement}
                    alt="Window management picker preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Window Manager</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Quickly organize your desktop
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-800 bg-opacity-30 overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={Scratchpad}
                    alt="Scratchpad picker preview"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h5 className="">Note Scratchpad</h5>
                  <p className="mt-1 text-sm text-gray-400">
                    Take a note from anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
