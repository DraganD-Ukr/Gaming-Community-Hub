"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from 'react-icons/fa';

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



  const rating = 4.6; // Rating of the game (static variable for the example)
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - Math.ceil(rating);


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
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-14">
                <span style={{ whiteSpace: 'nowrap' }}>Featured Games</span>
              </h1>
            </div>



            {/* Start of Game Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 sm:gap-x-4 md:gap-x-4 mt-4">

              {/* Game Cards Loop */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="max-w-80 lg:max-w-xl bg-white border-2 border-gray-200 rounded-lg shadow-none hover:shadow-2xl duration-75 dark:bg-gray-800 dark:border-gray-700">

                  <div className="p-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Valheim
                      </h4>

                      <div className="flex justify-center items-center mb-2">
                        {Array.from({ length: fullStars }).map((_, i) => (
                          <FaStar key={i} color="#ffc107" size={14} />
                        ))}
                        {partialStar > 0 && (
                          <div style={{ position: 'relative', width: '14px' }}>
                            <FaRegStar key="partial" color="#e4e5e9" size={14} />
                            <div style={{ position: 'absolute', overflow: 'hidden', width: `${14 * partialStar}px`, left: 0, top: 0 }}>
                              <FaStar key="partial-filled" color="#ffc107" size={14} />
                            </div>
                          </div>
                        )}
                        {Array.from({ length: emptyStars }).map((_, i) => (
                          <FaRegStar key={`empty-${i}`} color="#e4e5e9" size={14} />
                        ))}
                        <span className="ml-2 text-md text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
                      </div>

                    </div>

                    <div className="flex justify-center items-center my-3">
                      <Image
                        src="/valheim.jpg"
                        alt="Valheim"
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>

                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                      {
                        // Limit the description to 100 characters on small devices
                        windowWidth < 640
                          ? "One of the most popular survivals of the last years. Become a viking, defeat bosses, build your houses and many more...".substring(0, 100)
                          : "One of the most popular survivals of the last years. Become a viking, defeat bosses, build your houses and many more..."
                      }
                    </p>
                    <a href="#" className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-150">
                      View More
                      <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}