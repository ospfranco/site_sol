import React from 'react'

interface MacKeyboardProps {
  highlightedKeys: string[]
  className?: string
}

const KeyboardKey: React.FC<{
  keyId: string
  label: string
  isHighlighted: boolean
  width?: string
  height?: string
}> = ({keyId, label, isHighlighted, width = 'w-10', height = 'h-10'}) => {
  return (
    <div
      className={`${width} ${height} flex items-center justify-center rounded-md shadow-md
      ${
        isHighlighted
          ? 'bg-blue-500 text-blue-100 shadow-blue-500/20 shadow-lg'
          : 'bg-neutral-900/70 border border-neutral-700 text-neutral-300'
      }`}>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

const MacKeyboard: React.FC<MacKeyboardProps> = ({
  highlightedKeys,
  className = '',
}) => {
  const isHighlighted = (key: string): boolean => {
    return highlightedKeys.includes(key)
  }

  const renderKey = (
    keyId: string,
    label: string,
    width: string = 'w-10',
    height: string = 'h-10',
  ) => {
    return (
      <KeyboardKey
        keyId={keyId}
        label={label}
        isHighlighted={isHighlighted(keyId)}
        width={width}
        height={height}
      />
    )
  }

  return (
    <div
      className={`select-none w-[40rem] bg-neutral-900 p-3 rounded-xl border border-neutral-800 ${className}`}>
      <div className="flex flex-col gap-1.5">
        {/* First row */}
        <div className="flex gap-1.5">
          {renderKey('esc', 'esc', 'w-16')}
          {renderKey('f1', 'F1')}
          {renderKey('f2', 'F2')}
          {renderKey('f3', 'F3')}
          {renderKey('f4', 'F4')}
          {renderKey('f5', 'F5')}
          {renderKey('f6', 'F6')}
          {renderKey('f7', 'F7')}
          {renderKey('f8', 'F8')}
          {renderKey('f9', 'F9')}
          {renderKey('f10', 'F10')}
          {renderKey('f11', 'F11')}
          {renderKey('f12', 'F12')}
          {renderKey('esc', 'esc')}
        </div>

        {/* Second row */}
        <div className="flex gap-1.5">
          {renderKey('`', '`')}
          {renderKey('1', '1')}
          {renderKey('2', '2')}
          {renderKey('3', '3')}
          {renderKey('4', '4')}
          {renderKey('5', '5')}
          {renderKey('6', '6')}
          {renderKey('7', '7')}
          {renderKey('8', '8')}
          {renderKey('9', '9')}
          {renderKey('0', '0')}
          {renderKey('-', '-')}
          {renderKey('=', '=')}
          {renderKey('delete', '⌫', 'w-16')}
        </div>

        {/* Third row */}
        <div className="flex gap-1.5">
          {renderKey('tab', 'tab', 'w-16')}
          {renderKey('q', 'Q')}
          {renderKey('w', 'W')}
          {renderKey('e', 'E')}
          {renderKey('r', 'R')}
          {renderKey('t', 'T')}
          {renderKey('y', 'Y')}
          {renderKey('u', 'U')}
          {renderKey('i', 'I')}
          {renderKey('o', 'O')}
          {renderKey('p', 'P')}
          {renderKey('[', '[')}
          {renderKey(']', ']')}
          {renderKey('\\', '\\', 'w-10')}
        </div>

        {/* Fourth row */}
        <div className="flex gap-1.5">
          {renderKey('caps', 'caps', 'w-[4.5rem]')}
          {renderKey('a', 'A')}
          {renderKey('s', 'S')}
          {renderKey('d', 'D')}
          {renderKey('f', 'F')}
          {renderKey('g', 'G')}
          {renderKey('h', 'H')}
          {renderKey('j', 'J')}
          {renderKey('k', 'K')}
          {renderKey('l', 'L')}
          {renderKey(';', ';')}
          {renderKey("'", "'")}
          {renderKey('return', 'return', 'w-[4.9rem]')}
        </div>

        {/* Fifth row */}
        <div className="flex gap-1.5">
          {renderKey('shift', 'shift', 'w-[5.60rem]')}
          {renderKey('z', 'Z')}
          {renderKey('x', 'X')}
          {renderKey('c', 'C')}
          {renderKey('v', 'V')}
          {renderKey('b', 'B')}
          {renderKey('n', 'N')}
          {renderKey('m', 'M')}
          {renderKey(',', ',')}
          {renderKey('.', '.')}
          {renderKey('/', '/')}
          {renderKey('shift_right', '⇧', 'w-[6.75rem]')}
        </div>

        {/* Bottom row */}
        <div className="flex gap-1.5">
          {renderKey('fn', 'fn')}
          {renderKey('control', '⌃')}
          {renderKey('option', '⌥')}
          {renderKey('command', '⌘')}
          {renderKey('space', '', 'w-[17.8rem]')}
          {renderKey('command_right', '⌘')}
          {renderKey('option_right', '⌥')}
          <div className="flex gap-1.5">
            {renderKey('left', '←', 'w-7')}
            <div className="flex flex-col gap-0.5">
              {renderKey('up', '↑', 'w-7', 'h-[1.13rem]')}
              {renderKey('down', '↓', 'w-7', 'h-[1.13rem]')}
            </div>
            {renderKey('right', '→', 'w-7')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MacKeyboard
