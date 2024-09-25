'use client';

export default function EventContent({ event }) {
    // const startTime = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // const endTime = event.end ? event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  // const timeRange = endTime !== 'N/A' ? `${startTime} - ${endTime}` : startTime; // Only show time range if end time exists
  const timeRange = "04:53 pm - 05:25 pm";
  const place = event.extendedProps.place || 'Unknown location';
  const bgColor = event.extendedProps.bgColor;
  const border = event.extendedProps.border;

  return (
 <div className={` ${bgColor} text-black space-y-3 font-medium text-md border-l-4 ${border} p-3 mb-2`}>
        <p>{timeRange}</p>
        <p className="font-bold text-sm">{event.title}</p>
        <p className='text-gray-500'>{place}</p>
      </div>

  );
}