export const Preview = () => {
  return (
    <div className="border border-neutral-800 rounded-lg bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
      <div className="py-3 px-5">
        <p className="text-neutral-600">Type something...</p>
        <div className="bg-blue-500 bg-opacity-60 flex rounded-md py-1 px-3 mt-2">
          <div className="w-4 h-4" />
          <p>Slack</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>Xcode</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
        <div className="flex py-1 px-3">
          <div className="w-4 h-4" />
          <p>iTerm</p>
        </div>
      </div>
      <div className="border-t border-neutral-800 bg-neutral-800 bg-opacity-80 py-3 px-5">
        <div className="flex border-b border-neutral-700 items-center pb-2">
          <p className="text-sm">
            Are you going to be my girl{" "}
            <span className="text-sm text-gray-400">Jet</span>
          </p>
          <div className="mx-3 h-4 border-r border-neutral-700" />
          <p className="text-sm">
            28 <span className="text-sm text-gray-400">Sunny</span>
          </p>
        </div>
        <div className="pt-2">
          <p className="text-sm text-gray-400">Today</p>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-red-500 w-3 h-3" />
            <p className="text-sm flex-1">Important meeting</p>
            <p className="text-sm">
              14:00 - <span className="text-gray-400">15:00</span>
            </p>
          </div>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-blue-500 w-3 h-3" />
            <p className="text-sm flex-1">Call supplier</p>
            <p className="text-sm">
              14:00 - <span className="text-gray-400">15:00</span>
            </p>
          </div>
          <p className="text-sm text-gray-400">Tomorrow</p>
          <div className="flex py-2 px-3 gap-2 items-center">
            <div className="rounded-full border-2 border-green-500 w-3 h-3" />
            <p className="text-sm flex-1">Important meeting</p>
            <p className="text-sm">
              14:00 - <span className="text-gray-400">15:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
