import classNames from 'classnames'

export const Key = ({title, primary, large}) => {
  return (
    <div
      className={classNames(
        'border border-neutral-800 rounded bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-hidden',
        {
          'border-blue-500 bg-blue-500 bg-opacity-30': primary,
        },
      )}>
      <p
        className={classNames(
          'text-neutral-200 text-xs min-w-[20px] h-5 items-center flex justify-center p-1',
          {
            'text-xl p-4': large,
          },
        )}>
        {title}
      </p>
    </div>
  )
}
