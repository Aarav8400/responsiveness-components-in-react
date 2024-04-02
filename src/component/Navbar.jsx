import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleMenu = () => {
        setShow(!show)
    }
    return (
        <nav className="p-3 flex bg-white justify-between items-center">
            <a href="#" id="brand" className="flex items-center gap-2">
                <img className="object-cover max-w-12 max-h-12" src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-display">AaravBite</span>
            </a>
            <div>
                <ul className="hidden md:flex md:items-center md:gap-6">
                    <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
                    <li><Link to="/about" className="text-gray-600 hover:text-primary">About</Link></li>
                    <li><Link to={"/pricing"} className="text-gray-600 hover:text-primary">Pricing</Link></li>
                </ul>
            </div>
            <button className="hidden md:flex items-center gap-2 border border-gray-200 px-4 py-2 hover:border-gray-600 rounded-lg">
                <img src="https://icons.duckduckgo.com/ip3/aarav.com.ico" className="w-5 h-5" alt="" />
                <span>Aarav Developers</span>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="p-2 md:hidden" onClick={handleMenu}>
                <i className="fa-solid fa-bars text-gray-600"></i>
            </button>
            {/* for mobile */}
            <div className={`${show ? "block" : "hidden"} fixed bg-white inset-0 p-3 md:hidden `}>
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="w-12 h-12" alt="" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-display">Flowbite</span>
                    </a>
                    <button className="p-2 md:hidden" onClick={handleMenu}>
                        <i className="fa-solid fa-xmark text-gray-600"></i>
                    </button>
                </div>
                <div>
                    <ul className="flex flex-col gap-6 mt-6 py-2">
                        <li><Link to="/" className="text-gray-600 hover:bg-gray-400 block">Home</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:bg-gray-400 block">About</Link></li>
                        <li><Link to={"/pricing"} className="text-gray-600 hover:bg-gray-400 block">Pricing</Link></li>
                    </ul>
                </div>
                <div className="h-[1px] bg-gray-300"></div>
                <button className=" mt-2 flex items-center gap-2 px-2 py-2 hover:bg-gray-400 rounded-lg w-full">
                    <img src="https://icons.duckduckgo.com/ip3/aarav.com.ico" className="w-5 h-5" alt="" />
                    <span>Aarav Developers</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>

            </div>
            {/* mobile menu */}
        </nav>
    )
}

export default Navbar