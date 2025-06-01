type CardProps = {
  title: string
  text: string
  BottomComponent?: React.ReactNode
}

export const Card = ({title, text, BottomComponent}: CardProps) => {
  return (
    <div className="border rounded-3xl p-8 border-neutral-800 sm:flex-1 gap-2 flex flex-col h-48 items-center bg-neutral-900 bg-opacity-50">
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-gray-300">{text}</p>
      <div className="flex-1" />
      {BottomComponent}
    </div>
  )
}
