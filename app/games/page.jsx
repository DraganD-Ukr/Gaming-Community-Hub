



import { fetchGames } from "../lib/data";
import GameCards from "@/components/GameCards";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Games() {
  await new Promise((resolve) => (setTimeout( resolve), 10000000))

  // const [windowWidth, setWindowWidth] = useState(0);
  const games = await fetchGames();




  return (
    <div className="bg-gray-900">
      {/* Page color */}

      <div className="relative isolate px-6 lg:px-8">
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
            
              <Suspense fallback = {<Loading/>}>
              <GameCards/>
              </Suspense>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}