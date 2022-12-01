
const Games = () => {
  return (
    <div className="card flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="card-title">Games</h2>
          <span className="card-short-info my-5">
            Rank: #1220
          </span>
          <p className="card-text max-w-[210px] mt-5">Land on the moon and earn tokens</p>
        </div>
        <div className="w-24 -mt-4">
          <img src="/images/rocket.jpg" alt="" />
        </div>
      </div>
      <a href="/" className="card-button self-end">Start playing</a>
    </div>
  )
}

export default Games