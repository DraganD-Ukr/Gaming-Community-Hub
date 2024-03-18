"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

        <div className="mx-auto max-w-4xl md:max-4x1 py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            
            <div className="mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <span style={{ whiteSpace: 'nowrap' }}>Featured Games</span>
              </h1>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="bg-gray-900">

  //     <div
  //       className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  //       aria-hidden="true"
  //     >
  //       <div
  //         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
  //         style={{
  //           clipPath:
  //             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //         }}
  //       />
  //     </div>

  //       <div className="mt-4 mb-4 text-2xl">
  //          Welcome to our Gaming Community Hub!
  //       </div>

  //     <div className="grid grid-cols-2 gap-4 mx-auto mt-12">

  //       {/* Game Card */}
  //       <div className=" max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //         <div className="p-4">

  //           <h4 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //             Valheim
  //           </h4>

  //           <div className="flex justify-center my-3">
  //             <Image
  //               src="/valheim.jpg"
  //               alt="Valheim"
  //               width={200}
  //               height={200}
  //               objectFit="cover"
  //               objectPosition="center"
  //             />
  //           </div>

  //           <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
  //             {
  //               // Limit the description to 100 characters on small devices
  //               windowWidth < 640
  //                 ? "One of the most popular survivals of the last years. Become a viking, defeat bosses, build your houses and many more...".substring(0, 100)
  //                 : "One of the most popular survivals of the last years. Become a viking, defeat bosses, build your houses and many more..."
  //             }
  //           </p>
  //           <a href="#" className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-150">
  //             View More
  //             <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
  //             </svg>
  //           </a>
  //         </div>
  //       </div>

  //     </div>

  //   </div>


  // );
}