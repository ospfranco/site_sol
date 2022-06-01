import Image from "next/image";
import { Preview } from "../components/preview.component";
import Logo from "../public/Logo.svg";
import Maps from "../public/Maps.png";
import Emoji from "../public/Emoji.png";
import Gifs from "../public/Gifs.png";
import Clipboard from "../public/Clipboard.png";
import WindowManagement from "../public/WindowManagement.png";
import Scratchpad from "../public/Scratchpad.png";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sol - open source macOS launcher</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="py-3 px-6 mx-auto w-full max-w-3xl flex sticky top-0 bg-black bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm z-10">
        <Image src={Logo} height={29} width={78} alt="Sol logo" />
        <div className="flex-1" />
        <a className="text-black bg-white px-3 rounded text-sm flex items-center justify-center hover:cursor-pointer hover:text-white border border-white hover:bg-black transition" href="https://github.com/ospfranco/sol/tree/main/releases">
          Download
        </a>
      </div>

      <div className="mx-auto w-full max-w-3xl py-32 px-6">
        <h1 className="text-center font-bold text-6xl">More than a launcher</h1>
        <h4 className="text-xl text-gray-300 text-center max-w-xl mx-auto pt-3">
          Sol is a command palette, focused on simplicity and speed. It’s open
          source, free and 100% local.
        </h4>

        <div className="py-20">
          <Preview />
        </div>

        <h1 className="text-center font-bold text-4xl mt-32">
          The all-in-one tool
        </h1>
        <h4 className="text-lg text-gray-300 text-center max-w-lg mx-auto pt-3">
          Sol aims to do the <span className="font-bold">20% of work</span> that
          gets the <span className="font-bold">80% of results</span> (with 1%
          tweaking)
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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
                Never loose a copied text
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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
          <div className="rounded-lg bg-neutral-800 overflow-hidden">
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

      <h1 className="text-center font-bold text-5xl mt-32">Get it now</h1>

      <a className="text-black bg-white px-3 rounded flex items-center justify-center w-44 mx-auto py-3 mt-12 hover:cursor-pointer hover:text-white border border-white hover:bg-black transition" href="https://github.com/ospfranco/sol/tree/main/releases">
        Download
      </a>
      <h4 className="text-gray-300 text-center max-w-lg mx-auto mt-10">
        or check out the source code
      </h4>
      <a className="border px-3 rounded flex items-center justify-center w-44 mx-auto py-3 mt-6 border-neutral-400 hover:border-white transition cursor-pointer" href="https://github.com/ospfranco/sol">
        Source
      </a>

      <div className="bg-neutral-900 p-6 mt-32">
        <div className="py-3 mx-auto w-full max-w-3xl">
          <p className="text-center text-neutral-200 text-sm">Built by <span className="font-bold">Oscar Franco</span></p>
        </div>
      </div>
    </div>
  );
}
