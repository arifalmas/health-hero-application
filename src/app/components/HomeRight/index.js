import Progress from "../Progress"
import Games from "../Games"
import Referrals from "../Referrals"
import Land from "../Land"
import Steps from "../Steps"

const HomeRight = () => {
    return (
        <div className="flex-1 flex flex-col items-between xl:max-w-none lg:max-w-[50%] max-w-full">
            <div className="flex gap-6 flex-wrap justify-between ">
                <div className="pb-5 xl:w-auto w-full">
                    <Progress />
                </div>
                <div className="flex justify-between gap-6 flex-1 overflow-x-auto no-scrollbar pb-5">
                    <Games />
                    <Referrals />
                </div>
            </div>
            <div className="mt-5 flex justify-between flex-wrap mb-24 lg:mb-0">
                <Steps />
                <Land />
            </div>
        </div>
    )
}

export default HomeRight