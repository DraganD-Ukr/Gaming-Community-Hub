// page.tsx
import React from "react";
import EventCard from '../../components/EventCard';
import { fetchEvents } from '../lib/data';

export default async function Events() {
  const events = await fetchEvents();

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

        <div className=" text-center">
          <h1 className="text-4xl font-bold text-white py-20">Upcoming Events</h1>
        </div>

        {/* Start of Event Cards */}
        <div className="flex-col space-y-10 justify-center mt-4">
          {/* Event Cards Loop */}
          {(events as { title: string, description: string; datetime: Date; location: string; website_link: string }[]).map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              datetime={event.datetime}
              location={event.location}
              website_link={event.website_link}
            />
          ))}
        </div>

<br /><br /><br />
      </div>
    </div>
  );
}