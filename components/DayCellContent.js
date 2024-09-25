'use client'

import EventContent from "./EventContent";

export default function DayCellContent({ info, eventsByDay }) {
    const eventsForTheDay = eventsByDay.get(info.date.toDateString()) || [];
    const eventCount = eventsForTheDay.length;
  
    return (
      <div className="">
        <p className="text-right m-2">{info.date.getDate()}</p> {/* Day number */}
          {/* Render all events for the day */}
      {eventsForTheDay.map((event, index) => (
        <EventContent key={index} event={event} />
      ))}

      {/* Conditionally render the button after events */}
      {eventCount > 0 && (
        <button className='border mt-2 center mx-auto block p-2 font-medium'>
          +{eventCount} More
        </button>
      )}
      </div>
    );
  }