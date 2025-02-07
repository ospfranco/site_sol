import Image from 'next/image'
import calendar from '../public/calendar.png'
import code from '../public/code.png'
import discord from '../public/discord.png'
import figma from '../public/figma.png'
import iterm from '../public/iterm.png'
import slack from '../public/slack.png'
import spotify from '../public/spotify.png'
import xcode from '../public/xcode.png'
import {Key} from './key'

export const Preview = () => {
  return (
    <div className="border border-neutral-700 rounded-xl bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 overflow-hidden">
      <p className="text-neutral-600 text-base sm:text-xl px-3 py-2 sm:px-4 sm:py-3">
        What would you like to do?
      </p>
      <div className="w-full border-b border-white border-opacity-5" />

      <div className="flex flex-col">
        <div className="p-2">
          <div className="bg-[#0096FF77] border border-[#0096FF55] bg-opacity-30 flex gap-1 sm:gap-2 relative rounded sm:rounded-lg p-1 sm:p-3">
            <div className=" h-1 w-1 " />
            <Image src={slack} alt="slack" className="h-4 w-4 sm:h-6 sm:w-6" />
            <p className="text-xs sm:text-base">Slack</p>
          </div>
        </div>
        <div className="flex flex-row py-2 px-3 sm:py-3 sm:px-5 gap-1 sm:gap-2 items-center">
          <div className=" h-1 w-1 rounded-full bg-neutral-400" />
          <Image src={xcode} className="h-4 w-4 sm:h-6 sm:w-6" alt="xcode" />
          <p className="text-xs sm:text-base">Xcode</p>
        </div>
        <div className="flex flex-row items-center py-2 px-3 sm:py-3 sm:px-5 gap-1 sm:gap-2">
          <div className="h-1 w-1 rounded-full bg-neutral-400" />
          <Image src={iterm} className="h-4 w-4 sm:h-6 sm:w-6" alt="iterm" />
          <p className="text-xs sm:text-base">iTerm</p>
        </div>
        <div className="flex flex-row items-center py-2 px-3 sm:py-3 sm:px-5 gap-1 sm:gap-2">
          <div className="h-1 w-1 rounded-full bg-neutral-400" />
          <Image
            src={spotify}
            className="h-4 w-4 sm:h-6 sm:w-6"
            alt="spotify"
          />
          <p className="text-xs sm:text-base">Spotify</p>
        </div>
        <div className="flex py-2 sm:py-3 px-5 gap-2">
          <div className=" h-1 w-1" />
          <Image
            src={calendar}
            className="h-4 w-4 sm:h-6 sm:w-6"
            alt="calendar"
          />
          <p className="text-xs sm:text-base">Calendar</p>
        </div>
        <div className="flex py-2 sm:py-3 px-5 gap-2">
          <div className=" h-1 w-1 " />
          <Image
            src={discord}
            className="h-4 w-4 sm:h-6 sm:w-6"
            alt="discord"
          />
          <p className="text-xs sm:text-base">Discord</p>
        </div>
        <div className="flex py-2 sm:py-3 px-5 gap-2">
          <div className=" h-1 w-1 " />
          <Image src={code} className="h-4 w-4 sm:h-6 sm:w-6" alt="code" />
          <p className="text-xs sm:text-base">Visual Studio Code</p>
        </div>
        <div className="flex py-2 sm:py-3 px-5 gap-2">
          <div className=" h-1 w-1 " />
          <Image src={figma} className="h-4 w-4 sm:h-6 sm:w-6" alt="figma" />
          <p className="text-xs sm:text-base">Figma.com</p>
          <div className="flex-1" />
          <p className="text-xs sm:text-base text-neutral-500">Bookmark</p>
        </div>
      </div>
      <div className="border-t border-white border-opacity-5 px-3 py-2 flex justify-end gap-2 items-center">
        <p className="text-[10px] sm:text-xs">Translate</p>
        <Key title="⇧" />

        <Key title="⏎" />
        <div className="w-[1px] h-4 bg-neutral-600 mx-2" />
        <p className="text-[10px] sm:text-xs">Search</p>
        <Key title="⌘" />
        <Key title="⏎" />
        <div className="w-[1px] h-4 bg-neutral-600 mx-2" />
        <p className="text-[10px] sm:text-xs">Select</p>
        <Key title="⏎" primary />
      </div>
    </div>
  )
}
