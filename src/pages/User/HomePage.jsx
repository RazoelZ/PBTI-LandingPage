import React from "react";
import { NavbarComponent, FooterComponent, AssosiationEvent, DojangEvent, ListAthlete } from "../../Components";
import heroImage from "../../assets/images/hero01.jpg";
import gold from "../../assets/images/icon/gold.png";
import silver from "../../assets/images/icon/silver.png";
import bronze from "../../assets/images/icon/bronze.png";
import belt from "../../assets/images/icon/belt.png";
import newicon from "../../assets/images/icon/newicon.png";
import arrow from "../../assets/images/icon/arrow.png";
import { AssociationEventData, EventByDojangData, ListAthleteEliteData, ListAthleteJuniorData, ListAthleteMasterData } from "../../constant/AssosiationEventData";

/**
 * HomePage Component
 * 
 * This component represents the homepage of the application. It includes various sections 
 * such as the hero section, features section, and a list of events and athletes.
 */
const HomePage = () => {
    return (
        <div>
            <NavbarComponent />

            {/* Hero Section */}
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-current to-black opacity-70"></div>
                <div className="relative flex flex-col items-center text-white h-full py-14">
                    <div type="text" className="bg-custom-black flex p-2 w-auto text-white text-xs rounded-2xl md:flex-row items-center justify-center text-center md:text-left md:text-lg">
                        <span className="flex-shrink-0">
                            <img src={newicon} className="cursor-pointer" alt="New Icon" />
                        </span>
                        <span className="mx-2 md:mx-4">
                            Learn how this can help athlete and Organization
                        </span>
                        <span className="flex-shrink-0">
                            <img src={arrow} className="cursor-pointer" alt="Arrow Icon" />
                        </span>
                    </div>
                    <p className="font-bold text-4xl text-center mt-6 md:text-8xl md:w-3/4">
                        The <span className="italic">future</span> of heart. Indonesian Taekwondo.
                    </p>
                    <p className="w-2/3 text-center mt-5 font-thin md:w-1/3">
                        The Management Platform for Advisory Athlete, Dojang & Event.
                        Saves time to get information and improves Organization satisfaction.
                    </p>
                    <button className="bg-custom-red py-3 px-8 mt-5 rounded-xl font-semibold hover:bg-custom-dark-red">
                        Get Started
                    </button>
                    <div className="flex justify-center space-x-3 mt-14">
                        <img src={gold} alt="Gold Medal" className="w-16 h-14" />
                        <img src={silver} alt="Silver Medal" className="w-16 h-14" />
                        <img src={bronze} alt="Bronze Medal" className="w-16 h-14" />
                    </div>
                    <p className="font-semibold text-2xl mt-10">Taekwondo Seagames 2023</p>
                    <p className="font-thin text-custom-light-gray mt-3">Our Proud Achievements</p>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Features Section */}
            <div className="p-5 mt-10 md:py-10 md:px-20 md:mt-0 ">
                {/* Association Event Section */}
                <div className="flex justify-between">
                    <p className="font-bold text-2xl">Association Event</p>
                    <button className="py-3 px-8 rounded-xl font-semibold border-solid border-2 border-custom-red hover:bg-custom-red hover:text-white">
                        See More
                    </button>
                </div>
                {/* Association Data */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    {AssociationEventData.map((data, index) => (
                        <AssosiationEvent
                            key={index}
                            image={data.image}
                            title={data.title}
                            subtitle={data.subtitle}
                            location={data.location}
                        />
                    ))}
                </div>

                {/* Event By Dojang Section */}
                <div className="flex justify-between mt-10">
                    <p className="font-bold text-2xl">Event By Dojang</p>
                    <button className="py-3 px-8 rounded-xl font-semibold border-solid border-2 border-custom-red hover:bg-custom-red hover:text-white">
                        See More
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    {EventByDojangData.map((data, index) => (
                        <DojangEvent
                            key={index}
                            image={data.image}
                            title={data.title}
                            condition={data.condition}
                            date={data.date}
                            location={data.location}
                        />
                    ))}
                </div>

                {/* Featured Athlete National Rank Section */}
                <div className="w-full text-center my-10">
                    <p className="text-custom-red mb-5">LAST UPDATE APRIL 2024</p>
                    <h1 className="text-4xl font-bold sm:text-5xl">Featured Athlete National Rank</h1>
                </div>

                {/* List of Athletes */}
                <div className="flex justify-center mt-10 space-y-3 flex-wrap lg:space-y-0 md:justify-around">
                    {/* Master Black Section */}
                    <div className="w-[360px] border-solid border-2 border-[#EDEDED] rounded-xl">
                        <div className="flex justify-between px-8 py-5 border-solid border-b-2 border-[#EDEDED]">
                            <div>
                                <h2 className="text-2xl font-bold">Master Black</h2>
                                <p className="text-custom-gray">All Black belt</p>
                            </div>
                            <img src={belt} alt="Belt" className="w-1/3" />
                        </div>
                        {ListAthleteMasterData.map((data, index) => (
                            <ListAthlete
                                key={index}
                                image={data.image}
                                name={data.name}
                                belt={data.belt}
                                location={data.location}
                            />
                        ))}
                        <div className="flex justify-between px-8 py-5">
                            <button className="py-3 px-8 rounded-xl w-full font-semibold border-solid border-2 border-custom-red hover:bg-custom-red hover:text-white">
                                See More
                            </button>
                        </div>
                    </div>

                    {/* Elite Section */}
                    <div className="w-[360px] border-solid border-2 border-[#EDEDED] rounded-xl">
                        <div className="flex justify-between px-8 py-5 border-solid border-b-2 border-[#EDEDED]">
                            <div>
                                <h2 className="text-2xl font-bold">Elite Black</h2>
                                <p className="text-custom-gray">All Elite belt</p>
                            </div>
                            <img src={belt} alt="Belt" className="w-1/3" />
                        </div>
                        {ListAthleteEliteData.map((data, index) => (
                            <ListAthlete
                                key={index}
                                image={data.image}
                                name={data.name}
                                belt={data.belt}
                                location={data.location}
                            />
                        ))}
                        <div className="flex justify-between px-8 py-5">
                            <button className="py-3 px-8 rounded-xl w-full font-semibold border-solid border-2 border-custom-red hover:bg-custom-red hover:text-white">
                                See More
                            </button>
                        </div>
                    </div>

                    {/* Junior Section */}
                    <div className="w-[360px] border-solid border-2 border-[#EDEDED] rounded-xl">
                        <div className="flex justify-between px-8 py-5 border-solid border-b-2 border-[#EDEDED]">
                            <div>
                                <h2 className="text-2xl font-bold">Junior Black</h2>
                                <p className="text-custom-gray">All Junior belt</p>
                            </div>
                            <img src={belt} alt="Belt" className="w-1/3" />
                        </div>
                        {ListAthleteJuniorData.map((data, index) => (
                            <ListAthlete
                                key={index}
                                image={data.image}
                                name={data.name}
                                belt={data.belt}
                                location={data.location}
                            />
                        ))}
                        <div className="flex justify-between px-8 py-5">
                            <button className="py-3 px-8 rounded-xl w-full font-semibold border-solid border-2 border-custom-red hover:bg-custom-red hover:text-white">
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default HomePage;
