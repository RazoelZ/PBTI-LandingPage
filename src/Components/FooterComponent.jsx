import React from "react";
import logo from "../assets/images/icon/logo.png";

const FooterComponent = () => {
    return (
        <div className="bg-black text-white flex flex-col justify-between px-10 py-5 text-left md:px-28 md:py-16 md:flex-row">
            <div className="space-y-2 mb-10 md:mb-0">
                <div className="flex items-center pb-2">
                    <img src={logo} alt="Logo" className="w-14 cursor-pointer" />
                    <p className="w-1/2 ml-4 font-bold">
                        Pengurus Besar Taekwondo Indonesia
                    </p>
                </div>
                <p className="text-custom-gray-2 font-thin md:w-1/2">
                    Building coordination tools for organizations of all shapes and sizes. The future of trust.
                </p>
                <p className="text-custom-gray-2 font-thin">
                    © 2024 powered by Gelora
                </p>
            </div>
            <div className="flex w-full justify-between">
                <ul className="space-y-4">
                    <p className="font-semibold">Product</p>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Event</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Exam</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">API</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Sign Up</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Log in</li>
                </ul>
                <ul className="space-y-4">
                    <p className="font-semibold">Resources</p>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Blog</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Help Center</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Community</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Developers</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Partners</li>
                </ul>
                <ul className="space-y-4">
                    <p className="font-semibold">Company</p>
                    <li className="hover:text-custom-gray-2 cursor-pointer">About</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Customers</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Jobs</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Press</li>
                    <li className="hover:text-custom-gray-2 cursor-pointer">Security</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterComponent;
