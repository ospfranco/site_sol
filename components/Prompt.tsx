type PromptProps = {
  text: string
}

export default function Prompt({text}: PromptProps) {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-neutral-800 rounded-lg p-3 w-full max-w-2xl min-w-48 flex">
      <p className="text-white text-sm">{text}</p>
      <div className="ml-1 h-5 w-[1px] bg-white rounded-lg" />
    </div>
  )
}
