import { AiOutlineHeart, AiOutlineStar, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsLightningCharge, BsSmartwatch, BsClipboardCheck } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';
import { MdFastfood, MdNature } from 'react-icons/md';
import { SiSemanticrelease } from 'react-icons/si';
import { CgGym } from 'react-icons/cg';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import { GiTechnoHeart } from 'react-icons/gi';
import { useState } from 'react';

const UserInformation = () => {
    const [seeAll, setSeeAll] = useState(false)

    return (
        <div className="shadow-lg rounded-3xl bg-white p-0 w-full md:w-auto flex-1 xl:flex-none">
            {/* User */}
            <div className="flex items-center md:mx-8 mx-6 mt-10">
                <img
                    className="rounded-full md:h-28 md:w-28 w-24 h-24 object-cover"
                    src="https://images.unsplash.com/photo-1661983226582-20cc128803bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="profile"
                    loading="lazy"
                />
                <div className="ml-4">
                    <h3 className="md:text-3xl text-xl font-bold text-secondary">Michaela Roberts</h3>
                    <div className="flex items-center md:gap-5 gap-3 my-2 bg-secondary text-white w-fit md:px-4 px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1 md:text-2xl text-lg">
                            <AiOutlineHeart />
                            <span className="font-medium">3</span>
                        </div>
                        <div className="flex items-center gap-1 md:text-2xl text-lg">
                            <AiOutlineStar />
                            <span className="font-medium">3</span>
                        </div>
                        <div className="flex items-center gap-1 md:text-2xl text-lg">
                            <BsLightningCharge />
                            <span className="font-medium">3</span>
                        </div>
                    </div>
                    <p className="md:text-2xl text-lg font-semibold text-secondary">Level 1</p>
                </div>
            </div>
            {/* Details */}
            {!seeAll && (
                <div className="flex sm:hidden items-center m-6 justify-between gap-1 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-2">
                        <BsSmartwatch className="text-xl text-[#37B5BB]" />
                        <span className="font-medium text-lg text-secondary">Google Fit</span>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3">
                        <BiRun className=" text-xl text-[#37B5BB]" />
                        <span className="font-medium text-lg text-secondary">31,712</span>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3 cursor-pointer" onClick={() => setSeeAll(true)}>
                        <AiOutlinePlusCircle className=" text-xl text-[#37B5BB]" />
                        <span className="font-medium text-lg text-secondary">See all</span>
                    </div>
                </div>
            )}
            <div className="my-6 space-y-6 ml-3 md:px-8 px-6 sm:!block" style={{ display: seeAll ? 'block' : 'none' }}>
                <div className="flex items-center md:gap-5 gap-3">
                    <BsSmartwatch className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">Connected App: </span>Google Fit</span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                    <BiRun className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">All Time Steps: </span>31,712</span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                    <BsClipboardCheck className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">Nutrition: </span>Paleo</span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                    <MdFastfood className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">Favorite food: </span>Sushi </span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                    <SiSemanticrelease className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">Spirit: </span>Buddhist</span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                    <CgGym className="md:text-3xl text-2xl text-[#37B5BB]" />
                    <span className="font-medium md:text-2xl text-xl text-secondary"><span className="hidden sm:inline">Fitness: </span>Sports</span>
                </div>
            </div>
            {/* Badges */}
            <div className="bg-tertiary rounded-3xl md:px-8 px-6 py-5">
                <h1 className="card-title text-white font-semibold">Badges</h1>
                <div className="flex items-center justify-between gap-5 overflow-x-auto no-scrollbar">
                    <div className="my-4">
                        <span className="rounded-full bg-white sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center">
                            <TbDeviceGamepad2 className="text-[#37B5BB] sm:text-4xl text-2xl" />
                        </span>
                        <span className="text-white text-center block text-sm sm:text-base">Gamer</span>
                    </div>
                    <div className="my-4">
                        <span className="rounded-full bg-white sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center">
                            <BiRun className="text-[#37B5BB] sm:text-4xl text-2xl" />
                        </span>
                        <span className="text-white text-center block text-sm sm:text-base">Runner</span>
                    </div>
                    <div className="my-4">
                        <span className="rounded-full bg-white sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center">
                            <GiTechnoHeart className="text-[#37B5BB] sm:text-4xl text-2xl" />
                        </span>
                        <span className="text-white text-center block text-sm sm:text-base">Teche</span>
                    </div>
                    <div className="my-4">
                        <span className="rounded-full bg-white sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center">
                            <MdNature className="text-[#37B5BB] sm:text-4xl text-2xl" />
                        </span>
                        <span className="text-white text-center block text-sm sm:text-base">Owner</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformation