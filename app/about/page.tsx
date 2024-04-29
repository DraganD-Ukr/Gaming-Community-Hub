export default function About() {
  return (
    <div className="bg-gray-900">
      {/* Page color */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-4xl md:max-4x1 py-16 sm:py-10 lg:py-20">
          <div className="text-center">
            <div className="mx-auto">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl decoration-1 underline underline-offset-19">
                <span style={{ whiteSpace: 'nowrap' }}>Gaming Community Hub</span>
              </h1>
            </div>

            <div className="mt-6 text-base leading-8 text-pretty text-gray-100">
              <div className="m-6 text-2xl">
                Welcome to our Gaming Community Hub!
              </div>

              <div className="mb-4">
                Are you passionate about gaming? Look no further! Our platform is designed to bring gamers together from all corners of the globe. Whether you&apos;re a casual player or a hardcore enthusiast, there&apos;s something here for everyone.
              </div>

              <div className="mb-12">
                Join our vibrant community where you can connect with like-minded individuals, share your gaming experiences, and dive into discussions about your favorite titles. Our platform offers a plethora of features, including:
              </div>

              <ul className="mb-8 list-outside list-disc text-start px-8 py-4 bg-gray-700 bg-opacity-30 rounded-lg">
                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">User Registration and Login:</div> Create your personalized account to access all the features of our community hub. Log in to engage with fellow gamers and unlock exclusive content.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Post Sharing:</div>Share your gaming triumphs, tips, and tricks with the community. Whether it&apos;s a detailed guide, a memorable gaming moment, or an insightful review, your posts are welcomed and celebrated.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Game Ratings:</div>Explore our extensive database of games and contribute by rating your experiences. Help fellow gamers discover new favorites or avoid potential disappointments.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Interactive Discussions:</div>Interactive Discussions: Engage in lively discussions about the latest gaming news, trends, and controversies. Exchange ideas, debate strategies, and build friendships with fellow gamers who share your interests.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Commenting System:</div>Leave your thoughts and feedback on posts, reviews, and discussions. Join the conversation, express your opinions, and connect with the broader gaming community.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Community Events:</div>Community Events: Stay updated on upcoming gaming events, tournaments, and meetups. Participate in community-driven activities and forge lasting connections with fellow gamers.</li>

                <li className="mb-4"><div className="text-white text-lg font-bold mb-2">Personalized Profiles:</div>Customize your profile to showcase your gaming preferences, achievements, and personality. Connect with other gamers who share your gaming tastes and play styles.</li>

              </ul>

              <div className="mb-4">
                At our Gaming Community Hub, the adventure never ends. Whether you&apos;re looking for gaming companions, seeking advice, or simply want to immerse yourself in all things gaming-related, you&apos;ll find a welcoming home here.
              </div>

              <div className="mb-4">
                Join us today and become a part of our thriving gaming community!
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/auth/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-150"
              >
                Get started
              </a>
              <br /><br /><br /><br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
