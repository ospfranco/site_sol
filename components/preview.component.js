import Image from 'next/image'
import slack from '../public/slack.png'
import xcode from '../public/xcode.png'
import iterm from '../public/iterm.png'
import spotify from '../public/spotify.png'
import calendar from '../public/calendar.png'
import code from '../public/code.png'
import figma from '../public/figma.png'
import discord from '../public/discord.png'

export const Preview = () => {
  return (
    <div className="border border-neutral-800 rounded-lg bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 shadow-2xl shadow-gray-800">
      <div className="py-3 px-5">
        <p className="text-neutral-600">Type something...</p>
        <div className='flex flex-col gap-1 pt-2'>
          <div className="bg-blue-500 bg-opacity-60 flex rounded-md py-1 px-3 mt-2 gap-2">
            <Image src={slack} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Slack</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={xcode} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Xcode</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={iterm} height={22} width={22} alt="slack"/>
            <p className='text-sm'>iTerm</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={spotify} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Spotify</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={calendar} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Calendar</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={discord} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Discord</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={code} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Visual Studio Code</p>
          </div>
          <div className="flex py-1 px-3 gap-2">
            <Image src={figma} height={22} width={22} alt="slack"/>
            <p className='text-sm'>Figma</p>
          </div>
        </div>

      </div>
      <div className="border-t border-neutral-800 bg-neutral-800 bg-opacity-80 py-3 px-5">
        <div className="flex border-b border-neutral-700 items-center pb-2">
          <p className="text-xs">
            Are you going to be my girl{" "}
            <span className="text-xs text-gray-400">Jet</span>
          </p>
          <div className="mx-3 h-4 border-r border-neutral-700" />
          <p className="text-xs">
            28 <span className="text-xs text-gray-400">Sunny</span>
          </p>
        </div>
        <div className="pt-2">
          <p className="text-xs text-gray-400">Today</p>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-red-500 w-3 h-3" />
            <p className="text-xs flex-1">Important meeting</p>
            <p className="text-xs">
              14:00 - <span className="text-gray-400">15:00</span>
            </p>
          </div>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-blue-500 w-3 h-3" />
            <p className="text-xs flex-1">Call supplier</p>
            <p className="text-xs">
              14:00 - <span className="text-gray-400">15:00</span>
            </p>
          </div>
          <p className="text-xs text-gray-400">Tomorrow</p>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-green-500 w-3 h-3" />
            <p className="text-xs flex-1">Holiday planned</p>
            <p className="text-xs">
              All day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
