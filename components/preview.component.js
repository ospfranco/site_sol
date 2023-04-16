import Image from "next/image";
import calendar from "../public/calendar.png";
import code from "../public/code.png";
import discord from "../public/discord.png";
import figma from "../public/figma.png";
import iterm from "../public/iterm.png";
import slack from "../public/slack.png";
import spotify from "../public/spotify.png";
import xcode from "../public/xcode.png";

export const Preview = () => {
  return (
    <div className="border border-neutral-700 rounded-xl bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 overflow-hidden">
      <p className="text-neutral-600 text-lg p-3">
        Search for commands and files...
      </p>
      <div className="w-full border-b border-white border-opacity-5" />
      <div>
        <div className="flex flex-col gap-1">
          <div className="bg-blue-500 bg-opacity-30 flex py-2 px-3 gap-2 border-l-2 border-l-blue-500">
            <Image src={slack} height={22} width={22} alt="slack" />
            <p className="text-sm">Slack</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={xcode} height={22} width={22} alt="slack" />
            <p className="text-sm">Xcode</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={iterm} height={22} width={22} alt="slack" />
            <p className="text-sm">iTerm</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={spotify} height={22} width={22} alt="slack" />
            <p className="text-sm">Spotify</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={calendar} height={22} width={22} alt="slack" />
            <p className="text-sm">Calendar</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={discord} height={22} width={22} alt="slack" />
            <p className="text-sm">Discord</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={code} height={22} width={22} alt="slack" />
            <p className="text-sm">Visual Studio Code</p>
          </div>
          <div className="flex py-2 px-3 gap-2">
            <Image src={figma} height={22} width={22} alt="slack" />
            <p className="text-sm">Figma</p>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-neutral-800 bg-black bg-opacity-30">
        <div className="flex flex-row p-3">
          <div className="flex-1">
            <p className="text-xs">Today</p>
            <div className="border-l border-blue-500 pl-1 mt-2">
              <p className="text-xs">
                14:00 <span className="text-neutral-400">- 15:00</span>
              </p>
              <p className="font-semibold text-xs">Important meeting</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs border-l pl-1 border-neutral-600 text-neutral-400">
              Tuesday
            </p>
            <div className="border-l border-orange-500 pl-1 mt-2">
              <p className="text-xs">
                10:00 <span className="text-neutral-400">- 11:00</span>
              </p>
              <p className="font-semibold text-xs">Engineering daily</p>
            </div>
            <div className="border-l border-blue-500 pl-1 mt-2">
              <p className="text-xs">
                14:00 <span className="text-neutral-400">- 15:00</span>
              </p>
              <p className="font-semibold text-xs">Important meeting</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs border-l pl-1 border-neutral-600 text-neutral-400">
              Wednesday
            </p>
            <div className="border-l border-blue-500 pl-1 mt-2">
              <p className="text-xs">
                15:00 <span className="text-neutral-400">- 18:00</span>
              </p>
              <p className="font-semibold text-xs">Thinking</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs border-l pl-1 border-neutral-600 text-neutral-400">
              Thursday
            </p>
            <p className="text-xs text-neutral-500 pt-1">No Events</p>
          </div>
          <div className="flex-1">
            <p className="text-xs border-l pl-1 border-neutral-600 text-neutral-400">
              Friday
            </p>
            <div className="border-l border-green-500 pl-1 mt-2">
              <p className="text-xs">
                14:00 <span className="text-neutral-400">- 15:00</span>
              </p>
              <p className="font-semibold text-xs">Birthday Emily</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-5 flex flex-row px-3 py-2 items-center">
          <Image src={spotify} height={18} width={18} alt="slack" />
          <p className="text-xs ml-1">
            Don&apos;t stop me now{" "}
            <span className="text-neutral-400">Queen</span>
          </p>
          <div className="flex-1" />
          <p className="font-semibold text-xs">Open</p>
          <div className="text-xs bg-blue-500 rounded-sm rounded-br-[6px] px-2 ml-2">
            ⏎
          </div>
        </div>
      </div> */}
    </div>
  );
};
