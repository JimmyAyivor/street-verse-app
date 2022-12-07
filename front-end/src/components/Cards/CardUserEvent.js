import React from "react";
import { Link } from "react-router-dom";

export default function CardUserEvent({ event }) {
  return (
    <div className="p-4 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group cursor-pointer">
      <Link to={`/events/${event.id}`}>
        <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
          <img
            src={event.thumbnail}
            alt="event thumbnail"
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl  tracking-wide">{event.location}</h2>
              <h2 className="text-3xl truncate group-hover:overflow-visible group-hover:whitespace-normal font-semibold tracking-wide">
                {event.title}
              </h2>
              <p className="text-gray-100">{event.short_desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
