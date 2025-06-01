import {useState} from 'react'

export default function CommandPrompt() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const command = 'brew install --cask sol'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div
      className={`relative group w-full max-w-md my-2 cursor-pointer transition border rounded-md px-3 py-2 bg-neutral-900 border-neutral-700 shadow flex items-center`}
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label="Copy install command">
      <span className="text-green-400 font-mono text-sm select-none">$</span>
      <span className="ml-2 text-white font-mono text-sm select-all">
        {command}
      </span>
      <span className="ml-auto flex items-center">
        {copied ? (
          <span className="text-green-400 text-xs font-semibold flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </span>
        ) : (
          <span
            className={`transition-opacity duration-200 flex items-center gap-1 ${
              hovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block">
              <rect
                x="9"
                y="9"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="3"
                y="3"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="text-neutral-400 text-xs">Click to copy</span>
          </span>
        )}
      </span>
    </div>
  )
}
