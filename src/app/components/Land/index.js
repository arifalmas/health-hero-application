
const Land = () => {
  return (
    <div className="card xl:w-[48%] w-full mt-10 xl:mt-0 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="sm:mb-8">
          <h2 className="card-title">Land</h2>
          <span className="card-short-info sm:hidden block">
            Parcels Sold: 973
          </span>
          <p className="card-text mt-5">Claim your land on our healthy metaverse enabling creator economics & free basic needs.</p>
        </div>
        <div className="w-64 -mt-10">
          <img src="/images/land.jpg" alt="" />
        </div>
      </div>
      <div className="flex items-center sm:justify-between justify-end -mt-10 sm:mt-0">
        <span className="card-short-info sm:block hidden">
          Parcels Sold: 973
        </span>
        <a href="/" className="card-button">Claim<span className="hidden sm:inline"> my land</span></a>
      </div>
    </div>
  )
}

export default Land