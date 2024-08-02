import React from "react";

const ListAthlete = ({ image, name, belt, location }) => {
    return (
        <div className="flex justify-between items-center p-5 border-b-2 border-solid border-[#EDEDED]">
            <div className="flex items-center">
                <div className="w-12 h-12">
                    <img src={image} alt="Athlete" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-[#727272] text-sm">{belt}</p>
                </div>
            </div>
            <p className="text-[#727272]">{location}</p>
        </div>
    );
};

export default ListAthlete;
