import React from "react";

export default function Game({ searchParams }: {
    searchParams: {
        id: number;
        title: string;
        rating: number;
        img_link: string;
        description: string;
    }
}) {
    console.log(searchParams.title);

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center"> {/* Page color */}
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-130 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-2/2 rotate-[90deg] bg-gradient-to-tr from-[#59d6f8] to-[#59ff2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
      
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-4">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-64 w-full object-contain md:w-64 mx-auto" src={searchParams.img_link} alt={searchParams.title + " Logo"} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{searchParams.title}</div>
                  <p className="block mt-1 text-lg leading-tight font-medium text-white">{searchParams.description}</p>
                  <p className="mt-2 text-gray-500">{searchParams.rating}</p>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      );

}