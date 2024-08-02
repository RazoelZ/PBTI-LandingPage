import { useState } from "react";
import logo from "../assets/images/icon/logo.png";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="sticky top-0 z-30 h-[12vh] flex items-center justify-between text-sm bg-black text-white px-4 py-2 shadow-md lg:text-base lg:px-8">
                <div className="flex items-center pb-2 md:ml-3 lg:ml-12">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="w-14 cursor-pointer" />
                    </NavLink>
                    <p className="w-1/2 ml-4 font-bold">
                        Pengurus Besar Taekwondo Indonesia
                    </p>
                </div>
                <div className="hidden md:flex md:ml-0 items-center flex-gap space-x-8">
                    <NavLink className="px-1.5 lg:px-3" to="/#">
                        News
                    </NavLink>
                    <NavLink className="px-1.5 lg:px-3" to="/#">
                        Competition
                    </NavLink>
                    <NavLink className="px-1.5 lg:px-3" to="/#">
                        Athletes
                    </NavLink>
                    <NavLink className="px-1.5 lg:px-3" to="/#">
                        Dojang
                    </NavLink>
                    <NavLink className="px-1.5 lg:px-3" to="/#">
                        Ranking
                    </NavLink>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="hidden rounded-md px-6 py-2 text-sm text-white hover:border-solid hover:border-2 hover:border-custom-red md:flex lg:ml-3"
                    >
                        <strong>Login</strong>
                    </button>
                    <button
                        className="hidden rounded-md px-6 py-2 text-sm text-white hover:border-solid hover:border-2 hover:border-custom-red md:flex"
                    >
                        <strong>Register</strong>
                    </button>
                    <button
                        className={`text-3xl p-2 text-white md:hidden ${isDropdownOpen ? "active" : ""}`}
                        onClick={toggleDropdown}
                    >
                        <a href="#brand">
                            <strong>☰</strong>
                        </a>
                    </button>
                </div>
            </nav>
            {isDropdownOpen && (
                <div className="fixed top-19 right-0 py-3 z-50 flex flex-col w-full items-end space-y-2 bg-black font-semibold text-white">
                    <NavLink className="px-7 lg:px-3" to="/#">
                        News
                    </NavLink>
                    <NavLink className="px-7 lg:px-3" to="/#">
                        Competition
                    </NavLink>
                    <NavLink className="px-7 lg:px-3" to="/#">
                        Athletes
                    </NavLink>
                    <NavLink className="px-7 lg:px-3" to="/#">
                        Dojang
                    </NavLink>
                    <NavLink className="px-7 lg:px-3" to="/#">
                        Ranking
                    </NavLink>
                    <button
                        className="hidden rounded-md px-6 py-2 text-sm text-white hover:border-solid hover:border-2 hover:border-custom-red md:flex lg:ml-3"
                    >
                        <strong>Login</strong>
                    </button>
                    <button
                        className="hidden rounded-md px-6 py-2 text-sm text-white hover:border-solid hover:border-2 hover:border-custom-red md:flex"
                    >
                        <strong>Register</strong>
                    </button>

                </div>
            )}
        </>
    );
};

export default NavbarComponent;
