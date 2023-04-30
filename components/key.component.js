import classNames from "classnames"

export const Key = ({title, primary}) => {
  return (
    <div className={classNames("border border-neutral-700 rounded bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 overflow-hidden", {
      "border-blue-500 bg-blue-500 bg-opacity-30": primary,
    })}>
      <p className="text-neutral-200 text-xs min-w-[20px] h-5 items-center flex justify-center px-1">
        {title}
      </p>
    </div>
  );
};
