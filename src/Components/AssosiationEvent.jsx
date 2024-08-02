import React from "react";

const AssosiationEvent = ({ image, title, subtitle, location }) => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-64 rounded-xl overflow-hidden md:h-96">
                <img src={image} alt="Association Event" className="object-cover w-full h-full" />
            </div>
            <p className="font-semibold mt-2">{title}</p>
            <div className="flex items-center mt-1">
                <p className="text-[#818498]">{subtitle}</p>
                <div className="w-1 h-1 bg-[#818498] rounded-full mx-2"></div>
                <p className="text-[#9A9EAC]">{location}</p>
            </div>
        </div>
    );
}

export default AssosiationEvent;
