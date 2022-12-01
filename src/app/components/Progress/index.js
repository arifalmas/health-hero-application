import { BsArrowRightShort } from 'react-icons/bs';

const Progress = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h2 className="card-title md:mb-3 mb-0">Progress</h2>
        <span className="card-rounded">
          10%
        </span>
        <span className="card-short-info my-5 md:hidden text-base py-1 px-3 border-2 flex items-center gap-1">
          Continue
          <BsArrowRightShort className="text-2xl" />
        </span>
      </div>
      <p className="card-text hidden md:block">Next steps to level upgrade:</p>
      <div className="md:flex flex-col gap-4 mt-6 hidden">
        <div className="flex items-center gap-1 lg:text-2xl text-lg">
          <span className="rounded-full border-2 py-1 px-4 mr-2 border-tertiary">
            Start moving!
          </span>
          <span className="card-rounded px-2">
            <BsArrowRightShort className="text-4xl" />
          </span>
        </div>
        <div className="flex items-center gap-1 lg:text-2xl text-lg">
          <span className="rounded-full border-2 py-1 px-4 mr-2 border-tertiary">
            Mint W-NFT
          </span>
          <span className="card-rounded px-2">
            <BsArrowRightShort className="text-4xl" />
          </span>
        </div>
        <div className="flex items-center gap-1 lg:text-2xl text-lg">
          <span className="rounded-full border-2 py-1 px-4 mr-2 border-tertiary">
            Play a game
          </span>
          <span className="card-rounded px-2">
            <BsArrowRightShort className="text-4xl" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Progress