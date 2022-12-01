
const Referrals = () => {
  return (
    <div className="card flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="card-title">Referrals</h2>
          <span className="card-short-info mt-5">
         Rate: 3/12
          </span>
    </div>
     <div className="w-28 -mt-4">
       <img src="/images/chat.jpg" alt="" />
        </div>
      </div>
      <p className="card-text max-w-[300px]">Invite friends and earn tokens and benefits</p>
      <a href="/" className="card-button self-end">Invite friends</a>
    </div>
  )
}

export default Referrals