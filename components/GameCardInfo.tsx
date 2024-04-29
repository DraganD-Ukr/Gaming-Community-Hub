// GameCard.tsx
import React from "react";

interface GameCardProps {
  searchParams: {
    id: number;
    title: string;
    rating: number;
    img_link: string;
    description: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ searchParams }) => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-900 border-2 border-cyan-900 rounded-3xl shadow-md overflow-hidden md:max-w-3xl m-4">
      <div className="md:flex items-center">
        <div className="md:flex-shrink-0 flex justify-center">
          <img className="h-64 w-full object-contain md:w-64 ml-8" src={searchParams.img_link} alt={searchParams.title + " Logo"} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{searchParams.title}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-white">{searchParams.description}</p>
          <p className="mt-2 text-gray-500">{searchParams.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;