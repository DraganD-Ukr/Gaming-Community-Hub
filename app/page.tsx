'use client'
require('dotenv').config();

export default function Index() {

  return (
    <div className="bg-gray-900"> {/* Page color */}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-42">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-2 py-1 text-xs leading-6 text-gray-300 ring-1 ring-gray-200/30 hover:ring-gray-500/20 duration-300 ease-in-out">
              Explore Games...{' '}
              <a href="/games" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto inline-block text-left">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <div>Connect</div>
                <div>Play</div>
                <div>Dominate</div>
              </h1>
            </div>


            <p className="mt-6 text-md leading-8 text-gray-300">
              Welcome to Gaming Community Hub – the go-to hub for gamers! Connect, play, and dominate alongside like-minded individuals.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-150"
              >
                Get started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-full px-4 py-2 transition-colors duration-300 ease-in-out ">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

