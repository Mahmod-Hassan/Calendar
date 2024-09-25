'use client'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import { useState } from 'react';
import DayCellContent from './DayCellContent';
import DayHeader from './DayHeader';


export default function Calendar() {

const events = [
  { title: 'Allen', start: '2024-09-01T04:53:00', 
    end: '2024-09-01T05:23:00',  extendedProps: {
    place: 'ABC PLACE', bgColor:'bg-green-100', border:'border-green-700'
  } },
  { title: 'Allen', start: '2024-09-01T04:53:00', 
    end: '2024-09-01T05:23:00',  extendedProps: {
    place: 'ABC PLACE', bgColor:'bg-green-100', border:'border-green-700'
  } },
  { title: 'Allen', start: '2024-09-02T04:53:00', 
    end: '2024-09-02T05:23:00',  extendedProps: {
    place: 'ABC PLACE', bgColor:'bg-indigo-100', border:'border-blue-700'
  } },
  { title: 'Allen', start: '2024-09-03T04:53:00', 
    end: '2024-09-03T05:23:00',  extendedProps: {
    place: 'ABC PLACE', bgColor:'bg-red-100', border:'border-red-700'
  } },
  { title: 'Allen', start: '2024-09-04T04:53:00', 
    end: '2024-09-04T05:23:00',  extendedProps: {
    place: 'ABC PLACE', bgColor:'bg-yellow-100', border:'border-yellow-700'
  } },
];
const [eventsByDay, setEventsByDay] = useState(groupEventsByDay(events));
  return (
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth" // by default view
    editable={true}
    selectable={true}
    events={events}
    displayEventTime={false}
    
    dayHeaderContent={(headerInfo) => <DayHeader text={headerInfo.text} />}
    dayCellContent={(info) => <DayCellContent info={info} eventsByDay={eventsByDay} />}
    eventClassNames="flex-none flex-start"
    />
  )
}

// Helper function to group events by day
function groupEventsByDay(events) {
  const eventsMap = new Map();
  events.forEach(event => {
    const eventDate = new Date(event.start).toDateString(); 
    console.log(eventDate);
    if (!eventsMap.has(eventDate)) {
      eventsMap.set(eventDate, []);
    }
    eventsMap.get(eventDate).push(event);
  });
  return eventsMap;
}



