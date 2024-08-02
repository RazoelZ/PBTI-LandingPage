import React from "react";

const DojangEvent = ({ image, title, condition, date, location }) => {
    return (
        <div className="flex flex-col items-center w-full">
            <img src={image} alt={title} className="w-full h-48 sm:h-60 object-cover rounded-2xl" />
            <div className="flex items-center w-full mt-2">
                <p className="font-semibold">{title}</p>
                <div className="w-1 h-1 bg-[#818498] rounded-full mx-2"></div>
                {
                    condition === 1 ? (
                        <p className="text-sm font-thin bg-[#C23535] text-white px-2 rounded-full">Exam</p>
                    ) : condition === 2 ? (
                        <p className="text-sm font-thin bg-[#A5A5A5] text-white px-2 rounded-full">Event</p>
                    ) : condition === 3 ? (
                        <p className="text-sm font-thin bg-[#C0C0C0] text-white px-2 rounded-full">Competition</p>
                    ) : (
                        <p className="text-sm font-thin bg-[#FFD700] text-white px-2 rounded-full">Training</p>
                    )
                }
            </div>
            <div className="flex justify-between text-sm w-full mt-2 text-[#818498]">
                <p><span>Added</span> {date} - {location}</p>
            </div>
        </div>
    );
};

export default DojangEvent;
