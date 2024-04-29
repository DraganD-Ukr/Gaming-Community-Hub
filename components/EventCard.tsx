// EventCard.tsx
import Link from "next/link";
import React from "react";

interface GameCardProps {
    title: string,
    description: string,
    datetime: Date,
    location: string,
    website_link: string,
}

const EventCard: React.FC<GameCardProps> = ({ title, description, datetime, location, website_link }) => {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="max-w-3xl mx-auto bg-gray-900 border-2 border-cyan-900 rounded-3xl shadow-md overflow-hidden md:max-w-3xl m-4">
            <div className="md:flex items-center">
                 {/* <div className="md:flex-shrink-0 flex justify-center">
                     <img className="h-64 w-full object-contain md:w-64 ml-8" src={searchParams.img_link} alt={searchParams.title + " Logo"} /> 
                </div>  */}
                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg text-sky-500 font-semibold">{title}</div>
                    <p className="block mt-1 text-lg leading-tight font-sans text-white pb-5">{description}</p>

                    <p className="mt-2 text-gray-400">Time: {formattedDate}</p>
                    <p className="mt-2 text-gray-400">Location: {location}</p>

                    <div className="mt-6">
                      <Link legacyBehavior href={website_link}>
                        <a className="font-semibold transition-all duration-300 hover:text-slate-300 hover:underline border p-1.5">Visit Website</a>
                      </Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;