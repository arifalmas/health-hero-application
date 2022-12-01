import { BiCategory, BiSearch } from 'react-icons/bi';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import { FiMapPin } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <header className="2xl:mt-0 lg:my-12 fixed lg:relative w-full bottom-0 z-50 left-0">
            <div className="lg:container">
            <nav className="bg-primary py-3 lg:rounded-full sm:px-10 px-5 flex items-center justify-between">
                <a href="/" className="lg:block hidden text-white font-semibold text-3xl">Health Hero</a>
                <ul className="flex items-center gap-8 justify-between lg:justify-start lg:w-fit w-full">
                    <li>
                        <a href="/" className="flex flex-col lg:flex-row items-center lg:gap-2 sm:text-3xl text-xl text-white">
                            <BiCategory />
                            <span className="text-base sm:text-xl lg:text-2xl mt-1 lg:mt-0">Dash</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex flex-col lg:flex-row items-center lg:gap-2 sm:text-3xl text-xl text-white">
                            <TbDeviceGamepad2 className="!text-white" />
                            <span className="text-base sm:text-xl lg:text-2xl mt-1 lg:mt-0">Play</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex flex-col lg:flex-row items-center lg:gap-2 sm:text-3xl text-xl text-white">
                            <FiMapPin />
                            <span className="text-base sm:text-xl lg:text-2xl mt-1 lg:mt-0">City</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex flex-col lg:flex-row items-center lg:gap-2 sm:text-3xl text-xl text-white">
                            <FaRegStar />
                            <span className="text-base sm:text-xl lg:text-2xl mt-1 lg:mt-0">Token</span>
                        </a>
                    </li>
                    <li className="lg:hidden block">
                        <a href="/" className="flex flex-col lg:flex-row items-center lg:gap-2 sm:text-3xl text-xl text-white">
                            <AiOutlineMenu />
                            <span className="text-base sm:text-xl lg:text-2xl mt-1 lg:mt-0">Menu</span>
                        </a>
                    </li>
                </ul>
                {/* Search */}
                <div className="hidden lg:flex xl:w-full xl:max-w-lg  items-center bg-gray-100 bg-opacity-30 rounded-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent outline-none rounded-full px-6 py-2 text-gray-100 placeholder:text-gray-200 placeholder:font-medium text-xl"
                    />
                    <BiSearch className="text-white text-2xl mx-4" />
                </div>
                {/* Menu */}
                <a href="/" className="hidden lg:block">
                    <AiOutlineMenu className="text-white text-4xl" />
                </a>
            </nav>
            </div>
        </header>

    )
}

export default Navbar