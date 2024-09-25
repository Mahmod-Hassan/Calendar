'use client';

export default function DayHeader({ text }) {
  return (
    <div className='leading-8'>
      <p>{text}</p>
      <p className="text-gray-400">Total: 0hrs 3min</p>
    </div>
  );
}