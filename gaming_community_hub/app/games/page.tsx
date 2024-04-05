"use client";

import { useEffect, useState } from "react";
import { GameCard } from "@/components/GameCard";

export default function Games() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update the window width when the component mounts
    setWindowWidth(window.innerWidth);

    // Create an event listener for the window resize event
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);





  return (
    <div className="bg-gray-900">
      {/* Page color */}
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-2/2 rotate-[90deg] bg-gradient-to-tr from-[#8dfea5] to-[#fa691b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl md:max-4x1 py-24 sm:py-28 md:py-34 lg:py-40">
          <div className="text-center">

            <div className="mx-auto">
              <h1 className=" text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-4xl mb-20">
                <span style={{ whiteSpace: 'nowrap' }}>Featured Games</span>
              </h1>
            </div>



            {/* Start of Game Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-2  mt-4">

              {/* Game Cards Loop */}
              {Array.from({ length: 12 }).map((_, index) => (
                <GameCard
                  key={index}
                  title="Valheim"
                  rating={4.6}
                  imageUrl="https://cdn.akamai.steamstatic.com/steam/apps/892970/capsule_616x353.jpg?t=1708348390"
                  description="One of the most popular survivals of the last years. Become a viking, defeat bosses, build your houses and many more in this amazing game, called Valheim."
                  windowWidth={windowWidth}
                /> 
              ))}

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}