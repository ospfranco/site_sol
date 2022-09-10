/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Preview } from "../components/preview.component";
import Clipboard from "../public/Clipboard.png";
import Emoji from "../public/Emoji.png";
import Gifs from "../public/Gifs.png";
import Github from "../public/Github.png";
import Maps from "../public/Maps.png";
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
        <title>Open Source macOS Launcher</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Sol" />
        <meta name="twitter:title" content="An open source macOS launcher" />
        <meta
          name="twitter:description"
          content="macOS launcher focused on simplicity and speed. Free and open source."
        />
        <meta
          name="twitter:image"
          content="https://www.solapp.io/preview.png"
        />
      </Head>

      <div className="main">
        <div className="content">
          <div className="mx-auto w-full max-w-3xl py-32 px-6">
            <div className="flex flex-row">
              <h1 className="text-3xl font-bold flex-1">Sol</h1>
              <a href="https://github.com/ospfranco/sol">
                <div className="bg-neutral-900 rounded-full px-4 py-2 flex flex-row">
                  <Image
                    src={Github}
                    alt="Githublogo"
                    height={8}
                    width={14}
                    objectFit="contain"
                  />
                  <p className="text-neutral-300 ml-2 text-sm">ospfranco/sol</p>
                </div>
              </a>
            </div>
            <h4 className="text-neutral-400">
              Open source launcher focused on ease-of-use and speed.
            </h4>

            <div className="relative h-[500px] mt-20">
              <div className="absolute top-0 bottom-0 -left-10 right-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-purple-400 opacity-10" />
              <div className="absolute top-0 bottom-0 -right-10 left-1/3 rounded-full mix-blend-multiply filter blur-3xl bg-blue-400 opacity-10" />
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
              <p className="text-gray-500">or</p>
              <a
                className="text-blue-500 cursor-pointer"
                href="https://github.com/ospfranco/sol/tree/main/releases"
              >
                Download
              </a>
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

        <h1 className="text-center font-bold text-5xl mt-10">
          Loved by the community
        </h1>
        <div className="flex justify-center py-10">
          <a
            href="https://www.producthunt.com/posts/sol-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-sol&#0045;2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=336659&theme=dark&period=daily"
              alt="Sol - Open&#0032;source&#0032;macOS&#0032;command&#0032;palette | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>

        <div className="bg-neutral-900 p-6 mt-32">
          <div className="py-3 mx-auto w-full max-w-3xl">
            <p className="text-center text-neutral-200 text-sm">
              Built by <span className="font-bold">Oscar Franco</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
